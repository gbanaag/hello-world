var compostPics = [
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fpotato.png?v=1563537057669",
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fbanana.png?v=1563539703387",
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fleaf.png?v=1563559938963",
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fcompostable.png?v=1563559982864"
]


var recyclingPics = [
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fcrumpled-paper.png?v=1563533885141",
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fmilk.png?v=1563559582657",
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fcardboard.png?v=1563560066676",
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fcardboard.png?v=1563560066676"
  
]

var landfillPics = [
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fchips.png?v=1563537101491",
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Flightbulb.png?v=1563559855940",
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fdiaper.png?v=1563560182523",
  "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fbattery.png?v=1563560268731"

]







var b = 0;
    b++;
function dragStart001(event) {
    event.dataTransfer.setData("choice001", event.target.id);
}

function dragStart002(event) {
    event.dataTransfer.setData("choice002", event.target.id);
}

function dragStart003(event) {
    event.dataTransfer.setData("choice003", event.target.id);
}

function allowDrop001(event) {
    event.preventDefault();
}

function allowDrop002(event) {
    event.preventDefault();
}

function allowDrop003(event) {
    event.preventDefault();
}


function drop006(event) {
    var data = event.dataTransfer.getData("choice001");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("score001").innerHTML = b++;
    document.getElementById("place001").src = "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fpotato.png?v=1563537057669";
}

function drop007(event) {
    var data = event.dataTransfer.getData("choice002");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("score001").innerHTML = b++;
    document.getElementById("place002").src = "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fcrumpled-paper.png?v=1563533885141";
}

function drop008(event) {
    var data = event.dataTransfer.getData("choice003");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("score001").innerHTML = b++;
    document.getElementById("place003").src = "https://cdn.glitch.com/0ba24fc6-7307-4602-9375-068b47861f35%2Fchips.png?v=1563537101491";
}





function drop001(event) {
    event.preventDefault();
}

function drop002(event) {
    event.preventDefault();
}

function drop003(event) {
    event.preventDefault();
}



function submit001() {
if (b >= 3) {
  document.getElementById("message001").innerHTML = "Sorted!";
} 
}

////////////////////

function changeTrash() {
  changeCompost(randNum(compostPics));
  changeRecycling(randNum(recyclingPics));
  changeLandfill(randNum(landfillPics));
}


//Math
function randNum(array) {
  var randDeci = Math.random();
  var randBig = randDeci * array.length;
  var random = Math.floor(randBig);
  return random
}

function changeCompost(someNum) {
  var compostImg = document.getElementById("target001");
  compostImg.src = compostPics[someNum];
}

function changeRecycling(someNum) {
    var recycleImg = document.getElementById("target002");
    recycleImg.src = recyclingPics[someNum];
};


function changeLandfill(someNum) {
    var landfillImg = document.getElementById("target003");
    landfillImg.src = landfillPics[someNum];
};