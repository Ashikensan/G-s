$("#gu_btn").on("click",function(){
    let r = Math.floor(Math.random()*3);
    if( r === 0 ){
        let view = document.querySelector("#view");
        view.innerHTML="グー";
        let view1 = document.querySelector("#view1");
        view1.innerHTML="あいこ！";
        let view2 = document.querySelector("#view2");
        view2.innerHTML="もう一度！";
    }else if( r === 1 ){
        let view = document.querySelector("#view");
        view.innerHTML="チョキ";
        let view1 = document.querySelector("#view1");
        view1.innerHTML="あなたの勝ち！";
    }else{
        let view = document.querySelector("#view");
        view.innerHTML="パー";
        let view1 = document.querySelector("#view1");
        view1.innerHTML="あなたの負け！";
    }
});

