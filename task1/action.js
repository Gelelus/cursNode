import Stream from './streams.js';
import { pipeline } from 'stream';

export default function setActionHandler(command) {
  const readbleStream = Stream.getReadbleStream(command.input);
  const transformStream = Stream.getTransformStream(
    command.shift,
    command.action
  );

  const writableStream = Stream.getWritableStream(command.output);

  pipeline(readbleStream, transformStream, writableStream, err => {
    if (err) {
      console.error(
        'Pipeline failed:\n',
        err.message.replace(err.code, 'Cause')
      );
    } else {
      console.log('Pipeline succeeded');
    }
  });
}
