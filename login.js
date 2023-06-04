var modalooooooooooo = document.getElementById("login_form");
  
  var btnooooooooooooooo = document.getElementById("login_button");
  
  var spanoooooooooo = document.getElementsByClassName("login_close")[0];
  
  btnooooooooooooooo.onclick = function() {
    modalooooooooooo.style.display = "block";
  }
  
  spanoooooooooo.onclick = function() {
    modalooooooooooo.style.display = "none";
  }

  window.onclick = function(eventooooooooooooo) {
    if (eventooooooooooooo.target == modalooooooooooo) {
      modalooooooooooo.style.display = "none";
    }
  }