custom = function() {};

custom.rowTotal = function(){
	var pricePlans = document.getElementsByClassName("pricing");
	var prices = pricePlans[0];
	for (var i = 0; i < prices.length; i++){
		showStyle = prices[i].style;
		displayStyle = showStyle.display;
		if (displayStyle == "inline"){
			selectedOption = document.getElementById(prices[i].id).value;
			selectedOption;
			break;
		}
	}
	if (selectedOption == "Free"){
		document.getElementById("total").innerHTML = "FREE!!!";
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
			document.getElementById("total").innerHTML = "$" + Math.round((convert * numEmployees) * 100) / 100;
		}
		else if (numEmployees < 0){
			//Edited bc did not want alert to pop up if
			//value field was erased (js thinks this is 0)
			alert("==== Please Enter a Nonnegative Number ====")
		}
	}	
}

//hides all other applications 
custom.hideOtherApps = function(str){
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
custom.hideOtherPrices = function(str){
	document.getElementById(str).style.display = "inline";
		var form = document.getElementsByClassName("pricing");
		var elements = form[0];
		for (var i = 0; i < elements.length; i++){
			if (elements[i].id != str){
				document.getElementById(elements[i].id).style.display = "none";
			}
		}
}

//displays the appropriate application
custom.changeApplication = function(){
	var category = document.getElementById("category").value;
	
	if (category === "CRM"){
		appstr = "appcrm";
		custom.hideOtherApps(appstr);
		pricestr = "pricecrm";
		custom.hideOtherPrices(pricestr);
	}	
	else if (category === "Online Forms"){
		str = "appforms";
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

