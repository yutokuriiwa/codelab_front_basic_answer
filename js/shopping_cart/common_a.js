'use strict';
(function () {
  // 仕様
  // ショッピングカートに入った商品の合計を求めます。
  // 商品はタブレット(10,000円)とパソコン(50,000円)の2つです。
  // 計算ボタンをクリックした時に小計、税額、合計を求めてください。
  // 求めるものは以下の3つです。
  // 小計･･･商品の価格と数量の合計
  // 税額･･小計の金額に対して発生する消費税
  // 合計･･･小計と消費税を足した値

  //ヒント
  // HTMLから取得した値は常に文字列になります。JSで計算するには文字列→数値に変換する必要があります。

  // 使いそうな変数を宣言。必要に応じて後から追加する
  var pc = document.getElementById('pc');
  var tablet = document.getElementById('tablet');
  var btn = document.getElementById('btn');
  var subtotal = document.getElementById('subtotal');
  var tax = document.getElementById('tax');
  var total = document.getElementById('total');
  // 定数は全て大文字で書くのが一般的です。
  var TAXRATE = 10;

  function calcItem(pcCount,tabletCount) {
    var pcPrice = document.getElementById('pcPrice').textContent;
    var tabletPrice = document.getElementById('tabletPrice').textContent;
    pcPrice = parseInt(pcPrice);
    tabletPrice = parseInt(tabletPrice);
    // 小計を計算
    var subtotalAmount = pcCount * pcPrice + tabletCount * tabletPrice;
    // 税額を計算
    var taxAmount = subtotalAmount * (TAXRATE / 100);
    // 小計の計算結果を表示
    subtotal.textContent = subtotalAmount;
    // 税額の計算結果を表示
    tax.textContent =  taxAmount;
    // 合計の計算結果を表示
    total.textContent = subtotalAmount + taxAmount;
  }

  // 計算ボタンをクリックしたとき
  btn.addEventListener('click', function () {
    var num;
    // パソコンの選択しているoptionのインデックス番号を取得(0~4)
    num = pc.selectedIndex;
    // 値を取得し文字列から数値に変換
    var pcCount = parseInt(pc[num].value);
    // タブレットの選択しているoptionのインデックス番号を取得(0~4)
    num = tablet.selectedIndex;
    // 値を取得し文字列から数値に変換
    var tabletCount = parseInt(tablet[num].value);
    // calcItem関数を実行
    calcItem(pcCount, tabletCount);
  });
}());
