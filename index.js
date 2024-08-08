'use strict'

const acc1 = {
	name: "Eteng Moses Effa",
	acctNumber: 1679390388,
	bankName: "access bank",
	balance: 0,
	pin: 1234,
}
const acc2 = {
	name: "Jeremy Gold",
	acctNumber: 1679399988,
	bankName: "access bank",
	balance: 2000,
	pin: 2345,
}
const acc3 = {
	name: "Mary Martha",
	acctNumber: 1678990388,
	bankName: "access bank",
	balance: 0,
	pin: 1234,
}

const accounts = [acc1, acc2, acc3];

let user;

const checkAcct = (accNum) => {
	const pin = +prompt('Enter your pin');
	user = accounts.find((acc) => acc.acctNumber === accNum)

	const validPin = checkPin(user, pin);

	if (!user) {
		alert("Enter valid Account Number")
		return false
	}
	if (!validPin) {
		alert("Enter valid Pin")
		return false
	}

	alert(`${user.name}
${user.acctNumber}
${user.bankName}`);
	return user;
}

const checkPin = (user, pin) => {
	if (user.pin === pin) {
		return true;
	}
	return false;
}

const tranOption = () => {
	const option = +prompt(
		`Enter your Transaction Option
		1. Transfer
		2. withdraw
		3. balance `
	)

	return option;
}

const transferOption = () => {
	const recipient = +prompt('Enter recipient Account');
	if (recipient === user.acctNumber) {
		alert("You cant transfer to yourself ")
		return
	};

	const valid = accounts.find((acc) => acc.acctNumber === recipient)

	if (!valid) {
		alert("No Account with that details")
		return;
	}
	alert(`${valid.name}
${valid.acctNumber}
${valid.bankName}`);

	const amount = +prompt("Enter amount");
	if (amount <= 0) {
		alert("Amount must be greater than 0");
		return
	}



	const pin = +prompt("Enter Pin");
	const res = checkPin(user, pin);
	if (!res) {
		alert("Wrong Pin");
		return;
	};

	if (amount > user.balance) {
		alert("Insufficient Funds");
		return;
	}

	valid.balance += amount;
	alert("SucessFull");
}

const withdrawOption = () => {
	const amount = +prompt("Enter withdrawal amount");
	if (amount <= 0) {
		alert("Amount must be greater than 0");
		return
	}

	if (amount > user.balance) {
		alert("Insufficient Funds....")
		return;
	}
	user.balance += amount;
	alert('succesfull....!!!')

}


const balanceOption = () => {
	alert(`Balance: ${user.balance}`);
}



// Start the program
function startTransaction() {
	const cardNum = +prompt("Enter your card number");
	const valid = checkAcct(cardNum);
	if (!valid) return;

	const option = tranOption();

	if (option === 1) {
		transferOption();
	}
	if (option === 2) {
		withdrawOption();
	}
	if (option === 3) {
		balanceOption();
	}
}



let isActive = true;
while (isActive) {
	alert("Welcome to Youthrive bank")
	if (isActive) {
		startTransaction();
		isActive = confirm("Do you want to continue");
	} else {
		break;
	}
}
