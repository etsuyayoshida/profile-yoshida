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

//おみくじの結果データを作成
results = ['大吉','吉','中吉','小吉','凶'];
console.log(results);

console.log(results[0]);
for (let i = 0; i < results.length; i++) {
	console.log('index:' + i + 'データ:' + results[i]);
}

let omikuji = {
	results: ['大吉','吉','中吉','小吉','凶'],
    getResults: function() {
    	let results = this.results;
    	return results[Math.floor(Math.random() * results.length)];
    }
}
   