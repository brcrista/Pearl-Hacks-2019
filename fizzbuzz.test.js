'use strict';

const fizzbuzz = require('./fizzbuzz');

test('fizzbuzz 21', () => {
    expect(fizzbuzz(20)).toEqual([
        'fizzbuzz', '1', '2', 'fizz', '4', 'buzz', 'fizz', '7', '8',
        'fizz', 'buzz', '11', 'fizz', '13', '14', 'fizzbuzz',
        '16', '17', 'fizz', '19', 'buzz'
    ]);
});