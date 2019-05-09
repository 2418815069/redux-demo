/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CTACheck from './check';
import Diagnosisrecords from './videodiarecords';

const Container = styled.div`
  padding-left: 22px;
  padding-top: 7px;
  .ant-form-item {
    margin-bottom: 0;
  }
`;
const Cardiology = (props) => {
  const {
    videolesionCount,
    _values,
    kickDia,
    dispatch,
    isCAFFRcheck,
    isDVFFR,
    narrowRadio,
  } = props;
  return (
    <Container>
      <CTACheck dispatch={dispatch} isCAFFRcheck={isCAFFRcheck} isDVFFR={isDVFFR} />
      <Diagnosisrecords
        _values={_values}
        videolesionCount={videolesionCount}
        kickDia={kickDia}
        dispatch={dispatch}
        narrowRadio={narrowRadio}
      />
    </Container>
  );
};

Cardiology.propTypes = {
  videolesionCount: PropTypes.string.isRequired,
  _values: PropTypes.object.isRequired,
  kickDia: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isCAFFRcheck: PropTypes.number.isRequired,
  isDVFFR: PropTypes.number.isRequired,
  narrowRadio: PropTypes.number.isRequired,
};
export default Cardiology;
