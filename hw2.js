const fs = require('fs');

function createFile(callback) {
  fs.open('test2.txt', 'w', callback);
}

function readMessage(callback) {
  fs.readFile('test2.txt', 'utf8', callback);
}

function writeMessage(file, data, callback) {
  fs.appendFile('test2.txt', data, callback);
  // return data;
}

if (fs.existsSync('test2.txt')) {
  readMessage((err, res) => {
    if (err) throw err;   // fail
    else {
      console.log('Read file : ', res);
      console.log('---------------------------------');
    }

    writeMessage('test2.txt', 2, (err, res) => {
      if (err) reject(err);
      else {
        console.log('add content: ', '2');
        console.log('---------------------------------');
      }

      readMessage((err, res) => {
        if (err) throw err;   // fail
        else {
          console.log('Read file : ', res);
          console.log('---------------------------------');
        }

      });
    });

  });
} else {
  createFile((err, res) => {
    fs.open('test2.txt', 'w', (err, res) => {
      if (err) throw err;
      else {
        console.log('Create file!!');
        console.log('---------------------------------');
      }

      readMessage((err, res) => {
        if (err) throw err;   // fail
        else {
          console.log('Read file : ', res);
          console.log('---------------------------------');
        }

        writeMessage('test2.txt', 1, (err, res) => {
          if (err) throw err;
          else {
            console.log('add content: ', '1');
            console.log('---------------------------------');
          }

          readMessage((err, res) => {
            if (err) throw err;   // fail
            else {
              console.log('Read file : ', res);
              console.log('---------------------------------');
            }
          });

        });
      });
    });
  });
}
