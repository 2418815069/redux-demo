/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import Cartcontainer from './cartcontainer';

const selector = formValueSelector('crf');
export default connect(state => ({
  initialValues: state.crfReducer.data,
  caseName: selector(state, 'caseName'),
  diagnosisRadio: selector(state, 'diagnosisRadio'),
  ICAlesionCount: selector(state, 'ICAlesionCount'),
  completeIllCase: selector(state, 'completeIllCase'),
  otherill1: selector(state, 'otherill1'),
  otherill2: selector(state, 'otherill2'),
  otherill3: selector(state, 'otherill3'),
  otherill4: selector(state, 'otherill4'),
  otherill5: selector(state, 'otherill5'),
  illhistoryValue: selector(
    state,
    'heartbypass',
    'coronarystent',
    'heartvalves',
    'heartpacemaker',
    'mazeprocedure',
  ),
}))(Cartcontainer);
