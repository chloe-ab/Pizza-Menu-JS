

var sizePrice = 0.00; 
var meatsPrice = 0.00;  
var cheesePrice = 0.00;  
var crustPrice = 0.00;  
var saucePrice = 0.00;  
var veggiesPrice = 0.00;  
var totalPrice = 0.00;  

var sizeName = " ";
var meatsList = [];  
var cheeseName = " ";
var crustName = " ";
var sauceName = " ";
var veggiesList = [];
var total = "TOTAL PRICE:";

var getSizePrice = function() {

	var selectedBtn = document.querySelector('input[name="size"]:checked').value;  // get the value attribute of the first element in the document with class='input[name="size"]:checked'
    var btnValues = ['Personal (10")', 'Medium (12")', 'Large (14")', 'Extra Large (16")'];

	if(selectedBtn == btnValues[0]) {
		sizePrice = 6.00;
	} else if(selectedBtn == btnValues[1]) {
		sizePrice = 10.00;
	} else if(selectedBtn == btnValues[2]) {
		sizePrice = 14.00;
	} else if(selectedBtn == btnValues[3]) {
		sizePrice = 16.00;
	};
	
	sizeName = selectedBtn + " Pizza"; 
	var sizePriceCurrency = "$" + sizePrice.toFixed(2);
	return sizePriceCurrency;
		
} 

var getMeatsListAndPrice = function() {            
	var selectedMeats = [];
	var btnValues = ['Pepperoni', 'Sausage', 'Canadian Bacon','Ground Beef', 'Anchovy', 'Chicken'];
	
	selectedBtns = document.querySelectorAll('input[name="meats"]:checked'); //this is a nodelist, need to get the values of the items in the list
	console.log(selectedBtns);
	
	if (selectedBtns.length == 0) {
		meatsPrice = 0.00;
		meatsList =['(No meat)'];
	}else {
	meatsPrice = parseFloat(selectedBtns.length - 1);
	//if there's at least 1 meat selected, make an array of selected meats from the values of the nodelist of selectedBtns
		for (i = 0; i < selectedBtns.length; i++) {
			meatsList[i] = " " + selectedBtns[i].value;
		}        
	}
	var meatsPriceCurrency = "$" + meatsPrice.toFixed(2);
	return meatsPriceCurrency;
}

var getCheesePrice = function() {
	
	var selectedBtn = document.querySelector('input[name="cheese"]:checked').value;
	var btnValues = ['Extra', 'None', 'Regular'];
		
	if(selectedBtn == btnValues[0]) { 
	  cheesePrice = 3.00;
	}else if (selectedBtn == btnValues[1]) { 
	  cheesePrice = 0.00;
	}else if (selectedBtn == btnValues[2]) { 
		cheesePrice = 0.00;
	}
	
	cheeseName = "Cheese: " + selectedBtn;   //had to do it this way because "none cheese" doesnt make sense
	var cheesePriceCurrency = "$" + cheesePrice.toFixed(2);
	return cheesePriceCurrency;
	
}

var getCrustPrice = function() {
	
	var selectedBtn = document.querySelector('input[name="crust"]:checked').value; 
	var btnValues = ['Cheese Stuffed', 'Plain', 'Garlic Butter', 'Spicy', 'House Special'];
	
	if(selectedBtn == btnValues[0]) { 
	  crustPrice = 3.00;
	}else if (selectedBtn == btnValues[1]) { 
	  crustPrice = 0.00;
	}else if (selectedBtn == btnValues[2]) { 
	  crustPrice = 0.00;
	}else if (selectedBtn == btnValues[3]) { 
	  crustPrice = 0.00;
	}else if (selectedBtn == btnValues[4]) { 
	  crustPrice = 0.00;
	}
	
	crustName = selectedBtn + " Crust";
	var crustPriceCurrency = "$" + crustPrice.toFixed(2);
	return crustPriceCurrency;
}

var getSaucePrice = function() {  

    var selectedBtn = document.querySelector('input[name="sauce"]:checked').value;
	sauceName = selectedBtn + " Sauce";
	var saucePriceCurrency = "$" + saucePrice.toFixed(2);
	return saucePriceCurrency;
}

var getVeggiesListAndPrice = function() {
	
	var selectedVeggies = [];
	var btnValues = ['Tomatoes', 'Onions', 'Olives','Green Peppers', 'Mushrooms', 'Pineapple', 'Spinach', 'Jalapeño'];
	
	selectedBtns = document.querySelectorAll('input[name="veggies"]:checked');
	
	if (selectedBtns.length == 0) {
		veggiesPrice = 0.00;
		veggiesList =['(No veggies)'];
	}else {
	veggiesPrice = parseFloat(selectedBtns.length - 1);
		//if there's at least 1 veggie selected, make an array of selected veggies from the values of the nodelist of selectedBtns
		for (i = 0; i < selectedBtns.length; i++) {
			veggiesList[i] = " " + selectedBtns[i].value;
		}        
	}
	var veggiesPriceCurrency = "$" + veggiesPrice.toFixed(2);
	return veggiesPriceCurrency;
}

var getTotalPrice = function() {
	totalPrice = sizePrice + meatsPrice + cheesePrice + crustPrice + saucePrice + veggiesPrice;
	var totalPriceCurrency = "$" + totalPrice.toFixed(2);
	return totalPriceCurrency;
}
	
//calculate the price breakdown and create the invoice table
var createInvoiceTable = function() {

	row1col2.innerHTML = getSizePrice();
	row1col1.innerHTML = sizeName;
	row2col2.innerHTML = getMeatsListAndPrice();
	row2col1.innerHTML = meatsList.toString();
	row3col2.innerHTML = getCheesePrice();
	row3col1.innerHTML = cheeseName;
	row4col2.innerHTML = getCrustPrice();
	row4col1.innerHTML = crustName;
	row5col2.innerHTML = getSaucePrice();
	row5col1.innerHTML = sauceName;
	row6col2.innerHTML = getVeggiesListAndPrice();
	row6col1.innerHTML = veggiesList.toString();
	row7col2.innerHTML = getTotalPrice();
	row7col1.innerHTML = total;
}

// Get the table element 
var tablePrint = document.getElementById("myTable");
								
var row1 = tablePrint.insertRow(0);
var row2 = tablePrint.insertRow(1);
var row3 = tablePrint.insertRow(2);
var row4 = tablePrint.insertRow(3);
var row5 = tablePrint.insertRow(4);
var row6 = tablePrint.insertRow(5);
var row7 = tablePrint.insertRow(6); 

var row1col1 = row1.insertCell(0);
var row1col2 = row1.insertCell(1);
var row2col1 = row2.insertCell(0);
var row2col2 = row2.insertCell(1);
var row3col1 = row3.insertCell(0);
var row3col2 = row3.insertCell(1);
var row4col1 = row4.insertCell(0);
var row4col2 = row4.insertCell(1);
var row5col1 = row5.insertCell(0);
var row5col2 = row5.insertCell(1);
var row6col1 = row6.insertCell(0);
var row6col2 = row6.insertCell(1);
var row7col1 = row7.insertCell(0);
var row7col2 = row7.insertCell(1);

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// 
var invoiceTable = createInvoiceTable();

// When the user clicks on the button, open the modal and insert the invoice table 
btn.onclick = function() {
	modal.style.display = "block";
	createInvoiceTable();  //added
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



