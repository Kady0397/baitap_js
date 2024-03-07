function tinhHCN() {
    let chieuDai = document.getElementById("chieuDai").value
    let chieuRong = document.getElementById("chieuRong").value
    let chuVi = 0
    let dienTich = 0

    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2
    dienTich = chieuDai * chieuRong
    console.log("Chu vi: ",chuVi);
    console.log("Diện tích: ",dienTich);

    document.getElementById("chuVi").innerHTML = "chu vi : " + chuVi.toLocaleString()
    document.getElementById("dienTich").innerHTML = "diện tích: " + dienTich.toLocaleString()
    
}
tinhHCN()