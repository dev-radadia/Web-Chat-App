function userdone(){

    let mail = document.getElementById('email')

    let avatar = document.getElementById('useravatar')
    localStorage.setItem(`${mail.value}.avatar`, `${avatar.src}`)

    let color = document.getElementById('user_color')
    localStorage.setItem(`${mail.value}.color`, `${color.value}`)

    document.getElementById("user_settings").style.display = "none"
}