$(function () {
  //1枚目のパネルを除いて非表示にする
  $('#accordion > dd:gt(0)').hide();
  $('#accordion > dt').on('click', function () {
    // 既にメニューが開いていれば、開閉アクションを実行しない
    if ($('+dd', this).css('display') == 'none') {
      // 全てのメニューを閉じる slideUpメソッド
      $('#accordion > dd').slideUp(300);
      // 選択したメニューを開く
      // thisとは、$('#accordion > dt')でクリックされた要素を示している
      // thisとしないと、全てのメニューが開いてしまう
      // $(param1,param2)と書くと、param2の要素の隣にparam1がある場合という指定となる
      // ここではthis=#accordion > dtなので、#accordion > dt + ddという意味
      $('+dd', this).slideToggle(300);
    }
  });
});
