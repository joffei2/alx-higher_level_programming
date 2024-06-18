#!/usr/bin/node
/* script that prints the first argument passed to it */
const arg2 = process.argv;

if (args[2] === undefined) {
  console.log('No argument');
} else {
  console.log(args[2]);
}
