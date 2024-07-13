function calculateInterest() {
    var principal = parseFloat(document.getElementById("bd").value);
    var interestRate = parseFloat(document.getElementById("lai").value) / 100;
    var months = parseInt(document.getElementById("thang").value);

    var futureValue = principal * Math.pow(1 + interestRate, months);

    document.getElementById("result").innerText = "tổng số tiền phải trả " + months + " tháng là: " + futureValue.toFixed(2) + " triệu VND";
}
