// dependency: frequency.js, test/**/index.js

console.log('index.js');

var processText = function() {
  document.getElementById('output').innerHTML = JSON
      .stringify(
      frequency(
                document.getElementById('input').value
      ));
};
