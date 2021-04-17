window.addEventListener('DOMContentLoaded', function(){
    $('button').on('click', function()  {
        $('span').remove(); // <span>を消す
        let mail = $('input[name="email"]').val(); // 入力されたメールアドレスを取得
        console.log(mail); // consoleにメールアドレスを表示

        let textarea = $('textarea[name="textarea"]').val(); // 入力されたテキストエリアを取得
        console.log(textarea); // consoleにテキストエリアを表示

        if(mail !== ""){ // メールアドレスが入力されていれば
            let p_email = $('<p>', {text: 'Email address:' + mail}); 
            // <p>Email address:メールアドレス</p>
            $('.mail').append(p_email);
            // <div id="email"><p>Email address:メールアドレス</p></div>
        }else{ // メールアドレスが入力されていなければ
            let span_email = $('<span>', {text: 'メールアドレスを入力して下さい'});
            // <span>メールアドレスを入力してください</span>
            span_email.addClass('error');
            // <span class = "error">メールアドレスを入力してください</span>
            $('input[name = "email"]').after(span_email);
            // Email address: <input type = "text" name="name"><span class = "error">メールアドレスを入力して下さい</span>
    
        };

        if(textarea !== ""){ // メールアドレスが入力されていれば
            let p_textarea = $('<p>', {text: 'Example textarea:' + textarea}); 
            // <p>Email address:メールアドレス</p>
            $('.textarea').append(p_textarea);
            // <div id="email"><p>Email address:メールアドレス</p></div>
        }else{ // メールアドレスが入力されていなければ
            let span_textarea = $('<span>', {text: 'テキストエリアを入力して下さい'});
            // <span>メールアドレスを入力してください</span>
            span_textarea.addClass('error');
            // <span class = "error">メールアドレスを入力してください</span>
            $('textarea[name = "textarea"]').after(span_textarea);
            // Email address: <input type = "text" name="name"><span class = "error">メールアドレスを入力して下さい</span>
    
        };

    });

    
  });

  // ```
// $(function(){
//     $('button').on('click', function()  {
//         let email = $('input[name="email"]').val(); // 入力されたメールアドレスを取得
//         console.log(email); // consoleにメールアドレスを表示

//         let textarea = $('textarea[name="textarea"]').val(); // 入力されたテキストエリアを取得
//         console.log(textarea); // consoleにテキストエリアを表示

//     });

//     if(email !== ""){ // メールアドレスが入力されていれば
//         let p_email = $('<p>', {text: 'Email address:' + email}); 
//         // <p>Email address:メールアドレス</p>
//         $('.email').append(p_email);
//         // <div id="email"><p>Email address:メールアドレス</p></div>
//     }else{ // メールアドレスが入力されていなければ
//         let span_email = $('<span>', {text: 'メールアドレスを入力してください'});
//         // <span>メールアドレスを入力してください</span>
//         span_email.addClass('error');
//         // <span class = "error">メールアドレスを入力してください</span>
//         $('input[name = "email"]').after(span_email);
//         // Email address: <input type = "text" name="name"><span class = "error">メールアドレスを入力して下さい</span>

//     }
// });
// ```