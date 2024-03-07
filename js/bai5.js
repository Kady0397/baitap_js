function tinhTong() {
    let number = document.getElementById("nhapSo").value
    let tens = 0
    let unit = 0
    let total = 0

    tens = Math.floor(number/10)
    unit = number % 10
    total = tens + unit
    console.log("tổng của 2 ký số: ", total);
    
    document.getElementById("txt+").innerHTML = "Tính tổng: " + total.toLocaleString()
}
tinhTong()