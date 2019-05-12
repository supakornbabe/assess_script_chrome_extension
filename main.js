var elementCollection = new Array();
var allElements = document.getElementsByTagName("*");
for (var i = 0; i < allElements.length; i++) {
  if (
    allElements[i].id[0] == "c" &&
    allElements[i].id[allElements[i].id.length - 1] == "4"
  )
    document.getElementById(allElements[i].id).checked = true;
}
