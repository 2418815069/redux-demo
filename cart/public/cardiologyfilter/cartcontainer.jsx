import React from 'react';
import { propTypes } from 'redux-form';
import IllHistory from './illhistory';
import OtherIlls from './otherillhistory';
import Diagnosis from './diagnosis';
import Diagnosisrecords from './diagnosisrecords';
import PageTip from '../common/pageTip';
import { FormContainer } from '../common/commonstyle';

const DiologyForm = (props) => {
  const {
    diagnosisRadio,
    ICAlesionCount,
    _values,
    dispatch,
    completeIllCase,
    otherill1,
    otherill2,
    otherill3,
    otherill4,
    otherill5,
    illhistoryValue,
    updateSelectHistory,
    changeHistory,
  } = props;
  return (
    <FormContainer>
      <IllHistory
        updateSelectHistory={updateSelectHistory}
        illhistoryValue={illhistoryValue}
        dispatch={dispatch}
        completeIllCase={completeIllCase}
      />
      {changeHistory && <Diagnosis diagnosisRadio={diagnosisRadio} dispatch={dispatch} />}
      {changeHistory && (
        <OtherIlls
          dispatch={dispatch}
          otherill1={otherill1}
          otherill2={otherill2}
          otherill3={otherill3}
          otherill4={otherill4}
          otherill5={otherill5}
        />
      )}
      {changeHistory && <Diagnosisrecords ICAlesionCount={ICAlesionCount} _values={_values} />}
      <PageTip curNum="1" />
    </FormContainer>
  );
};

DiologyForm.propTypes = {
  ...propTypes,
};

export default DiologyForm;
