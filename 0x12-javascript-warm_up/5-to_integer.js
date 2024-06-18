#!/usr/bin/node
/* printing an integer */
const args = process.args[2];

if (isNaN(process.argv[2])) {
  console.log('Not a number');
  } else {
  console.log('My number: ' + parseInt(process.argv[2]));
}
