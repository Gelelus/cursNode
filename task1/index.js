const commander = require('commander');
const setOption = require('./option.js');
const setActionHandler = require('./action.js');

setOption(commander.program)
  .action(setActionHandler)
  .parse(process.argv);
