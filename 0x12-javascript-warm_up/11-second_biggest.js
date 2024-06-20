#!/usr/bin/node
/* a script that computes and prints a factorial */

if (process.argv.length <= 3) {
  console.log(0);
} else {
  const list = process.argv.sort();
  console.log(list.reverse()[1]);
}