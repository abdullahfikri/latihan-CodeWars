// Duplicate Encode ------------

const duplicateEncode = word => word
      .toLowerCase()
      .split('')
      // .map((word, _, arr) => {
      //   let status = 0 
      //   arr.forEach(el => word === el ? status++ : status);
      //   return status > 1 ? ')' : '('
      // })
      .map((word, _, arr) =>arr.indexOf(word) === arr.lastIndexOf(word)? ')':'('
      )
      .join('');

console.log(duplicateEncode('Success'))

// Printer Errors
const printerError = s =>{
  // const rules =('abcdefghijklm').split('');
  const er = s.toLowerCase().split('').reduce((err, curr) => curr > 'm' ? ++err : err,0
  )

  return `${er}/${s.length}`;
}

console.log(printerError('dsafa'))

console.log(/[^a-m]/g);

// Is this a triangle?

const isTriangle = (a,b,c) => a+b > c && a+c > b && b+c > a

console.log(isTriangle(2,4,5));

//Growth of a Population
const nbYear =(p0, percent, aug, p) =>{
  let perc = percent / 100;
  let arrPenduduk = p0;
  let i=0;
  while (arrPenduduk < p){
    arrPenduduk += arrPenduduk * perc + aug;
    i++;
  }
  return i;
}
console.log(nbYear(1500, 5, 100, 5000));