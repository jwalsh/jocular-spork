console.log('index.js');

var frequency = function(text) {
  var result = text
      .split(' ')
      .reduce(function(p, c, i) {
                p[c] ? p[c]++ : p[c] = 1;
                return p;
      }, {});
  return result;
};

var test = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam' +
        ' non euismod nulla. In mattis ex at auctor pellentesque.' +
        ' Interdum et malesuada fames ac ante ipsum primis in' +
        ' faucibus. Quisque quis lectus molestie, placerat neque a,' +
        ' sagittis sem. Integer id sem id tortor dignissim vehicula.' +
        ' Integer efficitur, odio eget efficitur rutrum.';

console.log(frequency(test));
