// ACT
/*
if (fs.existsSync('text1.txt')) {
  readMessage().then(() => {
    writeMessage(2).then(readMessage);
  });
} else {
  createFile().then(readMessage).then(() => {
    writeMessage(1).then(readMessage);
  });
}
*/