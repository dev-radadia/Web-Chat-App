var input = document.getElementById("msghere");
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13 && !event.shiftKey) {
   event.preventDefault();
   document.getElementById("msg_send").click();
  }
  else if (event.keyCode === 13 && event.shiftKey){
    var checkenter = document.getElementById('msghere').value;
    if(!checkenter.length){
      event.preventDefault();
    }
  }
});