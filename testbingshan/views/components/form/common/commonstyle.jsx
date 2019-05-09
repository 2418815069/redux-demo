import { Checkbox } from 'antd';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
const RightTitle = styled.div`
  width: 860px;
  height: 38px;
  background: #f7f9fa;
  font-family: SourceHanSansSC-Normal;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.55);
  line-height: 38px;
  padding: 0 12px;
`;
const InputLabel = styled.div`
  width: 25px;
  .ant-input-disabled {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    text-align: center;
    border-right: none;
    border-left: none;
  }
`;

const Lable = styled.div`
  font-family: SourceHanSansSC-Medium;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 22px;
  padding: 0 16px;
`;
const FlexCheckbox = styled.div`
  display: flex;
  .flexCheck {
    width: 760px;
    flex-wrap: wrap;
    display: flex;
  }
`;
const ErrMsg = styled.div`
  font-size: 14px;
  color: #f5222d;
  line-height: 22px;
  margin-left: 82px;
  position: absolute;
`;
const HidenSelect = styled.span`
  font-size: 16px;
  padding-left: 15px;
`;
const FlexItem = styled(FlexBox)`
  margin-top: 32px;
`;
const CheckBox = styled(Checkbox)`
  min-width: 250px;
  height: 22px;
  margin: 0 !important;
  white-space: nowrap;
  span {
    font-family: SourceHanSansSC-Normal;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.55);
    letter-spacing: 0;
    line-height: 22px;
  }
  span:nth-of-type(2) {
    opacity: 0.65;
  }
  .ant-checkbox-checked + span {
    opacity: 1 !important;
  }
`;
export {
  FlexBox,
  InputLabel,
  RightTitle,
  Lable,
  FlexCheckbox,
  ErrMsg,
  CheckBox,
  HidenSelect,
  FlexItem,
};
