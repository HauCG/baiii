function kiemtracanh() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);
    var resultElement = document.getElementById('result');


    if (a < 0 && b < 0 && c < 0) {
        alert("Nhap Lai")
    }
    if ( a + b > c && c + b > a && a + c > b) {
        resultElement.textContent = "Canh tam giac dung.";
    } else {
        resultElement.textContent = "Canh tam giac sai";
    }
}
