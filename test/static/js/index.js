module.exports = function () {

    console.log('test/**/index.js');

    var frequency = require('../../../src/static/js/frequency.js');
    var stoch = require('stochastic');

    // Input to DTMC transformation matrix with
    // https://github.com/NathanEpstein/stochastic
    var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lettersFrequency = [8.167, 1.492, 2.782, 4.253, 12.702, 2.228,
                            2.015, 6.094, 6.966, 0.153, 0.772, 4.025,
                            2.406, 6.749, 7.507, 1.929, 0.095, 5.987,
                            6.327, 9.056, 2.758, 0.978, 2.361, 0.150,
                            1.974, 0.074];

    // generate populated NxN matrix from 1xN scaffold
    var transitionMatrix = function(m) {
        var matrix = m
                .map(function(e, i, c) {
                    return m;
                });
        return matrix;
    };

    var m = transitionMatrix(lettersFrequency);

    var T = 1000;
    var start = 0;
    var path = true;
    var MC = stoch.CTMC(m, T, start, path);

    var simulation = Object.keys(MC)
            .map(function(e, i, c) {
                return MC[e];
            })
            .map(function(e, i, c) {
                return letters[e];
            })
            .join(' ');

    var tests = {
                'simple':
                'a a a a a b b b c d',

                'lorem':
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam' +
                    ' non euismod nulla. In mattis ex at auctor pellentesque.' +
                    ' Interdum et malesuada fames ac ante ipsum primis in' +
                    ' Integer efficitur, in et in sit odio eget efficitur' +
                    ' rutrum.',
                'letters': simulation
            };


    for (var t in tests) {
        console.log(t, frequency(tests[t]));
    }

    return tests;
};
