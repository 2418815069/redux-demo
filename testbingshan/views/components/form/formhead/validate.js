export default function (values) {
  const errors = {};
  const requiredFields = [
    ['testCenter', '请选择试验中心编号!'], ['caseNumber', '请选择试验中心编号2!'],
    ['groupNumber', '请输入入组编号!'], ['aliasTestCenter', '请选择试验中心编号3!'],
    ['datepicker', '请选择试验中心编号!5666'],
    ['completeIllCase', '请选择试验中心编号!6'],
  ];
  const targetLesionsPOne = [
    'leslocal11', 'leslocal12', 'leslocal13', 'leslocal14',
    'leslocal21', 'leslocal22', 'leslocal23', 'leslocal24',
    'leslocal31', 'leslocal32', 'leslocal33', 'leslocal34',
    'leslocal41', 'leslocal42', 'leslocal43', 'leslocal44',
  ];
  const lesions = ['1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', '11', '12', '13', '14', '15',
    '16', '9a', '10a', '12a', '12b', '14a', '14b',
  ];
  const requiredFieldsMap = new Map(requiredFields);
  requiredFieldsMap.forEach((errmsg, field) => {
    if (!values[field]) {
      errors[field] = errmsg;
    }
    console.log('9009');
  });
  targetLesionsPOne.forEach((field) => {
    if (values[field] && !lesions.includes(values[field])) {
      errors[field] = '请输入正确病变部位';
    }
  });
  return errors;
}
