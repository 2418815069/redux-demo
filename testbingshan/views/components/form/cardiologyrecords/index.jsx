import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, propTypes, formValueSelector } from 'redux-form';
import { Form, Steps, Button } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ICAcheck from './formcontains';

const { Step } = Steps;
const StyledForm = styled(Form)`
  display: flex;
  flex: 1;
  /* padding-top: 32px; */
`;
const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 10%;
`;

const StepContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 260px;
  margin-left: 150px;
`;

const CardRecords = (props) => {
  const {
    handleSubmit,
    previousPage,
    videolesionCount,
    vidlocal1,
    vidlocal2,
    vidlocal3,
    vidlocal4,
    _values,
    crfError,
    isNewForm,
  } = props;
  const vidlocalAll = {
    vidlocal1,
    vidlocal2,
    vidlocal3,
    vidlocal4,
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ICAcheck
        videolesionCount={videolesionCount}
        vidlocalAll={vidlocalAll}
        _values={_values}
        crfError={crfError}
        isNewForm={isNewForm}
      />
      <StepContainer>
        <Container>
          <div>
            <Steps direction="vertical" size="small" current={3}>
              <Step title="筛选期-心内科" />
              <Step title="筛选期-影像科" />
              <Step title="测试期-中心实验室" />
              <Step title="心内科记录" />
            </Steps>
            <Button type="button" onClick={previousPage}>
              上一步
            </Button>
          </div>
          <div />
        </Container>
      </StepContainer>
    </StyledForm>
  );
};

CardRecords.propTypes = {
  ...propTypes,
  previousPage: PropTypes.string.isRequired,
};

const CardRecordsContainer = reduxForm({
  form: 'crf', // same form name
  destroyOnUnmount: false, // preserve form data
  forceUnregisterOnUnmount: true, // unregister fields on unmount
  enableReinitialize: true, // this is needed!
})(CardRecords);
const selector = formValueSelector('crf');
export default connect(state => ({
  initialValues: state.crfReducer.data,
  crfError: state.form.crf,
  isNewForm: state.crfReducer.isNewForm,
  videolesionCount: selector(state, 'videolesionCount'),
  vidlocal1: selector(state, 'vidlocal11', 'vidlocal12', 'vidlocal13', 'vidlocal14'),
  vidlocal2: selector(state, 'vidlocal21', 'vidlocal22', 'vidlocal23', 'vidlocal24'),
  vidlocal3: selector(state, 'vidlocal31', 'vidlocal32', 'vidlocal33', 'vidlocal34'),
  vidlocal4: selector(state, 'vidlocal41', 'vidlocal42', 'vidlocal43', 'vidlocal44'),
}))(CardRecordsContainer);
