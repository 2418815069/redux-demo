import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import { Field, change } from 'redux-form';
import styled from 'styled-components';
import MakeField, { DatePickerField } from '../../common/makefield';
import { FlexItem, RightTitle, Lable } from '../../common/commonstyle';

const { Group: RadioGroup } = Radio;

const ARadioGroup = MakeField(styled(RadioGroup)`
  label span:nth-of-type(2) {
    opacity: 0.65;
  }
  .ant-radio-wrapper-checked span {
    opacity: 1 !important;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
  }
  .ant-radio-inner:after {
    background-color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
  }
`);
const CTACheck = (props) => {
  const { dispatch, isCAFFRcheck, isDVFFR } = props;
  const handleCheckRadio = (e) => {
    const { target } = e;
    if (target.nodeName.toLowerCase() === 'input') {
      const radioName = target.name;
      const radioValue = parseInt(target.value, 10);
      switch (radioName) {
        case 'isCA_FFRcheck':
          if (radioValue === isCAFFRcheck) {
            dispatch(change('crf', 'isCA_FFRcheck', 0));
          }
          break;
        case 'isDVFFR':
          if (radioValue === isDVFFR) {
            dispatch(change('crf', 'isDVFFR', 0));
          }
          break;
        default:
          break;
      }
    }
  };
  return (
    <div style={{ 'padding-bottom': 60 }}>
      <RightTitle>CTA检查</RightTitle>
      <FlexItem onClick={handleCheckRadio}>
        <Lable>ICA-FFR检查前30天内是否有CTA检查？</Lable>
        <Field name="isCA_FFRcheck" component={ARadioGroup} value="1">
          <Radio value={1}>否</Radio>
          <Radio value={2}>是</Radio>
        </Field>
      </FlexItem>
      <FlexItem>
        <Lable>检查日期</Lable>
        <Field
          name="videodatepicker"
          component={DatePickerField}
          hasFeedback
          placeholder="请选择日期"
          onFocus={e => e.preventDefault()}
          onBlur={e => e.preventDefault()}
        />
      </FlexItem>
      <FlexItem onClick={handleCheckRadio}>
        <Lable>是否参加过DVFFR临床研究？</Lable>
        <Field name="isDVFFR" component={ARadioGroup} value="1">
          <Radio value={1}>否</Radio>
          <Radio value={2}>是</Radio>
        </Field>
      </FlexItem>
    </div>
  );
};
CTACheck.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isCAFFRcheck: PropTypes.number.isRequired,
  isDVFFR: PropTypes.number.isRequired,
};

export default CTACheck;
