$(window).load(function() {
	var height = $(window).height();
	$('.top').css('height', height);
});

// ローディング画面をフェードインさせてページ遷移
$(function(){
    // リンクをクリックしたときの処理。外部リンクやページ内移動のスクロールリンクなどではフェードアウトさせたくないので少し条件を加えてる。
    $('a[href ^= "https://newstella.co.jp"]' + 'a[target != "_blank"]').click(function(){
        var url = $(this).attr('href'); // クリックされたリンクのURLを取得
        $('#js-loader').fadeIn(600);    // ローディング画面をフェードイン
        setTimeout(function(){ location.href = url; }, 800); // URLにリンクする
        return false;
    });
});
 
// ページのロードが終わった後の処理
$(window).load(function(){
  $('#js-loader').delay(300).fadeOut(400); //ローディング画面をフェードアウトさせることでメインコンテンツを表示
});
 
// ページのロードが終わらなくても10秒たったら強制的に処理を実行
$(function(){ setTimeout('stopload()', 10000); });
function stopload(){
  $('#js-loader').delay(300).fadeOut(400); //ローディング画面をフェードアウトさせることでメインコンテンツを表示
}

$(function(){
  //メニューの表示・非表示
  $('#menu').click(function(){
    $('#slide').fadeIn();
    $('#overlay').show();
  });
  $('#close, #overlay').click(function(){
    $('#slide').fadeOut();
    $('#overlay').hide();
  });

  //スクロールで表示・非表示
  var startPos = 0,winScrollTop = 0;
  $(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop < startPos) {
        $('#menu').removeClass('hide');
    } else {
        $('#menu').addClass('hide');
    }
    startPos = winScrollTop;
  });
	$('.scr').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-50;
      $('body,html').animate({scrollTop:position}, 550, 'swing');
		$('#slide, #overlay').fadeOut();
      return false;
   });
});
