/* eslint-disable prefer-destructuring */
// Actons
// 存储表单数据
const STORE_CRF_DATA = 'STORE_CRF_DATA';
const storeCrfDataActtion = data => ({
  type: STORE_CRF_DATA,
  data,
});
const storeCrfData = data => (dispatch) => {
  dispatch(storeCrfDataActtion(data));
};

// 存储网络拉取到的表单列表
const STORE_FORM_LIST = 'STORE_FORM_LIST';
const storeFormListActtion = list => ({
  type: STORE_FORM_LIST,
  list,
});
const storeFormList = list => (dispatch) => {
  dispatch(storeFormListActtion(list));
};

// 改变表单创建状态,是否可创建
const CHANGE_FORM_STATE = 'CHANGE_FORM_STATE';
const changeFormStateAction = change => ({
  type: CHANGE_FORM_STATE,
  change,
});

const changeFormState = change => (dispatch) => {
  dispatch(changeFormStateAction(change));
};

// 改变表单更新API参数，表单ID，meta.rev标识
const CHANGE_UPDATE_PARAM = 'CHANGE_UPDATE_PARAM';
const UpdateParamAction = (id, rev) => ({
  type: CHANGE_UPDATE_PARAM,
  id,
  rev,
});
const changeUpdateParam = (id, rev) => (dispatch) => {
  dispatch(UpdateParamAction(id, rev));
};

// 改变表单更新API参数，表单ID，meta.rev标识
const UPDATE_PRISTINE = 'UPDATE_PRISTINE';
const UpdatePristineAction = pristine => ({
  type: UPDATE_PRISTINE,
  pristine,
});
const changeUpdatePristine = pristine => (dispatch) => {
  dispatch(UpdatePristineAction(pristine));
};

// 改变显示隐藏状态，勾选既往病史，临床诊断及后面的部分隐藏
const UPDATE_SHOW_STATE = 'UPDATE_SHOW_STATE';
const ShowStateAction = change => ({
  type: UPDATE_SHOW_STATE,
  change,
});
const UpdateShowState = change => (dispatch) => {
  dispatch(ShowStateAction(change));
};

// 初始化数据
const initState = {
  formList: [],
  formData: {},
  isPristine: null,
  isNewForm: false,
  updateParam: {
    formid: '',
    formrev: '',
  },
  isShow: { // 默认显示,控制中断，选中既往病史，临床诊断后面的部分隐藏
    filterDiagnosis: true,
    filterHistory: true,
    filterHRecord: true,
  },
};

// Reducer
const crfReducer = (state = initState, action) => {
  const newState = {
    ...state,
  };
  switch (action.type) {
    case STORE_CRF_DATA:
    {
      newState.formData = {
        ...action.data,
      };
      return newState;
    }
    case STORE_FORM_LIST:
    {
      newState.formList = action.list;
      return newState;
    }
    case CHANGE_FORM_STATE:
    {
      newState.isNewForm = action.change;
      return newState;
    }
    case CHANGE_UPDATE_PARAM:
    {
      newState.updateParam = {
        formid: action.id,
        formrev: action.rev,
      };
      return newState;
    }
    case UPDATE_PRISTINE:
    {
      newState.isPristine = action.pristine;
      return newState;
    }
    default:
      return newState;
  }
};

export {
  crfReducer,
  storeCrfData,
  storeFormList,
  changeFormState,
  changeUpdateParam,
  changeUpdatePristine,
  UpdateShowState,
};
