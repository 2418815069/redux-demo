/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
// 需要整体验证的
const lesions = ['1', '2', '3', '4', '5', '6', '7',
  '8', '9', '10', '11', '12', '13', '14', '15',
  '16', '9a', '10a', '12a', '12b', '14a', '14b',
];

const targetLesionsPOne = [
  'leslocal11', 'leslocal12', 'leslocal13', 'leslocal14',
  'leslocal21', 'leslocal22', 'leslocal23', 'leslocal24',
  'leslocal31', 'leslocal32', 'leslocal33', 'leslocal34',
  'leslocal41', 'leslocal42', 'leslocal43', 'leslocal44',
];

const targetLesionsPTwo = [
  'vidlocal11', 'vidlocal12', 'vidlocal13', 'vidlocal14',
  'vidlocal21', 'vidlocal22', 'vidlocal23', 'vidlocal24',
  'vidlocal31', 'vidlocal32', 'vidlocal33', 'vidlocal34',
  'vidlocal41', 'vidlocal42', 'vidlocal43', 'vidlocal44',
];

const targetPThree = [
  'centerlocal11', 'centerlocal12', 'centerlocal13', 'centerlocal14',
  'centerlocal21', 'centerlocal22', 'centerlocal23', 'centerlocal24',
  'centerlocal31', 'centerlocal32', 'centerlocal33', 'centerlocal34',
  'centerlocal41', 'centerlocal42', 'centerlocal43', 'centerlocal44',
];

const requiredFields = [
  ['testCenter', '请选择试验中心编号1!'], ['caseNumber', '请选择试验中心编号2!'],
  ['groupNumber', '请选择试验中心编号4!'], ['aliasTestCenter', '请选择试验中心编号3!'],
  ['datepicker', '请选择试验中心编号!5'],
  ['completeIllCase', '请选择试验中心编号!6'],
];

const isDuplicate = (formId, formList) => {
  for (let i = 0; i < formList.length; i++) {
    if (formList[i].id === formId) {
      return true;
    }
  }
  return false;
};

// 点击提交 心内科记录左侧栏错误验证
const submitAndValidate = (values) => {
  const errors = {};

  const requiredFieldsMap = new Map(requiredFields);
  requiredFieldsMap.forEach((errmsg, field) => {
    if (!values[field]) {
      errors[field] = errmsg;
    }
  });
  targetLesionsPOne.forEach((field) => {
    if (values[field] && !lesions.includes(values[field])) {
      errors[field] = '请输入正确病变部位';
    }
  });
  if (values.caseNumber && !/^[0-9]{4}$/.test(values.caseNumber)) {
    errors.caseNumber = '请输入4位数字!';
  }
  if (values.groupNumber && !/^[0-9]{3}$/.test(values.groupNumber)) {
    errors.groupNumber = '请输入3位数字!';
  }

  const cdNumber = values.cdNumber;
  if (!values.cdNumber) {
    errors.cdNumber = '请输入ICA-FFR光盘编号!';
  } else if (cdNumber.substr(0, 1) !== 'F') {
    errors.cdNumber = "光盘编号首位应为'F'!";
  } else if (!/^[0-9]{3}$/.test(cdNumber.substr(1))) {
    errors.cdNumber = '请输入3位数字!';
  }

  // const count = values.videolesionCount;
  // const checkRecordPF1 = () => {
  //   // 测量位置校验 测量为准的ICA-FFR值校验
  //   if (!values.meaRecordPosition1) {
  //     errors.meaRecordPosition1 = '请填写完整!';
  //   } else if (!lesions.includes(values.meaRecordPosition1)) {
  //     errors.meaRecordPosition1 = '请输入正确的测量位置!';
  //   }
  //   if (!values.meaRecordPositionFFR1) {
  //     errors.meaRecordPositionFFR1 = '请填写完整!';
  //   } else if (!/^0.[0-9]{1,2}$/.test(values.meaRecordPositionFFR1)) {
  //     errors.meaRecordPositionFFR1 = '请输入正确的ICA-FFR值!';
  //   }
  // };

  // const checkRecordPF2 = () => {
  //   if (!values.meaRecordPosition2) {
  //     errors.meaRecordPosition2 = '请填写完整!';
  //   } else if (!lesions.includes(values.meaRecordPosition2)) {
  //     errors.meaRecordPosition2 = '请输入正确的测量位置!';
  //   }
  //   if (!values.meaRecordPositionFFR2) {
  //     errors.meaRecordPositionFFR2 = '请填写完整!';
  //   } else if (!/^0.[0-9]{1,2}$/.test(values.meaRecordPositionFFR2)) {
  //     errors.meaRecordPositionFFR2 = '请输入正确的ICA-FFR值!';
  //   }
  // };

  // const checkRecordPF3 = () => {
  //   if (!values.meaRecordPosition3) {
  //     errors.meaRecordPosition3 = '请填写完整!';
  //   } else if (!lesions.includes(values.meaRecordPosition3)) {
  //     errors.meaRecordPosition3 = '请输入正确的测量位置!';
  //   }
  //   if (!values.meaRecordPositionFFR3) {
  //     errors.meaRecordPositionFFR3 = '请填写完整!';
  //   } else if (!/^0.[0-9]{1,2}$/.test(values.meaRecordPositionFFR3)) {
  //     errors.meaRecordPositionFFR3 = '请输入正确的ICA-FFR值!';
  //   }
  // };

  // const checkRecordPF4 = () => {
  //   if (!values.meaRecordPosition4) {
  //     errors.meaRecordPosition4 = '请填写完整!';
  //   } else if (!lesions.includes(values.meaRecordPosition4)) {
  //     errors.meaRecordPosition4 = '请输入正确的测量位置!';
  //   }
  //   if (!values.meaRecordPositionFFR4) {
  //     errors.meaRecordPositionFFR4 = '请填写完整!';
  //   } else if (!/^0.[0-9]{1,2}$/.test(values.meaRecordPositionFFR4)) {
  //     errors.meaRecordPositionFFR4 = '请输入正确的ICA-FFR值!';
  //   }
  // };

  // if (count === '1') {
  //   checkRecordPF1();
  // }

  // if (count === '2') {
  //   checkRecordPF1();
  //   checkRecordPF2();
  // }

  // if (count === '3') {
  //   checkRecordPF1();
  //   checkRecordPF2();
  //   checkRecordPF3();
  // }

  // if (count === '4') {
  //   checkRecordPF1();
  //   checkRecordPF2();
  //   checkRecordPF3();
  //   checkRecordPF4();
  // }

  return errors;
};

// 筛选期-心内科 填写完成点击下一步验证函数
const diagnosisValidate = (values) => {
  const errors = {};

  if (!values.datepicker) {
    errors.datepicker = '请选择检查日期!';
  }

  /* 日期内容校验
  if (values.datepicker) {
    const year = parseInt(values.datepicker.split('-')[0], 10);
    if (year < 2016 || year > 2018) {
      errors.datepicker = '请选择正确的日期(2016-1-1~2018-12-31)!';
    }
  }
  */

  if (!values.completeIllCase) {
    errors.completeIllCase = '此项不能为空!';
  }

  if (values.diagnosisRadio === 5) {
    if (!values.diagnosisInput) {
      errors.diagnosisInput = '请输入其他临床诊断!';
    }
  }

  if (values.ICAlesionCount && !(/^[1-4]$/.test(values.ICAlesionCount))) {
    errors.ICAlesionCount = '病变范围是(1-4)!';
  }

  targetLesionsPOne.forEach((field) => {
    if (values[field] && !lesions.includes(values[field])) {
      errors[field] = '请输入正确病变部位';
    }
  });

  return errors;
};

// 筛选期-影像科 填写完成点击下一步验证函数
const vedioBranchValidate = (values) => {
  const errors = {};
  if (!values.isCA_FFRcheck) {
    errors.isCA_FFRcheck = '此项不能为空!';
  }

  if (!values.videodatepicker) {
    errors.videodatepicker = '请选择检查日期!';
  }

  if (!values.isDVFFR) {
    errors.isDVFFR = '此项不能为空!';
  }

  if (!values.aliasTestCenter) {
    errors.aliasTestCenter = '请选择试验中心编号!';
  }

  if (!values.ctvideoNumber) {
    errors.ctvideoNumber = '请输入入组编号!';
  }

  if (!/^[0-9]{3}$/.test(values.ctvideoNumber)) {
    errors.ctvideoNumber = '请输入3位数字!';
  }

  if (!values.narrowRadio) {
    errors.narrowRadio = '此项不能为空!';
  }

  targetLesionsPTwo.forEach((field) => {
    if (values[field] && !lesions.includes(values[field])) {
      errors[field] = '请输入正确病变部位';
    }
  });

  return errors;
};

// 测试期-中心实验室 填写完成点击下一步验证函数
const centralLabValidate = (values) => {
  const errors = {};
  if (!values.aliasTestCenter) {
    errors.aliasTestCenter = '请选择试验中心编号!';
  }

  if (!values.ctLabNumber) {
    errors.ctLabNumber = '请输入入组编号!';
  }

  if (!/^[0-9]{3}$/.test(values.ctLabNumber)) {
    errors.ctLabNumber = '请输入3位数字!';
  }

  if (!values.ffrSuitable) {
    errors.ffrSuitable = '此项不能为空!';
  } else if (values.ffrSuitable === 2) {
    if (!values.InputReason) {
      errors.InputReason = '请输入原因!';
    }
  }

  if (!values.reportDatepicker) {
    errors.reportDatepicker = '请选择检查日期!';
  }

  if (!values.signDatePicker) {
    errors.signDatePicker = '请选择检查日期!';
  }

  if (!values.groupNumber) {
    errors.groupNumber = '请输入入组编号!';
  }

  if (values.groupNumber && !/^[0-9]{3}$/.test(values.groupNumber)) {
    errors.groupNumber = '请输入3位数字!';
  }

  const dvffrNumber = values.dvffrNumber;
  if (!values.dvffrNumber) {
    errors.dvffrNumber = '请输入DVFFR报告编号!';
  } else if (dvffrNumber.substr(0, 1) !== 'D') {
    errors.dvffrNumber = '报告编号首位应为"D"!';
  } else if (!/^[0-9]{3}$/.test(dvffrNumber.substr(1))) {
    errors.dvffrNumber = '请输入3位数字!';
  }

  if (!values.hasFault) {
    errors.hasFault = '此项不能为空!';
  } else if (values.hasFault === 2) {
    if (!values.theFauletReason) {
      errors.theFauletReason = '请输入原因!';
    }
  }

  const targetVellel = (!values.diatarvessel1
    && !values.diatarvessel2
    && !values.diatarvessel3
    && !values.diatarvessel4);

  if (targetVellel) {
    errors.diatarvessel1 = '请选择目标血管!';
  }

  targetPThree.forEach((field) => {
    if (values[field] && !lesions.includes(values[field])) {
      errors[field] = '请输入正确病变部位';
    }
  });

  return errors;
};

// 左侧栏-同步验证
const caseNumberValidate = (value) => {
  if (!value) {
    return '请输入筛选编号!';
  }
  if (!/^[0-9]{4}$/.test(value)) {
    return '请输入4位数字';
  }
  return undefined;
};

const serialNumberValidate = (value) => {
  if (!value) {
    return '请输入入组编号!';
  }
  if (!/^[0-9]{3}$/.test(value)) {
    return '请输入3位数字';
  }
  return undefined;
};

const datepickerValidate = (value) => {
  if (!value) {
    return '请选择检查日期!';
  }
  return undefined;
};

const diagnosisInputRadioValidate = (value) => {
  if (!value) {
    return '请输入其他临床诊断!';
  }
  return undefined;
};

const ICAlesionCountValidate = (value) => {
  if (value && !(/^[1-4]$/.test(value))) {
    return '病变范围是(1-4)!';
  }
  return undefined;
};

export {
  isDuplicate,
  submitAndValidate,
  diagnosisValidate,
  vedioBranchValidate,
  centralLabValidate,
  caseNumberValidate,
  serialNumberValidate,
  datepickerValidate,
  diagnosisInputRadioValidate,
  ICAlesionCountValidate,
};
