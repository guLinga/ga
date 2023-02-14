//禁止浏览器默认右键菜单
document.oncontextmenu = function (event) {
    event.preventDefault();
};

//禁止鼠标右键
document.oncontextmenu = function () {
    event.returnValue = false;
}

//禁止copy
document.oncopy = function (event) {
    if (window.event) {
        event = window.event;
    }
    try {
        var the = event.srcElement;
        if (
            !((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') || the.tagName == 'TEXTAREA')
        ) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
};
//禁止通过F12来打开
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 123) {
        e.returnValue = false;
        return false;
    }
    if (e.shiftKey) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            event.keyCode = 0;
            e.returnValue = false;
        }
    }
};

