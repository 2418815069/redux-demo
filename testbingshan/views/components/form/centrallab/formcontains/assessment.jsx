import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input, Radio, InputNumber } from 'antd';
import { Field, change } from 'redux-form';
import MakeField, { DatePickerField } from '../../common/makefield';
import {
  FlexItem, RightTitle, Lable, FlexBox,
} from '../../common/commonstyle';

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
const Container = styled.div`
  padding-bottom: 60px;
  .ant-form-item-control {
    line-height: normal;
  }
  .scorelabel {
    opacity: 0.55;
    font-family: SourceHanSansSC-Normal;
    font-size: 14px;
    color: #000000;
    margin-right: 12px;
  }
`;
const StyledInputGroup = styled.div`
  display: flex;
  .ant-input-number-input,
  .ant-input-number {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 155px;
  }
  .ant-input-disabled {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    /* border-top-left-radius: 4px;
    border-bottom-left-radius: 4px; */
    text-align: center;
  }
  .ant-form-item-control {
    line-height: 32px;
    border: none;
  }
`;
const StyleGroupSelect = MakeField(styled(Input)`
  width: 90px !important;
`);
const StyleGroupInput = MakeField(styled(InputNumber)`
  color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
`);
const StyleInputReason = MakeField(styled(Input)`
  width: 340px;
  height: 24px;
  color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
`);

const Assessment = (props) => {
  const {
    dispatch, qualityAssessment, completeAssessment, ffrSuitable,
  } = props;
  const handleAssessmentRadio = (e) => {
    const { target } = e;
    if (target.nodeName.toLowerCase() === 'input') {
      const radioName = target.name;
      const radioValue = parseInt(target.value, 10);
      switch (radioName) {
        case 'qualityAssessment':
          if (radioValue === qualityAssessment) {
            dispatch(change('crf', 'qualityAssessment', 0));
          }
          break;
        case 'completeAssessment':
          if (radioValue === completeAssessment) {
            dispatch(change('crf', 'completeAssessment', 0));
          }
          break;
        case 'ffrSuitable':
          if (radioValue === ffrSuitable) {
            dispatch(change('crf', 'ffrSuitable', 0));
            dispatch(change('crf', 'InputReason', ''));
          }
          break;
        default:
          break;
      }
    }
  };
  return (
    <Container>
      <RightTitle>冠状动脉CTA影像质量评估</RightTitle>
      <FlexItem>
        <Lable>CTA影像编号</Lable>
        <StyledInputGroup>
          <Field name="aliasTestCenter" component={StyleGroupSelect} disabled />
          <Field name="ctLabNumber" component={StyleGroupInput} placeholder="三位数字编号" />
        </StyledInputGroup>
      </FlexItem>
      <FlexItem>
        <Lable>报告编号</Lable>
        <StyledInputGroup>
          <Field name="aliasTestCenter" component={StyleGroupSelect} disabled />
          <Field name="reportNumber" component={StyleGroupInput} placeholder="三位数字编号" />
        </StyledInputGroup>
      </FlexItem>
      <FlexItem>
        <Lable>CTA影像质量</Lable>
      </FlexItem>
      <FlexBox style={{ padding: '24px 0px 0 30px' }} onClick={handleAssessmentRadio}>
        <span className="scorelabel">冠状动脉CTA 影像质量评估，是否≤10分?</span>
        <Field name="qualityAssessment" component={ARadioGroup}>
          <Radio value={1}>是</Radio>
          <Radio value={2}>否</Radio>
        </Field>
      </FlexBox>
      <FlexBox style={{ padding: '24px 0px 0 30px' }} onClick={handleAssessmentRadio}>
        <span className="scorelabel">CTA血管完整性评估，是否≤5分?</span>
        <Field name="completeAssessment" component={ARadioGroup}>
          <Radio value={1}>是</Radio>
          <Radio value={2}>否</Radio>
        </Field>
      </FlexBox>
      <FlexItem onClick={handleAssessmentRadio} style={{ 'margin-top': 27 }}>
        <Lable>病例是否适合DEEPVESSEL FFR计算?</Lable>
        <Field name="ffrSuitable" component={ARadioGroup}>
          <Radio value={1}>是</Radio>
          <Radio value={2}>否</Radio>
        </Field>
        <Field name="InputReason" component={StyleInputReason} placeholder="请输入原因" />
      </FlexItem>
      <FlexItem>
        <Lable>报告签字日期</Lable>
        <Field
          name="reportDatepicker"
          component={DatePickerField}
          hasFeedback
          placeholder="请选择日期"
          onFocus={e => e.preventDefault()}
          onBlur={e => e.preventDefault()}
        />
      </FlexItem>
      <FlexItem>
        <Lable>入组编号</Lable>
        <StyledInputGroup>
          <Field name="aliasTestCenter" component={StyleGroupSelect} disabled />
          <Field name="groupNumber" component={StyleGroupInput} placeholder="三位数字编号" />
        </StyledInputGroup>
      </FlexItem>
    </Container>
  );
};
Assessment.propTypes = {
  dispatch: PropTypes.func.isRequired,
  qualityAssessment: PropTypes.number.isRequired,
  completeAssessment: PropTypes.number.isRequired,
  ffrSuitable: PropTypes.number.isRequired,
};

export default Assessment;
