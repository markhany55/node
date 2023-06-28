const {writeFileSync,readFileSync}=require('fs')

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

writeFileSync('./content/results.txt',`this the the results : ${first} and ${second}`,{flag:'a'})