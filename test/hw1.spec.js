const expect = require('chai').expect;
const fs = require('fs');
const sinon = require('sinon');

const hw1 = require('../src/hw1');

describe("hw1.js tests", () => {
  describe("#createFile()", () => {
    it("expect to get text1.txt by creating file", (done) => {
      // arranges
      const file = 'text1.txt';

      // acts
      hw1.createFile().then(() => {
        // asserts
        expect(fs.existsSync(file)).to.equal(true);
        done();
      });
    });
  });

  describe("#readMessage()", () => {
    it("expect to get message by reading file", (done) => {
      // arranges
      const message = 'read';

      // acts
      hw1.createFile().then(() => {
        hw1.writeMessage(message).then(hw1.readMessage).then((res) => {
          // asserts
          expect(res).to.equal(message);
          done();
        })
      })
    });

  });

  describe("#writeMessage(data)", () => {
    it("expect to get message by reading file", (done) => {
      // arranges
      const resolve = undefined;
      const message = 'write';

      // acts
      hw1.createFile().then(() => {
        hw1.writeMessage(message).then((res) => {
          expect(res).to.equal(resolve);
          done();
        });
      });
    });
  });

  describe("#reject(err) for createFile()", () => {
    let openStub;

    before( () => {
      openStub = sinon.stub(fs, "open").callsFake((a, b, cb) => {
        cb("not success"); // have error      
      })
    });

    after( () => {
      openStub.reset();
    });

    /*
    it("practice force resolve or reject", () => {
      // arranges
      const something = (cb) => {
        cb(null, "success");
        cb("not success");
      };

      // acts
      something((err, res) => {
        if(err) {
          console.log("ERROR: ", err);
        } else {
          console.log("RESULT: ", res);
        }
      });

    });
    */

    it("expect to get error when can not create file", (done) => {
      // arranges

      // acts
      hw1.createFile().then((res)=> {
      // resolve (noop)
      }).catch((err) => {
        expect(err).to.equal("not success"); // reject
        done();
      });
      
    });
  });

  describe("#reject(err) for readMessage()", () => {
    let readFileStub;

    before( () => {
      readFileStub = sinon.stub(fs, "readFile").callsFake((a, b, cb) => {
        cb("not success"); // have error      
      })
    });

    after( () => {
      readFileStub.reset();
    });

    it("expect to get error when can not create file", (done) => {
      // arranges

      // acts
      hw1.readMessage().then((res)=> {
      // resolve (noop)
      }).catch((err) => {
        expect(err).to.equal("not success"); // reject
        done();
      });
      
    });
  });

  describe("#reject(err) for writeMessage()", () => {
    let appendFileStub;

    before( () => {
      appendFileStub = sinon.stub(fs, "appendFile").callsFake((a, b, cb) => {
        cb("not success"); // have error      
      })
    });

    after( () => {
      appendFileStub.reset();
    });

    it("expect to get error when can not write file", (done) => {
      // arranges

      // acts
      hw1.writeMessage('test').then((res)=> {
      // resolve (noop)
      }).catch((err) => {
        expect(err).to.equal("not success"); // reject
        done();
      });
      
    });
  });

});
