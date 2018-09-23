custom = function() {};

custom.rowTotal = function(){
	var pricePlans = document.getElementsByClassName("pricing");
	var prices = pricePlans[0];
	for (var i = 0; i < prices.length; i++){
		showStyle = prices[i].style;
		displayStyle = showStyle.display;
		if (displayStyle == "inline"){
			selectedOption = document.getElementById(prices[i].id).value;
			//selectedOption;
			break;
		}
	}

	if (selectedOption == "Free"){
		//document.getElementById("total").innerHTML = "FREE!!!";
		document.getElementById("total").value = "Free! B/c Zoho loves u :)";
	}
	//Edge cases: decimals, after $, rounding floating-points
	else{
		//stackoverflow.com/questions/26706724/extract-number-with-decimals-in-string-javascript
		//stackoverflow.com/questions/38110419/is-there-a-difference-between-d-and-d
		//var num = string.match(/[\d\.]+/g)[0];

		//stackoverflow.com/questions/24614758/regex-to-grab-only-the-digits-after-a-dollar-sign
		//var num = string.match(/\$(\d+)/)[1];

		//Official regex
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
		var num = selectedOption.match(/\$(\d+)\.\d+/)[0];

		var convert = num.substring(1, num.length);

		numEmployees = document.getElementById("numEmp").value;

		//Only calculate when at least 0 employee is inputted
		if (numEmployees >= 0){
			//round to two decimal places, if needed
			//document.getElementById("total").innerHTML = "$" + Math.round((convert * numEmployees) * 100) / 100;
			var total = "$" + Math.round((convert * numEmployees) * 100) / 100;
			document.getElementById("total").value = total;
		}	
		else if (numEmployees < 0){
			//Edited bc did not want alert to pop up if
			//value field was erased (js thinks this is 0)
			alert("==== Please Enter a Nonnegative Number ====")
		}
	}	
}

//The idea for the next three functions is to apply the change to
//the row whose id is passed; get rid of specificity of html id.
//thus, need to pass in the id, which row we're looking at, 

//hides all other applications 
custom.hideOtherApps = function(str, rowApp, rowDetails){
	/*var x = document.getElementsByClassName("application");
	console.log(x);
	var app = x[rowApp];
	console.log(app);
	console.log(app.value);*/

	//get the class name from the select and then value
	var y = document.getElementsByClassName(str);
	console.log(y);
	var z = y[rowApp];
	console.log(rowApp);
	console.log(z);
	console.log(z.value);
	z.style.display = "inline";
	console.log(z.style.display)
	//console.log(document.getElementById(str));

	//document.getElementById(str).style.display = "inline";
		var form = document.getElementsByClassName("application");
		console.log(form);
		var elements = form[rowApp];
		console.log(elements);
		for (var i = 0; i < elements.length; i++){
			if (elements[i].className != str){
				//document.getElementById(elements[i].className).style.display = "none";
				console.log(elements[i].className);
				var temp = document.getElementsByClassName(elements[i].className);
				console.log(temp);
				var temp2 = temp[rowApp];
				console.log(temp2);
				temp2.style.display = "none";
				console.log(temp2.style.display);
				//(elements[i].className).style.display = "none";
			}
		}
}

//hides all other prices
custom.hideOtherPrices = function(str, rowPrice, rowDetails){


	document.getElementById(str).style.display = "inline";
	
		var form = document.getElementsByClassName("pricing");
		//console.log(form);
		var elements = form[0];
		for (var i = 0; i < elements.length; i++){
			if (elements[i].id != str){
				document.getElementById(elements[i].id).style.display = "none";
			}
		}
}

//displays the appropriate application
//in the respective row

//use .value for form elements; innerHTML otherwise
//two of the same unique ID is invalid HTML
custom.changeApplication = function(rowDetails){
	console.log(rowDetails);
	rowID = rowDetails.id;
	//var rowIndex = 0;
	//var cellIndex = 1;
	//console.log(document.getElementById(rowID));

	//var cells = rowDetails.getElementsByTagName("td");
	//console.log(cells);

		//.rows[rowIndex]));
		//.cells[cellIndex]));
	//var categ = cells[0];
	//console.log(categ);
	//console.log(categ);
	var x = document.getElementsByClassName("category");
	console.log(x);

	//use regex
	var regex = /\d+/g;
	//is returned in the form of an array, so use [0]
	var currentRow = rowID.match(regex)[0];
	console.log(currentRow);
	//subtract by 1 to get the correct row
	var adjust = currentRow - 1;
	var category = x[adjust].value;
	console.log(category);

	//https://stackoverflow.com/questions/610336/retrieving-the-text-of-the-selected-option-in-select-element
	//var test = document.getElementById('category').options[document.getElementById('category').selectedIndex].text;
	//console.log(test);
	//console.log(document.getElementById('category').options);

	//console.log(document.getElementById('category').selectedIndex);
	//console.log()
	//console.log((rowCategory).value);
	//console.log(row);
	//var category = 



	//old way how to do it based off of raw html form
	//var category = document.getElementById("category").value;
	//console.log(category);
	//console.log(document.getElementById("category"));

	if (category === "CRM"){
		appstr = "appcrm";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricecrm";
		custom.hideOtherPrices(pricestr);
	}	
	else if (category === "Online Forms"){
		appstr = "appforms";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "priceforms";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Digital Signature"){
		appstr = "appsign";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricesign";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Social Media Management"){
		appstr = "appsocial";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricesocial";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Website Engagement Monitoring"){
		appstr = "appsales";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricesales";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Survey"){
		appstr = "appsurvey";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricesurvey";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Email Marketing"){
		appstr = "appcampaigns";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricecampaigns";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Website Builder"){
		appstr = "appsites";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricesites";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Website Optimization"){
		appstr = "apppagesense";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricepagesense";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Accounting Software"){
		appstr = "appbooks";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricebooks";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Inventory Management"){
		appstr = "appinventory";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "priceinventory";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Invoicing Software"){
		appstr = "appinvoice";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "priceinvoice";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Subscription Management"){
		appstr = "appsubscription";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricesub";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Expense Management"){
		appstr = "appexpense";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "priceexpense";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Payment Gateway"){
		appstr = "appcheckout";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricecheckout";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Event Management"){
		appstr = "appbackstage";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricebackstage";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Email Hosting"){
		appstr = "appworkplace";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricework";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Chat"){
		appstr = "appcliq";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricecliq";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Project Management"){
		appstr = "appprojects";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "priceprojects";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Bug Tracking Software"){
		appstr = "appbugtracker";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricebugtracker";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Internal Social Network"){
		appstr = "appconnect";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "priceconnect";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Webinar Software"){
		appstr = "appmeeting";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricemeeting";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Password Management"){
		appstr = "appvault";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricevault";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Note Taking"){
		appstr = "appnotebook";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricenotebook";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Helpdesk Software"){
		appstr = "appdesk";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricedesk";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Remote Support and Access"){
		appstr = "appassist";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "priceassist";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Recruitment Software"){
		appstr = "apprecruit";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "pricerecruit";
		custom.hideOtherPrices(pricestr);
	}
	//"Other" category; in case developer wants to add more fields
	else{
		appstr = "appother";
		custom.hideOtherApps(appstr, adjust, rowDetails);
		pricestr = "priceother";
		custom.hideOtherPrices(pricestr);
	}
}

//https://stackoverflow.com/questions/31470273/perform-calculations-on-dynamically-added-rows
custom.addRow = function(tableID){
	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;
	//don't forget, includes the title row!
	//insert the row at this position in the table
	var row = table.insertRow(rowCount);
	var colCount = table.rows[0].cells.length;
	row.id = 'row_' + rowCount;
	console.log(row.id);
	//insert columns for new row
	for (var i = 0; i < colCount; i++){
		var newcell = row.insertCell(i);
		newcell.outerHTML = table.rows[1].cells[i].outerHTML;
	}

	//three important cells for calculation: price plan, # employees, total
	//var listItems = row.getElementsByTagName("input");
	//listItems should be of length 3

	/*var items = row.getElementsByTagName("td");
	console.log(items);
	console.log((items[2].id));*/

	var items = row.getElementsByTagName("form");
	//console.log(items);
	for (var i = 0; i < items.length; i++){
		items[i].setAttribute("onchange", "custom.changeApplication("+row.id+")");
	}

	/*var items = row.getElementsByClassName("pricing");
	console.log(items);
	var prices = items[0];
	console.log(prices);
	for (var i = 0; i < prices.length; i++){
		console.log(prices[i]);
		prices[i].setAttribute("onchange", "custom.changeApplication()");
	}*/

	/*var pricePlans = document.getElementsByClassName("pricing");
	console.log(pricePlans);
	var prices = pricePlans[0];
	console.log(prices);
	for (var i = 0; i < prices.length; i++){
		console.log(prices[i]);
		showStyle = prices[i].style;
		displayStyle = showStyle.display;
		console.log(displayStyle);
		if (displayStyle == "inline"){
			selectedOption = document.getElementById(prices[i].id).value;
			//selectedOption;
			break;
		}
	
	}*/
	/*console.log(listItems)
	for (i = 0; i < listItems.length; i++){
		listItems[i].setAttribute("oninput", custom.calculate(row.id));
	}*/

}

//https://stackoverflow.com/questions/31470273/perform-calculations-on-dynamically-added-rows
custom.calculate = function(elementID){
	var mainRow = document.getElementById(elementID);
	console.log(mainRow);
	var box1 = mainRow.querySelectorAll("[id=pricing]")[0].value;
	console.log(box1);
	var box2 = mainRow.querySelectorAll("[id=numEmp]")[0].value;
	var total = mainRow.querySelectorAll("[id=total]")[0];
	console.log(total);
	var result = box1 * box2;
	total.value = result;
}
//https://codereview.stackexchange.com/questions/13794/
//dynamically-adding-rows-to-an-accessible-html-form
/*$(document).ready(function(){
	var $button = $('#addentry'),
	$row = $('.table').clone();
	$button.click(function(){
		$row.clone().insertBefore($button);
	});
});*/

/*https://stackoverflow.com/questions/47125014/javascript-add-the-same-form-multiple-times-if-the-user-requests-it
$(document).ready(function(){
	var placeholder = $("#categories-placeholder");
	var add_button = $("#addentry");
	var row = $(".entry-row");

	$(add_button).click(function(e){
		e.preventDefault();
		$(placeholder).append(row);
	});
});*/

/*custom.addEntry = function(){
	var row = document.getElementById("entryRow");
	var table = document.getElementById("table");
	var clone = row.cloneNode(true);
	clone.id = "newID";
	table.appendChild(clone);
}*/

/*$(document).ready(function() {
    $("button").on("click", function() {
      $("table").append($("table").find("#entryRow").clone().removeAttr("id").find("input").val("").end());
    });
});*/





