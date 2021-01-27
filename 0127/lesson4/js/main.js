$(function(){
	$('.slider').each(function(){
		let $slider=$(this);
		let $slideContainer=$slider.find('.slideContainer');
		let $slidesOrg=$slideContainer.find('img');
		let $first=$slidesOrg.eq(0).clone();
		$slideContainer.append($first);
		let $slides=$slideContainer.find('img');
		let index=0;

		$slides.each(function(i){
			$(this).css({left:i*100+'%'});
		});
		setInterval(function(){
			$slideContainer.animate({left:-100*(++index%$slides.length)+'%'},500,'easeInOutExpo',function(){
				if(index===$slides.length-1){
					index=0;
					$slideContainer.css({left:'0px'});
				}
			});
		},3000);
	});
});
