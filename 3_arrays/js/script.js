/*	var premierLeague =["Chelsea", "Manchester United", "Liverpool", "Arsenal"];
	console.log(premierLeague);
	console.log(premierLeague[2]);
	console.log(premierLeague.length);

	
	premierLeague[2] = "Leicester";
	console.log(premierLeague);
	premierLeague.pop(); //retira el último que ingresó - se comporta como pila
	console.log(premierLeague);
*/
	var ligueBBVA = new Array("Barcelona", "Real Madrid", "Atlético Madrid", "Athletic Club", "Real sociedad");
	console.log(ligueBBVA);

	var pos = ligueBBVA.indexOf("Real Madrid");
	console.log("Real Madrid está ubicado en la posición " , pos);
	ligueBBVA.splice(1,2); // elimina a partir de la posición 1 (primer argumento), se borran 2 (segundo argumento) posiciones
	console.log("Se borraron dos elementos a partir de la posición 1, es decir Real Madrid y Atlético Madrid");
	console.log(ligueBBVA);
	console.log("Invierte el Arreglo y lo imprime");
	console.log(ligueBBVA.reverse());
	console.log("Se imprime el arreglo, pero ya está invertido");
	console.log(ligueBBVA);
	console.log("Volvemos a invertir el arreglo y a imprimirlo");
	console.log(ligueBBVA.reverse());
	console.log("El arreglo queda como estaba originalmente");
	console.log(ligueBBVA);

	console.log("Filtro");
	var newArray = ligueBBVA.filter(function (team){
		return (team != "Real sociedad");
	});
	console.log(newArray);
	