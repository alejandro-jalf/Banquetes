
// setTimeout(alert("alejandro"),2000);

$('.toggle').click(function(){
	$('.formulario').animate({
		height: "toggle",
		'padding-top': 'toggle',
		'padding-bottom': 'toggle',
		opacity: 'toggle'
	},"slow")
	
});


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

setClickPestaña(3);

function getSizeHeight(){
    document.getElementById("interior").style.height = (screen.height-159)+"px";
}

getSizeHeight();