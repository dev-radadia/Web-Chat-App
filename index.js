function scroll(){
    var scroll = document.getElementById('msgmsg');
    scroll.scrollTop = scroll.scrollHeight;
    scroll.animate({scrollTop: scroll.scrollHeight});
}


function fullyscrolldown(){
    scroll()
}

function send() { 
var date = new Date()
try {
let data = localStorage.getItem('alldata')
let tosend = document.getElementById("msgmsg");
let checkoutemail = document.getElementById("email")
var user_name1 = localStorage.getItem(`${checkoutemail.value}.username`);
let user_name2 = user_name1.replace(/</g, "&lt");
let myname = user_name2.replace(/>/g, "&gt;");

var mycolor = localStorage.getItem(`${checkoutemail.value}.color`);

var message1 = document.getElementById("msghere").value;
var messagee = message1.replace(/>/g, "&gt;");
let messageeee = messagee.replace(/>/g, "&lt");
let messageok = messageeee.replace(/(\r\n|\n)/g, "<br/>")


    var textokok = messageok
	  var expok = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	  var text1okok= textokok.replace(expok, `<a href='$1'  onclick="window.open(this.href); return false;">$1</a>`);
	  var exp2ok =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
      let messagehoho = text1okok.replace(exp2ok, '$1<a href="http://$2">$2</a>');
      if(messagehoho.toLowerCase().startsWith(`/e`)){
       message = messagehoho.substring(2);
      }
      else {
        message = messagehoho
       }


    var my_src = localStorage.getItem(`${checkoutemail.value}.avatar`);

    let my_avatar = `<img src="${my_src}" style="width:20px;height: 20px;border-radius: 50%;position: absolute;">`

    let bot_avatar = `<img src="https://ph-files.imgix.net/661cc8b3-c88c-483c-9011-a640c73b7a6e?auto=format" style="width:20px;height: 20px;border-radius: 50%;position: absolute;">`

    let bot_message = `<b>${bot_avatar} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color="#FF0000">R</font><font color="#ffff00">o</font><font color="#00ff00">b</font><font color="#0000ff">o</font><font color="#7f00ff">t</font>   </b><font size=1 color="#7c7c7c"><b>&nbsp;&nbsp;${date.toLocaleString()}</b></font><br><div style="background-color:#313131;max-width:300px;margin-left: 2%;margin-top: 2%;margin-right: 2%;margin-bottom: 2%;word-wrap: break-word;border-radius: 15px;"><p style="padding:3%;">`

let my_message = `<b>${my_avatar} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="${mycolor}">${myname}</font></b><font size=1 color="#7c7c7c"><b>&nbsp;&nbsp;${date.toLocaleString()}</b></font><div class="sentmessage" style="background-color:#313131;min-width:10px;max-width:400px;margin-left: 2%;word-wrap: break-word;border-radius: 15px;"><p style="padding:3%;">`
let bot_end = `</p></div><br>`
let my_end = `<br></div><br>`

var message2 = message.trim()
    var len = `${message2}`.length

    if(!len){
        document.getElementById("msghere").value = ""
        scroll()
    return
    }



    else{
        let gonemsg = `${my_message} ${message}${my_end}`
        tosend.innerHTML += gonemsg
        localStorage.setItem('alldata', data+`${gonemsg}`)
        document.getElementById("msghere").value = ""

        if(message.toLowerCase().startsWith(`hello`) || message.toLowerCase().startsWith(`hi`)){
            scroll()
            setTimeout(function(){
                let arr1 = [`Hi!`, `Hello!`, `Hey!`, `How Are You?`, `Hello Mate!`, `How Are You Doing?`, `Hi Mate!`, `Hey Mate!`, `Hello Friend!`, `Hi Friend!`, `Hey Friend!`, `What's Up?`, `Yo!`, `Namaste`]
                var arr = arr1[Math.floor(Math.random() * arr1.length)];
                let gotmsg = `${bot_message}<font color="#00ff00"><b>${arr}</b></font>${bot_end}`
                tosend.innerHTML += gotmsg
                let data = localStorage.getItem('alldata')
                localStorage.setItem('alldata', data+`${gotmsg}`)
                scroll()
            }, 1000)
        return
        }

        else if(message.toLowerCase().startsWith(`bye`)){
            scroll()
            setTimeout(function(){
                let arr1 = [`Bye!`, `Have A Nice Day!`, `We Will Meet Soon!`, `See You Soon!`, `Take Care!`, `See You Then!`, `Stay Safe!`, `See Ya!`, `Take It Easy?`]
                var arr = arr1[Math.floor(Math.random() * arr1.length)];
                let gotmsg = `${bot_message}<font color="#00ff00"><b>${arr}</b></font>${bot_end}`
                tosend.innerHTML += gotmsg
                let data = localStorage.getItem('alldata')
                localStorage.setItem('alldata', data+`${gotmsg}`)
                scroll()
            }, 1000)
        return
        }



       else if(message.toLowerCase().startsWith(`@timer`)){
            scroll()
            var duration = message.split(' ');
            var dur = parseInt(duration[1])
            if(!duration[1]){
                setTimeout(function(){
                let whooooooooo = `${bot_message}<font color="#ff0000"><b>Please provide a duration in second(s)!</b></font>${bot_end}`
                tosend.innerHTML += whooooooooo
                let data = localStorage.getItem('alldata')
                localStorage.setItem('alldata', data+`${whooooooooo}`)
                scroll()
            }, 1000)
            }
           else if(isNaN(duration[1])){
              setTimeout(function(){
                let ononononono= `${bot_message}<font color="#ff0000"><b>${duration[1]} is not a valid number!</b></font>${bot_end}`
                tosend.innerHTML += ononononono
                let data = localStorage.getItem('alldata')
                localStorage.setItem('alldata', data+`${ononononono}`)
                scroll()
            }, 1000)
            }
            else{
                setTimeout(function(){
        let timtitmti= `${bot_message}<font color="#00ff00"><b>Timer of ${duration[1]} second(s) has started!</b></font>${bot_end}`
        tosend.innerHTML += timtitmti
        let data = localStorage.getItem('alldata')
        localStorage.setItem('alldata', data+`${timtitmti}`)
        scroll()
          }, 1000)
          scroll()
        setTimeout(function(){
            alert(`Time-Over!!!\nYour Timer of ${duration[1]} second(s) is over!`)
             let mvoforkr = `${bot_message}<font color="#00ff00"><b>Time-Over!!!<br/>Your Timer of ${duration[1]} second(s) is over!</b></font>${bot_end}`
             tosend.innerHTML += mvoforkr
             let data = localStorage.getItem('alldata')
                localStorage.setItem('alldata', data+`${mvoforkr}`)
             scroll()
            }, dur*1000)
            
        }
        scroll()
        return
        }

        else if(message.toLowerCase().startsWith(`@spinner`)){
            scroll()
             setTimeout(function(){
              let fidget = [`https://uploads.scratch.mit.edu/users/avatars/23722756.png`, 
               `https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-25.jpg`, 
              `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54d263c2-8c20-41db-b84a-cd22aafd6616/dc69i6b-78578759-34fa-4242-a1c8-a2439e585a4d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTRkMjYzYzItOGMyMC00MWRiLWI4NGEtY2QyMmFhZmQ2NjE2XC9kYzY5aTZiLTc4NTc4NzU5LTM0ZmEtNDI0Mi1hMWM4LWEyNDM5ZTU4NWE0ZC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.bjsqp-Ai7a1iOmsv9GOqmCRyjDlhOYZgV8_L1jYlqLQ`,
             `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a36e39ed-2182-4fa3-af43-299e3d89d2de/db8jbxg-51f41c0c-b7ed-48f6-9128-3e5e701bfd88.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTM2ZTM5ZWQtMjE4Mi00ZmEzLWFmNDMtMjk5ZTNkODlkMmRlXC9kYjhqYnhnLTUxZjQxYzBjLWI3ZWQtNDhmNi05MTI4LTNlNWU3MDFiZmQ4OC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lC-RRl5AEyU4GPP1FMnMX8aEKDmGDtAAT5FfMTXxwj4`,
             `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54d263c2-8c20-41db-b84a-cd22aafd6616/dc69dpz-f053d78f-4a82-4ffd-b936-b2027da2ecb8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTRkMjYzYzItOGMyMC00MWRiLWI4NGEtY2QyMmFhZmQ2NjE2XC9kYzY5ZHB6LWYwNTNkNzhmLTRhODItNGZmZC1iOTM2LWIyMDI3ZGEyZWNiOC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ydVdruVj3aOCwE6rgHETbh9uqJ4oBomrF-RIQFjn0vY`,
             `https://appstickers-cdn.appadvice.com/1232290671/822597518/eac8c272e23090335809d1236bd9d036-0.gif`,
         `https://cdn.lowgif.com/small/660ce75915c55523-education-academic-aesthetic.gif`,
         `https://screenshots.gamebanana.com/img/ico/sprays/593404c44a588.gif`
         ]
                   var fidget1 = `${fidget[Math.floor(Math.random() * fidget.length)]}`
                   let fffffkkkkkkffro = `${bot_message}<img height="270" width="270" src="${fidget1}">${bot_end}`
                   tosend.innerHTML += fffffkkkkkkffro  
                   let data = localStorage.getItem('alldata')
                localStorage.setItem('alldata', data+`${fffffkkkkkkffro}`)
                   
                   scroll()
                     }, 1000)
                 return
       }

       else if(message.toLowerCase().startsWith(`@clear shlokisgreat`)){
        scroll()
              
            localStorage.setItem('alldata', "")
               scroll()
             return
   }

   else if(message.toLowerCase().startsWith(`@clear cleareverything`)){
    scroll()
          
        localStorage.clear()
           scroll()
         return
}
              
        scroll()
    }

}
catch(err){
    alert(err.message)
}
}


function av_reset(){
    let checkoutemail = document.getElementById("email")
    var image = localStorage.getItem(`${checkoutemail.value}.avatar`);
    let img = document.getElementById('useravatar')
	img.src = `${image}`
}


function clickcolor(){
    var imagooookokoke = document.getElementById('user_color');
	imagooookokoke.value = "#ffffff"
}


function allemojis(e){
    var content = document.getElementById("msghere")
    content.value += e.value
  }


function show_pass(okokokokokokokokok){
    let toshowpassokokok = document.getElementById("password")
    if(okokokokokokokokok.className === "fa fa-eye"){
        okokokokokokokokok.className = "fa fa-eye-slash";
        toshowpassokokok.type = "password";
    }
    else if(okokokokokokokokok.className === "fa fa-eye-slash"){
        okokokokokokokokok.className = "fa fa-eye";
        toshowpassokokok.type = "text";
    }
}


function logout(){
    window.open("index.html", "_self")
}