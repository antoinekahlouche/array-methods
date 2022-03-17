const data = [
    { name: 'pomme rouge', logo: '🍎' },
    { name: 'avocat', logo: '🥑' },
    { name: 'carotte', logo: '🥕' }
]

const result = data.sort((el1, el2) => (el1.name < el2.name ? -1 : 1))
console.log(result)
// -> [
//     { name: 'avocat', logo: '🥑' },
//     { name: 'carotte', logo: '🥕' },
//     { name: 'pomme rouge', logo: '🍎' },
//   ]
