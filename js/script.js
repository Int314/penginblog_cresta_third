$(function () {
  //キービジュアルの画像の高さ
  let kvImgHeight;
  //ファーストビューの高さ（黒背景）
  let fvBgHeight;

  $(window).on("load scroll resize", function () {
    //キービジュアルの画像の高さ
    kvImgHeight = $(".kv-wrapper").outerHeight();
    //ファーストビューの高さ（黒背景）
    fvBgHeight = $(".fv").outerHeight();

    //サイトロゴ
    $siteTitle = $('.site-title');
    if ($(window).scrollTop() < kvImgHeight - ($siteTitle.outerHeight() + $siteTitle.position().top)) {
      //メインビジュアル内
      $siteTitle.removeClass('black');
    } else {
      //メインビジュアルより下までスクロールされた
      $siteTitle.addClass('black');
    }

    //バーガーボタン
    $burgerBtn = $('.burger-btn');
    if ($(window).scrollTop() < fvBgHeight - ($burgerBtn.outerHeight() + $burgerBtn.position().top)) {
      //メインビジュアル内
      $burgerBtn.removeClass('black');
    } else {
      //メインビジュアルより下までスクロールされた
      $burgerBtn.addClass('black');
    }
  });

  //ハンバーガーボタンクリック
  $(".burger-btn").click(function (e) {
    $(".bar").toggleClass("cross");
    $(".header-nav").toggleClass("open");
    $(".burger-musk").fadeToggle(300);
    $("body").toggleClass("noscroll");
    if ($(window).scrollTop() > fvBgHeight - ($burgerBtn.outerHeight() + $burgerBtn.position().top)) {
      $(this).toggleClass('black');
    }
  });
});
