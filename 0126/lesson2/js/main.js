$(function(){
	let $ele=$('strong');//変数名なので名前は自由だがわかりやすく$
  $('.image').on('mouseover',function(){
    //$(this).find('strong').stop(true).animate({opacity:1},400);
    $ele.stop(true).animate({opacity:1,left:'0%'},400);
  })
  .on('mouseout',function(){
    //$(this).find('strong').stop(true).animate({opacity:0},400);
    $ele.stop(true).animate({opacity:0,left:'-100%'},400);
  });
});
