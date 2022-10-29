let number = 0; //なぜclickボタンより前にletを設定しなしといけないのか？勝利数をカウント

$("#gu_btn").on("click", function(){

//1.乱数を作成する
const random = Math.floor(Math.random() * 3);

//2.if分岐処理
let view1 = "";
let view2 = "";
let view3 = "";
let view4 = "";


if( random === 0){
    view1 = "グー";
    view2 =  '<img src="img/kinopio.jpg" width=200>';
    view3 = "あいこだー！もう一度！";
}else if( random === 1){
    view1 = "チョキ";
    view2 = '<img src="img/mario.jpg" width=200>';
    view3 = "勝ったね！すごい！";
    if(number < 10){ //９回までカウントした時
        $("#count_num").html(number += 1);
        if(number === 10){ //10回目の勝利の時
            $("#judgement").fadeOut(1000);
            view4 = '<img src="img/usj.jpg" width=700>';
        }      
    }
}else if( random === 2){
    view1 = "パー";
    view2 = '<img src="img/mariokanashi.jpg" width=200>';
    view3 = "残念、もう一度チャレンジしてね！";
}

//3.表示処理
$("#pc_hands").text(view1);
$("#judgement").html(view2).css("text-align","center");
$("#judge_comment").html(view3).css("text-align","center","color","red");
$("#judge_comment").html(view3).css("color","red");
$("#judgement2").html(view4).css("text-align","center");

})


$("#cho_btn").on("click", function(){

//1.乱数を作成する
const random = Math.floor(Math.random() * 3);

//2.if分岐処理
let view1 = "";
let view2 = "";
let view3 = "";
let view4 = "";

if( random === 0){
    view1 = "チョキ";
    view2 = '<img src="img/kinopio.jpg" width=200>';
    view3 = "あいこだー！もう一度！";
}else if( random === 1){
    view1 = "パー";
    view2 = '<img src="img/mario.jpg" width=200>';
    view3 = "勝ったね！すごい！";
    if(number < 10){ //９回までカウントした時
        $("#count_num").html(number += 1);
        if(number === 10){ //10回目の勝利の時
            $("#judgement").fadeOut(1000);
            view4 = '<img src="img/usj.jpg" width=700>';
        }      
    }
}else if( random === 2){
    view1 = "グー";
    view2 = '<img src="img/mariokanashi.jpg" width=200>';
    view3 = "あなたの負けです！";
}

//3.表示処理
$("#pc_hands").text(view1);
$("#judgement").html(view2).css("text-align","center");
$("#judge_comment").html(view3).css("text-align","center");
$("#judge_comment").html(view3).css("color","red");
$("#judgement2").html(view4).css("text-align","center");

})

$("#par_btn").on("click", function(){

//1.乱数を作成する
const random = Math.floor(Math.random() * 3);

//2.if分岐処理
let view1 = "";
let view2 = "";
let view3 = "";
let view4 = "";

if( random === 0){
    view1 = "パー";
    view2 = '<img src="img/kinopio.jpg" width=200>';
    view3 = "あいこだー！もう一度！";
}else if( random === 1){
    view1 = "グー";
    view2 = '<img src="img/mario.jpg" width=200>';
    view3 = "勝ったね！すごい！";
    if(number < 10){ //９回までカウントした時
        $("#count_num").html(number += 1);
        if(number === 10){ //10回目の勝利の時
            $("#judgement").fadeOut(1000);
            view4 = '<img src="img/usj.jpg" width=700>';
        }      
    }
}else if( random === 2){
    view1 = "チョキ";
    view2 = '<img src="img/mariokanashi.jpg" width=200>';
    view3 = "あなたの負けです！";
}

//3.表示処理
$("#pc_hands").text(view1);
$("#judgement").html(view2).css("text-align","center");
$("#judge_comment").html(view3).css("text-align","center");
$("#judge_comment").html(view3).css("color","red");
$("#judgement2").html(view4).css("text-align","center");
})

//マウスを置くと悩んでいる画像を差し込む



//グー、チョキ、パーのテキストをセンターへ変更
const gu_btn = document.querySelector("#gu_btn");
gu_btn.style.textAlign="center";
console.log(gu_btn);

const cho_btn = document.querySelector("#cho_btn");
cho_btn.style.textAlign="center";
console.log(cho_btn);

const par_btn = document.querySelector("#par_btn");
par_btn.style.textAlign="center";
console.log(par_btn);


