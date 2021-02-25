const form = document.getElementById("form");
const errName = document.getElementById("err-name");
const errKana = document.getElementById("err-kana");
const errTel = document.getElementById("err-tel");
const errMail = document.getElementById("err-mail");

form.addEventListener("submit", function(e) {

  // テキスト初期化
  errName.innerText = '';
  errKana.innerText = '';
  errTel.innerText = '';
  errMail.innerText = '';

  const kanaRegex = new RegExp(/^([ァ-ン]|ー)+$/);
  const telRegex = new RegExp(/^\d{10}$|^\d{11}$/);
  const mailRegex = new RegExp(/^\S+@\S+\.\S+$/);

  let errFlg = 0;
  let errMsg;

  const nameVal = form.name.value;
  const kanaVal = form.kana.value;
  const telVal = form.tel.value;
  const mailVal = form.mail.value;

  if(nameVal === '') {
    errMsg = '名前が未入力です';
    errName.innerText = errMsg;
    errFlg = 1;
  }
  if(kanaVal === '' || kanaVal.match(kanaRegex) === null) {
    errMsg = '全角カナで入力してください。';
    errKana.innerText = errMsg;
    errFlg = 1;
  }
  if(telVal === '' || telVal.match(telRegex) === null) {
    errMsg = '電話番号をハイフンなしで入力してください。';
    errTel.innerText = errMsg;
    errFlg = 1;
  }
  if(mailVal === '' || mailVal.match(mailRegex) === null) {
    errMsg = 'メールアドレスの形式ではありません。';
    errMail.innerText = errMsg;
    errFlg = 1;
  }

  if (errFlg === 1) {
    e.preventDefault();
  }
});
