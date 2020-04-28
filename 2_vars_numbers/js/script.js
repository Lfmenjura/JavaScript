	var gender = 'f';
	var name = "Lucas";
	var number1 = "3.1416";
	var number2 = 20.14;
	var number3 = -5;
	var number4 = -23.45;
	var number5 = 8;
	var ok = true;

	console.log("var gender - tipo ", typeof(gender), "- valor" , gender);
	console.log("var name - tipo ", typeof(name),"- valor", name);
	console.log("var number1 - tipo ", typeof(number1),"- valor", number1);
	console.log("var number2 - tipo ", typeof(number2),"- valor", number2);
	console.log("var number3 - tipo ", typeof(number3),"- valor", number3);
	console.log("var number4 - tipo ", typeof(number4),"- valor", number4);
	console.log("var number5 - tipo ", typeof(number5),"- valor", number5);
	console.log("var ok - tipo ", typeof(ok),"- valor", ok);

	// Convertir String a numero
	console.log(number1);
	var number6 = parseFloat(number1)+ 5; 
	console.log("var number6 = number1+5 ", number6); 

	// Convertir String a numero
	console.log("Number5+3 ",parseInt(number5+3)); 

	// otra forma de convertir a numero
	var number7 = Number(number1);
	console.log("var number7 ",number7);
	// imprimir solo un numero especifico de decimales
	console.log(number7.toFixed(2)); // muestra el valor con solo 2 decimales