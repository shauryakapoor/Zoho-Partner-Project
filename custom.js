custom = function() {};

custom.rowTotal = function(){
	var string = document.getElementById("pricing").value;
	if (string === "Free"){
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
		var num = string.match(/\$(\d+)\.\d+/)[0];

		console.log(num);
		var convert = num.substring(1, num.length);
		console.log(convert);

		numEmployees = document.getElementById("numEmp").value;
		//console.log(numEmployees);

		//Only calculate when at least 1 employee is inputted
		if (numEmployees > 0){
			//round to two decimal places, if needed
			document.getElementById("total").innerHTML = "$" + Math.round((convert * numEmployees) * 100) / 100;
		}
		else{
			alert("==== Please Enter a Number Greater Than 0 ====")
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

//displays the appropriate application
custom.changeApplication = function(){
	var category = document.getElementById("category").value;
	
	if (category === "CRM"){
		str = "appcrm";
		custom.hideOtherApps(str);
	}	
	else if (category === "Online Forms"){
		str = "appforms";
		custom.hideOtherApps(str);
	}
	else if (category === "Digital Signature"){
		str = "appsign";
		custom.hideOtherApps(str);
	}
	else if (category === "Social Media Management"){
		str = "appsocial";
		custom.hideOtherApps(str);
	}
	else if (category === "Website Engagement Monitoring"){
		str = "appsales";
		custom.hideOtherApps(str);
	}
	else if (category === "Survey"){
		str = "appsurvey";
		custom.hideOtherApps(str);
	}
	else if (category === "Email Marketing"){
		str = "appcampaigns";
		custom.hideOtherApps(str);
	}
	else if (category === "Website Builder"){
		str = "appsites";
		custom.hideOtherApps(str);
	}
	else if (category === "Website Optimization"){
		str = "apppagesense";
		custom.hideOtherApps(str);
	}
	else if (category === "Accounting Software"){
		str = "appbooks";
		custom.hideOtherApps(str);
	}
	else if (category === "Inventory Management"){
		str = "appinventory";
		custom.hideOtherApps(str);
	}
	else if (category === "Invoicing Software"){
		str = "appinvoice";
		custom.hideOtherApps(str);
	}
	else if (category === "Subscription Management"){
		str = "appsubscription";
		custom.hideOtherApps(str);
	}
	else if (category === "Expense Management"){
		str = "appexpense";
		custom.hideOtherApps(str);
	}
	else if (category === "Payment Gateway"){
		str = "appcheckout";
		custom.hideOtherApps(str);
	}
	else if (category === "Event Management"){
		str = "appbackstage";
		custom.hideOtherApps(str);
	}
	else if (category === "Email Hosting"){
		str = "appworkplace";
		custom.hideOtherApps(str);
	}
	else if (category === "Chat"){
		str = "appcliq";
		custom.hideOtherApps(str);
	}
	else if (category === "Project Management"){
		str = "appprojects";
		custom.hideOtherApps(str);
	}
	else if (category === "Bug Tracking Software"){
		str = "appbugtracker";
		custom.hideOtherApps(str);
	}
	else if (category === "Internal Social Network"){
		str = "appconnect";
		custom.hideOtherApps(str);
	}
	else if (category === "Webinar Software"){
		str = "appmeeting";
		custom.hideOtherApps(str);
	}
	else if (category === "Password Management"){
		str = "appvault";
		custom.hideOtherApps(str);
	}
	else if (category === "Note Taking"){
		str = "appnotebook";
		custom.hideOtherApps(str);
	}
	else if (category === "Helpdesk Software"){
		str = "appdesk";
		custom.hideOtherApps(str);
	}
	else if (category === "Remote Support and Access"){
		str = "appassist";
		custom.hideOtherApps(str);
	}
	else if (category === "Recruitment Software"){
		str = "apprecruit";
		custom.hideOtherApps(str);
	}
	//"Other" category; in case developer wants to add more fields
	else{
		str = "appother";
		custom.hideOtherApps(str);
	}



}