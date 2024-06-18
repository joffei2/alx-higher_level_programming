#!/usr/bin/node
/* a script that pr of arguments passed */
const args = process.argv;

if (args.length <= 2) {
  console.log('No argument');
} else if (args.length === 3) {
<<<<<<< HEAD
  console.log('argument found');
} else {
  console.log('arguments found');
=======
  console.log('Argument found');
} else {
  console.log('Arguments found');
>>>>>>> 583c7d5304947b141f1ca91711f1023169d568d0
}
