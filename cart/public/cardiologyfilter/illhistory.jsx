import React from 'react';
import { Radio } from 'antd';
import PropTypes from 'prop-types';
import { Field, change } from 'redux-form';
import styled from 'styled-components';
import MakeField, { DatePickerField } from '../common/makefield';

import {
  RightTitle,
  Lable,
  FlexCheckbox,
  CheckBox,
  FlexItem,
  RadioContainer,
} from '../common/commonstyle';

const { Group: RadioGroup } = Radio;
const Container = styled.div`
  padding-bottom: 60px;
  .checkboxICA {
    margin-bottom: 16px !important;
  }
`;
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
const ACheckBox = MakeField(styled(CheckBox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14;' : '')}
    border: 1px solid ${props => (!props.isNewForm && props.dirty ? '#FAAD14;' : '')}
  }
`);

const IllHistory = (props) => {
  const { dispatch, completeIllCase } = props;
  const handleCompleteIllCaseRadio = (e) => {
    const { target } = e;
    if (target.nodeName.toLowerCase() === 'input') {
      if (parseInt(target.value, 10) === completeIllCase) {
        dispatch(change('crf', 'completeIllCase', 0));
      }
    }
  };

  return (
    <Container>
      <RightTitle>筛选接受了 ICA-FFR 检查的病例</RightTitle>
      <FlexItem>
        <Lable>检查日期</Lable>
        <Field name="datepicker" component={DatePickerField} hasFeedback placeholder="请选择日期" />
      </FlexItem>
      <FlexItem onClick={handleCompleteIllCaseRadio}>
        <Lable>完整病例</Lable>
        <RadioContainer>
          <Field name="completeIllCase" component={ARadioGroup}>
            <Radio value={1}>有</Radio>
            <Radio value={2}>无</Radio>
          </Field>
        </RadioContainer>
      </FlexItem>
      <FlexItem>
        <FlexCheckbox>
          <Lable>既往病史</Lable>
          <div className="flexCheck">
            <Field
              name="heartbypass"
              id="heartbypass"
              component={ACheckBox}
              type="checkbox"
              className="checkboxICA"
            >
              心脏搭桥手术
            </Field>
            <Field name="coronarystent" id="coronarystent" component={ACheckBox} type="checkbox">
              冠脉支架介入手术
            </Field>
            <Field name="heartvalves" id="heartvalves" component={ACheckBox} type="checkbox">
              人工心脏瓣膜植入手术
            </Field>
            <Field name="heartpacemaker" id="heartpacemaker" component={ACheckBox} type="checkbox">
              心脏起搏器植入手术
            </Field>
            <Field name="mazeprocedure" id="mazeprocedure" component={ACheckBox} type="checkbox">
              植入型心律转复除颤器手术
            </Field>
          </div>
        </FlexCheckbox>
      </FlexItem>
    </Container>
  );
};

IllHistory.propTypes = {
  dispatch: PropTypes.func.isRequired,
  completeIllCase: PropTypes.number.isRequired,
};

export default IllHistory;
