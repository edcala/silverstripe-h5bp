//Javascript main run

//form validation
document.getElementById('Form_').onsubmit = function() {
    var state = document.getElementById('Form__state');
    var enctype = document.getElementById('Form__enquiretype');
	var selectedValue = enctype.options[enctype.selectedIndex].value;
	var err = "";

	if(document.getElementById('Form__firstname').value == "") err += "Please enter your first name\n";
	if(document.getElementById('Form__surname').value == "") err += "Please enter your sirname\n";
	if(document.getElementById('Form__email').value == "") err += "Please enter your email\n";
	if(document.getElementById('Form__number').value == "") err += "Please enter your phone number\n";
	if(document.getElementById('Form__address').value == "") err += "Please enter your address\n";
	if(document.getElementById('Form__suburb').value == "") err += "Please enter your suburb\n";
	if(state.selectedIndex == 0) err += "Please select your state\n";
	if(document.getElementById('Form__postcode').value == "") err += "Product name must not be empty\n";
	if(enctype.selectedIndex == 0) err += "Please select your enquiry type\n";



	//Check that product name, product size, use-by date and batch code are not empty, if the enquiry type is "Product Complaint", 
	if(selectedValue == "Complaint"){
		//check that product name, product size, use-by date and batch code are not empty
		
		if(document.getElementById('Form__pname').value == "") err += "Product name must not be empty\n";
		if(document.getElementById('Form__psize').value == "") err += "Product size must not be empty\n";
		if(document.getElementById('Form__useby').value == "") err += "Use-by date must not be empty\n";
	}
	
	if(err != ""){
		alert(err);
		return false;
	} 
};