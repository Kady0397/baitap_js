function doiTien() {
    
    let giaMD = 23500
    let soTien  = document.getElementById("soTien").value
    console.log(giaMD);

    let doiTien = giaMD * soTien
    console.log("Quy đổi tiền: ",doiTien);
    document.getElementById("txt$").innerHTML = "Quy đổi tiền: " + doiTien.toLocaleString()
    
}
doiTien()