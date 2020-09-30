## Installing NPM modules

```
npm install
```

## Task 1. Caesar cipher CLI tool

**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

**Details:**

For command-line arguments used - [https://www.npmjs.com/package/commander](https://www.npmjs.com/package/commander)

**Usage example:**

```bash
$ node task1 -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node task1 --action encode --shift 7 --input input.txt --output output.txt
```

```bash
$ node task1 --action decode --shift 7 --input input.txt --output output.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

