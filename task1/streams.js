const { Transform, Writable } = require('stream');
const caesarShift = require('./shift.js');
const fs = require('fs');

module.exports = class Stream {
  constructor() {}

  static getReadbleStream(inputCommand) {
    if (inputCommand === undefined) {
      console.log('Please write your text: ');
      return process.stdin;
    }
    return fs.createReadStream(inputCommand, 'utf8');
  }

  static getTransformStream(shift, action) {
    class TransformStream extends Transform {
      constructor(opt, s, a) {
        super(opt);

        this.shift = s;
        this.action = a;
      }

      _transform(chunk, encoding, callback) {
        try {
          const stringChunk = chunk.toString('utf8');

          const resultString = caesarShift(
            stringChunk,
            this.shift,
            this.action
          );
          callback(null, resultString);
          return;
        } catch (err) {
          callback(err);
          return;
        }
      }
    }

    return new TransformStream({ highWaterMark: 2 }, shift, action);
  }

  static getWritableStream(outputCommand) {
    if (outputCommand === undefined) {
      class WritableStream extends Writable {
        _write(chunk, encoding, callback) {
          console.log('outputText:', chunk.toString());

          callback();
        }
      }
      return new WritableStream({ highWaterMark: 2 });
    }

    return fs.createWriteStream(outputCommand);
  }
};
