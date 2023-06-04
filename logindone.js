document.getElementById('loginformokok').onsubmit = function(){

try{
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let error = document.getElementById('login_error')
    let getdata = localStorage.getItem(`${email.value}`)

    if(!getdata){
    error.innerHTML = "<b>Incorrect Email or Password</b>"
    }

    else if(getdata !== `${password.value}`){
    error.innerHTML = "<b>Incorrect Email or Password</b>"
    }

    else{

    document.getElementById("login_form").style.display = "none"
    error.innerHTML = ""
    let o = `1`
    let d = false
    
    scroll()

    let img = document.getElementById('useravatar')
    let av = localStorage.getItem(`${email.value}.avatar`)
    img.src = `${av}`

    let colorishere = document.getElementById('user_color')
    let colorokokok = localStorage.getItem(`${email.value}.color`)
    colorishere.value = `${colorokokok}`

    let mailishereokok = document.getElementById("userhasamailtoo")
    let seemailherenowoksee = `${email.value}`
    mailishereokok.innerHTML = `${seemailherenowoksee}`


    let usernameishereyar = document.getElementById("userhasanametoo")
    let userishereyar = localStorage.getItem(`${email.value}.username`)
    usernameishereyar.innerHTML = `${userishereyar}`

    let ok = document.getElementById('msghere');
    ok.disabled = d;
    ok.style.opacity = `${o}`

    let ok1 = document.getElementById('msg_send');
    ok1.disabled = d;
    ok1.style.opacity = `${o}`

    let ok2 = document.getElementById('user_set');
    ok2.disabled = d;
    ok2.style.opacity = `${o}`

    let ok8 = document.getElementById('msg_file_upload');
    ok8.disabled = d;
    ok8.style.opacity = `${o}`

    let ok9 = document.getElementById('msgfile');
    ok9.disabled = d;
    ok9.style.opacity = `${o}`

    let ok10 = document.getElementById('emojiok_button');
    ok10.disabled = d;
    ok10.style.opacity = `${o}`

    let ok12 = document.getElementById("logout")
    ok12.disabled = d;
    ok12.style.opacity = `${o}`

    let ok13 = document.getElementById("login_button")
    ok13.disabled = true
    ok13.style.opacity = `0.3`
    }

    return false
}
catch(err){
    alert(err.message)
}
}