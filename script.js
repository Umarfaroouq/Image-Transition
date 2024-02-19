// Select elements
var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

// Set originalImg width
originalImg.style.width = imgBox.offsetWidth + "px";

// Calculate left space
var leftSpace = imgBox.offsetLeft;

// Mousemove event
imgBox.addEventListener("mousemove", function(e) {
  var boxWidth = (e.pageX - leftSpace) + "px"; 
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
});
