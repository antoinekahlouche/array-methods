const data = [1, 2, 3]

const result = data.reduce((acc, curr) => (acc = `${acc}${curr}`), '')
console.log(result)
// -> 123

const resultReverse = data.reduceRight((acc, curr) => (acc = `${acc}${curr}`), '')
console.log(resultReverse)
// -> 321
