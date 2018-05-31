/**
 * Created by jkwu on 2018/5/28.
 */
const map = {
  A: '农、林、牧、渔业',
  A01: '农业',
  A011: '谷物种植',
  A012: '豆类、油料和薯类种植',
  A013: '棉、麻、糖、烟草种植',
};

const map2arrayByKV = (objectMap, optionKeyName = 'label', optionValueName = 'value') => {
  const formatOptions = [];
  if (optionKeyName === optionValueName) return '键名和值名相同,无法进行整理数据';
  /* eslint-disable */
  for (const [value, label] of Object.entries(objectMap)) {
    formatOptions.push({
      [optionKeyName]: label,
      [optionValueName]: value,
    });
  }
  return formatOptions;
};

console.log(map2arrayByKV(map));