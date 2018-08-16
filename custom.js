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

custom.changeApplication = function(){
	var category = document.getElementById("category").value;
	console.log(category);
	if (category === "CRM"){
		document.getElementById("application").value = "Zoho CRM";
	}	
	else if (category === "Online Forms"){
		document.getElementById("application").value = "Zoho Forms";
	}
	else if (category === "Digital Signature"){
		document.getElementById("application").value = "Zoho Sign";
	}
	else if (category === "Social Media Management"){
		document.getElementById("application").value = "Zoho Social";
	}
	else if (category === "Website Engagement Monitoring"){
		document.getElementById("application").value = "SalesIQ";
	}
	else if (category === "Survey"){
		document.getElementById("application").value = "Zoho Survey";
	}
	else if (category === "Email Marketing"){
		document.getElementById("application").value = "Zoho Campaigns";
	}
	else if (category === "Website Builder"){
		document.getElementById("application").value = "Zoho Sites";
	}
	else if (category === "Website Optimization"){
		document.getElementById("application").value = "Pagesense";
	}
	else if (category === "Accounting Software"){
		document.getElementById("application").value = "Zoho Books";
	}
	else if (category === "Inventory Management"){
		document.getElementById("application").value = "Zoho Inventory";
	}
	else if (category === "Invoicing Software"){
		document.getElementById("application").value = "Zoho Invoice";
	}
	else if (category === "Subscription Management"){
		document.getElementById("application").value = "Zoho Subscription";
	}
	else if (category === "Expense Management"){
		document.getElementById("application").value = "Zoho Expense";
	}
	else if (category === "Payment Gateway"){
		document.getElementById("application").value = "Zoho Checkout";
	}
	else if (category === "Event Management"){
		document.getElementById("application").value = "Zoho Backstage";
	}
	else if (category === "Email Hosting"){
		document.getElementById("application").value = "Workplace";
	}
	else if (category === "Chat"){
		document.getElementById("application").value = "Zoho Cliq";
	}
	else if (category === "Project Management"){
		document.getElementById("application").value = "Zoho Projects";
	}
	else if (category === "Bug Tracking Software"){
		document.getElementById("application").value = "Zoho Bugtracker";
	}
	else if (category === "Internal Social Network"){
		document.getElementById("application").value = "Zoho Connect";
	}
	else if (category === "Webinar Software"){
		document.getElementById("application").value = "Zoho Meeting";
	}
	else if (category === "Password Management"){
		document.getElementById("application").value = "Zoho Vault";
	}
	else if (category === "Note Taking"){
		document.getElementById("application").value = "Zoho Notebook";
	}
	else if (category === "Helpdesk Software"){
		document.getElementById("application").value = "Zoho Desk";
	}
	else if (category === "Remote Support and Access"){
		document.getElementById("application").value = "Zoho Assist";
	}
	else if (category === "Recruitment Software"){
		document.getElementById("application").value = "Zoho Recruit";
	}
	//"Other" category; in case developer wants to add more fields
	else{
		document.getElementById("application").value = "Other";
	}



}