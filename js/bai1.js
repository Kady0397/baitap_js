
function luong() {
    let ngayLam = document.getElementById("ngayLam").value;
    let luongNgay = document.getElementById("luongNgay").value;
    let luong = ngayLam * luongNgay
    console.log("Lương: ",luong);
    document.getElementById("txtNotify").innerHTML = "Lương :" + luong.toLocaleString()
}
luong()