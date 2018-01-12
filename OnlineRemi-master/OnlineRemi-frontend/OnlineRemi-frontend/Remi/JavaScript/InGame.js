	var redImena = document.getElementById("prviRed");
	var redBodova = document.getElementById("drugiRed");
	var celija1;
	var celija2;
	var kljuc = "Igrac ";
	var brojac = 0;
	var celijaRunda = redBodova.insertCell(0);
	celijaRunda.innerHTML = brojac;

	for(var i = 0; i < sessionStorage.length; i++){

		celija1 = redImena.insertCell(i+1);
		celija2 = redBodova.insertCell(i+1);

		celija1.innerHTML = sessionStorage.getItem(kljuc+(i+1));
		celija2.innerHTML = 0;
	}

	var duzinaSkladista = sessionStorage.length;
/*
	for(var i = 0; i < duzinaSkladista; i++){

		sessionStorage.removeItem(kljuc+(i+1));
	}
*/

