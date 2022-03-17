const dataEvery = [2, 4, 6]
const isAllEven = dataEvery.every((el) => el % 2 === 0)
console.log(isAllEven)
// -> true

const dataSome = [1, 2, 4]
const isSomeUneven = dataSome.some((el) => el % 2 !== 0)
console.log(isSomeUneven)
// -> true
