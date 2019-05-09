/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'antd';

const FormItem = Form.Item;

const MakeFieldInput = Input => ({
  input,
  type,
  placeholder,
  value,
  meta,
  hasFeedback,
  children,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        {...input}
        {...rest}
      />
    </FormItem>
  );
};
export default MakeFieldInput;
