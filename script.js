var myinput = document.getElementById("myinput");
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");
var eye = document.getElementById("eye");

eye.addEventListener("click", ()=>{
    if (myinput.type === 'password') {
        myinput.type = "text";
        hide1.style.display = "block";
        hide2.style.display = "none";
    }else{
        myinput.type = "password";
        hide1.style.display = "none";
        hide2.style.display = "block";
    }
});