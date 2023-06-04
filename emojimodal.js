var modal123456789 = document.getElementById("EmyModal");

// Get the button that opens the modal
var btn123456789 = document.getElementById("emojiok_button");

// Get the <span> element that closes the modal
var span123456789 = document.getElementsByClassName("Eclose")[0];

// When the user clicks the button, open the modal 
btn123456789.onclick = function() {
  modal123456789.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span123456789.onclick = function() {
  modal123456789.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event123456789) {
  if (event123456789.target == modal123456789) {
    modal123456789.style.display = "none";
  }
}