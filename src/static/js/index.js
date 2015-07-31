// dependency: frequency.js, test/**/index.js

console.log('index.js');


console.log(frequency(tests.simple));

var processText = function() {
  alert(1);
  document.getElementById('output').innerHTML = JSON
      .stringify(
      frequency(
                document.getElementById('input').value
      ));
};
