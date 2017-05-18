
// NOTE: ONly variables that you set in the constructor need the underscore
// in the setter


// in each of these functions you probably want to add a failure message
// but I am lazy.


class BankAccount {
	constructor(amount){
		this.balance = typeof amount === 'number' ? amount : 0;

	}

	set balance (val){
		this._balance = val;
		this.balanceUpdateAt  = new Date();
	}

	get balance () {
		return this._balance;
	}
	deposit (amount) {
		this.balance += typeof amount === 'number' ? amount : 0;
	}
	withdrawal(amount){
		this.balance -= typeof amount === 'number' ? amount : 0;
	}

	printBalance () {
		console.log(`Your account balance is: ${this.balance}. Last updated at ${this.balanceUpdateAt}`);
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