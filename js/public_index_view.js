
$(function () {
	//解决ie中min-height的100%占屏问题
	//获取窗口高度
	var window_height=$(document).height();
	//得到应该显示的高度
		var min_height=window_height-114;
	//设置左右两个模块的高度
		$('#tab_list').height(min_height);
		$('#context_show').height(min_height);
	//});
	$('#tab_list li').first().addClass('li_active');
	//console.log($('#tab_list li').first());
	//侧边栏切换效果
	$("#tab_list li a").click(function(e){
		e.preventDefault();
		//实现文字样式切换效果
		$(this).parent().addClass('li_active').siblings('.li_active').removeClass('li_active');
		//点击换背景图标
		var img=$(this).children().first();
		var src=img.attr('src');
		var pre=src.split('_')[0];
		var i=src.split('_')[1].split('.')[0];
		i==1?i++:i;
		var url=pre+'_'+i+'.png';
		img.attr('src',url);
		//切换未激活的图片为_1.png
		var silbimg=$(this).parent().siblings().not('.li_active').find('img');
		$.each(silbimg,function (i,n) {
			var prev=$(n).attr('src').split('_')[0];
			var url1=prev+'_'+1+'.png';
			$(n).attr('src',url1);
		});
	});
});