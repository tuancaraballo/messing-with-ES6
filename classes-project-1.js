// Create BankAccount class
// Allow constructor cfunction to take balance, f=default to zero if not num
// Deposit an amount
// Withdrawal amount
// printBalance() 


// in each of these functions you probably want to add a failure message
// but I am lazy.
class BankAccount {
	constructor(amount){
		console.log(typeof amount)
		this.amount = typeof amount === 'number' ? amount : 0;

	}
	deposit (amount) {
		this.amount += typeof amount === 'number' ? amount : 0;
	}
	withdrawal(amount){
		this.amount -= typeof amount === 'number' ? amount : 0;
	}

	printBalance () {
		console.log('Your account balance is: ' + this.amount);
	}
}

var account = new BankAccount(100);
account.deposit(100);
account.withdrawal(10);
account.printBalance();

var account2 = new BankAccount('asdfasf');
account2.deposit('asdff');
account2.withdrawal(true);
account2.printBalance();