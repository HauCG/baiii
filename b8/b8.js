function kiemtradiem() {
    var a = parseInt(document.getElementById('a').value);
    var resultElement = document.getElementById('result');

    if (isNaN(a)) {
        resultElement.textContent = "Vui lòng nhập số.";
        return;
    }

    if (      a > 120 && a < 0 || a < 120 && a > 0) {
        resultElement.textContent = "Bạn là người.";
    } else {
        resultElement.textContent = "Nhập lại đi..";
    }
}
