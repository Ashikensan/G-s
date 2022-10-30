//時間を設定してstartボタンを押すと、カウントダウンが始まる
//カウントダウン中にstopボタンを押すと、カウントダウンが止まる
//stopしたあと、resetボタンを押すと設定していた時間がリセットされる
//カウントダウン終了後に、alertで「時間です！」と表示される


    window.addEventListener("DOMContentLoaded", function() {
    const inputMin = document.querySelector("#free-min");
    const inputSec = document.querySelector("#free-sec");
    const freeStart = document.querySelector("#free-start");

    freeStart.addEventListener("click",function(){
        let countMin = parseInt(inputMin.value * 60);  //時間(分)を秒に変換する処理
        let countSec = parseInt(inputSec.value);
        let mixValue = countMin + countSec;
        

    });
});


