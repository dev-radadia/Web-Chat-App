function allstickers(hi){
    var date = new Date()
    let checkoutemailhihihihihi = document.getElementById("email")
    var mycolorhihihihihi = localStorage.getItem(`${checkoutemailhihihihihi.value}.color`);
    var user_name1hihihihihi = localStorage.getItem(`${checkoutemailhihihihihi.value}.username`);
    let user_name2hihihihihi = user_name1hihihihihi.replace(/</g, "&lt");
    let mynamehihihihihi = user_name2hihihihihi.replace(/>/g, "&gt;");

    let tosendhihihihihi = document.getElementById("msgmsg");
    var my_srchihihihihi = localStorage.getItem(`${checkoutemailhihihihihi.value}.avatar`);
    let my_avatarhihihihihi = `<img src="${my_srchihihihihi}" style="width:20px;height: 20px;border-radius: 50%;position: absolute;">`
    let my_messagehihihihihi = `<b>${my_avatarhihihihihi} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="${mycolorhihihihihi}">${mynamehihihihihi}</font></b><font size=1 color="#7c7c7c"><b>&nbsp;&nbsp;${date.toLocaleTimeString()}</b></font><div class="sentmessage" style="background-color:#313131;min-width:30px;max-width:200px;margin-left: 2%;word-wrap: break-word;border-radius: 15px;"><p style="padding:3%;">`
    let my_endhihihihihi = `<br></div><br>`
    
    let messagehihihihihi = `<img height="170" width="170" src="${hi.value}">`

    let datahihihihihi = localStorage.getItem('alldata')
    let gonemsghihihihihi = `${my_messagehihihihihi} ${messagehihihihihi}${my_endhihihihihi}`
    tosendhihihihihi.innerHTML += `${gonemsghihihihihi}`
    localStorage.setItem('alldata', datahihihihihi+`${gonemsghihihihihi}`)
    scroll()
}