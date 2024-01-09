// window.onload = function() {
// 위의 코드로 js 파일들을 시작할 시 html의 맨 마지막에 실행되는 파일만 초기화된다.
// 이렇게 위의 코드가 아니라 아래의 코드로 js파일을 작성해야 load 시 두 함수가 함께 초기화된다.
window.addEventListener("load", function(){
    var btnPrint = document.getElementById("btn-print"); // 이 코드 덕분에 input 태그에서 html의 표기방식을 준수할 수 있다.

    btnPrint.onclick = function() {
        var x = prompt("x의 값을 입력하세요", 0);
        var y = prompt("y의 값을 입력하세요", 0);

        x = parseInt(x);
        y = parseInt(y);
        
        btnPrint.value = x+y;   // id를 부여한 input 태그의 값이 바뀐다.
    };
});