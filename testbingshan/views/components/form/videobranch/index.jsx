import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { reduxForm, propTypes, formValueSelector } from 'redux-form';
import { Form, Steps, Button } from 'antd';
import { PropTypes } from 'prop-types';
import Cardiology from './formcontains';

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

const VideoBranch = (props) => {
  const {
    handleSubmit,
    previousPage,
    videolesionCount,
    _values,
    kickDia,
    dispatch,
    isCAFFRcheck,
    isDVFFR,
    narrowRadio,
  } = props;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Cardiology
        videolesionCount={videolesionCount}
        _values={_values}
        kickDia={kickDia}
        dispatch={dispatch}
        isCAFFRcheck={isCAFFRcheck}
        isDVFFR={isDVFFR}
        narrowRadio={narrowRadio}
      />
      <StepContainer>
        <Container>
          <div>
            <Steps direction="vertical" size="small" current={1}>
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

VideoBranch.propTypes = {
  ...propTypes,
  previousPage: PropTypes.string.isRequired,
};

const VideoBranchContainer = reduxForm({
  form: 'crf', // same form name
  destroyOnUnmount: false, // preserve form data
  forceUnregisterOnUnmount: true, // unregister fields on unmount
  enableReinitialize: true, // this is needed!
})(VideoBranch);

const selector = formValueSelector('crf');
const VideoBranchWithState = connect(state => ({
  initialValues: state.crfReducer.data,
  videolesionCount: selector(state, 'videolesionCount'),
  isCAFFRcheck: selector(state, 'isCA_FFRcheck'),
  isDVFFR: selector(state, 'isDVFFR'),
  narrowRadio: selector(state, 'narrowRadio'),
}))(VideoBranchContainer);

export default VideoBranchWithState;
