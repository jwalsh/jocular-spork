console.log('frequency.js');

var frequency = function(text) {
  var result = text
          .split(' ')
          .filter(function(v) {
        return v;
          })
          .reduce(function(p, c, i) {
        console.log(p[c]);
        p[c] = p[c] ? ++p[c] : 1;
        return p;
      }, {});
  return result;
};
