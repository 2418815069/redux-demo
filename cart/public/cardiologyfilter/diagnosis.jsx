/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Radio } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, change } from 'redux-form';
import { TextField } from 'redux-form-antd';
import MakeField from '../common/makefield';
import { diagnosisInputRadioValidate } from '../common/validate';
import {
  FlexBox,
  RightTitle,
  Lable,
  FlexCheckbox,
  HidenSelect,
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
  /* .ant-radio-wrapper {
    margin-right: 24px;
  } */
`);
const Renmindmsg = styled.div`
  height: 20px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.45);
  margin-left: 100px;
  margin-top: 8px;
  font-size: 12px;
`;

const Diagnosis = (props) => {
  const { diagnosisRadio, dispatch } = props;
  const handleDiagnosisRadio = (e) => {
    const { target } = e;
    if (target.nodeName.toLowerCase() === 'input') {
      if (parseInt(target.value, 10) === diagnosisRadio) {
        switch (diagnosisRadio) {
          case 1:
          case 2:
          case 3:
            dispatch(change('crf', 'diagnosisRadio', 0));
            break;
          case 4:
            dispatch(change('crf', 'diagnosisRadio', 0));
            dispatch(change('crf', 'radioSt', 0));
            break;
          case 5:
            dispatch(change('crf', 'diagnosisRadio', 0));
            dispatch(change('crf', 'diagnosisInput', ''));
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <div style={{ 'padding-bottom': 60 }}>
      <RightTitle>临床诊断</RightTitle>
      <FlexItem>
        <FlexCheckbox>
          <Lable>临床诊断</Lable>
          <div className="flexCheck" onClick={handleDiagnosisRadio}>
            <Field name="diagnosisRadio" component={ARadioGroup}>
              <Radio value={1} style={{ width: 180 }}>
                无症状缺血
              </Radio>
              <Radio value={2} style={{ width: 180 }}>
                稳定性心绞痛
              </Radio>
              <Radio value={3} style={{ width: 200 }}>
                不稳定性心绞痛
              </Radio>

              <FlexBox style={{ 'min-width': 250, margin: '16px 0' }}>
                <Radio value={4}>急性心肌梗死</Radio>
                <HidenSelect>
                  <Field name="radioSt" component={ARadioGroup}>
                    <Radio value={1}>ST段抬高性</Radio>
                    <Radio value={2}>非ST段抬高性</Radio>
                  </Field>
                </HidenSelect>
              </FlexBox>

              <FlexBox style={{ 'min-width': 250 }}>
                <Radio value={5}>其他</Radio>
                <Field
                  name="diagnosisInput"
                  validate={diagnosisInputRadioValidate}
                  component={TextField}
                  placeholder="请输入其他临床诊断"
                />
              </FlexBox>
            </Field>
          </div>
        </FlexCheckbox>
      </FlexItem>
      <FlexItem>
        <Lable>心功能分级</Lable>
        <Field name="diagnosisGrade" component={ARadioGroup}>
          <Radio value="1">I级</Radio>
          <Radio value="2">II级</Radio>
          <Radio value="3">III级</Radio>
          <Radio value="4">IV级</Radio>
        </Field>
      </FlexItem>
      <Renmindmsg>注：若病例报告中无心功能分级记录，则按照I级处理</Renmindmsg>
    </div>
  );
};

Diagnosis.propTypes = {
  diagnosisRadio: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default Diagnosis;
