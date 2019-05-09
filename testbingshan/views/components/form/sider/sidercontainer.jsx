/* eslint-disable import/named */
import { connect } from 'react-redux';
import SideLeft from './siderleft';
import {
  storeCrfData,
  storeFormList,
  changeFormState,
  changeUpdateParam,
} from '../../../reducers/crfreducer';

const SiderContainer = connect(
  state => ({
    isNewForm: state.crfReducer.isNewForm,
    isPristine: state.crfReducer.isPristine,
    formList: state.crfReducer.formList,
  }),
  {
    storeCrfData,
    storeFormList,
    changeFormState,
    changeUpdateParam,
  },
)(SideLeft);

export default SiderContainer;
