const fs = require("fs");

module.exports = function setOption(program) {
  return program
    .storeOptionsAsProperties(false)
    .passCommandToAction(false)
    .requiredOption('-s, --shift <number>', 'a shift', parseInteger)
    .option('-i, --input <path>', 'an input file', parsePath)
    .option('-o, --output <path>', 'an output file', parsePath)
    .requiredOption('-a, --action <action>', 'an action encode/decode', parseAction);
};

function parseAction(action){
   if (action === "encode" && action === "decode"){
    errorHandler(`invalid action type - ${action}`)
   }
   return action
}

function parseInteger(input){
  const int = parseInt(input)
  if (int === NaN){
   errorHandler(`invalid input for shift - ${input}`)
  } 
  return int
}

function parseInteger(input){
  const int = parseInt(input)
  if (int === NaN){
   errorHandler(`invalid input for shift - ${input}`)
  } 
  return int
}

function parsePath(path){
  if(!fs.existsSync(path)){
    errorHandler(`invalid file path - ${path}`)
  }

  return path
}

function errorHandler(message){
  console.error(message)
  process.exit(1);
}
