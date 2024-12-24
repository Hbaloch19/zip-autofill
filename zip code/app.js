function autofill(){
    let city;
    let codes = document.getElementById("codes").value;
    if(codes==="47150"){
    city="Muree";
}
else if(codes ==="74200"){
    city = "karachi";
}
else if(codes==="51310"){
    city = "Sialkot";
}
else if(codes==="54000"){
    city = "Lahore";
}
else if(codes==="46000"){
    city = "Rawalpindi";
}
else if(codes==="71000"){
    city = "Hyderabad";
}
else{
    city="";
}
document.getElementById("city").value = city;
}

