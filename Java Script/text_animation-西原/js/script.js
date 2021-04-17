$(function (){
    // 秒数を数えるカウンター(グローバル変数)
    let count = 0;

    // 秒数を１増やして画面に表示する関数
    const count_up = () => {
        $('p').text('経過秒数' + count + '秒');
        count ++;
    }

    count_up();// count_up関数を実行

    setInterval(count_up, 2000);//延々と繰り返すタイマー

    // テキストアニメーション
    let hiragana = $('h1').text();// hiraganaという変数を制定する
    console.log(hiragana);
    $('h1').text('');// 文字を消す
    const unit = 255 / hiragana.length; // 1文字ずつの色の変化量

    let count_text = 0; // 1文字ずつ文字を切り出して表示する関数
    const show_word = () => {
        let word = hiragana.substr(count_text, 1);// １文字を文字を切り出す
        console.log(word);
        // <span> H </span>
        let span = $('<span>', {text:word});
        // <span style = "color: rbg(20,20,20);">H</span>
        span.css('color', 'rgb(' + (unit * count_text) + ',' + (unit * count_text) + ',' + (unit * count_text) + ')');
        // <h1><span>H</span></h1>
        $('h1').append(span);
        count_text++;
        // 次の文字がなくなったら
        if(count_text === hiragana.length){
            // タイマー停止
            clearInterval(timer);
        }
    }

    let timer = setInterval(show_word);

});
