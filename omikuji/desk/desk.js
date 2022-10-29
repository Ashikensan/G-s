$(".a").on("click", function(){
    

    //1.乱数を作成する
    const random = Math.floor(Math.random() * 9);
    
    //2.if分岐処理
    
    let view1 = "";
    let view2 = "";
    let view3 = "";
    
    if( random === 0){
        view1 = "グー";
        view2 =  '<img src="img/kinopio.jpg" width=300>';
        view3 = "あいこだー！もう一度！";
    }else if( random === 1){
        view1 = "チョキ";
        view2 = '<img src="img/mario.jpg" width=300>';
        view3 = "勝ったね！すごい！";
    }else if( random === 2){
        view1 = "パー";
        view2 = '<img src="img/mariokanashi.jpg" width=300>';
        view3 = "残念、もう一度チャレンジしてね！";
    }
    
    //3.表示処理
    $("#pc_hands").text(view1);
    $("#judgement").html(view2).css("text-align","center");
    $("#judge_comment").html(view3).css("text-align","center");
    $("#judge_comment").html(view3).css("color","red");
    })