//アルバmデータの作成
let album = [
  {src: 'S__39018499.jpg', msg: '温泉街にて'},
  {src: 'S__40501253.jpg', msg: '倉庫会社にて'},
  {src: 'S__40501255.jpg', msg: 'ダンスサークルでの発表会'},
  {src: 'S__40501256.jpg', msg: 'コロナ終息したら旅行に行きたいです。'},
];

// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main1');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

//サムネ画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
	let thumbImage = document.createElement('img');
	thumbImage.setAttribute('src', album[i].src);
	thumbImage.setAttribute('alt', album[i].msg);
	thumbFlame.insertBefore(thumbImage, null);
}

//クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
	if (event.target.src) {
		mainImage.src = event.target.src;
		mainMsg.innerText = event.target.alt;
	}
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