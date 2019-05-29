const buf=Buffer.from('runoob','ascii')

console.log(buf.toString('hex'))

console.log(buf.toString('base64'))

buf2=Buffer.alloc(256);
len=buf2.write("www.runoob.com")

console.log("写入字节数："+len)