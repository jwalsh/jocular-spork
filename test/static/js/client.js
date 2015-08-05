var tests = require('./index.js');

console.log(tests);
var populateInput = function(test) {
    document.getElementById('input').value = tests[test];
};

var examples = document.getElementById('examples');
var exampleMarkup = '<b>Examples</b>: ';
for (var t in tests) {
    console.log(t);
    exampleMarkup += '<a onclick="populateInput("' + t + '");">' + t + '</a>';
}
examples.innerHTML = exampleMarkup;
