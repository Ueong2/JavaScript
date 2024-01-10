// Ex1 : 계산기 프로그램
window.addEventListener("load", function(){

    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("btn-sum");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});

// Ex2 : 엘리먼트 선택방법 개선하기
window.addEventListener("load", function(){
    var section2 = document.getElementById("section2");
    // getElementsByClassName는 배열이므로 [0]을 써 줘야한다.
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("btn-sum")[0];

    // var inputs = section2.getElementsByTagName("input");

    // var txtX = inputs[0];
    // var txtY = inputs[1];
    // var btnAdd = inputs[2];
    // var txtSum = inputs[3];

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});


// Ex3 : Selectors API Level1
window.addEventListener("load", function(){
    var section3 = document.getElementById("section3");
    // querySelector에서 .은 태그의 class #은 태그의 id
    // var txtX = section3.querySelector(".txt-x");
    var txtX = section3.querySelector("input[name='x']"); // class 대신 name 인 경우
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".btn-sum");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});


// Ex4 : childeNodes를 이용한 노드 선택
window.addEventListener("load", function(){
    var section4 = document.querySelector("#section4");

    var box = section4.querySelector(".box");

    var input1 = box.children[0]; // childNodes[0];
    var input2 = box.children[1]; // childNodes[1];
    // childNodes로 선택 시 okay만 출력되는데 이는 html의 div와 input 
    // 사이의 공백 또한 Node로 인식하기 때문이다.

    input1.value = "hello";
    input2.value = "okay";
});

// Ex5 : 엘리먼트 노드의 속성 변경
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");

    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");   // img-select 사용 시 활성화
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");

    changeButton.onclick = function(){
        img.src = "images/" + srcInput.value;   // datalist를 위한 경로
        // img.src = "images/" + imgSelect.value;  // select를 위한 경로

        // img.style.border-color = ?;
        // img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;   // border-color를 borderColor로 대체함
        console.log(img.className);

    };
});


// Ex6 : 노드 조작 - 메뉴추가(createTextNode, Element)
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");

    var titleInput = section.querySelector(".title-input");
    var menuListUl = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function(){
        // Method 3
        var title = titleInput.value;

        var html = '<a href="">' + title + '</a>';
        var li = document.createElement("li");  // Method 1 과 달리 li를 직접 생성한다.
        li.innerHTML = html;    // 기존에 만들어져있는 li 태그에 하나의 li 태그를 추가한 후

        // menuListUl.appendChild(li); // innerHTML로 li 태그 안에 a 태그를 추가하므로 성능이 개선된다.

        menuListUl.append(li); // appendChild는 text를 추가할 수 없었지만 append는 가능하다.

        // Method 1

        // var title = titleInput.value;
        // menuListUl.innerHTML += '<li><a href="">' + title + '</a></li>'; 

        // 아래의 코드와 기능은 동일하며 훨씬 심플하지만 위의 코드는 한 줄이 추가되는 것이 아니라 
        // 만들어진 li 태그를 없앤 후 다시 생성하는 것이므로 성능의 문제를 야기할 수 있다.

        // Method 2

        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);

        // var aNode = document.createElement("a");     // a 태그 생성
        // aNode.href="";
        // aNode.appendChild(txtNode);

        // var liNode = document.createElement("li");   // li 태그 생성
        // liNode.appendChild(aNode);

        // menuListUl.appendChild(liNode);
    };

    delButton.onclick = function(){
        // var txtNode = menuListUl.childNodes[0];
        var liNode = menuListUl.children[0];

        // menuListUl.removeChild(liNode);
        liNode.remove();    // 위의 코드와 같은 기능
    };
});