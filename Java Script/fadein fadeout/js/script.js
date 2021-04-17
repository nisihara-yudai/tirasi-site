$(function(){
    // 秒数を保存する変数
    let sec = 1;
    // 1秒毎に経過秒数を表示する関数
    const count_up = () => {
        console.log(sec);
        // <p id="timer">経過秒数:xx秒<p>
        $('p#timer').text('経過秒数:' + sec + '秒');
        // secを１ずつ増やす
        sec++;
    }
    
    // count_up関数を実行
    // count_up();
    // count_up();
    // count_up();
    // console.log(sec);

    setInterval(count_up, 1000);

    images = new Array(
        // 画像ファイル名の設定
        "CureParfait-1.jpg"
        // cure parfait 画像その1
        "CureParfait-2.jpg"
        // cure parfait 画像その1
        "CureParfait-3.jpg"
        // cure parfait 画像その1
        "CureParfait-4.jpg"
        // cure parfait 画像その1
        );
        myNowCnt = -1;
        // 現在表示している配列番号
        myflg = 0;
        // どっちを表示して、どっちを消すかのフラグ
        function myChange(){
        // スライドショーメイン関数
        myNowCnt = (myNowCnt<myImage.length-1) ? myNowCnt+1 : 0;
        // 次の配列番号
        myflg = (myflg==0) ? 1 : 0;
        // 表示・非表示フラグ反転
        if (myflg == 0){
        document.getElementById("idshow1").src = myImage[myNowCnt];
        // 次の画像をセットする
        document.getElementById("idshow1").className = "fadein";
        // フェードイン
        document.getElementById("idshow2").className = "fadeout";
        // フェードアウト
        }else{
        document.getElementById("idshow2").src = myImage[myNowCnt];
        // 次の画像をセットする
        document.getElementById("idshow1").className = "fadeout";
        // フェードアウト
        document.getElementById("idshow2").className = "fadein";
        // フェードイン
        }
        setTimeout( "myChange()" , 4000 ); // 4秒周期に画像を更新する
        }

    
});
