function tinhthue() {
    var income = parseFloat(document.getElementById("thunhap").value);
    var tax = 0;

    if (income > 80) {
        tax = 18.15 + (income / 100 * 35);
    } else if (income > 52) {
        tax = 9.75 + (income / 100 * 30);
    } else if (income > 32) {
        tax = 4.75 + (income / 100 * 25);
    } else if (income > 18) {
        tax = 1.95 + (income / 100 * 20);
    } else if (income > 10) {
        tax = 0.75 + (income / 100 * 15);
    } else if (income > 5) {
        tax = 0.25 + (income / 100 * 10);
    } else {
        tax = income / 100 * 5;
    }

    document.getElementById("result").innerText = "Thuế thu nhập cá nhân của bạn là: " + tax.toFixed(2) + " triệu VND";
}