custom = function() {};

custom.rowTotal = function(){
	var string = document.getElementById("pricing").value;
	console.log(string);
	/*var string2 = document.getElementById(string).textContent;
	console.log(string2);
	var string2 = document.getElementById(string).value;
	console.log(string2);*/

	//https://stackoverflow.com/questions/10003683/javascript-get-number-from-string
	var num = string.match(/\d+/)[0];
	var convert = parseInt(num);
	console.log(convert);

	numEmployees = document.getElementById("numEmp").value;
	console.log(numEmployees);

	//account for (-) numbers! User errors
	if (numEmployees > 0){
		document.getElementById("total").innerHTML = convert * numEmployees;
	}
	else{
		alert("==== Please Enter a Number Greater Than 0 ====")
	}
	
}