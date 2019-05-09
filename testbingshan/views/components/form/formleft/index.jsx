import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Input, Select } from 'antd';
import {
  Field, reduxForm, propTypes, change,
} from 'redux-form';
import MakeField, {
  studyCenter,
  groupStudyCenter,
  studyCenterMap,
  studyCenterRefMap,
} from '../common/makefield';

const { Option } = Select;

const LeftCondition = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 0 22px;
  border-right: 1px solid rgba(0, 0, 0, 0.09);
  .mycontainer {
    width: 244px;
    margin-bottom: 40px;
  }
`;

const LeftTitle = styled.div`
  opacity: 0.65;
  font-family: SourceHanSansSC-Medium;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
  margin-bottom: 12px;
`;
const StyledInputGroup = styled.div`
  margin-top: 15px;
  display: flex;
  .ant-input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 155px !important;
  }
  .ant-select-selection {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .ant-form-item-control {
    line-height: 32px;
    border: none;
  }
  .ant-select-selection-selected-value {
    width: 100%;
    text-align: center;
  }
`;
const StyleInput = MakeField(styled(Input)`
  background: #ffffff;
  color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')}
`);
const StyleSelect = MakeField(styled(Select)`
  width: 244px;
  .ant-select-selection-selected-value {
    color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')}
  }
`);
const StyleGroupSelect = MakeField(styled(Select)`
  width: 90px;
  .ant-select-selection-selected-value {
    color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')}
  }
`);
const StyleGroupInput = MakeField(styled(Input)`
  /* width: 40px; */
  color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')}
`);

const FormLeft = (props) => {
  const { dispatch } = props;
  const handleTestCenterChange = (e) => {
    dispatch(change('crf', 'aliasTestCenter', studyCenterMap.get(e)));
  };

  const handlealiasTestCenterChange = (e) => {
    dispatch(change('crf', 'testCenter', studyCenterRefMap.get(e)));
  };

  return (
    <LeftCondition>
      <div className="mycontainer">
        <LeftTitle>试验中心</LeftTitle>
        <Field name="testCenter" component={StyleSelect} onChange={handleTestCenterChange}>
          <Option value="">请选择试验中心</Option>
          {studyCenter.map(center => (
            <Option value={center} key={center}>
              {center}
            </Option>
          ))}
        </Field>
      </div>
      <div className="mycontainer">
        <LeftTitle>病例筛选编号</LeftTitle>
        <Field name="caseNumber" component={StyleInput} placeholder="四位数字编号" />
      </div>
      <div className="mycontainer">
        <LeftTitle>入组编号</LeftTitle>
        <StyledInputGroup>
          <Field
            name="aliasTestCenter"
            component={StyleGroupSelect}
            onChange={handlealiasTestCenterChange}
          >
            <Option value="">--</Option>
            {groupStudyCenter.map(center => (
              <Option value={center} key={center}>
                {center}
              </Option>
            ))}
          </Field>
          <Field name="groupNumber" component={StyleGroupInput} placeholder="三位数字编号" />
        </StyledInputGroup>
      </div>
    </LeftCondition>
  );
};

FormLeft.propTypes = {
  ...propTypes,
};

const FormLeftContainer = reduxForm({
  form: 'crf', // same form name
  destroyOnUnmount: false, // preserve form data
  forceUnregisterOnUnmount: true, // unregister fields on unmount
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(FormLeft);

const FormLeftWithState = connect(state => ({
  initialValues: state.crfReducer.data,
}))(FormLeftContainer);

export default FormLeftWithState;
