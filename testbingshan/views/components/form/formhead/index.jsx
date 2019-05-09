/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { changeFormState, changeUpdatePristine } from '../../../reducers/crfreducer';
import FormHead from './formhead';
import { studyCenterAliasMap } from '../common/makefield';

const selector = formValueSelector('crf');
export default connect(
  state => ({
    initialValues: state.crfReducer.formData,
    updateParam: state.crfReducer.updateParam,
    groupNumber: selector(state, 'groupNumber'),
    aliasTestCenter: studyCenterAliasMap.get(selector(state, 'aliasTestCenter')),
    isNewForm: state.crfReducer.isNewForm,
    formList: state.crfReducer.formList,
  }),
  { changeFormState, changeUpdatePristine },
)(FormHead);
