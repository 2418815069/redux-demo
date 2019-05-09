/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Button, Modal, Form, message,
} from 'antd';
import PropTypes from 'prop-types';
import { reduxForm, propTypes, SubmissionError } from 'redux-form';
import { isDuplicate, submitAndValidate } from '../common/validate';

const FormItem = Form.Item;
const StyledHead = styled.div`
  background: white;
  height: 76px;
  padding: 0;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .newForm {
    margin: 0 15px;
    padding: 0 15px;
    opacity: 0.85;
    font-family: SourceHanSansSC-Medium;
    font-size: 20px;
    color: #000000;
    line-height: 28px;
    font-weight: bold;
  }
`;
const HeadButton = styled.div`
  padding-right: 40px;
  .subbtn {
    font-size: 14px;
    width: 68px;
    height: 32px;
    font-weight: normal;
    margin-right: 12px;
  }
  .canclebtn {
    font-family: SourceHanSansSC-Normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    width: 68px;
    height: 32px;
  }
`;

// 取消按钮
const cancelForm = (reset, changeFormState) => {
  Modal.confirm({
    title: '确认放弃编辑吗?',
    content: '点击确认按钮，将丢失已经修改的内容。',
    okText: '确认',
    cancelText: '取消',
    onOk() {
      reset();
      changeFormState(false);
    },
    onCancel() {},
  });
};

// 恢复按钮
const retoreForm = (reset) => {
  Modal.confirm({
    title: '确认放编辑吗',
    content: '点击确认按钮，将丢失已经修改的内容',
    okText: '确认',
    cancelText: '取消',
    onOk() {
      reset();
    },
    onCancel() {},
  });
};

// createForm
const FormHead = (props) => {
  const {
    pristine, // true如果所有当前值与初始化值相同，false表单内容更改。
    submitting,
    createForm,
    reset,
    error,
    groupNumber,
    aliasTestCenter,
    changeFormState,
    isNewForm,
    updateForm,
    updateParam,
    formList,
    handleSubmit,
    changeUpdatePristine,
  } = props;
  useEffect(() => {
    changeUpdatePristine(pristine);
  }, [pristine]);
  // 左侧栏错误验证
  const submitForm = (values) => {
    const errors = submitAndValidate(values);
    if (JSON.stringify(errors) === '{}') {
      if (isNewForm) {
        Modal.confirm({
          title: `确认创建CRF表“${aliasTestCenter}-${groupNumber}”吗?`,
          okText: '确认',
          cancelText: '取消',
          onOk() {
            // 判断是否创建状态,true表示新建，false表示更新
            const fromName = `${aliasTestCenter}-${groupNumber}`;
            const duplicate = isDuplicate(fromName, formList);
            if (duplicate) {
              message.error('表单名字已经存在请重新命名');
              return;
            }
            createForm({ values }, `${aliasTestCenter}-${groupNumber}`)
              // .then(ret => console.log('createForm success the result -----> ', ret))
              .then(() => {
                if (error) {
                  message.error('提交失败');
                } else {
                  message.success('提交成功');
                  changeFormState(false);
                }
              });
          },
          onCancel() {},
        });
      } else {
        Modal.confirm({
          title: '确认提交CRF表吗?',
          content: '点击确认按钮，将提交已经修改的内容',
          okText: '确认',
          cancelText: '取消',
          onOk() {
            // 判断是否创建状态,true表示新建，false表示更新
            const id = updateParam.formid;
            const rev = updateParam.formrev;
            updateForm({ values }, id, rev).then(() => {
              if (error) {
                message.error('提交失败');
              } else {
                message.success('提交成功');
              }
            });
          },
          onCancel() {},
        });
      }
      return;
    }
    throw new SubmissionError({
      ...errors,
    });
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <FormItem>
        <StyledHead>
          <Container>
            <div className="newForm">{isNewForm ? '新建CRF表' : updateParam.formid}</div>
            <HeadButton>
              <Button
                className="subbtn"
                htmlType="submit"
                type="primary"
                disabled={pristine || submitting}
              >
                提交
              </Button>
              {isNewForm && (
                <Button className="canclebtn" onClick={() => cancelForm(reset, changeFormState)}>
                  取消
                </Button>
              )}
              {!isNewForm && (
                <Button className="canclebtn" onClick={() => retoreForm(reset)}>
                  恢复
                </Button>
              )}
            </HeadButton>
          </Container>
        </StyledHead>
      </FormItem>
    </Form>
  );
};

FormHead.propTypes = {
  ...propTypes,
  reset: PropTypes.func.isRequired,
  createForm: PropTypes.func.isRequired,
  changeFormState: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
  groupNumber: PropTypes.string.isRequired,
  aliasTestCenter: PropTypes.string.isRequired,
  pristine: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
  updateForm: PropTypes.func.isRequired,
  updateParam: PropTypes.object.isRequired,
  isNewForm: PropTypes.bool.isRequired,
  formList: PropTypes.array.isRequired,
  changeUpdatePristine: PropTypes.func.isRequired,
};

export default reduxForm({
  destroyOnUnmount: false, // preserve form data
  forceUnregisterOnUnmount: true, // unregister fields on unmount
  enableReinitialize: true, // this is needed!!
  // keepDirtyOnReinitialize: true,
  form: 'crf', // a unique identifier for this form
})(FormHead);
