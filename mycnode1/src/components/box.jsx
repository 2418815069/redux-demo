import styled from "styled-components";

const LineBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const VerticalCenter = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  height: 100%;
`;

export { LineBox, VerticalCenter };
