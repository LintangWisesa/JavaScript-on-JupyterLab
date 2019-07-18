// npm install dstools

const dstools = require('dstools')
const Collection = dstools.Collection;
const data = Collection().loadCSV('data.csv')

console.log(data)
data.show()