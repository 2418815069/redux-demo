/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Input, InputNumber, Radio } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, change } from 'redux-form';
import MakeField from '../../common/makefield';
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
const Container = styled.div`
  .ant-form-item-control {
    line-height: normal;
  }
  padding-bottom: 60px;
  .ant-input {
    height: 32px;
  }
`;
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
const StyleInputNumber = MakeField(
  styled(InputNumber)`
    width: 60px !important;
    color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
  `,
);
const StyleInputInit = styled(Input)`
  background: yellowgreen;
`;
const StyleInput = MakeField(styled(StyleInputInit)`
  color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
`);
const InputScore = MakeField(
  styled(Input)`
    width: 68px;
    color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
  `,
);
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
  margin-left: 45px;
  .targetlabel {
    opacity: 0.55;
    font-family: SourceHanSansSC-Normal;
    font-size: 14px;
    color: #000000;
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
  .ant-row {
    margin-right: 8px;
  }
`;
const LevelScore = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  .ant-input {
    width: 68px;
    height: 24px;
  }
  .scoreItem {
    margin-right: 30px;
  }
  .scorelabel {
    opacity: 0.55;
    font-family: SourceHanSansSC-Normal;
    font-size: 14px;
    color: #000000;
  }
`;

const StyledInputGroup = styled.div`
  /* margin-top: 15px; */
  .ant-input-number-input,
  .ant-input-number {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 155px;
  }
  .ant-input-disabled {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    text-align: center;
  }
  display: flex;
  .ant-form-item-control {
    line-height: 32px;
    /* zoom: 1; */
    border: none;
  }
`;
// const StyleInput = MakeField(Input);
const StyleGroupSelect = MakeField(styled(Input)`
  width: 90px !important;
`);

const StyleGroupInput = MakeField(styled(InputNumber)`
  color: ${props => (!props.isNewForm && props.dirty ? '#FAAD14 !important;' : '')};
`);

const vidlocalData = [
  ['vidlocal11', 'vidlocal12', 'vidlocal13', 'vidlocal14'],
  ['vidlocal21', 'vidlocal22', 'vidlocal23', 'vidlocal24'],
  ['vidlocal31', 'vidlocal32', 'vidlocal33', 'vidlocal34'],
  ['vidlocal41', 'vidlocal42', 'vidlocal43', 'vidlocal44'],
];
const Diagnosisrecords = (props) => {
  const {
    videolesionCount, _values, kickDia, dispatch, narrowRadio,
  } = props;
  console.log('diagnosirecord -----> ', _values);
  const handleNarrowRadio = (e) => {
    const { target } = e;
    if (target.nodeName.toLowerCase() === 'input') {
      const radioValue = parseInt(target.value, 10);
      if (radioValue === narrowRadio) {
        dispatch(change('crf', 'narrowRadio', 0));
      }
    }
  };

  return (
    <Container>
      <RightTitle>CTA诊断记录</RightTitle>
      <FlexItem>
        <Lable>CTA影像重新编号</Lable>
        <StyledInputGroup>
          <Field name="aliasTestCenter" component={StyleGroupSelect} disabled />
          {/* <InputLabel>
            <Field name="ctvideoLabel" component={StyleGroupInput} disabled />
          </InputLabel> */}
          <Field name="ctvideoNumber" component={StyleGroupInput} placeholder="三位数字编号" />
        </StyledInputGroup>
      </FlexItem>
      <FlexItem onClick={handleNarrowRadio}>
        <Lable>CTA 诊断直径≥2mm 的冠状动脉，至少有一处狭窄程度为30%-90%?</Lable>
        <Field name="narrowRadio" component={ARadioGroup}>
          <Radio value={1}>是</Radio>
          <Radio value={2}>否</Radio>
        </Field>
      </FlexItem>
      <FlexItem>
        <FlexCheckbox style={{ position: 'relative' }}>
          <Lable>目标血管</Lable>
          <div className="flexCheck">
            <Field name="vidtarvessel1" id="vidtarvessel1" component={ACheckBox} type="checkbox">
              左主干
            </Field>
            <Field name="vidtarvessel2" id="vidtarvessel2" component={ACheckBox} type="checkbox">
              前降支
            </Field>
            <Field name="vidtarvessel3" id="vidtarvessel3" component={ACheckBox} type="checkbox">
              回旋支
            </Field>

            <Field name="vidtarvessel4" id="vidtarvessel4" component={ACheckBox} type="checkbox">
              右冠状动脉
            </Field>
          </div>
          {kickDia
            && (!_values.vidtarvessel1
              && !_values.vidtarvessel2
              && !_values.vidtarvessel3
              && !_values.vidtarvessel4) && <ErrMsg style={{ top: 22 }}>请选择目标血管！</ErrMsg>}
        </FlexCheckbox>
      </FlexItem>
      <TargetBox style={{ 'padding-top': 32 }}>
        <Lable>目标病变数</Lable>
        <Field name="videolesionCount" component={StyleInputNumber} min={1} max={4} />
      </TargetBox>
      <TargetFlex>
        {vidlocalData.map((item, Rowindex) => (
          <LevelFlex>
            <div className="targetlabel">{`目标病变部位${Rowindex + 1}`}</div>
            {item.map(col => (
              <Field
                name={col}
                component={StyleInput}
                disabled={videolesionCount <= Rowindex || !videolesionCount}
              />
            ))}
            {kickDia
              && _values
              && (!_values[`vidlocal${Rowindex + 1}1`]
                && !_values[`vidlocal${Rowindex + 1}2`]
                && !_values[`vidlocal${Rowindex + 1}3`]
                && !_values[`vidlocal${Rowindex + 1}4`])
              && videolesionCount > Rowindex && (
                <ErrMsg style={{ left: 12, top: 25 }}>请输入目标病变部位!</ErrMsg>
            )}
            <FlexBox>
              <div className="targetlabel">病变狭窄最重程度</div>
              <Field
                name={`lesionBand${Rowindex + 1}`}
                component={StyleInput}
                disabled={videolesionCount <= Rowindex || !videolesionCount}
              />
              {kickDia
                && _values
                && (!_values[`lesionBand${Rowindex + 1}`]
                  && !_values[`lesionBand${Rowindex + 1}`]
                  && !_values[`lesionBand${Rowindex + 1}`]
                  && !_values[`lesionBand${Rowindex + 1}`])
                && videolesionCount > Rowindex && <ErrMsg style={{ left: 460 }}>请填写完整!</ErrMsg>}
            </FlexBox>
          </LevelFlex>
        ))}
      </TargetFlex>
      <FlexItem>
        <Lable>钙化积分</Lable>
      </FlexItem>
      <TargetFlex>
        <LevelScore>
          <FlexBox className="scoreItem">
            <div className="scorelabel" style={{ 'margin-right': 8 }}>
              左主干
            </div>
            <Field name="videoScore1" component={InputScore} />
          </FlexBox>
          <FlexBox className="scoreItem">
            <div className="scorelabel" style={{ 'margin-right': 8 }}>
              前降支
            </div>
            <Field name="videoScore2" component={InputScore} />
          </FlexBox>
          <FlexBox className="scoreItem">
            <div className="scorelabel" style={{ 'margin-right': 8 }}>
              回旋支
            </div>
            <Field name="videoScore3" component={InputScore} />
          </FlexBox>
          <FlexBox className="scoreItem">
            <div className="scorelabel" style={{ 'margin-right': 8 }}>
              右冠状动脉
            </div>
            <Field name="videoScore4" component={InputScore} />
          </FlexBox>
        </LevelScore>
        <LevelScore>
          <FlexBox className="scoreItem">
            <div className="scorelabel" style={{ 'margin-right': 8 }}>
              总钙化积分
            </div>
            <Field name="videoScore5" component={InputScore} />
          </FlexBox>
        </LevelScore>
      </TargetFlex>
    </Container>
  );
};

Diagnosisrecords.propTypes = {
  videolesionCount: PropTypes.string.isRequired,
  _values: PropTypes.object.isRequired,
  kickDia: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  narrowRadio: PropTypes.number.isRequired,
};
export default Diagnosisrecords;
