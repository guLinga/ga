let signInInput=document.getElementsByClassName("signInInput");
let signInBtn=document.getElementsByClassName("signInBtn");
signInBtn[0].onclick=function(){
    if(signInInput[0].value=="202"){
        window.location.href="template/INFORMATION TECHNOLOGY 202.html";
        signInInput[0].value="";
    }else{
        signInInput[0].style.border="1px solid red";
        signInInput[0].value="";
        signInInput[0].placeholder="密码错误";
    }
}
signInBtn[1].onclick=function(){
    if(signInInput[1].value=="1514"){
        window.location.href="template/LOVE.html";
        signInInput[1].value="";
    }else{
        signInInput[1].style.border="1px solid red";
        signInInput[1].value="";
        signInInput[1].placeholder="密码错误";
    }
}
signInBtn[2].onclick=function(){
    if(signInInput[2].value=="1964"){
        window.location.href="template/LOVE.html";
        signInInput[2].value="";
    }else{
        signInInput[2].style.border="1px solid red";
        signInInput[2].value="";
        signInInput[2].placeholder="密码错误";
    }
}
for(let i=0;i<signInInput.length;i++){
    signInInput[i].onfocus=function(){
        signInInput[i].style.border="";
        signInInput[i].value="";
        signInInput[i].placeholder="请输入密码";
    }
}
