
// LESSON: when the subclass's constructor is the same as the parent class,
//         then you don't need to rewrite it. 
class BankAccount {
	constructor (balance) {
		this.balance = typeof balance === 'number' ? balance : 0;
	}
	set balance (val) {
		this._balance = val;
		this.balanceUpdatedAt = new Date();
	}
	get balance () {
		return this._balance;
	}
	deposit (amount) {
		if (typeof amount === 'number') {
			this.balance += amount;
			return true;
		} else {
			console.log('Amount must be a number');
			return false;
		}
	}
	withdrawal (amount) {
		if (typeof amount === 'number') {
			this.balance -= amount;
			return this.balance;
		} else {
			console.log('Amount must be a number');
			return false;
		}
	}
	printBalance () {
		console.log(`Your balance is $${this.balance}! Last update at ${this.balanceUpdatedAt}.`);
	}
}

class SavingsAccount extends BankAccount {
	withdrawal(amount) {
		console.log('Whops! sorry, but you cannot withdraw from your Savings account');
	}

	deposit(amount){
		if(super.deposit(amount)){
			console.log('Congrats you have saved ' + amount);
		}
	}
}
var account = new SavingsAccount(500);
account.deposit(100);
account.printBalance();
account.withdrawal(25);
account.printBalance();
