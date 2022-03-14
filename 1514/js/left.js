function left(){
    let mdui_btn = document.querySelectorAll('.mdui-btn')[0]
    let mdui_drawer_full_height = document.querySelector('.mdui-drawer-full-height')
    let mdui_theme_primary_blue = document.querySelector('.mdui-theme-primary-blue')
    let body = document.body
    mdui_btn.onclick=function(){
        mdui_drawer_full_height.className = 'mdui-drawer mdui-drawer-full-height drawer mdui-drawer-open'
        mdui_theme_primary_blue.className = 'mdui-theme-primary-blue mdui-theme-accent-blue mdui-loaded mdui-locked'
        mdui_theme_primary_blue.style.width='1519.2px'
        body.innerHTML+=`
            <div class="mdui-overlay mdui-overlay-show" style="z-index: 2000;"></div>
        `
        let mdui_overlay = document.querySelector('.mdui-overlay')
        let mdui = document.querySelector('.mdui-drawer-full-height')
        mdui_overlay.onclick=function(){
            mdui.className = 'mdui-drawer mdui-drawer-full-height drawer mdui-drawer-close'
            mdui_theme_primary_blue.className = 'mdui-theme-primary-blue mdui-theme-accent-blue mdui-loaded'
            mdui_theme_primary_blue.style.width=''
            mdui_overlay.parentNode.removeChild(mdui_overlay)
            left()
        }
    }
}
left()