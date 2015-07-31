console.log('test/**/index.js');

var tests =
    {
      'simple':
          'a a a a a b b b c d',

      'lorem':
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam' +
          ' non euismod nulla. In mattis ex at auctor pellentesque.' +
          ' Interdum et malesuada fames ac ante ipsum primis in' +
          ' faucibus. Quisque quis lectus molestie, placerat neque a,' +
          ' sagittis sem. Integer id sem id tortor dignissim vehicula.' +
          ' Integer efficitur, odio eget efficitur rutrum.'
    };


// Input to DTMC transformation matrix with
// https://github.com/NathanEpstein/stochastic
var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var lettersFrequency = [8.167, 1.492, 2.782, 4.253, 12.702, 2.228,
  2.015, 6.094, 6.966, 0.153, 0.772, 4.025,
  2.406, 6.749, 7.507, 1.929, 0.095, 5.987,
  6.327, 9.056, 2.758, 0.978, 2.361, 0.150,
  1.974, 0.074];
