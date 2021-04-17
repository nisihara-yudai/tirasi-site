window.alert("大丈夫");//警告する時に「大丈夫」という文字を入れました。 = 反応しました。

alert("Not OK!");//警告する時に「Not OK!」という文字を入れました。 = 反応しました。= window.は省略可能。

console.log("js");//consoleに「js」という文字が入りました。 = 反応しました。

document.write("広島");//「広島」という文字を入れる。＝ 反応しました。

let h1 = document.getElementById("hiroshima");//h1をid属性（hiroshima）にして命が生まれる

hiroshima.textContent = "HTML";//hiroshimaの文字をdomからHTMLに変える

hiroshima.style.color = "red";//hiroshimaの文字の色を赤色に変える

hiroshima.style.fontsize = "25px";//×hiroshimaの文字の大きさを変える

hiroshima.style.fontSize = "25px";//×hiroshimaの文字の大きさを変える

hiroshima.style.size = "25px";//×hiroshimaの文字の大きさを変える

hiroshima.style.backgroundColor = "yellow";//hiroshimaの背景色を黄色に変える

hiroshima.style.textAlign = "right";//hiroshimaの文字の位置を右に変える

let div = document.getElementById("kyouto");//divをdiv属性（kyouto）にして命が生まれる

let image = document.createElement("img");//<img>を追加する

image.src = "images/2.jpg";//<img src="images/img/2">を設定する

div.appendChild(image);//<div id="kyouto"><img src="images/img/2"></div>を設定する

let a = document.createElement("a");//<a></a>を追加する

a.textContent= "google!";//<a>google!</a>を作る

a.href = "https://www.google.com/?hl=ja";//<a href="https://www.google.com/?hl=ja">google</a>を作る

div.appendChild(a);//<div id="kyouto"><a href="https://..."></a></div>を追加する

let p = document.createElement("p");//<p></p>を追加する

p.textContent = "yahoo!";//<p>yahoo!</p>を作る

p.href = "https://www.yahoo.co.jp/";//<p href="https://..."></p>を作る

div.appendChild(p);//<div id="kyouto"><p href="https://..."></div>を作る










