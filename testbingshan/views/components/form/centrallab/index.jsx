import React from 'react';
import { reduxForm, propTypes, formValueSelector } from 'redux-form';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Form, Steps, Button } from 'antd';
import PropTypes from 'prop-types';
import Centrallab from './formcontains';

const { Step } = Steps;
const StyledForm = styled(Form)`
  display: flex;
  flex: 1;
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

const CenterLab = (props) => {
  const {
    handleSubmit,
    previousPage,
    centerLesionCount,
    _values,
    kickDia,
    dispatch,
    qualityAssessment,
    completeAssessment,
    ffrSuitable,
    hasFault,
    isNewForm,
  } = props;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Centrallab
        _values={_values}
        centerLesionCount={centerLesionCount}
        kickDia={kickDia}
        dispatch={dispatch}
        qualityAssessment={qualityAssessment}
        completeAssessment={completeAssessment}
        ffrSuitable={ffrSuitable}
        hasFault={hasFault}
        isNewForm={isNewForm}
      />
      <StepContainer>
        <Container>
          <div>
            <Steps direction="vertical" size="small" current={2}>
              <Step title="筛选期-心内科" />
              <Step title="筛选期-影像科" />
              <Step title="测试期-中心实验室" />
              <Step title="心内科记录" />
            </Steps>
            <Button type="button" onClick={previousPage}>
              上一步
            </Button>
            <Button htmlType="submit" type="primary">
              下一步
            </Button>
          </div>
          <div />
        </Container>
      </StepContainer>
    </StyledForm>
  );
};

CenterLab.propTypes = {
  ...propTypes,
  previousPage: PropTypes.string.isRequired,
};

const CenterLabContainer = reduxForm({
  form: 'crf', // same form name
  destroyOnUnmount: false, // preserve form data
  forceUnregisterOnUnmount: true, // unregister fields on unmount
  enableReinitialize: true, // this is needed!!
})(CenterLab);
const selector = formValueSelector('crf');
export default connect(state => ({
  initialValues: state.crfReducer.data,
  isNewForm: state.crfReducer.isNewForm,
  centerLesionCount: selector(state, 'centerLesionCount'),
  qualityAssessment: selector(state, 'qualityAssessment'),
  completeAssessment: selector(state, 'completeAssessment'),
  ffrSuitable: selector(state, 'ffrSuitable'),
  hasFault: selector(state, 'hasFault'),
}))(CenterLabContainer);
