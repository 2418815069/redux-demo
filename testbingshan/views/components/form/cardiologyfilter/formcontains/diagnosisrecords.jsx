/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Input, InputNumber } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';
import MakeField from '../../common/makefield';
import { ICAlesionCountValidate } from '../../common/validate';

import {
  FlexBox,
  RightTitle,
  Lable,
  FlexCheckbox,
  CheckBox,
  ErrMsg,
  FlexItem,
} from '../../common/commonstyle';

const Container = styled.div``;
const StyleInputNumber = MakeField(
  styled(InputNumber)`
    width: 60px !important;
    color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
  `,
);
const StyleInputLesion = MakeField(styled(Input)`
  color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
`);

const TargetBox = styled(FlexBox)`
  .ant-input {
    width: 60px;
    height: 32px;
    box-sizing: border-box;
  }
`;
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
    background: #ffffff;
  }
`;
const ICAtargetVessel = [
  {
    name: 'diatarvessel1',
    id: 'diatarvessel1',
    text: '左主干',
  },
  {
    name: 'diatarvessel2',
    id: 'diatarvessel2',
    text: '前降支',
  },
  {
    name: 'diatarvessel3',
    id: 'diatarvessel3',
    text: '回旋支',
  },
  {
    name: 'diatarvessel4',
    id: 'diatarvessel4',
    text: '右冠状动脉',
  },
];
const Diagnosisrecords = (props) => {
  const { ICAlesionCount, kickDia, _values } = props;

  const LesionlocationData = [
    ['leslocal11', 'leslocal12', 'leslocal13', 'leslocal14'],
    ['leslocal21', 'leslocal22', 'leslocal23', 'leslocal24'],
    ['leslocal31', 'leslocal32', 'leslocal33', 'leslocal34'],
    ['leslocal41', 'leslocal42', 'leslocal43', 'leslocal44'],
  ];

  return (
    <Container style={{ 'padding-bottom': 60 }}>
      <RightTitle>ICA-FFR诊断记录</RightTitle>
      <FlexItem>
        <FlexCheckbox style={{ position: 'relative' }}>
          <Lable>目标血管</Lable>
          <div className="flexCheck" style={{ height: 22 }}>
            {ICAtargetVessel.map(item => (
              <Field name={item.name} id={item.id} component={ACheckBox} type="checkbox">
                {item.text}
              </Field>
            ))}
          </div>
          {kickDia
            && (!_values.diatarvessel1
              && !_values.diatarvessel2
              && !_values.diatarvessel3
              && !_values.diatarvessel4) && <ErrMsg style={{ top: 22 }}>请选择目标血管！</ErrMsg>}
        </FlexCheckbox>
      </FlexItem>
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
                component={StyleInputLesion}
                disabled={ICAlesionCount <= Rowindex || !ICAlesionCount}
              />
            ))}
            {kickDia
              && (!_values[`leslocal${Rowindex + 1}1`]
                && !_values[`leslocal${Rowindex + 1}2`]
                && !_values[`leslocal${Rowindex + 1}3`]
                && !_values[`leslocal${Rowindex + 1}4`])
              && ICAlesionCount > Rowindex && (
                <ErrMsg style={{ left: 280 }}>请输填写目标病变部位!</ErrMsg>
            )}
          </LevelFlex>
        ))}
      </TargetFlex>
    </Container>
  );
};

Diagnosisrecords.propTypes = {
  ICAlesionCount: PropTypes.number.isRequired,
  kickDia: PropTypes.bool.isRequired,
  _values: PropTypes.object.isRequired,
};
export default Diagnosisrecords;
