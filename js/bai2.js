function tinhTB() {
    let ipt1 = document.getElementById("ipt1").value;
    let ipt2 = document.getElementById("ipt2").value;
    let ipt3 = document.getElementById("ipt3").value;
    let ipt4 = document.getElementById("ipt4").value;
    let ipt5 = document.getElementById("ipt5").value;



    let tinhTB = (Number(ipt1) + Number(ipt2) + Number(ipt3) + Number(ipt4) + Number(ipt5)) / 5
    console.log("Giá trị trung bình: ",tinhTB);
    document.getElementById("txtDanger").innerHTML = "Tính trung Bình: " + tinhTB.toLocaleString()
}
tinhTB()