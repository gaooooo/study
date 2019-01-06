var jsonTel = [
    "18611043925",
    "28615558892",
    "38616679982",
    "48613349932",
    "58617769764",
    "68618732345",
    "78615635648",
    "88618827890",
    "98615441234",
    "38616671236",
    "48123549932",
    "58654333764",
    "68618732345",
    "78634534648",
    "88619889990",

];


var timeoutID = null;
var num=0;

function FuncStart() {
    timeoutID && clearInterval(timeoutID);
    timeoutID= self.setInterval("ChangePhoneNum()", 30);
   // timeoutID=setTimeout("ChangePhoneNum()", 1000);
}

function ChangePhoneNum() {
    if (jsonTel.length == 0) {
        
        //window.clearInterval(timeoutID);
       
        //document.getElementById("txtTel").value = '';
        document.getElementById("txtTel").innerText='已抽完奖!';
        return;
    }

     num = Math.round(Math.random() * (jsonTel.length - 1));

     document.getElementById("txtTel").innerHTML = "<span>"+jsonTel[num]+"</span>" ;
}


function FuncStop() {
    //clearTimeout(timeoutID);
    if (jsonTel.length == 0) { return; }
    var zjNum = document.getElementById("txtTel").innerHTML;
    document.getElementById("zhongjiang").innerHTML += ("<span>" + zjNum + "</span><br/>");
    jsonTel.splice(num, 1);
}