window.alert("デュエル・マスターズ");//「デュエル・マスターズ」という文字が警告として出る

console.log("ボルシャックドラゴン");//consoleに「ボルシャックドラゴン」という文字が入る

document.write("切札勝舞");//「デュエル・マスターズ」の下に「切札勝舞」という文字が出現する

let h1 = document.getElementById("yamaguchi");//h1のid属性「yamaguti」にして命が生まれる

// yamaguchi.style.color = "yellow";//「yamaguti」の文字の色を黄色に変える

// yamaguchi.style.backgroundColor = "pink";//「yamaguti」の背景色をピンクに変える

$('#yamaguchi').text('高杉晋作');    //「伊藤博文」を「高杉晋作」に変える

$('#yamaguchi').addClass('yellow');  //「高杉新作」の背景色や文字の色などを変えて出現させる。

let div = document.getElementById("victory");//divのid属性「victory」にして命が生まれる

let image = document.createElement("img");//<img>タグを作る

image.src = "images/3.jpg"//<img src="images/3.jpg">を作る

div.appendChild(image);//<div id="victory"><img src="images/3.jpg"></div>を作る

let a = document.createElement("a");//<a></a>タグを作る

a.textContent = "oras";//<a>oras</a>を作る

a.href = "https://www.pokemon.co.jp/ex/oras/";//orasのリンク先を作る

div.appendChild(a);//


