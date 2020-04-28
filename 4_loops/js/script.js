
// for
	console.log("Impresión con for");
	var premierLeague = new Array("Chelsea", "Manchester United", "Liverpool", "Arsenal");
	for (var i = 0; i < premierLeague.length; i++) {
		console.log(premierLeague[i]);
	}

// while
	console.log("Impresión con while");
	var premierLeague = new Array("Chelsea", "Manchester United", "Liverpool", "Arsenal");
	var i = 0;
	while (i < premierLeague.length){
		console.log(premierLeague[i]);
		i++;
	}

// do-while
	console.log("Impresión con do-while");
	var premierLeague = new Array("Chelsea", "Manchester United", "Liverpool", "Arsenal");
	var i = premierLeague.length-1;
	do {
		console.log(premierLeague[i]);
		i--;
	} while (i >= 0);

