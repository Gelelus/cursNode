module.exports = function setOption(program) {
  return program
    .storeOptionsAsProperties(false)
    .passCommandToAction(false)
    .requiredOption('-s, --shift <number>', 'a shift')
    .option('-i, --input <path>', 'an input file')
    .option('-o, --output <path>', 'an output file')
    .requiredOption('-a, --action <action>', 'an action encode/decode');
};
