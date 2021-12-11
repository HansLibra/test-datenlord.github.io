function isIE() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    if(isIE) {
        document.getElementById('tipModel').style.display = "block";
    } else {
        document.getElementById('tipModel').style.display = "none";
    }
}

function clickToEnlargeImg(obj){//放大图片，obj为事件出发Dom节点对象
    var imgsrc = obj.src;
    var opacityMask = '<div id="opacityMask" style="display: none"><img class="enlargeImg" src="'+ imgsrc +'" ></div>';
    $(document.body).append(opacityMask);//底层蒙版
    toEnlargeImg();//使图片变大
}
function toEnlargeImg(){
var scrollTop = $(window).scrollTop()+20;
$("#opacityMask").addClass("opacityMask");
$("#opacityMask").show();
$("html,body").addClass("none-scroll");//下层不可滑动
$(".enlargeImg").addClass("enlargeImg");
$(".enlargeImg").bind("click",clickToSmallImg);
function clickToSmallImg() {
    $("html,body").removeClass("none-scroll");
    $(window).scrollTop(scrollTop);//缩小后恢复到原位
    $("#opacityMask").remove();
}
};