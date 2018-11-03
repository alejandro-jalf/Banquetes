
// setTimeout(alert("alejandro"),2000);

var pestaña_esta = 1;

setClickEntra = (value) => {
	document.getElementById("btn"+value).style.borderBottom = "4px solid rgb(47, 0, 156)";
}

setClickOut = (value) => {
	document.getElementById("btn"+value).style.borderBottom = "4px solid rgb(255, 255, 255)";
	document.getElementById("btn"+pestaña_esta).style.borderBottom = "4px solid rgb(47, 0, 156)";
}

setClickPestaña = (value) => {

	document.getElementById("btn1").style.borderBottom = "4px solid rgb(255, 255, 255)";
	document.getElementById("btn2").style.borderBottom = "4px solid rgb(255, 255, 255)";
	document.getElementById("btn3").style.borderBottom = "4px solid rgb(255, 255, 255)";

	document.getElementById("btn"+value).style.borderBottom = "4px solid rgb(47, 0, 156)";
	pestaña_esta = value;
}

setClickPestaña(2);

function getSizeHeight(){
    document.getElementById("interior").style.height = (screen.height-159)+"px";
}

getSizeHeight();
