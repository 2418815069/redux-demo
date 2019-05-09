/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { propTypes, getFormValues, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Diology from './cardiologyfilter';
import CardRecords from './cardiologyrecords';
import VideoBranch from './videobranch';
import CenterLab from './centrallab';
import FormLeft from './formleft';
import { diagnosisValidate, vedioBranchValidate, centralLabValidate } from './common/validate';
import FormHead from './formhead';

const Container = styled.div`
  margin-left: 15px;
  padding-top: 25px;
  background-color: white;
  display: flex;
  height: ${props => props.cliHeight}px;
  min-height: ${props => props.cliHeight}px;
  overflow: auto;
  .ant-radio-wrapper {
    margin-right: 20px;
  }
  .ant-form-item {
    margin-bottom: 0;
  }
  .has-error .ant-form-explain {
    position: absolute;
  }
  .ant-form-item-control {
    line-height: 17px;
  }
  .ant-form-item-children-icon,
  .has-warning.has-feedback,
  .ant-form-item-children-icon,
  .is-validating.has-feedback .ant-form-item-children-icon {
    display: none !important;
    visibility: hidden;
  }
`;
const CrfForm = (props) => {
  const {
    isNewForm,
    onSubmit,
    _values,
    createForm,
    error,
    updateForm,
    //  page, setPage,
  } = props;

  const [kickDia, setKickDia] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (isNewForm) {
      setPage(1);
    }
  }, [isNewForm]);
  const diology = () => {
    setKickDia(true);
    const errors = diagnosisValidate(_values);
    const hasDiaTargetVessel = _values.diatarvessel1
      || _values.diatarvessel2
      || _values.diatarvessel3
      || _values.diatarvessel4;

    if (JSON.stringify(errors) === '{}') {
      if (hasDiaTargetVessel) {
        setPage(page + 1);
        setKickDia(false);
      }
    } else {
      throw new SubmissionError({
        ...errors,
      });
    }
  };

  const vedioBranch = () => {
    setKickDia(true);
    const hasVidTargetVessel = _values.vidtarvessel1
      || _values.vidtarvessel2
      || _values.vidtarvessel3
      || _values.vidtarvessel4;

    const errors = vedioBranchValidate(_values);

    if (JSON.stringify(errors) === '{}') {
      if (hasVidTargetVessel) {
        setPage(page + 1);
        setKickDia(false);
      }
    } else {
      throw new SubmissionError({
        ...errors,
      });
    }
  };

  const centralLab = () => {
    setKickDia(true);
    const hasCenTargetVessel = _values.centarvessel1
      || _values.centarvessel2
      || _values.centarvessel3
      || _values.centarvessel4;

    const errors = centralLabValidate(_values);
    if (JSON.stringify(errors) === '{}') {
      if (hasCenTargetVessel) {
        setPage(page + 1);
        setKickDia(false);
      }
    } else {
      throw new SubmissionError({
        ...errors,
      });
    }
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const [cliHeight, setCliHeight] = useState(document.body.clientHeight - 148);
  window.addEventListener('resize', () => setCliHeight(document.body.clientHeight - 148));

  return (
    <Layout>
      <FormHead createForm={createForm} error={error} updateForm={updateForm} />
      <Layout>
        <Container cliHeight={cliHeight}>
          <FormLeft />
          {page === 4 && <Diology onSubmit={diology} kickDia={kickDia} _values={_values} />}
          {page === 2 && (
            <VideoBranch
              kickDia={kickDia}
              _values={_values}
              previousPage={previousPage}
              onSubmit={vedioBranch}
            />
          )}
          {page === 3 && (
            <CenterLab
              kickDia={kickDia}
              _values={_values}
              previousPage={previousPage}
              onSubmit={centralLab}
            />
          )}
          {page === 1 && (
            <CardRecords previousPage={previousPage} onSubmit={onSubmit} _values={_values} />
          )}
        </Container>
      </Layout>
    </Layout>
  );
};

CrfForm.propTypes = {
  ...propTypes,
  onSubmit: PropTypes.func.isRequired,
  createForm: PropTypes.func.isRequired,
  updateForm: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
  _values: PropTypes.object.isRequired,
  isNewForm: PropTypes.bool.isRequired,
};

export default connect(state => ({
  _values: getFormValues('crf')(state),
  isNewForm: state.crfReducer.isNewForm,
}))(CrfForm);
