module.exports = function setOption(program) {
  return program
    .storeOptionsAsProperties(false)
    .passCommandToAction(false)
    .requiredOption('-s, --shift <action>', 'a shift')
    .option('-i, --input <action>', 'an input file')
    .option('-o, --output <action>', 'an output file')
    .requiredOption('-a, --action <action>', 'an action encode/decode');
};
