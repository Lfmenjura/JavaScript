	var date1 =  new Date();

	console.log ("El año actual es: " + date1.getFullYear());
	console.log ("El día es: " + date1.getDate());
	var month = date1.getMonth()+1; // al mes se le suma 1
	console.log ("El mes es: " + month); 
	console.log ("El día de la semana es: " + date1.getDay()); // domingo es 0
	console.log ("La hora es: " + date1.getHours());
	console.log ("con " + date1.getMinutes() + " minutos");