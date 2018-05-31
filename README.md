# map2array
map2array

js
------
将一个map进行按照指定标签进行转化为数组，方便在其他地方使用,我使用在将项目中数据转化结构为and-design中的选择器Picker、CheckBox等中
    
使用代码：
```javascript
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
```
    
转换之前形式如下所示：
```javascript
const map = {
  A: '农、林、牧、渔业',
  A01: '农业',
  A011: '谷物种植',
  A012: '豆类、油料和薯类种植',
  A013: '棉、麻、糖、烟草种植',
};
```
转换之后的结果为
```javascript
[ { label: '农、林、牧、渔业', value: 'A' },
  { label: '农业', value: 'A01' },
  { label: '谷物种植', value: 'A011' },
  { label: '豆类、油料和薯类种植', value: 'A012' },
  { label: '棉、麻、糖、烟草种植', value: 'A013' } ]

```

