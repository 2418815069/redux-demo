/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Assessment from './assessment';
import DVFFRCheck from './check';

const Container = styled.div`
  padding-left: 22px;
  padding-top: 7px;
  .ant-form-item {
    margin-bottom: 0;
  }
`;

const Cardiology = (props) => {
  const {
    centerLesionCount,
    kickDia,
    _values,
    dispatch,
    qualityAssessment,
    completeAssessment,
    ffrSuitable,
    hasFault,
    isNewForm,
  } = props;
  return (
    <Container>
      <Assessment
        dispatch={dispatch}
        qualityAssessment={qualityAssessment}
        completeAssessment={completeAssessment}
        ffrSuitable={ffrSuitable}
      />
      <DVFFRCheck
        centerLesionCount={centerLesionCount}
        kickDia={kickDia}
        _values={_values}
        dispatch={dispatch}
        hasFault={hasFault}
        isNewForm={isNewForm}
      />
    </Container>
  );
};

Cardiology.propTypes = {
  centerLesionCount: PropTypes.string.isRequired,
  kickDia: PropTypes.bool.isRequired,
  _values: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  qualityAssessment: PropTypes.number.isRequired,
  completeAssessment: PropTypes.number.isRequired,
  ffrSuitable: PropTypes.number.isRequired,
  hasFault: PropTypes.number.isRequired,
  isNewForm: PropTypes.bool.isRequired,
};
export default Cardiology;
