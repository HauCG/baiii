function tinhtien() {
    var C = parseInt(document.getElementById('doC').value);
    var result = C * 2006.79 ;

    var resultElement = document.getElementById('resultElement');
    resultElement.textContent = result;
}