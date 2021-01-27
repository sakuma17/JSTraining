$(function(){
  $('.slider').each(function(){
    var $slider=$(this);
    var $slideContainer=$slider.find('.slideContainer');
    var $slides=$slideContainer.find('img');
    var index=0;
    //追加
    var id;

    $slides.each(function(i){
      $(this).css({left:i*100+"%"});
    });

    //関数として定義する
    function startInterval(){
      //setIntervalの戻り値をとると、その戻り値を使用して止めることができる
      id=setInterval(function(){
        $slideContainer.animate({left:-100*(++index%$slides.length)+'%'},500,'easeInOutExpo');
      },3000);
    }
    //イベント登録(解説あり）
    $slider.on({
      mouseenter:function(){clearInterval(id);},
      mouseleave:startInterval
    });
    //開始
    startInterval();
  });
});

