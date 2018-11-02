
// setTimeout(alert("alejandro"),2000);

var numImage=0;
		var cadena_num="";
        var time="1000";
        
		$(document).ready(function(){
				$('#imagen1').show();
				$('#imagen2').hide();
				$('#imagen3').hide();
				$('#imagen4').hide();
			function repite(){
				numImage++;
				cadena_num=numImage.toString();
				console.log(cadena_num);
				if (numImage==1) {
					$('#imagen4').hide(time);
					$('#imagen1').show(time);
				}
				if (numImage==2) {
					$('#imagen1').hide(time);
					$('#imagen2').show(time);
				}
				if (numImage==3) {
					$('#imagen2').hide(time);
					$('#imagen3').show(time);
				}
				if (numImage==4) {
					$('#imagen3').hide(time);
					$('#imagen4').show(time);
				}

				if(numImage==4){
					numImage=0;
				}
				setTimeout(repite,7000)
			}
			repite();
		});