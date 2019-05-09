/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React from 'react';
import { connect } from 'react-redux';
import { Form, DatePicker } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import { createComponent, customMap } from 'redux-form-antd';

const FormItem = Form.Item;

const studyCenter = [
  '首都医科大学附属北京安贞医院',
  '中国医学科学院阜外医院',
  '温州医科大学附属第一医院',
  '北京大学人民医院',
  '首都医科大学附属北京友谊医院',
  '中国人民解放军总医院',
  '哈尔滨医科大学附属第一医院',
  '武汉亚洲心脏病医院',
  '浙江大学附属第二医院',
  '中国人民解放军南部战区总医院',
];

const studyCenterAliasMap = new Map();
studyCenterAliasMap.set('01', '安贞');
studyCenterAliasMap.set('02', '阜外');
studyCenterAliasMap.set('04', '温州附一');
studyCenterAliasMap.set('05', '人民');
studyCenterAliasMap.set('06', '友谊');
studyCenterAliasMap.set('08', '301');
studyCenterAliasMap.set('09', '哈大一');
studyCenterAliasMap.set('10', '武汉亚心');
studyCenterAliasMap.set('11', '浙大二');
studyCenterAliasMap.set('12', '广州陆总');

const groupStudyCenter = ['01', '02', '04', '05', '06', '08', '09', '10', '11', '12'];

const studyCenterMap = new Map();
studyCenterMap.set('首都医科大学附属北京安贞医院', '01');
studyCenterMap.set('中国医学科学院阜外医院', '02');
studyCenterMap.set('温州医科大学附属第一医院', '04');
studyCenterMap.set('北京大学人民医院', '05');
studyCenterMap.set('首都医科大学附属北京友谊医院', '06');
studyCenterMap.set('中国人民解放军总医院', '08');
studyCenterMap.set('哈尔滨医科大学附属第一医院', '09');
studyCenterMap.set('武汉亚洲心脏病医院', '10');
studyCenterMap.set('浙江大学附属第二医院', '11');
studyCenterMap.set('中国人民解放军南部战区总医院', '12');

const studyCenterRefMap = new Map();
studyCenterRefMap.set('01', '首都医科大学附属北京安贞医院');
studyCenterRefMap.set('02', '中国医学科学院阜外医院');
studyCenterRefMap.set('04', '温州医科大学附属第一医院');
studyCenterRefMap.set('05', '北京大学人民医院');
studyCenterRefMap.set('06', '首都医科大学附属北京友谊医院');
studyCenterRefMap.set('08', '中国人民解放军总医院');
studyCenterRefMap.set('09', '哈尔滨医科大学附属第一医院');
studyCenterRefMap.set('10', '武汉亚洲心脏病医院');
studyCenterRefMap.set('11', '浙江大学附属第二医院');
studyCenterRefMap.set('12', '中国人民解放军南部战区总医院');

const MakeField = Component => connect(state => ({
  isNewForm: state.crfReducer.isNewForm,
}))(({
  input, meta, hasFeedback, children, ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...meta} {...rest} children={children} />
    </FormItem>
  );
});

const StyleDatePicker = styled(DatePicker)`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin: 20px 0;
  .ant-input {
    width: 224px;
    height: 30px;
    border: none;
    color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')}
  }
`;

const datePickerMap = customMap((mapProps,
  { input: { onChange, value }, meta: { dirty }, dateFormat }) => {
  if (value !== '') {
    value = moment(value, dateFormat);
  }
  return {
    ...mapProps,
    onChange: (e, v) => onChange(v),
    value,
    dirty,
    format: dateFormat,
  };
});

// datepicker has some problems with formatting, while this component doesn't have such problems
const datePickerMapRU = customMap(
  (mapProps, { input: { onChange, value }, displayFormat, valueFormat }) => {
    if (value !== '') {
      value = moment(value);
    }
    return {
      ...mapProps,
      onChange: (e) => {
        onChange(e.format(valueFormat));
      },
      value,
      format: displayFormat,
    };
  },
);

const DatePickerFieldRU = createComponent(StyleDatePicker, datePickerMapRU);
const DatePickerField = connect(state => ({
  isNewForm: state.crfReducer.isNewForm,
}))(createComponent(StyleDatePicker, datePickerMap));
export default MakeField;
export {
  DatePickerField,
  DatePickerFieldRU,
  studyCenter,
  groupStudyCenter,
  studyCenterMap,
  studyCenterRefMap,
  studyCenterAliasMap,
};
