import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Radio } from 'antd';
import { Field, change } from 'redux-form';
import MakeField from '../common/makefield';
import {
  RightTitle,
  Lable,
  FlexItem,
} from '../common/commonstyle';

const { Group: RadioGroup } = Radio;
const ARadioGroup = MakeField(styled(RadioGroup)`
  .ant-radio-wrapper-checked {
    color: rgba(0, 0, 0, 0.85);
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
  }
  .ant-radio-inner:after {
    background-color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
  }
`);
const FlexHistory = styled.div`
  width: 780px;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  .historyItem {
    width: 370px;
  }
`;
const OtherIlls = (props) => {
  const {
    dispatch, otherill1, otherill2, otherill3, otherill4, otherill5,
  } = props;
  const handleOtherIllRadio = (e) => {
    const { target } = e;
    if (target.nodeName.toLowerCase() === 'input') {
      const radioName = target.name;
      const radioValue = parseInt(target.value, 10);
      switch (radioName) {
        case 'otherill1':
          if (radioValue === otherill1) {
            dispatch(change('crf', 'otherill1', 0));
          }
          break;
        case 'otherill2':
          if (radioValue === otherill2) {
            dispatch(change('crf', 'otherill2', 0));
          }
          break;
        case 'otherill3':
          if (radioValue === otherill3) {
            dispatch(change('crf', 'otherill3', 0));
          }
          break;
        case 'otherill4':
          if (radioValue === otherill4) {
            dispatch(change('crf', 'otherill4', 0));
          }
          break;
        case 'otherill5':
          if (radioValue === otherill5) {
            dispatch(change('crf', 'otherill5', 0));
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <div style={{ 'padding-bottom': 60 }}>
      <RightTitle>其他病史</RightTitle>
      <FlexHistory onClick={handleOtherIllRadio}>
        <FlexItem className="historyItem">
          <Lable>高血压</Lable>
          <Field name="otherill1" component={ARadioGroup}>
            <Radio value={1}>有</Radio>
            <Radio value={2}>无</Radio>
          </Field>
        </FlexItem>
        <FlexItem className="historyItem">
          <Lable>血脂异常</Lable>
          <Field name="otherill2" component={ARadioGroup}>
            <Radio value={1}>有</Radio>
            <Radio value={2}>无</Radio>
          </Field>
        </FlexItem>
        <FlexItem className="historyItem">
          <Lable>糖尿病</Lable>
          <Field name="otherill3" component={ARadioGroup}>
            <Radio value={1}>有</Radio>
            <Radio value={2}>无</Radio>
          </Field>
        </FlexItem>
        <FlexItem className="historyItem">
          <Lable>心梗病史</Lable>
          <Field name="otherill4" component={ARadioGroup}>
            <Radio value={1}>有</Radio>
            <Radio value={2}>无</Radio>
          </Field>
        </FlexItem>
        <FlexItem className="historyItem">
          <Lable>吸烟史</Lable>
          <Field name="otherill5" component={ARadioGroup}>
            <Radio value={1}>有</Radio>
            <Radio value={2}>无</Radio>
          </Field>
        </FlexItem>
      </FlexHistory>
    </div>
  );
};

OtherIlls.propTypes = {
  dispatch: PropTypes.func.isRequired,
  otherill1: PropTypes.number.isRequired,
  otherill2: PropTypes.number.isRequired,
  otherill3: PropTypes.number.isRequired,
  otherill4: PropTypes.number.isRequired,
  otherill5: PropTypes.number.isRequired,
};

export default OtherIlls;
