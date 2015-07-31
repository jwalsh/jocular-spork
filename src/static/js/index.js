// dependency: frequency.js, test/**/index.js

console.log('index.js');

google.load('visualization', '1', {packages: ['corechart', 'bar']});

var processText = function() {
  var frequencies = frequency(
      document.getElementById('input').value
      );
  document.getElementById('output').innerHTML = JSON
      .stringify(frequencies)
      .replace(/,/g, ',\n');
  showFrequency(frequencies);
};

var showFrequency = function(frequencies) {
  var dist = Object.keys(frequencies).map(function(e, i, c) {
    return [e, frequencies[e]];
  });
  console.log(JSON.stringify(dist));
  var data = google.visualization.arrayToDataTable(
      [['Word', 'Count']].concat(dist)
      );
  var options = {
    chartArea: {width: '50%'}
  };
  var chart = new google.visualization.BarChart(
      document.getElementById('chart'));
  chart.draw(data, options);
};
