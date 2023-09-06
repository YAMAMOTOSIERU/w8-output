// ユーザーがemailとpasswordを入力した後、保存ボタンをクリックするイベントハンドラ
document.getElementById("saveButton").addEventListener("click", function () {
  // フォームからemailとpasswordの値を取得
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // 取得した値をlocalStorageに保存
  window.localStorage.setItem("email", email);
  window.localStorage.setItem("password", password);
});

// ページが読み込まれたときに、localStorageから値を取得してフィールドに自動入力
window.addEventListener("load", function () {
  var savedEmail = window.localStorage.getItem("email");
  var savedPassword = window.localStorage.getItem("password");

  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
  }

  if (savedPassword) {
    document.getElementById("password").value = savedPassword;
  }
});
