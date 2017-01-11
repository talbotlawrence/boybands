var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
bandElement.innerHTML = "Hi there you da man!!";
console.log("bandElement", bandElement);

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");
console.log("veggieElement", veggieElement);

// Start looping
for (var i = 0; i < loopCount; i += 1) {

  // Add the band names into the correct <div>
  currentBand = bands[i];
  var listBand = document.write('<div>' + currentBand + '</div');  //this feels wrong!!!!  there must be a built in method to accomplish this task


  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[i];

};

var addBandToList = document.write();

var addVeggieToList = document.write();