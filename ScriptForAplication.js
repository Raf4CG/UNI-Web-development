function calcular() {
	var valor, triplo;

	valor = document.getElementById("valor").value; 
	triplo = valor * 3;

	document.getElementById("resposta").innerHTML = triplo;

	if(document.getElementById("valor").value == "") {
		alert("Você precisa digitar algum número");
		document.getElementById("valor").focus();
		
	} else { 
  	//alert("O triplo do valor é: "+triplo);

	document.getElementById("valor").value = "";
	document.getElementById("valor").focus();
  	}
  	
}