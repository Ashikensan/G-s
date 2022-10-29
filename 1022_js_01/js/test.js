// // 一番最初に必ずやってほしいこと
// //　アラートを設定するのはHTMLとjavascriptをつながっていることを確認する
// // alert(1111); コメントアウト
// //演習1 以下の文章を記述しましょう
// console.log("はじめてのじゃばすくりぷと");
// //文字列は””で囲む、計算は囲まない//

// console.log(23+5);
// console.log(2000-1800);
// console.log("18 + 5");

// var oohori = "年収1500万円のおおほりさん"
// console.log(oohori);

// var red = "赤";
// console.log(red);
// var name2 = "足苅賢司";
// console.log(name2);


// var hako = 1;

// if(hako === 1) {
//     console.log("1が入っています");
// }else if(hako === 2){
//     console.log("2が入っています"); 
// }else if(hako === 3){
//     console.log("3が入っています");
// }
// var point = 90;

// if(point >= 80){
//     console.log("素晴らしい！おめでとう！");
// }else{
//     console.log("もっと頑張りましょう！");
// }

// var random = Math.floor(Math.random() * 5);
// console.log(random, "ランダムな数字");

// if (random === 0) {
//   console.log("大吉");
// } else if (random === 1) {
//   console.log("中吉");
// } else if (random === 2) {
//   console.log("小吉");
// } else if (random === 3) {
//   console.log("吉");
// } else if (random === 4) {
//   console.log("末");
// }

// //jqueryの書き方//
// // $マーク jQueryを意味している！//

// $(".a").on('click', function(){
  
// //     // alert("h1が押されました！");
// //     $(".a").css("color", "red");
// //     $(".a").fadeOut(2000);
// //     $(".a").fadeIn(2000);
// // } );

// var random = Math.floor(Math.random() * 5);
// console.log(random, "ランダムな数字");

// if (random === 0) {
//   console.log("大吉");
//   $(".a").text("大吉");
// } else if (random === 1) {
//   console.log("中吉");
//   $(".a").text("中吉");
// } else if (random === 2) {
//   console.log("小吉");
//   $(".a").text("小吉");
// } else if (random === 3) {
//   console.log("吉");
//   $(".a").text("吉");
// } else if (random === 4) {
//   console.log("末");
//   $(".a").text("末");
// }
// });

// console.log("はじめてのジャパスクリプト");
// console.log( 23 + 5 );
// console.log( 2000 - 1800 );
// console.log("18 + 5");

// var point = 90;

// if( point >= 80 ){
//     console.log("素晴らしい！おめでとう！");
// }else{
//     console.log("もっと頑張りましょう！");
// }

// var point = 90;

// if(point >= 80){
//     console.log("素晴らしい！おめでとう！");
// }else{
//     console.log("もっと頑張りましょう！");
// }

// var number = Math.floor( Math.random() *5 + 1 );{
//     console.log( number );
// }

// var random = Math.floor(Math.random() * 5);
//     console.log(random, "ランダムな数字");

var random = Math.floor(Math.random() * 5);
    if( random === 0){
        console.log("大吉");
    }else if( random === 1){
        console.log("中吉");
    }else if( random === 2){
        console.log("小吉");
    }else if( random === 3){
        console.log("吉");
    }else if( random === 4){
        console.log("凶");
    }

// var random = Math.floor(Math.random() * 5);
// console.log(random, "ランダムな数字");

// if (random === 0) {
//     console.log("大吉");
// } else if (random === 1) {
//     console.log("中吉");
// } else if (random === 2) {
//     console.log("小吉");
// } else if (random === 3) {
//     console.log("吉");
// } else if (random === 4) {
//     console.log("末");
// }
$(".a").on("click", function(){
    // $(".a").css("color", "red");
    // $(".a").fadeOut(5000);
    // $(".a").fadeIn(5000);

    var random = Math.floor(Math.random() * 5);
    if( random === 0){
        console.log("大吉", "おみくじ");
        $(".a").text("大吉");
        $(".a").css("color", "red" );
    }else if( random === 1){
        console.log("中吉");
        $(".a").text("中吉");
    }else if( random === 2){
        console.log("小吉");
        $(".a").text("小吉");
    }else if( random === 3){
        console.log("吉");
        $(".a").text("吉");
    }else if( random === 4){
        console.log("凶");
        $(".a").text("凶");
    }
    // 大吉のみに赤色にしたいのにできない

})

// const name = "スキプラ";
// let visit_count = 20;
//     visit_count = 30;
//     visit_count = 23;
// if( visit_count >= 30){
//     console.log("こんにちは" + name +  "さん" + visit_count + "回目の訪問ですね！");
//     alert("こんにちは" + name +  "さん" + visit_count + "回目の訪問ですね！");
// }else{
//     alert("こんにちは" + name +  "さん" + visit_count + "回目の訪問ですね！");
// }

// let r1 = Math.ceil(Math.random()*7);
// let r2 = Math.ceil(Math.random()*7);
// let r3 = Math.ceil(Math.random()*7);
//     alert(r1+"" + " | "+"" + r2+"" + " | "+"" + r3);

// const a1 = document.querySelector("#a1"); //HTMLのa1を参照します
// // console.log(a1.id); //a1のId名がとれるかどうか確認
// // console.log(a1.title); //a1のId名がとれるかどうか確認
// // console.log(a1.innerHTML); //a1の文字列を取得できる

// a1.style.color="#ff0000";
// a1.style.fontSize="64px";
// a1.innerHTML="ジーズは大変！"; //値を上書きする


// const a1 = document.querySelector("#a1");
// a1.style.color="#ff0000";
// a1.style.fontSize="64px";
// a1.innerHTML=("かわるのぁ？");

// const a = document.querySelector('.a')
// a.style.color="#ff0000";

// const link ='<a href="#">リンク</a>';
// $("#a1").text(link);
// $("#a1").css("color","#ff0000");
// $("#a1").css("background-color","#000000");
// $("#a1").css("padding","20px");
// $("#a1").fadeOut(2000).fadeIn(1000);
// $("#a1").prepend("あいうえお");
// $("#a1").append("さしすせそ");

// $("#ex").fadeIn(4000);
// $("#ex").html("かきくけこ");
// $("#ex").css("color","//#ff0000");
// $("#ex").css("background-color","#ff0000");
// $("#ex").prepend("あいうえお");
// $("#ex").append("さしすせそ");

// $("#btn").on("mouseover",function(){
//     $("body").css("background-color","#000000")
// });
// $("#btn").on("click",function(){

// });

// $("#hide").on("click",function(){
//     $("#ex").fadeOut(2000);
// });
// $("#show").on("click",function(){
//     $("#ex").fadeIn(2000);
// });

let number = 0;
$("#show").on("click",function(){
    $("#count_num").html(number += 1);
});

// let number = 0;
// $("#show").on("click",function(){
//     $("#ex").css("border","solid","html(number += 1)px");
//     console.log(number);
// });