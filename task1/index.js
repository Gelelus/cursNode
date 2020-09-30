import commander from 'commander';
import setOption from './option.js';
import setActionHandler from './action.js';

setOption(commander.program)
  .action(setActionHandler)
  .parse(process.argv);
