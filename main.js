var elementCollection = new Array();
var allElements = document.getElementsByTagName("*");

function getRandomIntWithFloor(max,floor) {
  return Math.floor(Math.random() * Math.floor(max)) + floor;
}

for (var i = 0; i < allElements.length; i++) {
  if (
    allElements[i].id[0] == "c" &&
    allElements[i].id[allElements[i].id.length - 1] == getRandomIntWithFloor(3,3).toString()
  )
    document.getElementById(allElements[i].id).checked = true;
}
