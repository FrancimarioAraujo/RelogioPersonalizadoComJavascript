function carregar() {
	var msg = window.document.getElementById('msg');
	var foto = window.document.getElementById('foto');
	var data = new Date();


	var hora = data.getHours();
	var minutos = data.getMinutes();
	var segundos = data.getSeconds();

	if (hora>=0 && hora<12) {
		//BOM DIA
		foto.src = 'imagens/amanhecer.png';
		document.body.style.background = "#e2cd9f";
	}
	else if (hora >= 12 && hora<=18){
		//Boa Tarde
		foto.src = 'imagens/entardecer.png';
		document.body.style.background = "#b9B46f";
	}
	else{
		//Boa Noite
		foto.src = 'imagens/anoitecer.png';
		document.body.style.background = "#515154";
	}


}

 var myVar = setInterval(myTimer ,1000);
    function myTimer() {
        var d = new Date(), displayDate;
       if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
          displayDate = d.toLocaleTimeString('pt-BR');
       } else {
          displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
       }
          document.getElementById("msg").innerHTML = displayDate;
    }

