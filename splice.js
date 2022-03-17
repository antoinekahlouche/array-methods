const data = ['🍎', '🥑', '🥕']

const result = data.splice(1, 2, '🍌')
console.log(data, result)
// -> [ '🍎', '🍌' ] [ '🥑', '🥕' ]
