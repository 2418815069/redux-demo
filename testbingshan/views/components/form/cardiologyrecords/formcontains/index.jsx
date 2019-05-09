/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Input, Select } from 'antd';
import { TextField } from 'redux-form-antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import MakeField, { groupStudyCenter } from '../../common/makefield';
import { RightTitle, Lable, FlexItem } from '../../common/commonstyle';

const Container = styled.div`
  padding-top: 7px;
  padding-left: 20px;
  .ant-form-item-control {
    line-height: normal;
  }
  .targetlabel {
    opacity: 0.55;
    color: #000000;
  }
`;

const { Option } = Select;
const StyledInputGroup = styled.div`
  display: flex;
  .ant-input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 155px !important;
  }
  .ant-select-selection {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }
  .ant-form-item-control {
    /* line-height: 32px; */
    border: none;
  }
`;

const LesionItem = styled(FlexItem)`
  height: auto;
  padding-left: 10px;
  position: relative;
  margin-top: 24px;
  .ant-input {
    width: 60px;
    height: 24px;
  }
  .meaRecordSpan {
    background: #f5f5f5;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0 10px;
  }
  .has-feedback .ant-input {
    padding-right: 0;
  }

  .targetlabel,
  .meaRecordSpan,
  .ant-input {
    margin-right: 8px;
  }
`;
const StyleGroupSelect = MakeField(styled(Select)`
  width: 90px !important;
`);
const StyleGroupInput = MakeField(styled(Input)`
  /* width: 40px; */
  color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
`);
const StyleTextField = styled(TextField)`
  color: ${props => (props.meta.dirty ? '#FAAD14 !important;' : '')};
`;

const ICACheck = (props) => {
  const { vidlocalAll, videolesionCount, isNewForm } = props;
  return (
    <Container style={{ 'padding-bottom': 152 }}>
      <RightTitle>ICA-FFR检查结果</RightTitle>
      <FlexItem>
        <Lable>ICA-FFR光盘编号</Lable>
        <StyledInputGroup>
          <Field name="aliasTestCenter" component={StyleGroupSelect}>
            <Option value="">--</Option>
            {groupStudyCenter.map(center => (
              <Option value={center} key={center}>
                {center}
              </Option>
            ))}
          </Field>
          <Field name="cdNumber" component={StyleGroupInput} placeholder="三位数字编号" />
        </StyledInputGroup>
      </FlexItem>
      <div style={{ 'margin-left': 8, 'padding-top': 8 }}>
        {Object.entries(vidlocalAll)
          .sort((e1, e2) => e1[0].slice(-1)[0] - e2[0].slice(-1)[0])
          .map(([k, v], index) => (
            <div>
              {videolesionCount > index && (
                <LesionItem key={k}>
                  <div className="targetlabel">{`目标病变部位${index + 1}`}</div>
                  {Object.values(v).map(vl => (
                    <span className="meaRecordSpan" key={vl}>
                      {vl}
                    </span>
                  ))}
                  <div className="targetlabel">测量位置</div>
                  <Field
                    name={`meaRecordPosition${index + 1}`}
                    component={isNewForm ? TextField : StyleTextField}
                  />
                  <div className="targetlabel" style={{ 'padding-left': 8 }}>
                    测量位置的ICA-FFR值
                  </div>
                  <Field
                    name={`meaRecordPositionFFR${index + 1}`}
                    component={isNewForm ? TextField : StyleTextField}
                  />
                </LesionItem>
              )}
            </div>
          ))}
      </div>
    </Container>
  );
};

ICACheck.propTypes = {
  vidlocalAll: PropTypes.object.isRequired,
  videolesionCount: PropTypes.object.isRequired,
  isNewForm: PropTypes.bool.isRequired,
};
export default ICACheck;
