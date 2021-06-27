let signInInput=document.getElementsByClassName("signInInput");
let signInBtn=document.getElementsByClassName("signInBtn");
signInBtn[0].onclick=function(){
    if(signInInput[0].value=="202"){
        window.location.href="template/INFORMATION TECHNOLOGY 202.html";
    }
}
signInBtn[1].onclick=function(){
    if(signInInput[1].value=="1514"){
        window.location.href="template/LOVE.html";
    }
}
