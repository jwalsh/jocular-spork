// dependency: frequency.js, test/**/index.js
console.log('index.js');
google.load('visualization', '1', {packages: ['corechart', 'bar']});


/**
 * Acquire user text input and render
 */
var processText = function() {
  var frequencies = frequency(
      document.getElementById('input').value
      );
  document.getElementById('output').innerHTML = JSON
      .stringify(frequencies)
      .replace(/],/g, '],\n');
  chartFrequency(frequencies);
};


/**
 * Chart display support
 */
var chartFrequency = function(frequencies) {
  var data = google.visualization.arrayToDataTable(
      [['Word', 'Count']].concat(frequencies)
      );
  var options = {
    chartArea: {width: '50%'}
  };
  var chart = new google.visualization.BarChart(
      document.getElementById('chart'));
  chart.draw(data, options);
};
