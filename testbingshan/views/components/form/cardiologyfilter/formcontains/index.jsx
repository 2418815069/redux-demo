/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IllHistory from './illhistory';
import OtherIlls from './otherillhistory';
import Diagnosis from './diagnosis';
import Diagnosisrecords from './diagnosisrecords';

const Container = styled.div`
  padding-left: 22px;
  padding-top: 7px;
`;
const Cardiology = (props) => {
  const {
    diagnosisRadio,
    ICAlesionCount,
    kickDia,
    _values,
    dispatch,
    completeIllCase,
    otherill1,
    otherill2,
    otherill3,
    otherill4,
    otherill5,
  } = props;
  return (
    <Container>
      <IllHistory dispatch={dispatch} completeIllCase={completeIllCase} />
      <Diagnosis diagnosisRadio={diagnosisRadio} dispatch={dispatch} />
      <OtherIlls
        dispatch={dispatch}
        otherill1={otherill1}
        otherill2={otherill2}
        otherill3={otherill3}
        otherill4={otherill4}
        otherill5={otherill5}
      />
      <Diagnosisrecords ICAlesionCount={ICAlesionCount} kickDia={kickDia} _values={_values} />
    </Container>
  );
};

Cardiology.propTypes = {
  diagnosisRadio: PropTypes.number.isRequired,
  ICAlesionCount: PropTypes.number.isRequired,
  kickDia: PropTypes.bool.isRequired,
  _values: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  completeIllCase: PropTypes.number.isRequired,
  otherill1: PropTypes.number.isRequired,
  otherill2: PropTypes.number.isRequired,
  otherill3: PropTypes.number.isRequired,
  otherill4: PropTypes.number.isRequired,
  otherill5: PropTypes.number.isRequired,
};
export default Cardiology;
