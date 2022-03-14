(function(){
	let article = document.querySelector('.article')
	$.ajax({
		type:"get", //使用get方式
		url: "json/index.json", //json文件相对于这个HTML的路径
		dataType:"json",
		success:function(data) {
			//这个data就是json数据
			for(let i=0;i<data.data.length;i++){
				let msg = data.data[i]
				// 图片API
				// https://api.9jojo.cn/acgpic/?rand=812
				// https://www.dmoe.cc/random.php
				article.innerHTML+=`
				<a class="post" href="templates/content.html?article=${i}" data-pjax-state="">
					<div class="mdui-card index-card mdui-hoverable">
						<div class="mdui-card-media index-img-media">
							<div class="index-img entered loaded" data-bg="https://api.9jojo.cn/acgpic/?rand=812"
								data-ll-status="loaded"
								style="background-image: url('https://api.9jojo.cn/acgpic/?rand=${i+Math.ceil(Math.random()*100)}');"></div>
							<div class="index-card-filter"></div>
							<div class="mdui-card-media-covered">
								<div class="mdui-card-primary index-primary">
									<div class="mdui-card-primary-title">${msg.title}</div>
									<div class="mdui-card-primary-subtitle index-info">${msg.time}</div>
									<div class="mdui-card-primary-subtitle index-subtitle">
										${msg.content}
									</div>
								</div>
							</div>
						</div>
					</div>
				</a>
			`
			}
			article.innerHTML+=``
		},
		error:function() {
			console.log('请求失败');
		}
	})
})();