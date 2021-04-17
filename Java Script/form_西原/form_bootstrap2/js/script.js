const questions = "お問い合わせフォーム";

document.getElementById('question').textContent = questions;

$(function() {
    $('button').on('click', function (){
        
        let email = $('input[name="email"]').val();// 入力されたメールアドレスを取得する
        
        console.log(email);// 入力されたメールアドレスをconsoleで出現
    
        if(email !== ""){//メールアドレスが入力されていれば
            let p_email = $('<p>',{text: 'メールアドレス:' + email});//<p>メールアドレス</p>
            $('.email').append(p_email);//<div class="email"><p>メールアドレス</p></div>
        }else{//メールアドレスが入力されていなければ
            let span_email = $('<span>',{text: "メールアドレスを入力してください" });
            // <span>メールアドレスを入力してください</span>
            span_email.addClass("error");
            // <span class = "error">メールアドレスを入力して下さい</span>
            $('input[name="email"]').after(span_email);
            // お名前: <input type = "text" name="email"><span class = "error">お名前を入力して下さい</span>
    
        }

        let name = $('input[name="name"]').val();// 入力されたメールアドレスを取得する
        
        console.log(name);// 入力されたメールアドレスをconsoleで出現
    
        if(name !== ""){//メールアドレスが入力されていれば
            let p_name = $('<p>',{text: '名前:' + email});//<p>名前</p>
            $('.email').append(p_name);//<div class="email"><p>名前</p></div>
        }else{//メールアドレスが入力されていなければ
            let span_name = $('<span>',{text: "名前を入力してください" });
            // <span>名前を入力してください</span>
            span_name.addClass("error");
            // <span class = "error">名前を入力して下さい</span>
            $('input[name="name"]').after(span_name);
            // お名前: <input type = "text" name="email"><span class = "error">お名前を入力して下さい</span>
    
        }
    
    })
});
