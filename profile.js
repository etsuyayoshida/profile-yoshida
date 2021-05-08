//おみくじの結果データを作成
results = ['大吉','吉','中吉','小吉','凶'];
console.log(results);

console.log(results[0]);
for (let i = 0; i < results.length; i++) {
	console.log('index:' + i + 'データ:' + results[i]);
}

let omikuji = {
	results: ['大吉','吉','中吉','小吉','凶'],
    getResult: function() {
    	let results = this.results;
    	return results[Math.floor(Math.random() * results.length)];
    }
}

console.log(omikuji.getResult()); 

let element = document.querySelector('.omake' 'h6');
element.innerHTML ='<h6>吉田のおみくじ</h6>'
// 要素オブジェクトの取得
let getResult = document.getElementById('getResult');
let result = document.getElementById('result');

//イベントの登録
getResult.addEventListener('click', function(){
	result.innerHTML = '結果は「' + omikuji.getResult() + '」でした。';
});
/* プログラムで使用する変数の設定　**************/
//フォームの要素を取得
let button = document.getElementById('button');
let form = document.getElementById('form');


/* イベント処理 *************/
// お問い合わせボタンを押したとき
button.addEventListener('click', function() {
	//フォームを表示
	form.style.display = 'block';
});