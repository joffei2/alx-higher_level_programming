#!/usr/bin/node
/* a script that pr of arguments passed */
const args = process.argv;

if (args.length <= 2) {
  console.log('No argument');
} else if (args.length === 3) {
  console.log('argument found');
} else {
  console.log('arguments found');
}
