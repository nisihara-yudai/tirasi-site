window.alert("let's go!");//警告文字「let's go!」が出る。

console.log("java script");//java scriptという文字がconsoleで出現する。

document.write("城南中学");//[java script]という文字の下に「城南中学」という文字が出現する。

let h1 = document.getElementById("area");//h1という文字にid属性areaを追加する

area.textContent = "武将";//areaで作った「京都」という文字を「武将」という文字に変える。

area.style.textDecoration = "underline"; //下線を引く

area.style.color = "blue";//areaの文字を青色に変える

let div = document.getElementById("parl");//<div id= parl></div>

let image = document.createElement("img");//<img>

image.src = "images/parfait.jpg";//<img src="images/...">

div.appendChild(image);//<div id="parl"><img src="images/..."></div>を作る

let a = document.createElement("a");//<a></a>を作る

a.textContent = "キュアパルフェ";//<a>キュアパルフェ</a>を作る

a.href="https://www.mercari.com/jp/search/?keyword=%E3%82%AD%E3%83%A5%E3%82%A2+%E3%83%91%E3%83%AB%E3%83%95%E3%82%A7";//キュアパルフェとhttps://www.mercari.com/jp/search/?keyword=%E3%82%AD%E3%83%A5%E3%82%A2+%E3%83%91%E3%83%AB%E3%83%95%E3%82%A7をリンクさせる

div.appendChild(a);//<div id = "parl"><a href="https://www.mercari.com/jp/search/?keyword=%E3%82%AD%E3%83%A5%E3%82%A2+%E3%83%91%E3%83%AB%E3%83%95%E3%82%A7"></a>を作る
