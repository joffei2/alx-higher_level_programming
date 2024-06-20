#!/usr/bin/node
/* a function that returns the number of occurrences in a list */

exports.esrever = function (list) {
    if (list === undefined) return [];
    let reversed = [];
    for (let l = list.length - 1; l >= 0; l--) {
      reversed.push(list[l]);
    }
    return reversed;
  };