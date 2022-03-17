const data = [
    { name: 'pomme rouge', logo: '🍎' },
    { name: 'avocat', logo: '🥑' },
    { name: 'carotte', logo: '🥕' }
]

const result = data.find((el) => el.name === 'carotte')
console.log(result)
// -> { name: 'carotte', logo: '🥕' }

const index = data.findIndex((el) => el.name === 'carotte')
console.log(index)
// -> 4
