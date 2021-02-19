'use strict';
// 例題 コンソールに数値「1」を出力してください。
// console.log(1);

// Math問題：最大値
// 以下の数値の最大値をコンソールに表示してください。
console.log(Math.max(10,20,30));

// Math問題：最小値
// 以下の数値の最小値をコンソールに表示してください。
console.log(Math.min(10,20,30));

// Math問題：小数点以下の切り上げ
// 100.53の小数点以下を切り上げし、コンソールに表示してください。
console.log(Math.ceil(100.53));

// Math問題：小数点以下の切り捨て
// 100.53の小数点以下を切り捨てし、コンソールに表示してください。
console.log(Math.floor(100.53));

// Math問題：小数点以下の四捨五入
// 100.53の小数点以下を四捨五入し、コンソールに表示してください。
console.log(Math.round(100.53));

// Math問題：乱数
// 1~9の乱数を生成し、コンソールに表示してください。
console.log(Math.floor(Math.random() * 9) + 1);

// Date問題：オブジェクト生成
// Dateオブジェクトを生成し、変数dayに代入し、現在日付をコンソールに表示してください。
var day = new Date();
console.log(day);

// Date問題：年取得
// 現在の西暦をコンソールに表示してください
console.log(day.getFullYear());

// Date問題：月取得
// 現在の月をコンソールに表示してください。
// 例：3月であれば「3」を出力
console.log(day.getMonth() + 1);

// Date問題：日にち取得
// 現在の日数をコンソールに表示してください；
console.log(day.getDate());

// Date問題：時刻取得
// 現在の時間をコンソールに表示してください。
// 例：12時であれば「12」を出力
console.log(day.getHours());


// Date問題：大阪万博の開催は2025年5月3日です。
// 現在の日付から大阪万博開催までの日数を表示してください。
// 例：大阪万博まであと400日
// ヒント：getTimeでそれぞれの経過ミリ秒を取得し、日付に変換する。
// 経過ミリ秒 ÷ (1000ミリ秒 × 60秒 × 60分 × 24時間)
var days = Math.ceil((Date.parse(2025 + '/' + 5  + '/' +3) - day.getTime()) / (24 * 60 * 60 * 1000));
console.log('大阪万博まであと' + days + '日');

// タイマー問題：setTimeout
// 変数num1が2秒後カウントアップ(0→1)する処理を記載してください。
// 変数num1はコンソールに表示すること
var num1 = 0;
var timer1 = function () {
  num1++;
  console.log('num1:' + num1);
}

setTimeout(timer1, 2000);


// タイマー問題：setInnterval / clearInterval
// 変数num2が2秒ごとにカウントアップする処理を記載してください。
// またnum2の値が5以上になったとき、処理を止めること
var num2 = 0;
var timer2 = function () {
  if (num2 <= 5) {
    console.log('num2:' + num2);
    num2++;
  } else {
    clearInterval(timer2);
  }
}

setInterval(timer2, 2000);
