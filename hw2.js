const fs = require('fs');

function createFile(callback) {
  fs.open('text2.txt', 'w', callback);
}

function readMessage(callback) {
  fs.readFile('text2.txt', 'utf8', callback);
}

function writeMessage(file, data, callback) {
  fs.appendFile('text2.txt', data, callback);
  // return data;
}

if (fs.existsSync('text2.txt')) {
  readMessage((err, res) => {
    if (err) throw err;   // fail
    else {
      console.log('Read file text2.txt : ', res);
      console.log('---------------------------------');
    }

    writeMessage('text2.txt', 2, (err, res) => {
      if (err) reject(err);
      else {
        console.log('add content: ', '2');
        console.log('---------------------------------');
      }

      readMessage((err, res) => {
        if (err) throw err;   // fail
        else {
          console.log('Read file text2.txt: ', res);
          console.log('---------------------------------');
        }

      });
    });

  });
} else {
  createFile((err, res) => {
    fs.open('text2.txt', 'w', (err, res) => {
      if (err) throw err;
      else {
        console.log('Create file text2.txt!!');
        console.log('---------------------------------');
      }

      readMessage((err, res) => {
        if (err) throw err;   // fail
        else {
          console.log('Read file text2.txt: ', res);
          console.log('---------------------------------');
        }

        writeMessage('text2.txt', 1, (err, res) => {
          if (err) throw err;
          else {
            console.log('add content: ', '1');
            console.log('---------------------------------');
          }

          readMessage((err, res) => {
            if (err) throw err;   // fail
            else {
              console.log('Read file text2.txt: ', res);
              console.log('---------------------------------');
            }
          });

        });
      });
    });
  });
}
