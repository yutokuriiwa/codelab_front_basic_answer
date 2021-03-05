$(function () {
  // ページトップの要素を取得
  $pageTop = $('#pageTop');


  $pageTop.hide();
  // ウィンドウがスクロールされたときに実行される処理
  $(window).on('load scroll',function () {
    // console.log($(window).scrollTop());
    // ウィンドウが150ピクセル以上スクロールされたらページトップボタンを表示する
    if ($(window).scrollTop() > 150) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  // ページトップボタンをクリックしたらイベント発生
  $pageTop.on('click', function () {
    // body、htmlに対してアニメーション実行 top0に位置へ移動する
    // animate関数(変化させたい要素、動作時間(ミリ秒指定))
    $('body,html').animate({ scrollTop: 0 }, 600);
    // aタグ本来の機能である、クリックした時にページ移動する処理を実行させない
    return false;
  });
});
