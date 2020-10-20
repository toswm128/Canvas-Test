var canvas, context;
let er = false;
var jiu = document.querySelector("#jiu");
let bold = document.querySelector("#brush_border");
let colorTxt = document.querySelector("#change_color");
function init() {
    
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
 
    context.lineWidth = 3; // 선 굵기를 2로 설정
    context.strokeStyle = "black";
    context.lineCap = "round"
 
    // 마우스 리스너 등록. e는 MouseEvent 객체
    canvas.addEventListener("mousemove", function (e) { move(e) }, false);
    canvas.addEventListener("mousedown", function (e) { down(e) }, false);
    canvas.addEventListener("mouseup", function (e) { up(e) }, false);
    canvas.addEventListener("mouseout", function (e) { out(e) }, false);
}
function Eraser(){
    if(er === false){
        context.strokeStyle = "dimgray";
        er=true;
        jiu.innerText = "펜"
    }
    else if(er === true){
        context.strokeStyle = "black";
        er=false;
        jiu.innerText = "지우개"
    }
}
function number(){
    context.lineWidth = bold.value;
}
function color(){
    context.strokeStyle = colorTxt.value;
}
var startX=0, startY=0; // 드래깅동안, 처음 마우스가 눌러진 좌표
var drawing=false;
function draw(curX, curY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();
}
function down(e) {
    startX = e.offsetX; startY = e.offsetY;
    drawing = true;
}
function up(e) { drawing = false; }
function move(e) {
    if(!drawing) return; // 마우스가 눌러지지 않았으면 리턴
    var curX = e.offsetX, curY = e.offsetY;
    draw(curX, curY);
    startX = curX; startY = curY;
}
function out(e) { drawing = false; }