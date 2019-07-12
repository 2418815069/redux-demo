const initState = {
  formList: [],
  formData: {},
  isPristine: null,
  isNewForm: false,
  updateParam: {
    formid: '',
    formrev: '',
    name: '',
    interrupt: '',
  },
  isShow: true, // 默认显示,控制中断，选中既往病史
  listOrder: 'selectTime',
}

const Reducer = (state = initState, action) => {
  const newSate = JSON.parse(JSON.stringify(state));
}
export default Reducer;