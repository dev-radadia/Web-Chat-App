
setInterval(function(){
    let done = localStorage.getItem('alldata')
    document.getElementById('msgmsg').innerHTML = done
}, 500)