const _ = require('lodash')
const items = [1, [2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('hello world')


// git commands to push to an already made repo resolving merge conflicts
// git pull origin main --allow-unrelated-histories
// git add.
// git commit ""
// git push -u origin main