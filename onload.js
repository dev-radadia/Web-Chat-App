function scroll(){
    var scroll = document.getElementById('msgmsg');
        scroll.scrollTop = scroll.scrollHeight;
        scroll.animate({scrollTop: scroll.scrollHeight});
}

function getalldata_and_scroll(){

    let o = `0.3`
    let d = true

    scroll()
    let ok = document.getElementById('msghere');
    ok.disabled = d;
    ok.style.opacity = `${o}`

    let ok1 = document.getElementById('msg_send');
    ok1.disabled = d;
    ok1.style.opacity = `${o}`

    let ok3 = document.getElementById('user_set');
    ok3.disabled = d;
    ok3.style.opacity = `${o}`

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
}