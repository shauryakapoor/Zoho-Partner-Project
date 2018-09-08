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
//the row whose id is passed; get rid of specificity of html id

//hides all other applications 
custom.hideOtherApps = function(str, rowDetails){
	document.getElementById(str).style.display = "inline";

		var form = document.getElementsByClassName("application");
		var elements = form[0];
		for (var i = 0; i < elements.length; i++){
			if (elements[i].id != str){
				document.getElementById(elements[i].id).style.display = "none";
			}
		}
}

//hides all other prices
custom.hideOtherPrices = function(str, rowDetails){
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

//EDIT: hmm why is additional row entry always also displaying first row details...
//
custom.changeApplication = function(rowDetails){
	console.log(rowDetails);
	rowID = rowDetails.id;
	var rowIndex = 0;
	var cellIndex = 1;
	//console.log(document.getElementById(rowID));
	var cells = rowDetails.getElementsByTagName("td");
	console.log(cells);
		//.rows[rowIndex]));
		//.cells[cellIndex]));
	var categ = cells[0];
	console.log(categ);
	//console.log(categ.selectedOptions);
	console.log(categ);
	//console.log()
	//console.log((rowCategory).value);
	//console.log(row);
	//var category = 

	//old way how to do it based off of raw html form
	var category = document.getElementById("category").value;
	//console.log(document.getElementById("category"));

	if (category === "CRM"){
		appstr = "appcrm";
		custom.hideOtherApps(appstr);
		pricestr = "pricecrm";
		custom.hideOtherPrices(pricestr);
	}	
	else if (category === "Online Forms"){
		str = "appforms";
		console.log("--- testing ---");
		custom.hideOtherApps(str);
		pricestr = "priceforms";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Digital Signature"){
		str = "appsign";
		custom.hideOtherApps(str);
		pricestr = "pricesign";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Social Media Management"){
		str = "appsocial";
		custom.hideOtherApps(str);
		pricestr = "pricesocial";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Website Engagement Monitoring"){
		str = "appsales";
		custom.hideOtherApps(str);
		pricestr = "pricesales";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Survey"){
		str = "appsurvey";
		custom.hideOtherApps(str);
		pricestr = "pricesurvey";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Email Marketing"){
		str = "appcampaigns";
		custom.hideOtherApps(str);
		pricestr = "pricecampaigns";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Website Builder"){
		str = "appsites";
		custom.hideOtherApps(str);
		pricestr = "pricesites";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Website Optimization"){
		str = "apppagesense";
		custom.hideOtherApps(str);
		pricestr = "pricepagesense";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Accounting Software"){
		str = "appbooks";
		custom.hideOtherApps(str);
		pricestr = "pricebooks";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Inventory Management"){
		str = "appinventory";
		custom.hideOtherApps(str);
		pricestr = "priceinventory";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Invoicing Software"){
		str = "appinvoice";
		custom.hideOtherApps(str);
		pricestr = "priceinvoice";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Subscription Management"){
		str = "appsubscription";
		custom.hideOtherApps(str);
		pricestr = "pricesub";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Expense Management"){
		str = "appexpense";
		custom.hideOtherApps(str);
		pricestr = "priceexpense";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Payment Gateway"){
		str = "appcheckout";
		custom.hideOtherApps(str);
		pricestr = "pricecheckout";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Event Management"){
		str = "appbackstage";
		custom.hideOtherApps(str);
		pricestr = "pricebackstage";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Email Hosting"){
		str = "appworkplace";
		custom.hideOtherApps(str);
		pricestr = "pricework";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Chat"){
		str = "appcliq";
		custom.hideOtherApps(str);
		pricestr = "pricecliq";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Project Management"){
		str = "appprojects";
		custom.hideOtherApps(str);
		pricestr = "priceprojects";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Bug Tracking Software"){
		str = "appbugtracker";
		custom.hideOtherApps(str);
		pricestr = "pricebugtracker";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Internal Social Network"){
		str = "appconnect";
		custom.hideOtherApps(str);
		pricestr = "priceconnect";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Webinar Software"){
		str = "appmeeting";
		custom.hideOtherApps(str);
		pricestr = "pricemeeting";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Password Management"){
		str = "appvault";
		custom.hideOtherApps(str);
		pricestr = "pricevault";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Note Taking"){
		str = "appnotebook";
		custom.hideOtherApps(str);
		pricestr = "pricenotebook";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Helpdesk Software"){
		str = "appdesk";
		custom.hideOtherApps(str);
		pricestr = "pricedesk";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Remote Support and Access"){
		str = "appassist";
		custom.hideOtherApps(str);
		pricestr = "priceassist";
		custom.hideOtherPrices(pricestr);
	}
	else if (category === "Recruitment Software"){
		str = "apprecruit";
		custom.hideOtherApps(str);
		pricestr = "pricerecruit";
		custom.hideOtherPrices(pricestr);
	}
	//"Other" category; in case developer wants to add more fields
	else{
		str = "appother";
		custom.hideOtherApps(str);
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





