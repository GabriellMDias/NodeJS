var fs = require('fs');
fileName = 'myFile.txt'
fileName2 = 'myFil2.txt'

fs.open(fileName, 'w', function (err, file) {
    if(err) throw err;
    console.log('Created file: ' + fileName);
})

fs.writeFile(fileName, 'Hello, ', function (err) {
    if (err) throw err;
    console.log('Write "Hello" in ' + fileName)
})

fs.appendFile(fileName, 'how are you?', function (err) {
    if (err) throw err
    console.log(fileName + ' updated!')
})

fs.open(fileName2, 'w', function (err, file) {
    if(err) throw err;
    console.log('Created file: ' + fileName2);
})

fs.rename(fileName2, 'myFile2.txt', function (err) {
    if (err) throw err;
    console.log(fileName2 +' renamed to ' + 'myFile2.txt');
  }); 

fs.unlink('myFile2.txt', function (err) {
    if (err) throw err;
    console.log('myFile2.txt deleted!');
}); 