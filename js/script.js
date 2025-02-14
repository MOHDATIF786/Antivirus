// popup
setTimeout(() => {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}, Math.floor(Math.random() * (5000 - 10000) + 10000)); // Random delay between 10-15 seconds

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
// scroll
document.getElementById("compareButton").addEventListener("click", function () {
  document
    .getElementById("compareSection")
    .scrollIntoView({ behavior: "smooth" });
});
// pop up inside pop up
function openCustomPopup() {
  document.getElementById("customPopupOverlay").style.display = "flex";
}
function closeCustomPopup() {
  document.getElementById("customPopupOverlay").style.display = "none";
}
