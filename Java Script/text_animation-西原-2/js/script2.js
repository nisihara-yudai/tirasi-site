$(function(){
    let counter = 0; // 「counter」という関数を作る

    const counter_timer = () => { // counter_timer関数を定義すると、
        $('p').text('経過秒数' + counter + '秒'); // <p>経過秒数+counter+秒</p>
        counter++; //counterが増えるサイン
    }

    counter_timer(); // counter_timer関数を実行

    setInterval(counter_timer, 1000); // 1000ミリ秒で変わるタイマー

    // テキストアニメーション
    let animation = $('h1').text(); // animationという関数を制定する
    console.log(animation); // 「animation」という言葉をconsoleで表記する
    $('h1').text(''); // h1の文字を消去する
    const unit = 255 / animation.length; // １文字ずつの文字色の変化量

    let counter_text = 0; // 1文字ずつ切り出して表示する関数
    const counter_word = () => {
        let language = animation.substr(counter_text, 1); // 1文字ずつを切り出す
        console.log(language); // languageの文字をconsoleに表示する
        let span = $('<span>', {text:language}); // <span>隣</span>
        span.css('color', 'rgb(' + (unit * counter_text) + ',' + 255 + ',' + (unit * counter_text) + ')');
        // <span>の文字をcssでは、colorが入り、
        // <span style = "color: rbg(20,20,20);">H</span>
        $('h1').append(span); // <h1><span>隣</span></h1>
        counter_text ++; // 1文字ずつ出てくる
        // 次の文字がなくなったら。
        if(language === animation.length){
            clearInterval(timer);
        }
    }

    let timer = setInterval(counter_word);

});



