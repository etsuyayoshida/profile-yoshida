//アルバmデータの作成
let alubum = [
  {src: 'S__39018499.jp', msg: '温泉街にて'},
  {src: 'unnamed-2.jpg', msg: '倉庫会社にて'},
  {src: 'img/image_6483441.JPG', msg: 'ダンスサークルでの発表会'},
  {src: 'img/image_157478385.JPG', msg: 'コロナ終息したら旅行に行きたいです。'},
];

// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;






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

let element = document.querySelector('h6');
element.innerHTML = '<h6>吉田のおみくじ</h6>';
element.style.color = '#FF0000';
element.style.fontSize = '50px';
element.style.textAlign = 'center';
element.style.fontFamily = 'serif';
// 要素オブジェクトの取得
let getResult = document.getElementById('getResult');
getResult.style.display = 'block';
getResult.style.marginLeft = 'auto';
getResult.style.marginRight = 'auto';

let result = document.getElementById('result');
result.style.marginLeft = '80px';
result.style.textAlign = 'center';
//イベントの登録
getResult.addEventListener('click', function(){
	result.innerHTML = '結果は「' + omikuji.getResult() + '」でした。';
});
/* プログラムで使用する変数の設定　**************/
//フォームの要素を取得
let button = document.getElementById('button');
button.style.marginTop = '180px';
button.style.marginLeft = '25px';
let form = document.getElementById('form');
form.style.marginLeft = '25px';

/* イベント処理 *************/
// お問い合わせボタンを押したとき
button.addEventListener('click', function() {
	//フォームを表示
	form.style.display = 'block';
});