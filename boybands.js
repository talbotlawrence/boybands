var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var loopCount = 5;
var currentBand = "";
var currentVeggie = "";

var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");

// Start looping//////////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < loopCount; i += 1) {

  currentBand = bands[i];
  var listBand = '<li>' + currentBand + '</li>';  //this feels wrong!!!!
  bandElement.innerHTML += listBand + '<br>'

  currentVeggie = vegetables[i];
  var listVeggie = '<li>' + currentVeggie + '</li>';  
  veggieElement.innerHTML += listVeggie + '<br>'
};

// document.getElementById('foo').innerHTML = a + m + b;
// document.getElementById('foo').innerHTML = a + m + b;