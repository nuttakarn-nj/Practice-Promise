const fs = require('fs');

function createFile() {
  return new Promise((resolve, reject) => {
    fs.open('test1.txt', 'w', (err, res) => {
      if (err) throw err;
      else resolve(res);
      console.log('Create file!!');
      console.log('---------------------------------');
    });
  });
}

function readMessage() {
  return new Promise(function (resolve, reject) {
    fs.readFile('test1.txt', 'utf8', function (err, res) {
      if (err) reject(err);   // fail
      else resolve(res);      // success  *settled
      console.log('Read file : ', res);
      console.log('---------------------------------');
    });
  });
}

function writeMessage(data) {
  return new Promise(function (resolve, reject) {
    fs.appendFile('test1.txt', data, (err, res) => {
      if (err) reject(err);
      else resolve(res);    //  *settled
      console.log('add content: ', data);
      console.log('---------------------------------');
    });
  });
}

if (fs.existsSync('test1.txt')) {
  readMessage().then(() => {
    writeMessage(1).then(readMessage);
  });
} else {
  createFile().then(readMessage).then(() => {
    writeMessage(2).then(readMessage);
  });
}
