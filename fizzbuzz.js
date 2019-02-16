'use strict';

const itertools = require('itertools');

/**
 * Count from [0, `n`), replacing any number divisible by 3 with "fizz"
 * and any number divisible by 5 with "buzz."
 * Any number divisible by both 3 and 5 is replaced with "fizzbuzz."
 * @param {number}
 * @returns {string[]}
 */
function fizzbuzz(n) {
    const divisible = (a, b) => a % b === 0;

    return itertools.map(itertools.range(n), function (k) {
        if (divisible(k, 3) && divisible(k, 5)) {
            return 'fizzbuzz';
        } else if (divisible(k, 3)) {
            return 'fizz';
        } else if (divisible(k, 5)) {
            return 'buzz';
        } else {
            return k.toString();
        }
    });
}

module.exports = fizzbuzz;