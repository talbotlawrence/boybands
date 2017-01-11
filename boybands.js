var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var loopCount = 5;
var currentBand = "";
var currentVeggie = "";

var bandElement = document.getElementById("boy-bands");
// bandElement.innerHTML = "Hi there you da man!!";
// console.log("bandElement", bandElement);

var veggieElement = document.getElementById("vegetables");
// console.log("veggieElement", veggieElement);

// Start looping//////////////////////////////////////////////////////////////////////////////////
for (var i = 0; i < loopCount; i += 1) {

  // Add the band names into the correct <div>
  currentBand = bands[i];
  // var listBand = '<li>' + currentBand + '</li>';  //this feels wrong!!!!  there must be a built in method to accomplish this task
  bandElement.innerHTML += listBand

  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[i];
  // var listVeggie = '<li>' + currentVeggie + '</li>';  
  veggieElement.innerHTML += listVeggie
};

// var addBandToList = document.write();

// var addVeggieToList = document.write();