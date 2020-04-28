
// Ejemplo 1
	var debt = 100; // deuda
	var balance = 500; // saldo

	if (balance < debt){
		console.log("No hay saldo para pagar la deuda");
	} else{
		console.log("Si hay saldo para pagar la deuda");
	}



// Ejemplo 2
	var balance = 200;
	var amountToPay = 101;
	var validUser = true;

	if (balance > amountToPay && validUser){
		console.log("Se pago correctamente");
	} else{
		console.log("No se pudo pagar");
	}


// Ejemplo 3
	amountToPay = 1000;
	var cash = 500;
	var creditCard = true;

	if (cash >= amountToPay || creditCard){
		console.log("Pago realizado");
	} else{
		console.log("Te falta efectivo");
	}


// Ejemplo 4
	var age1 = 20;
	var age2 = "20";

	console.log ("Comparando variables");
	if (age1 == age2){
		console.log("son iguales, pero no estrictamente");
	} else {
		console.log("Son diferentes");
	}


	if (age1 === age2){
		console.log("son extrictemente iguales");
	} else {
		console.log("Son diferentes");
	}

// Ejemplo 5
	console.log("Comparando textos");
	var text1 = "Hola Mundo";
	var text2 = "hola mundo";
	if (text1 == text2){
		console.log("Son iguales");
	} else{
		console.log("Son diferentes");
	}

	if (text1.toLowerCase() == text2.toLowerCase()){
		console.log("Son iguales");
	} else{
		console.log("Son diferentes");
	}

// Ejemplo 6

	var wayToPay = "TC";

	switch (wayToPay){
		case "TC":
			console.log("Se pago con TC");
			break;
		case "Efectivo":
			console.log("Se pago en efectivo");
			break;
		case "PayPal":
			console.log("Se pago con PayPal");
			break;	
		default:
			console.log("Metodo no valido")
	}