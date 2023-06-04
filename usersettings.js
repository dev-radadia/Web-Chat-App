var modal1 = document.getElementById("user_settings");
  
  var btn1 = document.getElementById("user_set");
  
  var span1 = document.getElementsByClassName("user_close")[0];
  
  btn1.onclick = function() {
    modal1.style.display = "block";
  }
  
  span1.onclick = function() {
    modal1.style.display = "none";
  }

  window.onclick = function(eventoookkk) {
    if (eventoookkk.target == modal1) {
      modal1.style.display = "none";
    }
  }