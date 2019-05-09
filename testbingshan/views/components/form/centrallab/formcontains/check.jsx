/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Input, Radio, InputNumber } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field, change } from 'redux-form';
import { TextAreaField } from 'redux-form-antd';
import MakeField, { DatePickerField } from '../../common/makefield';
import {
  FlexBox,
  RightTitle,
  Lable,
  FlexCheckbox,
  CheckBox,
  FlexItem,
  ErrMsg,
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
`;
const StyleInputNumber = MakeField(
  styled(InputNumber)`
    width: 60px !important;
  `,
);
const StyleInput = MakeField(styled(Input)`
  color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
`);
const ACheckBox = MakeField(
  styled(CheckBox)`
    min-width: 170px;
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14;' : '')}
      border: 1px solid ${props => (!props.isNewForm && props.dirty ? '#FAAD14;' : '')}
    }
  `,
);
const TargetFlex = styled.div`
  margin-left: 45px;
  .targetlabel {
    margin-right: 8px;
    opacity: 0.55;
    font-family: SourceHanSansSC-Normal;
    font-size: 14px;
    color: #000000;
  }
`;
const LevelFlex = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin-top: 24px;
  .itemRight {
    margin-right: 10px;
  }
  .ant-input {
    width: 52px;
    box-sizing: border-box;
    height: 24px;
    background: #ffffff;
  }
  .ant-row {
    margin-right: 8px;
  }
`;

const StyledInputGroup = styled.div`
  /* margin-top: 15px; */
  display: flex;
  /* .ant-input-number-input,
  .ant-input-number {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 155px;
  } */
  .ant-input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 155px;
  }
  .ant-input-disabled {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    text-align: center;
  }
  .ant-form-item-control {
    line-height: 32px;
    border: none;
  }
`;
const FlexReason = styled.div`
  display: flex;
  margin-top: 32px;
  .ant-input {
    height: 42px;
    width: 450px;
  }
`;
const StyleGroupSelect = MakeField(styled(Input)`
  width: 90px !important;
`);
const StyleGroupInput = MakeField(styled(Input)`
  color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
`);
const StyleTextAreaField = styled(TextAreaField)`
  color: ${props => (props.meta.dirty ? '#FAAD14 !important;' : '')};
`;
const DVFFRCheck = (props) => {
  const {
    centerLesionCount, _values, kickDia, dispatch, hasFault, isNewForm,
  } = props;
  const centerLocationData = [
    ['centerlocal11', 'centerlocal12', 'centerlocal13', 'centerlocal14'],
    ['centerlocal21', 'centerlocal22', 'centerlocal23', 'centerlocal24'],
    ['centerlocal31', 'centerlocal32', 'centerlocal33', 'centerlocal34'],
    ['centerlocal41', 'centerlocal42', 'centerlocal43', 'centerlocal44'],
  ];
  const handleReasonRadio = (e) => {
    const { target } = e;
    if (target.nodeName.toLowerCase() === 'input') {
      const radioValue = parseInt(target.value, 10);
      if (radioValue === hasFault) {
        dispatch(change('crf', 'hasFault', 0));
        dispatch(change('crf', 'theFauletReason', ''));
      }
    }
  };

  return (
    <Container>
      <RightTitle>DVFFR检查</RightTitle>
      <FlexItem>
        <Lable>DVFFR报告编号</Lable>
        <StyledInputGroup>
          <Field name="aliasTestCenter" component={StyleGroupSelect} disabled />
          <Field name="dvffrNumber" component={StyleGroupInput} placeholder="三位数字编号" />
        </StyledInputGroup>
      </FlexItem>
      <FlexItem>
        <Lable>签字日期</Lable>
        <Field
          name="signDatePicker"
          component={DatePickerField}
          hasFeedback
          placeholder="请选择日期"
          onFocus={e => e.preventDefault()}
          onBlur={e => e.preventDefault()}
        />
      </FlexItem>
      <FlexItem>
        <FlexCheckbox style={{ position: 'relative' }}>
          <Lable>目标血管</Lable>
          <div className="flexCheck">
            <Field name="centarvessel1" id="centarvessel1" component={ACheckBox} type="checkbox">
              左主干
            </Field>

            <Field name="centarvessel2" id="centarvessel2" component={ACheckBox} type="checkbox">
              前降支
            </Field>

            <Field name="centarvessel3" id="centarvessel3" component={ACheckBox} type="checkbox">
              回旋支
            </Field>

            <Field name="centarvessel4" id="centarvessel4" component={ACheckBox} type="checkbox">
              右冠状动脉
            </Field>
          </div>
          {kickDia
            && (!_values.centarvessel1
              && !_values.centarvessel2
              && !_values.centarvessel3
              && !_values.centarvessel4) && <ErrMsg style={{ top: 22 }}>请选择目标血管！</ErrMsg>}
        </FlexCheckbox>
      </FlexItem>
      <FlexBox style={{ 'padding-top': 32 }}>
        <Lable>目标病变数</Lable>
        <Field
          name="centerLesionCount"
          className="count"
          component={StyleInputNumber}
          min={1}
          max={4}
        />
      </FlexBox>
      <TargetFlex>
        {centerLocationData.map((item, Rowindex) => (
          <LevelFlex>
            <div className="targetlabel">{`目标病变部位${Rowindex + 1}`}</div>
            {item.map(col => (
              <Field
                name={col}
                component={StyleInput}
                disabled={centerLesionCount <= Rowindex || !centerLesionCount}
              />
            ))}
            {kickDia
              && _values
              && (!_values[`centerlocal${Rowindex + 1}1`]
                && !_values[`centerlocal${Rowindex + 1}2`]
                && !_values[`centerlocal${Rowindex + 1}3`]
                && !_values[`centerlocal${Rowindex + 1}4`])
              && centerLesionCount > Rowindex && (
                <ErrMsg style={{ top: 22, left: 15 }}>请输入目标病变部位!</ErrMsg>
            )}
            <FlexBox>
              <div className="targetlabel">测量位置</div>
              <Field
                name={`measurePosition${Rowindex + 1}`}
                component={StyleInput}
                disabled={centerLesionCount <= Rowindex || !centerLesionCount}
              />
              {kickDia
                && _values
                && (!_values[`measurePosition${Rowindex + 1}`]
                  && !_values[`measurePosition${Rowindex + 1}`]
                  && !_values[`measurePosition${Rowindex + 1}`]
                  && !_values[`measurePosition${Rowindex + 1}`])
                && centerLesionCount > Rowindex && (
                  <ErrMsg style={{ top: 22, left: 335 }}>请填写完整!</ErrMsg>
              )}
            </FlexBox>
            <FlexBox>
              <div className="targetlabel" style={{ 'padding-left': 8 }}>
                测量位置的DVFFR值
              </div>
              <Field
                name={`measureDVFFR${Rowindex + 1}`}
                component={StyleInput}
                disabled={centerLesionCount <= Rowindex || !centerLesionCount}
              />
              {kickDia
                && _values
                && (!_values[`measureDVFFR${Rowindex + 1}`]
                  && !_values[`measureDVFFR${Rowindex + 1}`]
                  && !_values[`measureDVFFR${Rowindex + 1}`]
                  && !_values[`measureDVFFR${Rowindex + 1}`])
                && centerLesionCount > Rowindex && (
                  <ErrMsg style={{ left: 600 }}>请输入正确测量位置!</ErrMsg>
              )}
            </FlexBox>
          </LevelFlex>
        ))}
      </TargetFlex>
      <FlexReason onClick={handleReasonRadio}>
        <Lable>是否发生器械故障?</Lable>
        <Field name="hasFault" component={ARadioGroup}>
          <Radio value={1}>
            否
          </Radio>
          <Radio value={2} style={{ 'margin-right': 16 }}>是</Radio>
        </Field>
        <Field
          name="theFauletReason"
          component={isNewForm ? TextAreaField : StyleTextAreaField}
          placeholder="请输入故障描述"
          autosize={{ minRows: 2, maxRows: 5 }}
        />
      </FlexReason>
    </Container>
  );
};

DVFFRCheck.propTypes = {
  centerLesionCount: PropTypes.string.isRequired,
  _values: PropTypes.object.isRequired,
  kickDia: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  hasFault: PropTypes.number.isRequired,
  isNewForm: PropTypes.bool.isRequired,
};
export default DVFFRCheck;
