(function(){
    //获取文章id
    let id = window.location.search.split('=')[1]
    //标题
    let mdui_card_primary_title = document.querySelector('.mdui-card-primary-title')
    //时间
    let mdui_card_primary_subtitle = document.querySelector('.mdui-card-primary-subtitle')
    //时间长提示信息
    let error = document.querySelector('.error')
    //内容
    let mdui_typo = document.querySelector('.mdui-typo')
    //时间过长提示信息
    $.ajax({
        type:"get", //使用get方式
        url: "../json/index.json", //json文件相对于这个HTML的路径
        dataType:"json",
        success:function(data) {
            //这个data就是json数据

            //判断文章发布距离现在多少天
            let len = data.data.length
            if(id>=len){
                error.innerHTML=`
                    <div class="post-alert mdui-color-red-400 mdui-valign">
                        <i class="mdui-icon material-icons mdui-m-r-2">report</i>
                        查询不到该文章
                    </div>
                `
            }else{
                if(time(data.data[id].time)>=50){
                    error.innerHTML=`
                    <div class="post-alert mdui-color-red-400 mdui-valign">
                        <i class="mdui-icon material-icons mdui-m-r-2">report</i>
                        请注意，本文编写于 134 天前，最后修改于 134 天前，其中某些信息可能已经过时。
                    </div>
                `
                }
                //内容
                mdui_typo.innerHTML=data.data[id].content
                //时间
                mdui_card_primary_subtitle.innerHTML=data.data[id].time
                //标题
                mdui_card_primary_title.innerHTML=data.data[id].title
            }
        },
        error:function() {
            console.log('请求失败');
        }
    })
})();

function time(times) {
    // let startTime = new Date('2018-1-1'); // 开始时间
    let startTime = new Date(times); // 开始时间
    let endTime = new Date(); // 结束时间
    let usedTime = endTime - startTime; // 相差的毫秒数
    let days = Math.floor(usedTime / (24 * 3600 * 1000)); // 计算出天数
    let leavel = usedTime % (24 * 3600 * 1000); // 计算天数后剩余的时间
    let hours = Math.floor(leavel / (3600 * 1000)); // 计算剩余的小时数
    let leavel2 = leavel % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
    let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数
    // return days + '天' + hours + '时' + minutes + '分';
    return days
}
