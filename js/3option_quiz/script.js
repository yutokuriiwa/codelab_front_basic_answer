const question1 = document.getElementsByName('question1');
const question2 = document.getElementsByName('question2');
const question3 = document.getElementsByName('question3');
const answer = document.getElementById('answer');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');
const result = document.getElementById('result');
const close = document.getElementById('close');
let correct;

const judge = function() {
  // 正解数の初期化
  correct = 0;
  // ラジオボタンで選択されたvalueを取得
  let selectOption1;
  let selectOption2;
  let selectOption3;
  // 問題1の選択したvalueを取得
  for (let i = 0; i < question1.length; i++) {
    if (question1[i].checked == true) {
      selectOption1 = question1[i].value;
      break;
    }
  }
  // 問題2の選択したvalueを取得
  for (let i = 0; i < question2.length; i++) {
    if (question2[i].checked == true) {
      selectOption2 = question2[i].value;
      break;
    }
  }
  // 問題3の選択したvalueを取得
  for (let i = 0; i < question3.length; i++) {
    if (question3[i].checked == true) {
      selectOption3 = question3[i].value;
      break;
    }
  }

  // 結果確認
  if (selectOption1 == 2) {correct++;}
  if (selectOption2 == 3) {correct++;}
  if (selectOption3 == 2) {correct++;}
}

// 「解答!!」ボタンを押した時、正解判定処理実行
answer.addEventListener('click',function(){
  judge();
  let percent = Math.floor(correct / 3 * 100);
  result.textContent = '正答率は' + percent + '%でした。';
  // 結果表示を行う
  modal.classList.add('show');
  mask.classList.remove('hidden');
},false);

close.addEventListener('click', function(){
  modal.classList.remove('show');
  mask.classList.add('hidden');
});

mask.addEventListener('click', function () {
  close.click();
});
