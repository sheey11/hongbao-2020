while(true){
    var agreements = prompt("请把 我不会泄露任何关于如何过关以及红包密码的信息 打在公屏上，或点击取消关闭网页。");
    if(agreements == null){
        window.location.href = 'about:blank'
        break;
    }
    if(agreements == '我不会泄露任何关于如何过关以及红包密码的信息'){
        break;
    }else{
        alert('不同意就给👴🏻死');
    }
}