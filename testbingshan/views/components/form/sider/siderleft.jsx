/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Select, Button, Icon, Modal,
} from 'antd';

const { Option } = Select;
const { confirm } = Modal;

const Container = styled.div`
  .clickCase {
    background-color: #e6f7ff;
    border-right: 4px solid #1890ff;
  }
  .normalIcon {
    color: rgba(0, 0, 0, 0.25);
  }
  .clickIcon {
    color: #1890ff;
  }
`;
const CRFselect = styled.div`
  justify-content: space-around;
  height: 76px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;
const NewButton = styled(Button)`
  font-size: 14px;
  width: 146px;
  height: 32px;
`;
const StyleSelect = styled(Select)`
  width: 90px;
  height: 32px;
`;
const FormCase = styled.div`
  height: 66px;
  font-size: 14px;
  color: #191f5f;
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hilden;
  white-space: nowrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;
const FormItem = styled.div`
  margin-left: 29px;
  height: 66px;
  font-size: 14px;
  color: #191f5f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const FileIcon = styled(Icon)`
  margin-right: 21px;
  font-size: 32px;
`;
const FileList = styled.div`
  div.title {
    height: 22px;
    opacity: 0.85;
    font-family: SourceHanSansSC-Medium;
    font-size: 14px;
    color: #000000;
    line-height: 22px;
    font-weight: bold;
  }
  div.date {
    opacity: 0.45;
    font-family: SourceHanSansSC-Normal;
    font-size: 12px;
    color: #000000;
    line-height: 20px;
    height: 20px;
  }
`;
const CaseContainer = styled.div`
  height: ${props => props.cliHeight}px;
  min-height: ${props => props.cliHeight}px;
  overflow: auto;
`;
const SideLeft = (props) => {
  const {
    formListDocs,
    formList,
    readDoc,
    storeCrfData,
    storeFormList,
    isNewForm,
    changeFormState,
    changeUpdateParam,
    // setPage,
    isPristine, // true如果所有当前值与初始化值相同，false表单内容更改。
  } = props;
  const [itemClick, setItemClick] = useState(false);
  const [itemIdx, setItemIdx] = useState(0); // 表单ID
  const [previousFormId, setpreviousFormId] = useState(''); // 前一个表单ID
  const readForm = async (id) => {
    const docData = await readDoc(id);
    storeCrfData(docData[0].values);
    changeUpdateParam(id, docData[0].meta.rev);
  };

  const onNewForm = () => {
    setItemIdx('');
    changeFormState(true);
    const data = {
      diagnosisGrade: '1',
      ICAlesionCount: '1',
      vlesionCount: '1',
      videolesionCount: '1',
      centerLesionCount: '1',
      dvffrNumber: 'D',
      cdNumber: 'F',
    };
    storeCrfData(data);
    // setPage(1);
  };

  const renderForm = () => {
    if (formListDocs.length) {
      const docId = formListDocs[0].id;
      readForm(docId);
    }
  };
  const changeForm = (id, idx) => {
    readForm(id);
    setItemClick(true);
    setItemIdx(idx);
    changeFormState(false);
  };
  // 跳转提示，判断页面有无编辑，有编辑，提示确认框，无编辑，跳转到打击的表单
  const confirmForm = (id, idx) => {
    if (!isPristine && !isNewForm && idx !== previousFormId) {
      confirm({
        title: '确认离开吗？',
        content: '点击确认按扭，将丢失已经修改的内容',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          changeForm(id, idx);
        },
        onCancel() {},
      });
    } else if (!isPristine && isNewForm) {
      confirm({
        title: '确认离开创建CRF吗？',
        content: '点击确认按扭，将丢失已经填写的内容',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          changeForm(id, idx);
        },
        onCancel() {},
      });
    } else {
      changeForm(id, idx);
    }
    setpreviousFormId(idx);
    console.log('previousFormId', previousFormId);
  };

  // useEffect(() => {
  //   storeFormList(formList); // 在这里调用不太好目前先在这里调用完成整个流程
  //   if (!isNewForm) {
  //     renderForm();
  //   }
  // }, [isNewForm]);

  useEffect(() => {
    storeFormList(formListDocs);
    renderForm();
  }, [formListDocs]);

  useEffect(() => {
    if (itemIdx === '' && !isNewForm) {
      if (formList.length) {
        const docId = formList[0].id;
        readForm(docId);
        setItemIdx(0);
      }
    }
  }, [isNewForm]);

  const selectChange = (v) => {
    const list = JSON.parse(JSON.stringify(formList));
    const listItem = list[itemIdx];
    if (v === 'selectName') {
      list.sort((a, b) => a.id.localeCompare(b.id, 'zh-Hans-CN', { sensitivity: 'accent' }));
    } else if (v === 'selectTime') {
      list.sort((a, b) => (a.meta.key > b.meta.key ? -1 : 1));
    }
    if (!isNewForm) {
      const index = list.findIndex(value => value === listItem);
      readForm(list[index].id);
      setItemIdx(index);
    }
    storeFormList(list);
  };

  const [cliHeight, setCliHeight] = useState(document.body.clientHeight - 124);
  window.addEventListener('resize', () => setCliHeight(document.body.clientHeight - 124));

  return (
    <Container>
      <div>
        <CRFselect>
          <NewButton type="primary" disabled={isNewForm} onClick={onNewForm}>
            新建CRF表
          </NewButton>
          <StyleSelect defaultValue="按名称" style={{ width: 120 }} onChange={selectChange}>
            <Option value="selectName">按名称</Option>
            <Option value="selectTime">按时间</Option>
          </StyleSelect>
        </CRFselect>
        <CaseContainer cliHeight={cliHeight}>
          {isNewForm && (
            <FormCase className={itemIdx === '' ? 'clickCase' : ''}>
              <FormItem>
                <FileIcon
                  type="file"
                  theme="filled"
                  className={itemIdx === '' ? 'clickIcon' : 'normalIcon'}
                />
                <FileList>
                  <div className="title">新建CRF表</div>
                  <div className="date">-</div>
                </FileList>
              </FormItem>
            </FormCase>
          )}
          {formList.map((item, idx) => {
            console.log(itemClick);
            return (
              <FormCase
                className={itemIdx === idx ? 'clickCase' : ''}
                onClick={() => confirmForm(item.id, idx)}
              >
                <FormItem>
                  <FileIcon
                    type="file"
                    theme="filled"
                    className={itemIdx === idx ? 'clickIcon' : 'normalIcon'}
                  />
                  <FileList>
                    <div className="title">{item.id}</div>
                    <div className="date">
                      {moment(item.meta.key[0]).format('YYYY-MM-DD HH:mm')}
                    </div>
                  </FileList>
                </FormItem>
              </FormCase>
            );
          })}
        </CaseContainer>
      </div>
    </Container>
  );
};

SideLeft.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formListDocs: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  formList: PropTypes.array.isRequired,
  readDoc: PropTypes.func.isRequired,
  storeCrfData: PropTypes.func.isRequired,
  storeFormList: PropTypes.func.isRequired,
  isNewForm: PropTypes.bool.isRequired,
  changeFormState: PropTypes.func.isRequired,
  changeUpdateParam: PropTypes.func.isRequired,
  isPristine: PropTypes.bool.isRequired,
  // setPage: PropTypes.func.isRequired,
};

export default SideLeft;
