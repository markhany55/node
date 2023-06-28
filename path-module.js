const path=require('path')

const file=path.join('/content','subfolder','test.txt')

console.log(file)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log("absolute",absolute)