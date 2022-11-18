// Import the functions you need from the SDKs you need
import { initializeApp } 
//バージョンを要チェック！
from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
//↓に重要なコードを貼り付ける（RealtimeDatabaseを使えるよう追加でインポートしている）
import { getDatabase, ref, push, set, onChildAdded, remove,onChildRemoved,serverTimestamp} 
//バージョンを要チェック！
from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
// import { updateDoc, serverTimestamp } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDGobN-m8O3qtZbdoKkLGuKR3O2Vlswt-Q",
      authDomain: "dev245-316d1.firebaseapp.com",
      projectId: "dev245-316d1",
      storageBucket: "dev245-316d1.appspot.com",
      messagingSenderId: "211419764397",
      appId: "1:211419764397:web:e2de0904bcb9d549cd1824"
    };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// <!-- firebaseのCDNから貼り付け（ここまで） -->

//dbはデータベース、何かのデータを保存するのでdbと命名している
//firebaseのルール。とりあえず書く必要がある。firebaseへ接続する宣言。
const db = getDatabase(app);
//dev245はfirebaseのプロジェクト名。
const dbRef = ref(db, 'dev245');
//時間を取得
const timestamp = serverTimestamp();

//id="text"エリアのテキストをDBへ保存、ブラウザへ表示する挙動を関数executionでまとめる
const execution = () => {
    const msg = {
        uname : $("#uname").val(), //「uname」という鍵の値の名前,databaseへキーとして表示。unameの場所を取得する
        text  : $("#text").val(), //「text」という鍵の値の名前,databaseへデータとして表示。textの場所を取得する
        timestamp: serverTimestamp()
    }
    //databaseをref（参照）した場所へデータを送信できる準備（通信）をして
    const newPostRef = push(dbRef) 
    //上記通信をして、変数msgで取得した情報をfirebaseへ保存する
    set(newPostRef, msg); 
    //送信後、入力欄を空にする
    $("#uname").val("");
    $("#text").val("");
    $("#text").focus("");
}

//送信ボタン押下時の送信処理
$("#send").on("click", function(){
    execution();
});

//テキストエリア内でエンターボタン押下時の送信処理
$("#text").keypress(function(e){
    if(e.keyCode == 13){
        execution();
    }
})

//受信処理を記述、firebaseの構文を利用。
onChildAdded(dbRef, function(data){ //dbを参照して、以下を実行します。dataという引数にデータが入ってくるという決まり
    const msg = data.val(); //firebaseのデータのまとまりを取得して
    console.log(msg);
    const key = data.key; //DB内のユニークキーを取得
    console.log(key);
    let now = msg.timestamp;
    let date = new Date(now); //差分のミリ秒をnewDateに入れる！調べる！一旦入れる。下準備
    //差分のミリ秒から時刻を割り戻す
    let dates = date.getFullYear() + "年" + (date.getMonth() +1) + "月" + date.getDate() + "日 " + date.getHours() + "時" + date.getMinutes() + "分"
    let h =`
        <div>
            <p>${msg.uname}</p>
            <p>${msg.text}</p>
            <p>${dates}</p>
        </div>
    `;
    $("#output").append(h);
    //表示コメントのスクロールを一番最後に常に表示させる
    const output = document.getElementById('output');
    output.scrollTo(0, output.scrollHeight);    
});
