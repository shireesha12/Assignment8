/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var owName, depositAmount, withdrawalAmount, html = " ";

var bankAccount = function (ownerName) {
	"use strict";
	var balance, owner = owName, currentAmount;
	return {
	getOwnerName: function () {
		return owner;
	},
       getBalance: function () {
       return balance;
    },
    deposit: function (owner, balance, amount) {
		balance += amount;
		currentAmount = balance;
		return balance;
    },
    withdraw: function (amount) {
      
      if (amount <= currentAmount) {
        currentAmount -= amount;
        return "Current balance is: " + currentAmount;
      } else {
        return "Withdrawal amount greater than your balance. You can't withdraw..";
      }
    }
  }
};

var account = bankAccount(owName);

$("name").addEventListener("click", function () {
    "use strict";
    owName = window.prompt("enter your name");
	html += "Owner name is :" + owName + "<br>";
    document.getElementById("accoutdetails").innerHTML = html;
});

$("deposit").addEventListener("click", function () {
    "use strict";
    depositAmount = parseInt(window.prompt("enter deposit amount"), 10);
	if (depositAmount < 0 || isNaN(depositAmount)) {
		window.alert("Please enter non-negative integer");
	} else { 
	if (owName === undefined) {
		window.alert("please enter owner name");
	} else {
		html += "Deposit amount is :" + depositAmount + "<br>";
		html += " Current balance is :" + account.deposit(owName, 0, depositAmount) + "<br>"
        document.getElementById("accoutdetails").innerHTML = html;
	}
	}
	
});

$("withdrawal").addEventListener("click", function () {
    "use strict";
    withdrawalAmount = parseInt(window.prompt("enter withdrawal amount"), 10);
	if (withdrawalAmount < 0 || isNaN(withdrawalAmount)) {
		window.alert("Please enter non-negative integer");
	} else { 
	if (owName === undefined) {
		window.alert("please enter owner name");
	} else {
    html += "Withdrawal amount is :" + withdrawalAmount + "<br>";
    html += account.withdraw(withdrawalAmount) + "<br>";
    document.getElementById("accoutdetails").innerHTML = html;
	}
	}
});