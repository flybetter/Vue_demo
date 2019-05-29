var fs =require('fs')

var data=''

var readerStream=fs.createReadStream('input.txt')

readerStream.setEncoding('UTF8')

readerStream.on('data',function(chunk){
    data+=chunk;
})

readerStream.on('end',function (chunk) {
    console.log(data)    
})

readerStream.on('error',function (err) {
    console.log(err.stack)
})

console.log("the program read has been finished")

var data='i hate node.js'

var writeStream= fs.createWriteStream('output.txt')

writeStream.write(data,'UTF-8')

writeStream.end

writeStream.on('finish',function () {
    console.log('the write program has been finished')
})

writeStream.on('error',function () {
    console.log(err.stack)
})

console.log('the program write has been finished')
