const question = "アニメ「ポケモン」で、サトシが最初に選んだポケモンは何？"
const answers = [
  'ヒトカゲ',
  'フシギダネ',
  'ピカチュウ',
  'ゼニガメ',
];
const correct = "ピカチュウ";

console.log();

const $button = document.getElementsByTagName('button');//ボタンの位置を変える

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  // 定数の文字列をHTMLに反映させる
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;//ボタンに関する変数
  let buttonLenght = $button.length;//配列の数だけ数を取得できるようになる
  while(buttonIndex < buttonLenght){//4回繰り返しているので
    //ここで命令
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();//ボタンの位置を変えた時に定義をする。

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];



//ボタンをクリックすると正誤判定
$button[0].addEventListener('click', () => {
  if(correct === $button[0].textContent) {
    window.alert('正解!')
  }else{
    window.alert('不正解!')
  }
})
$button[1].addEventListener('click', () => {
  if(correct === $button[1].textContent) {
    window.alert('正解!')
  }else{
    window.alert('不正解!')
  }
})
$button[2].addEventListener('click', () => {
  if(correct === $button[2].textContent) {
    window.alert('正解!')
  }else{
    window.alert('不正解!')
  }
})
$button[3].addEventListener('click', () => {
  if(correct === $button[3].textContent) {
    window.alert('正解!')
  }else{
    window.alert('不正解!')
  }
})