//1乱数を作成する
//1-(1)BSの数字に代入する
let money_number = 0;
let physical_number = 0;
let intelligence_number = 0;
let human_number = 0;
let debt_number = 0;
let credit_number = 0;
let assets_number = 0;
let liabilities_number = 0;
let netWorth_number = 0;

//1-(2)BSの勘定科目を変数に代える
const money = "#area_money" 
const physical = "#area_physical"
const intelligence = "#area_intelligence"
const human = "#area_human"
const debt = "#area_debt"
const credit = "#area_credit"
const assets = "#area_assets"
const liabilities = "#area_liabilities"
const netWorth = "#area_netWorth"

//1-(3)アクション毎に加減算する数字を代入する
const kozukaiAc =[2000,3000,4000];
const otetsudaiAc =[500,1000,1500,2000,3000];
const youtubeAc =[3000,4000,5000];
const shukudaiAc =[700,1400,2100];
const jukuAc =[1500,3000,5000];
const dokushoAc =[-1000,-3000,-5000,500,1500,2500];//現金マイナスして他の資産へ振替え
const asobuAc =[1500,3000,5000,6000,10000];
const okashiAc =[-500,-1000,-1500,500,1000,1500];//現金マイナスして他の資産へ振替え
const tasukeruAc =[1500,3000,5000];
const ryokouAc =[-10000,-7500,-5000,5000,7500,10000];//現金マイナスして他の資産へ振替え
const kihuAc =[-5000,-7500,-10000,5000,7500,10000];//現金マイナスして他の資産へ振替え
const nyuugakuAc =[-10000,-7500,-5000,5000,7500,10000];//現金マイナスして他の資産へ振替え

//1-(4)アクション毎のメッセージ
const kozukaiMessage_0 ="あ"
const kozukaiMessage_1 ="か"
const kozukaiMessage_2 ="さ"
const otetsudaiMessage_0 ="あ"
const otetsudaiMessage_1 ="か"
const otetsudaiMessage_2 ="さ"
const youtubeMessage_0 ="あ"
const youtubeMessage_1 ="か"
const youtubeMessage_2 ="さ"
const shukudaiMessage_0 ="あ"
const shukudaiMessage_1 ="か"
const shukudaiMessage_2 ="さ"
const jukuMessage_0 ="あ"
const jukuMessage_1 ="か"
const jukuMessage_2 ="さ"
const dokushoMessage_0 ="あ"
const dokushoMessage_1 ="か"
const dokushoMessage_2 ="さ"
const asobuMessage_0 ="あ"
const asobuMessage_1 ="か"
const asobuMessage_2 ="さ"
const okashiMessage_0 ="あ"
const okashiMessage_1 ="か"
const okashiMessage_2 ="さ"
const tasukeruMessage_0 ="あ"
const tasukeruMessage_1 ="か"
const tasukeruMessage_2 ="さ"
const ryokouMessage_0 ="あ"
const ryokouMessage_1 ="か"
const ryokouMessage_2 ="さ"
const kihuMessage_0 ="あ"
const kihuMessage_1 ="か"
const kihuMessage_2 ="さ"
const nyuugakuMessage_0 ="あ"
const nyuugakuMessage_1 ="か"
const nyuugakuMessage_2 ="さ"

//1-(5)授業の回数をカウントする変数
let count = 0;

//シーン1（スタート画面）
// シーン1から2への遷移
$(function() {
    // 非表示に設定
    $(".scene1_btn").click(function() {
    $("#scene1").css("display", "none");
    $('#scene2_se').get(0).play();
    });
    // 表示に設定
    $(".scene1_btn").click(function() {
    $("#scene2").css({"display":"block"});
    });
});

//シーン２（ゲームの説明画面）
$("#kozukai").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(kozukaiMessage_0);
            $(money).html(money_number += kozukaiAc[0]);
            $(credit).html(credit_number += kozukaiAc[0]);
            $(assets).html(assets_number += kozukaiAc[0]);
            $(netWorth).html(netWorth_number += kozukaiAc[0]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(kozukaiMessage_1);
            $(money).html(money_number += kozukaiAc[1]);
            $(credit).html(credit_number += kozukaiAc[1]);
            $(assets).html(assets_number += kozukaiAc[1]);
            $(netWorth).html(netWorth_number += kozukaiAc[1]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(kozukaiMessage_2);
            $(money).html(money_number += kozukaiAc[2]);
            $(credit).html(credit_number += kozukaiAc[2]);
            $(assets).html(assets_number += kozukaiAc[2]);
            $(netWorth).html(netWorth_number += kozukaiAc[2]);
            $("#count_num").html(count += 1);
    }
        //お金10,000円を超過した場合に投資を選択する画面を表示
        if (money_number >= 10000) {
            $("#invest").css("display", "block");
            $("#invest_item").css("height", "100%").css("opacity", "1");
        } 
});
$("#otetsudai").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(otetsudaiMessage_0);
            $(physical).html(physical_number += otetsudaiAc[0]);
            $(human).html(human_number += otetsudaiAc[0]);
            $(credit).html(credit_number += otetsudaiAc[1]);
            $(assets).html(assets_number += otetsudaiAc[1]);
            $(netWorth).html(netWorth_number += otetsudaiAc[1]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(otetsudaiMessage_1);
            $(physical).html(physical_number += otetsudaiAc[1]);
            $(human).html(human_number += otetsudaiAc[1]);
            $(credit).html(credit_number += otetsudaiAc[3]);
            $(assets).html(assets_number += otetsudaiAc[3]);
            $(netWorth).html(netWorth_number += otetsudaiAc[3]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(otetsudaiMessage_2);
            $(physical).html(physical_number += otetsudaiAc[2]);
            $(human).html(human_number += otetsudaiAc[2]);
            $(credit).html(credit_number += otetsudaiAc[4]);
            $(assets).html(assets_number += otetsudaiAc[4]);
            $(netWorth).html(netWorth_number += otetsudaiAc[4]);
            $("#count_num").html(count += 1);
    }
});
$("#youtube").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(youtubeMessage_0 );
            $(money).html(money_number += youtubeAc[0]);
            $(intelligence).html(intelligence_number += youtubeAc[0]);
            $(credit).html(credit_number += youtubeAc[0]);
            $(assets).html(assets_number += youtubeAc[0]);
            $(netWorth).html(netWorth_number += youtubeAc[0]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(youtubeMessage_1);
            $(money).html(money_number += youtubeAc[1]);
            $(intelligence).html(intelligence_number += youtubeAc[1]);
            $(credit).html(credit_number += youtubeAc[1]);
            $(assets).html(assets_number += youtubeAc[1]);
            $(netWorth).html(netWorth_number += youtubeAc[1]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(youtubeMessage_2);
            $(money).html(money_number += youtubeAc[2]);
            $(intelligence).html(intelligence_number += youtubeAc[2]);
            $(credit).html(credit_number += youtubeAc[2]);
            $(assets).html(assets_number += youtubeAc[2]);
            $(netWorth).html(netWorth_number += youtubeAc[2]);
            $("#count_num").html(count += 1);
    }
    //お金10,000円を超過した場合に投資を選択する画面を表示
    if (money_number >= 10000) {
        $("#invest").css("display", "block");
        $("#invest_item").css("height", "100%").css("opacity", "1");
    } 
});
$("#shukudai").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(shukudaiMessage_0);
            $(intelligence).html(intelligence_number += shukudaiAc[0]);
            $(credit).html(credit_number += shukudaiAc[0]);
            $(assets).html(assets_number += shukudaiAc[0]);
            $(netWorth).html(netWorth_number += shukudaiAc[0]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(shukudaiMessage_1);
            $(intelligence).html(intelligence_number += shukudaiAc[1]);
            $(credit).html(credit_number += shukudaiAc[1]);
            $(assets).html(assets_number += shukudaiAc[1]);
            $(netWorth).html(netWorth_number += shukudaiAc[1]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(shukudaiMessage_2);
            $(intelligence).html(intelligence_number += shukudaiAc[2]);
            $(credit).html(credit_number += shukudaiAc[2]);
            $(assets).html(assets_number += shukudaiAc[2]);
            $(netWorth).html(netWorth_number += shukudaiAc[2]);
            $("#count_num").html(count += 1);
    }
});
$("#juku").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(jukuMessage_0);
            $(intelligence).html(intelligence_number += jukuAc[0]);
            $(credit).html(credit_number += jukuAc[0]);
            $(assets).html(assets_number += jukuAc[0]);
            $(netWorth).html(netWorth_number += jukuAc[0]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(jukuMessage_1);
            $(intelligence).html(intelligence_number += jukuAc[1]);
            $(credit).html(credit_number += jukuAc[1]);
            $(assets).html(assets_number += jukuAc[1]);
            $(netWorth).html(netWorth_number += jukuAc[1]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(jukuMessage_2);
            $(intelligence).html(intelligence_number += jukuAc[2]);
            $(credit).html(credit_number += jukuAc[2]);
            $(assets).html(assets_number += jukuAc[2]);
            $(netWorth).html(netWorth_number += jukuAc[2]);
            $("#count_num").html(count += 1);
    }
});
$("#dokusho").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(dokushoMessage_0);
            $(money).html(money_number += dokushoAc[0]);
            $(intelligence).html(intelligence_number += dokushoAc[3]);
            $(human).html(human_number += dokushoAc[3]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(dokushoMessage_1);
            $(money).html(money_number += dokushoAc[1]);
            $(intelligence).html(intelligence_number += dokushoAc[4]);
            $(human).html(human_number += dokushoAc[4]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(dokushoMessage_1);
            $(money).html(money_number += dokushoAc[2]);
            $(intelligence).html(intelligence_number += dokushoAc[5]);
            $(human).html(human_number += dokushoAc[5]);
            $("#count_num").html(count += 1);
    }
});
$("#asobu").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(asobuMessage_0);
            $(physical).html(physical_number += asobuAc[0]);
            $(human).html(human_number += asobuAc[0]);
            $(credit).html(credit_number += asobuAc[1]);
            $(assets).html(assets_number += asobuAc[1]);
            $(netWorth).html(netWorth_number += asobuAc[1]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(asobuMessage_1);
            $(physical).html(physical_number += otetsudaiAc[1]);
            $(human).html(human_number += otetsudaiAc[1]);
            $(credit).html(credit_number += otetsudaiAc[3]);
            $(assets).html(assets_number += otetsudaiAc[3]);
            $(netWorth).html(netWorth_number += otetsudaiAc[3]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(asobuMessage_2);
            $(physical).html(physical_number += otetsudaiAc[2]);
            $(human).html(human_number += otetsudaiAc[2]);
            $(credit).html(credit_number += otetsudaiAc[4]);
            $(assets).html(assets_number += otetsudaiAc[4]);
            $(netWorth).html(netWorth_number += otetsudaiAc[4]);
            $("#count_num").html(count += 1);
    }
});
$("#okashi").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(okashiMessage_0);
            $(money).html(money_number += okashiAc[0]);
            $(physical).html(physical_number += okashiAc[3]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(okashiMessage_0);
            $(money).html(money_number += okashiAc[1]);
            $(physical).html(physical_number += okashiAc[4]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(okashiMessage_0);
            $(money).html(money_number += okashiAc[2]);
            $(physical).html(physical_number += okashiAc[5]);
            $("#count_num").html(count += 1);
    }
});
$("#tasukeru").on("click", function(){
    const random = Math.floor(Math.random() * 3);
        if(random === 0){
            $("#message").text(tasukeruMessage_0);
            $(human).html(human_number += tasukeruAc[0]);
            $(credit).html(credit_number += tasukeruAc[0]);
            $(assets).html(assets_number += tasukeruAc[0]);
            $(netWorth).html(netWorth_number += tasukeruAc[0]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(tasukeruMessage_1);
            $(human).html(human_number += tasukeruAc[1]);
            $(credit).html(credit_number += tasukeruAc[1]);
            $(assets).html(assets_number += tasukeruAc[1]);
            $(netWorth).html(netWorth_number += tasukeruAc[1]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(tasukeruMessage_2);
            $(human).html(human_number += tasukeruAc[2]);
            $(credit).html(credit_number += tasukeruAc[2]);
            $(assets).html(assets_number += tasukeruAc[2]);
            $(netWorth).html(netWorth_number += tasukeruAc[2]);
            $("#count_num").html(count += 1);   
    }       
});
$("#ryokou").on("click", function(){
    const random = Math.floor(Math.random() * 3);
    //ボタンを押下した時に確認画面を表示
    const result = confirm("お金が減るけど…本当に旅に出てみる？");
    if( result ){
        if(random === 0){
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += ryokouAc[2]);
            $(intelligence).html(intelligence_number += ryokouAc[3]);
            $(human).html(human_number += ryokouAc[3]);
            $(debt).html(debt_number += ryokouAc[3]);
            $(assets).html(assets_number += ryokouAc[3]);
            $(liabilities).html(liabilities_number += ryokouAc[3]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += ryokouAc[1]);
            $(intelligence).html(intelligence_number += ryokouAc[4]);
            $(human).html(human_number += ryokouAc[4]);
            $(debt).html(debt_number += ryokouAc[4]);
            $(assets).html(assets_number += ryokouAc[4]);
            $(liabilities).html(liabilities_number += ryokouAc[4]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += ryokouAc[0]);
            $(intelligence).html(intelligence_number += ryokouAc[5]);
            $(human).html(human_number += ryokouAc[5]);
            $(debt).html(debt_number += ryokouAc[5]);
            $(assets).html(assets_number += ryokouAc[5]);
            $(liabilities).html(liabilities_number += ryokouAc[5]);
            $("#count_num").html(count += 1);
        }  
    }       
});
$("#kihu").on("click", function(){
    const random = Math.floor(Math.random() * 3);
    //ボタンを押下した時に確認画面を表示
    const result = confirm("お金が減るけど…本当に寄付する？");
    if( result ){
        if(random === 0){
            $("#message").text(kihuMessage_0);
            $(money).html(money_number += kihuAc[0]);
            $(human).html(human_number += kihuAc[3]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(kihuMessage_0);
            $(money).html(money_number += kihuAc[1]);
            $(human).html(human_number += kihuAc[4]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(kihuMessage_0);
            $(money).html(money_number += kihuAc[2]);
            $(human).html(human_number += kihuAc[5]);
            $("#count_num").html(count += 1);
        }
    }   
});
$("#nyuugaku").on("click", function(){
    const random = Math.floor(Math.random() * 3);
    //ボタンを押下した時に確認画面を表示
    const result = confirm("お金が減るけど…本当にチャレンジする？");
    if( result ){
        if(random === 0){
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += nyuugakuAc[2]);
            $(intelligence).html(intelligence_number += nyuugakuAc[3]);
            $(debt).html(debt_number += nyuugakuAc[3]);
            $(assets).html(assets_number += nyuugakuAc[3]);
            $(liabilities).html(liabilities_number += nyuugakuAc[3]);
            $("#count_num").html(count += 1);
        }else if(random === 1){
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += ryokouAc[1]);
            $(intelligence).html(intelligence_number += ryokouAc[4]);
            $(human).html(human_number += ryokouAc[4]);
            $(debt).html(debt_number += ryokouAc[4]);
            $(assets).html(assets_number += ryokouAc[4]);
            $(liabilities).html(liabilities_number += ryokouAc[4]);
            $("#count_num").html(count += 1);
        }else{
            $("#message").text(ryokouMessage_0);
            $(money).html(money_number += ryokouAc[0]);
            $(intelligence).html(intelligence_number += ryokouAc[5]);
            $(human).html(human_number += ryokouAc[5]);
            $(debt).html(debt_number += ryokouAc[5]);
            $(assets).html(assets_number += ryokouAc[5]);
            $(liabilities).html(liabilities_number += ryokouAc[5]);
            $("#count_num").html(count += 1);
         } 
    }       
});


//シーン２（カウント達成時の投資ボタン解除）


//シーン３（授業の場面）

//シーン4（成績発表画面）
