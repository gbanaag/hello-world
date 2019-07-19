// Var list!!!
  // Button. Kinda self explanatory 
  var button = document.getElementById('button');

  // How much carbon is produced per serving of meat (http://css.umich.edu/factsheets/carbon-footprint-factsheet)
  var meatType = 0;

  // How many servings of meat based on how many grams are in a serving of meat (approximately 21 grams in a serving of meat)
  var meatAmount = 0;
  // var milesCarbon = 1;
  var carbonTotal = 0;
  // var milesIn = document.getElementById('miles');
  // var milesIn = parseInt( $('#miles').val(), 10 )
  var vehicle = 0;
  var milesCarbon = 0;
  var milesProduct = 0;
  var meat = 0;
var water = 0;


// How much carbon is produced per serving of meat (http://css.umich.edu/factsheets/carbon-footprint-factsheet)
// Rounded off decimals

// Chicken produces 1.3 pounds of CO2 per serving
function setChicken() {
  meatType = 1;
}

// Beef produces 1.7 pounds of CO2 per serving
function setPork() {
  meatType = 2;
}

// Beef produces 6.6 pounds of CO2 per serving
function setBeef() {
  meatType = 7;
}

// (https://www.bbc.com/news/science-environment-46459714)
function setLamb() {
  meatType = 5;
}

////////

// Gabby's weird math!!
  // approximately 21 grams in a serving of meat (according to google, anyway)
  // meatType is multiplied by the number of servings 
  // Since the first option is 0-20 grams, 20ish grams = one serving 
  // 40 grams = 2 servings, etc. 

 $("#meat-amount1").click(function() {
    // meatAmount = 1;
     meat =  meatType * 1;
    return meat;
    });

 $("#meat-amount2").click(function() {
    // meatAmount = 2;
    meat =  meatType * 2;
    return meat;
    });

 $("#meat-amount3").click(function() {
    // meatAmount = 3;
    meat =  meatType * 3;
    return meat;
 });

 $("#meat-amount4").click(function() {
    // meatAmount = 4;
    meat =  meatType * 4;
    return meat;
    });

//////////

// Vehicle stuff

// If car is picked
 $("#car").click(function() {
    vehicle = 10;
    return vehicle;
    });

// If bus is picked
 $("#bus").click(function() {
    vehicle = 0.14;
    return vehicle;
    });

// etc.
 $("#train").click(function() {
    vehicle = 0.17;
    return vehicle;
    });

 $("#bike").click(function() {
    vehicle = 0;
    return vehicle;
    });

 $("#scooter").click(function() {
    vehicle = 0;
    return vehicle;
    });

 $("#walk").click(function() {
    vehicle = 0;
    return vehicle;
    });
//////////////

// Idk we can probs delete this
  // The average passenger vehicle emits about 404 grams of CO2 per mile
    // function calcMiles() {
    //   var miles = document.getElementById('miles');
    //   var milesCarbon = miles * vehicle;
    //   return milesCarbon
    // }

//////////////

// Determines amount of carbon based on which vehicle is picked

// function meatProduct()
//  {
//   meat =  meatType * meatAmount;
//   return meat;
// }

function mileProduct()
 {
  var miles = parseInt(document.getElementById("miles").value, 10);
  milesProduct =  vehicle * miles;
  return milesProduct;
}

$("#yes").click(function() {
  water = 0;
  return water;
})
$("#no").click(function(){
  water = 0.18;
  return water;
})
// Calculates total carbon emitted
function calcTotal() {
  carbonTotal = meat + milesProduct + water;
  return carbonTotal;
}

button.addEventListener("click", function() {
  calcTotal();
  document.getElementById('total').innerHTML = carbonTotal + " pounds of carbon!";

  if (carbonTotal < 15) {
    good();
  }  else if (carbonTotal > 25) {
    bad();
  }  else {
    okBut();
  }
})

 $("button").click(function(event){
    event.preventDefault();
  });

function bad() {
  document.getElementById('rating').innerHTML = "Not good!";
}

function okBut() {
    document.getElementById('rating').innerHTML = "Ok, but...";
}

function good() {
   document.getElementById('rating').innerHTML = "Good!";
}
