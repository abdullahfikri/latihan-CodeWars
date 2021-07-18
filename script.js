const duplicateEncode = word => word
      .toLowerCase()
      .split('')
      .map((word, index, arr) => {
        let status = 0 
        arr.forEach(el => word === el ? status++ : status);
        return status > 1 ? ')' : '('
      })
      .join('');

console.log(duplicateEncode('Success'))
// console.log(duplicateEncode('recede'))
// console.log(duplicateEncode('din'))

// console.log('( for single, ) for multiple')