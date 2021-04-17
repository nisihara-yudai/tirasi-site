$(function () {
    //登録ボタンが押されたらこうしなさい
    $("button").on('click', function() {
        // 入力された名前を取得
        let name = $('input[name="name"]').val();
        // consoleで名前が出現
        // console.log(name);
        if (name !== "") {
            // 入力した名前をdivの中に表示
            // <p>お名前； 西原</p>
            let p_name = $('<p>', {text: 'お名前:' + name});
            // <div><p>お名前； 西原</p></div>
            $("#inputName").append(p_name);
        }else {//そうでなければ
            //<span>お名前を入力して下さい</span>
        }

        // 入力された住所を取得
        let address = $('input[name="address"]').val();
        // consoleで住所が出現
        console.log(address);

        // 入力された年齢を取得
        let age = $('input[name="age"]').val();
        // consoleで年齢が出現
        console.log(age);

        // // 入力された質問を取得
        // let question = $('input[name="question"]').val();
        // // consoleで質問が出現
        // console.log(question);

        $('[name=question]').change(function() {
            
            // 選択されている表示文字列を取り出す
            var text = $('[name=question] option:selected').text();
            console.log(text);
        })
        // // 入力された質問を取得
        // let question = $('input[name="question"]').val();
        // // consoleで質問が出現
        // console.log(question);

        // 値を取得
        $('textarea[name="textarea"]').val();
        // consoleでtextareaが出現する
        console.log();


        

    })
    
})