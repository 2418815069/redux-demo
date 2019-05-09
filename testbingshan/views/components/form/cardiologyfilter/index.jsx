import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, propTypes, formValueSelector } from 'redux-form';
import { Form, Steps, Button } from 'antd';
import styled from 'styled-components';
import Cardiology from './formcontains';

const { Step } = Steps;
const Container = styled.div`
  /* padding-right: 10%; */
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 10%;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex: 1;
  .ant-form-explain {
    position: absolute;
    white-space: nowrap;
  }
`;

const StepContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 260px;
  margin-left: 150px;
`;

const DiologyForm = (props) => {
  const {
    handleSubmit,
    caseName,
    diagnosisRadio,
    ICAlesionCount,
    kickDia,
    _values,
    dispatch,
    completeIllCase,
    otherill1,
    otherill2,
    otherill3,
    otherill4,
    otherill5,
  } = props;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Cardiology
        caseName={caseName}
        diagnosisRadio={diagnosisRadio}
        ICAlesionCount={ICAlesionCount}
        kickDia={kickDia}
        _values={_values}
        dispatch={dispatch}
        completeIllCase={completeIllCase}
        otherill1={otherill1}
        otherill2={otherill2}
        otherill3={otherill3}
        otherill4={otherill4}
        otherill5={otherill5}
      />
      <StepContainer>
        <Container>
          <div>
            <Steps direction="vertical" size="small" current={0}>
              <Step title="筛选期-心内科" />
              <Step title="筛选期-影像科" />
              <Step title="测试期-中心实验室" />
              <Step title="心内科记录" />
            </Steps>
            <Button htmlType="submit" type="primary" style={{ width: 167 }}>
              下一步
            </Button>
          </div>
        </Container>
      </StepContainer>
    </StyledForm>
  );
};

DiologyForm.propTypes = {
  ...propTypes,
};

const CrfFormContainer = reduxForm({
  form: 'crf',
  destroyOnUnmount: false, // preserve form data
  forceUnregisterOnUnmount: true, // unregister fields on unmount
  enableReinitialize: true, // this is needed!
})(DiologyForm);

const selector = formValueSelector('crf');
const DiologyFormFormWithState = connect(state => ({
  initialValues: state.crfReducer.data,
  caseName: selector(state, 'caseName'),
  diagnosisRadio: selector(state, 'diagnosisRadio'),
  ICAlesionCount: selector(state, 'ICAlesionCount'),
  completeIllCase: selector(state, 'completeIllCase'),
  otherill1: selector(state, 'otherill1'),
  otherill2: selector(state, 'otherill2'),
  otherill3: selector(state, 'otherill3'),
  otherill4: selector(state, 'otherill4'),
  otherill5: selector(state, 'otherill5'),
}))(CrfFormContainer);

export default DiologyFormFormWithState;
