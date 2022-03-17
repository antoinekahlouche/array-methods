const data = [
    { name: 'pomme rouge', logo: '🍎' },
    { name: 'avocat', logo: '🥑' },
    { name: 'carotte', logo: '🥕' }
]

const result = data.filter((el) => el.name === 'carotte')
console.log(result)
// -> [ { name: 'carotte', logo: '🥕' } ]
