//1.乱数を作成する
let number = 0; 
const money = "#area_money"
const physical = "#area_physical"
const intelligence = "#area_intelligence"
const human = "#area_human"
const debt = "#area_debt"
const credit = "#area_credit"
const assets = "#area_assets"
const netWorth = "#area_netWorth"

const message_1 ="いつもありがとうございます"

//シーン1（スタート画面）


//シーン２（ゲームの説明画面）
$("#kozukai").on("click", function(){
    const random = Math.floor(Math.random() * 3);
    if(random === 0){
        $("#message").text(message_1);
        $(money).html(number += 100000);
    }else if(random === 1){
        $("#message").text("かきくけこ");
        $(money).html(number += 70000);
    }else{
        $("#message").text("さしすせそ");
        $(money).html(number += 20000);
    }
});

$("#otetsudai").on("click", function(){
    $("#message").text("かきくけこ");
    $(money).html(number += 50000);
    
});




//シーン３（授業の場面）

//シーン4（成績発表画面）