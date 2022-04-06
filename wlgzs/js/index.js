// //禁止鼠标右键
// document.oncontextmenu = function(){
//     event.returnValue = false;
// }
// //禁止键盘crtl和shift和f12
// function lock(){ 
//     if(event.shiftKey) {
//         event.keyCode = 0;
//         event.returnValue = false;
//     } 
//     if(event.ctrlKey) {
//         event.keyCode = 0;
//         event.returnValue = false;
//     }
//     if(event.altKey) {
//         event.keyCode = 0;
//         event.returnValue = false;
//     }
//     if (window.event && window.event.keyCode == 123) {
//         //alert("F12被禁用");
//         event.keyCode = 0;
//         event.returnValue = false;
//     }
//     if (window.event && window.event.keyCode == 13) {
//         window.event.keyCode = 505;
//     }
// }
// document.onkeydown=lock; 