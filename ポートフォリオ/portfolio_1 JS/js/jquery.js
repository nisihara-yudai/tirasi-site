$(function(){
	function changeAction(){
		var formObject = document.getElementById('formID');
		formObject.action = "oohsera14hirokoku@icloud.com";
	
		//お名前
		if ($('#form [name=name]').val() == ""){
			var name = "入力なし";
		} else {
			var name = $('#form [name=name]').val();
		}
	 
		//フリガナ
		if ($('#form [name=furigana]').val() == ""){
			var furigana = "入力なし";
		} else {
			var furigana = $('#form [name=furigana]').val();
		}
	
		//メールアドレス
		if ($('#form [name=email]').val() == ""){
			var email = "入力なし";
		} else {
			var email = $('#form [name=email]').val();
		}
	
		//電話番号
		if ($('#form [name=tel]').val() == ""){
			var tel = "入力なし";
		} else {
			var tel = $('#form [name=tel]').val();
		}
	 
		//性別
		var sex = $('#form [name=sex]:checked').val();
	
		//お問い合わせ項目
		var item = $('#form [name=item]').val();
	
		//お問い合わせ内容
		if($('#form [name=content]').val() == ""){
			var content = "入力なし";
		} else {
			var content = $('#form [name=content]').val();
		}
	
		//値を表示
		$('.text_result').text('お名前 : ' + text);
		$('.text_result').text('フリガナ : ' + text);
		$('.text_result').text('メールアドレス : ' + text);
		$('.text_result').text('電話番号 : ' + text);
		$('.radio_result').text('性別 : ' + radio);
		$('.sb_result').text('お問い合わせ項目 : ' + selectbox);
		$('.ta_result').text('お問い合わせ内容 : ' + textarea);
	
		
	}
	
	$function(){
		// テキストアニメーション
		let moji = $('#name').text();
		$('#name').text(''); // 文字を消す
		const unit = 255 / moji.length; // １文字ずつの色の変化量
	
		// 1文字ずつ文字を切り出して表示する関数
		let count_text = 0;
		const show_word = () => {
			let word = moji.substr(count_text,1);
			let span = $('<span>', {text: word}); //<span>西</span>
			// <span class = "color: rgb(20,20,20);">西</span>
			span.css('color', 'rgb(' + 255 + ',' + (unit * count_text) + ',' + (unit * count_text) + ')');
			// <div id name><span>H</span></div>
			$('#name').append(span);
			count_text++;
			// 次の文字がなくなったら
			if(count_text === moji.length){
			// タイマー停止
			clearInterval(timer);
		}
	}
	}
})
