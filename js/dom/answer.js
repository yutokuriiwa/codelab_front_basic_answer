'use strict';
// 例題 コンソールに数値「1」を出力してください。
// console.log(1);

// 問題1：要素の取得
// id属性txt1の要素を取得し、変数txt1に代入してください。
// 代入後、変数txt1をコンソールに表示してださい。
var txt1 = document.getElementById('txt1');
console.log(txt1);

// 問題2：テキストの取得
// id属性txt2の要素を取得し、変数txt2に代入してください。
// txt2要素配下のテキストを取得し、コンソールに表示してください。
// ただしHTMLタグを含むもの、含まないもの両方の方法で表示すること。
var txt2 = document.getElementById('txt2');

console.log(txt2.innerText);
console.log(txt2.innerHTML);

// 問題3：テキストの書き換え
// id属性txt2配下のテキストを「書き換えました」という文字列に書き換えてください。
txt2.innerText = '書き換えました';

// 問題4：イベント(クリック)
// 取得ボタンをクリックしたとき、id属性txt3のテキストを取得し、id属性txt4に表示してください。
var txt3 = document.getElementById('txt3');
var btn1 = document.getElementById('btn1');
var txt4 = document.getElementById('txt4');
btn1.addEventListener('click', function () {
  txt4.innerText = txt3.innerText;
});

// 問題5：イベント(サブミット) / フォーム部品の取得(テキスト)
// 送信ボタンをクリックしたとき、フォーム部品(id属性input1のvalue)の値を取得し、id属性txt5に出力してください。
document.getElementById('form1').addEventListener('submit', function (e) {
  var input1 = document.getElementById('input1').value;
  var txt5 = document.getElementById('txt5');
  txt5.innerText = input1;
  e.preventDefault();
});


// 問題6：フォーム部品の取得(セレクトボックス)
// 送信ボタンをクリックしたとき、セレクトボックス(name属性item1のvalue)の選択中の値を取得し、id属性result1に出力してください。
var form2 = document.getElementById('form2');
form2.addEventListener('submit', function (e) {
  var item1 = form2.item1;
  var num = item1.selectedIndex;
  var select = item1[num].value;
  document.getElementById('result1').textContent = select;
  e.preventDefault();
});


// 問題7：フォーム部品の取得(チェックボックス)
// 送信ボタンをクリックしたとき、チェックボックス(name属性item1のvalue)の選択中の値を取得し、id属性result2に出力してください。
var form3 = document.getElementById('form3');
form3.addEventListener('submit', function (e) {
  var check = form3.check;
  var answer1 = [];
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked) {
      answer1.push(check[i].value);
    }
  }
  document.getElementById('result2').textContent = answer1;
  e.preventDefault();
});


// 問題8：フォーム部品の取得(ラジオ)
// 送信ボタンをクリックしたとき、ラジオボタン(name属性item1のvalue)の選択中の値を取得し、id属性result3に出力してください。
var form4 = document.getElementById('form4');
form4.addEventListener('submit', function (e) {
  var radio = form4.radio;
  var answer2;
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      answer2 = radio[i].value;
      break;
    }
  }
  document.getElementById('result3').textContent = answer2;
  e.preventDefault();
});


// 問題9：バリデーションチェック
// 会社名が未入力のまま送信ボタンをクリックしたとき、「会社名が未入力です。」というアラートを表示してください。また未入力の場合は、処理を中断してください。
var form5 = document.getElementById('form5');
form5.addEventListener('submit', function (e) {
  if (form5.company.value === '') {
    alert('会社名が未入力です。');
    e.preventDefault();
  }
});


// 問題10：CSSの操作
// id属性txt6のCSSプロパティを以下に変更してください。
// また変更するタイミングは画面表示時とする。
// 文字色→赤色、フォントサイズ→32px
var txt6 = document.getElementById('txt6');
txt6.style.color = 'red';
txt6.style.fontSize = '32px';


// 問題11：ノード追加
// 追加ボタンをクリックしたとき、id属性parentの子要素にpタグを追加し、pタグに「ノード追加テキスト」というテキストを追加してください。
var parent = document.getElementById('parent');
function createTxt() {
  var child = document.createElement('p');
  var childTxt = document.createTextNode('ノード追加テキスト');
  child.appendChild(childTxt);
  parent.appendChild(child);
}
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', createTxt);

// 問題12：ノード削除
// 削除ボタンをクリックしたとき、id属性parentの子要素を削除してください。
function deleteTxt() {
  parent.removeChild(parent.firstChild);
}

var btn3 = document.getElementById('btn3');
btn3.addEventListener('click', deleteTxt);


// 問題13：属性取得・変更
// 変更ボタンをクリックしたとき、id属性link1のhref属性を取得し、コンソールに表示してください。またhref属性を「https://www.yahoo.co.jp」に書き換えてください。
var btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function () {
  var link1 = document.getElementById('link1');
  console.log(link1.getAttribute('href'));
  link1.setAttribute('href','https://www.yahoo.co.jp');
});


// 問題14：クエリーセレクター / カスタム属性 / this
// querySelectorAllを使い、id属性list1の子要素のliを全て取得してください。
// liをクリックしたとき、カスタム属性numの値を取得し、コンソールに表示してください。
// その場合、クリックした要素のカスタム属性のみ取得すること。
// 例 list２のliをクリックしたときはコンソールに「2」を表示する
var list = document.querySelectorAll('#list1 li');
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    console.log(this.dataset.num);
  });
};

// 問題15-1：クラスの操作(追加)
// 追加ボタンをクリックしたとき、id属性txt7にクラスredを追加してください。
var txt7 = document.getElementById('txt7');
var btn5 = document.getElementById('btn5');
btn5.addEventListener('click', function () {
  txt7.classList.add('red');
});


// 問題15-2：クラスの操作(削除)
// 削除ボタンをクリックしたとき、id属性txt7にクラスredを削除してください。
var byn6 = document.getElementById('btn6');
btn6.addEventListener('click', function () {
  txt7.classList.remove('red');
});

// 問題15-3：クラスの操作(切り替え)
// 切り替えボタンをクリックしたとき、id属性txt7にクラスredがあれば削除し、なければ追加してください。
var byn7 = document.getElementById('btn7');
btn7.addEventListener('click', function () {
  txt7.classList.toggle('red');
});
