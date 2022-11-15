// Import the functions you need from the SDKs you need
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
//↓に重要なコードを貼り付ける（RealtimeDatabaseを使えるよう追加でインポートしている）
import { getDatabase, ref, push, set, onChildAdded, remove,onChildRemoved } 
from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
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
const db = getDatabase(app);
const dbRef = ref(db, 'dev245');

//id="text"エリアのテキストをDBへ保存、ブラウザへ表示する挙動を関数executionでまとめる
const execution = () => {
    const msg = {
        uname : $("#uname").val(),
        text  : $("#text").val()
    }
    //データを送信できる準備をして
    const newPostRef = push(dbRef) 
    //firebaseの登録できる場所に保存するイメージ
    set(newPostRef, msg); 
    //送信後、入力欄を空にする
    $("#uname").val("");
    $("#text").val("");
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

//受信処理を記述
onChildAdded(dbRef, function(data){ //dbを参照して、以下を実行します。dataという引数にデータが入ってくるという決まり
    const msg = data.val(); //firebaseのデータのまとまりを取得して
    const key = data.key; //DB内のユニークキーを取得
    let h =`
        <div>
            <p>${msg.uname}</p>    
            <p>${msg.text}</p>
        </div>
    `;
    $("#output").append(h);
    //表示コメントのスクロールを一番最後に常に表示させる
    const output = document.getElementById('output');
    output.scrollTo(0, output.scrollHeight);    
});