document.getElementById('signup_form').onsubmit = function(){
let mail = document.getElementById('email')
let username = document.getElementById('username')
let password = document.getElementById('password')
let password1 = document.getElementById('password1')
let error = document.getElementById('error')
let checkemail = localStorage.getItem(`${mail.value}`)
let checkusername = localStorage.getItem(`${username.value}`)

if(!mail.value.includes('@')){
error.innerHTML = "Please provide a valid mail address"
return false
}

else if(username.value.length >10){
error.innerHTML = "Your Username cannot have more than 10 characters"
return false
}

else if(password.value.length < 8){
    error.innerHTML = "Your password should have 8 characters or more"
    return false
}

else if(password.value != password1.value){
    error.innerHTML = "Confirmed password is not correct"
    return false
}

else if(checkemail){
    error.innerHTML = "This Email is already taken"
    return false
}

else if(checkusername){
    error.innerHTML = "This Username is already taken"
    return false
}

else{
localStorage.setItem(`${mail.value}`, `${password.value}`)
localStorage.setItem(`${mail.value}.username`, `${username.value}`)
localStorage.setItem(`${mail.value}.color`, `#ffffff`)
localStorage.setItem(`${mail.value}.avatar`, `https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png`)
localStorage.setItem(`${username.value}`, `yes`)

let div = document.getElementById("succesisthebestway");
div.style.opacity ="0"
div.style.display = "initial";
setTimeout(function(){
    div.style.opacity ="0.1"
}, 100)
setTimeout(function(){
    div.style.opacity ="0.2"
}, 200)
setTimeout(function(){
    div.style.opacity ="0.35"
}, 300)
setTimeout(function(){
    div.style.opacity ="0.5"
}, 400)
setTimeout(function(){
    div.style.opacity ="0.75"
}, 500)
setTimeout(function(){
    div.style.opacity ="1"
}, 600)
setTimeout(function(){
    window.location.href='../index.html'
}, 5000)
    return false
}

}


var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}