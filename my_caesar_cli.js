const { program } = require('commander');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// честно стырено
function caesar(str, shift, action) {
  shift = shift % 26;
  if (action === 'encode') {
    shift = 26 - shift;
  }
  if (shift < 0) {
    return caesar(str, shift + 26);
  }
  let output = '';
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c.match(/[a-z]/i)) {
      const code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    output += c;
  }
  return output;
}

const outputUsefile = [true, ''];
const inputUsefile = [true, ''];

program
  .storeOptionsAsProperties(false)
  .passCommandToAction(false)
  .requiredOption('-s, --shift <action>', 'a shift')
  .option('-i, --input <action>', 'an input file')
  .option('-o, --output <action>', 'an output file')
  .requiredOption('-a, --action <action>', 'an action encode/decode')
  .action(command => {
    if (command.input === undefined) {
      inputUsefile[0] = false;
      rl.question('input Text:  ', answer => {
        inputUsefile[1] = answer;
        rl.close();
      });
    }

    rl.on('close', () => {
      if (command.output === undefined) {
        outputUsefile[0] = false;
      }
      if (outputUsefile[0] === false) {
        outputUsefile[1] = caesar(
          inputUsefile[1],
          +command.shift,
          command.action
        );
        console.log('output Text: ', outputUsefile[1]);
      }
    });
  });

program.parse(process.argv);
