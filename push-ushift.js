const data = ['🍎', '🥑', '🥕']

data.push('🍉')
console.log(data)
// -> [ '🍎', '🥑', '🥕', '🍉' ]

data.unshift('🍌')
console.log(data)
// -> [ '🍌', '🍎', '🥑', '🥕', '🍉' ]
