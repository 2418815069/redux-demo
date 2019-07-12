/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { InputNumber } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-antd';
import MakeField from '../common/makefield';
import Tarvessel from '../common/tarvessel';
import { ICAlesionCountValidate } from '../common/validate';

import { FlexBox, RightTitle, Lable } from '../common/commonstyle';

const Container = styled.div``;
const StyleInputNumber = MakeField(
  styled(InputNumber)`
    width: 68px !important;
    color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
  `,
);

const TargetBox = styled(FlexBox)`
  .ant-input {
    width: 68px;
    height: 32px;
    box-sizing: border-box;
  }
`;
const TargetFlex = styled.div`
  margin-left: 25px;
  margin-top: 20px;
  .targetlabel {
    opacity: 0.55;
    color: #000000;
  }
  .ant-row,
  .targetlabel {
    margin-right: 8px;
  }
`;
const LevelFlex = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  .ant-input {
    width: 52px;
    box-sizing: border-box;
    height: 24px;
    /* background: #ffffff; */
  }
`;

const Diagnosisrecords = (props) => {
  const { ICAlesionCount } = props;

  const LesionlocationData = [
    ['leslocal11', 'leslocal12', 'leslocal13', 'leslocal14'],
    ['leslocal21', 'leslocal22', 'leslocal23', 'leslocal24'],
    ['leslocal31', 'leslocal32', 'leslocal33', 'leslocal34'],
    ['leslocal41', 'leslocal42', 'leslocal43', 'leslocal44'],
  ];

  return (
    <Container style={{ 'padding-bottom': 60 }}>
      <RightTitle>ICA-FFR诊断记录</RightTitle>
      <Tarvessel vesselArr="ICAtargetVessel" />
      <TargetBox style={{ 'padding-top': 32 }}>
        <Lable>目标病变数</Lable>
        <Field
          name="ICAlesionCount"
          component={StyleInputNumber}
          validate={ICAlesionCountValidate}
          min={1}
          max={4}
        />
      </TargetBox>
      <TargetFlex>
        {LesionlocationData.map((item, Rowindex) => (
          <LevelFlex>
            <div className="targetlabel">{`目标病变部位${Rowindex + 1}`}</div>
            {item.map(col => (
              <Field
                name={col}
                component={TextField}
                disabled={ICAlesionCount <= Rowindex || !ICAlesionCount}
              />
            ))}
          </LevelFlex>
        ))}
      </TargetFlex>
    </Container>
  );
};

Diagnosisrecords.propTypes = {
  ICAlesionCount: PropTypes.number.isRequired,
};
export default Diagnosisrecords;
