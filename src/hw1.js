const fs = require('fs');

function createFile() {
  return new Promise((resolve, reject) => {
    fs.open('text1.txt', 'w',(err, res) => {
      if (err) {
        reject(err);
      } else {
        console.log('Create file text1.txt!!');
        console.log('---------------------------------');
        resolve(res);
      }
    });
  });
}

function readMessage() {
  return new Promise(function (resolve, reject) {
    fs.readFile('text1.txt', 'utf8', function (err, res) {
      if (err) {
        reject(err);   // fail
      } else {
        resolve(res);
        console.log('Read file text1.txt: ', res);
        console.log('---------------------------------');
      }
    });
  });
}

function writeMessage(data) {
  return new Promise(function (resolve, reject) {
    fs.appendFile('text1.txt', data, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);    //  *settled
        console.log('add content: ', data);
        console.log('---------------------------------');
      }
    });
  });
}

module.exports = { createFile, readMessage, writeMessage };