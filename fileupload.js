document.getElementById('msgfile').addEventListener('change', (e)=>{
  var date = new Date()
    const file = e.target.files[0];
	  const reader = new FileReader();
	  reader.onloadend = () => {
		const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        
    let checkoutemail = document.getElementById("email")
    var mycolor = localStorage.getItem(`${checkoutemail.value}.color`);
    var user_name1 = localStorage.getItem(`${checkoutemail.value}.username`);
    let user_name2 = user_name1.replace(/</g, "&lt");
    let myname = user_name2.replace(/>/g, "&gt;");

    let tosend = document.getElementById("msgmsg");
    var my_src = localStorage.getItem(`${checkoutemail.value}.avatar`);
    let my_avatar = `<img src="${my_src}" style="width:20px;height: 20px;border-radius: 50%;position: absolute;">`
    let my_message = `<b>${my_avatar} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="${mycolor}">${myname}</font></b><font size=1 color="#7c7c7c"><b>&nbsp;&nbsp;${date.toLocaleTimeString()}</b></font><div class="sentmessage" style="background-color:#313131;min-width:30px;max-width:300px;margin-left: 2%;word-wrap: break-word;border-radius: 15px;"><p style="padding:3%;">`
    let my_end = `<br></div><br>`
    
    let message = `<img height="270" width="270" src="data:image/png;base64,${base64String}">`

    let data = localStorage.getItem('alldata')
    let gonemsg = `${my_message} ${message}${my_end}`
    document.getElementById("msghere").value = ""
    tosend.innerHTML += `${gonemsg}`
    localStorage.setItem('alldata', data+`${gonemsg}`)
    scroll()

	  };
      reader.readAsDataURL(file);
  })