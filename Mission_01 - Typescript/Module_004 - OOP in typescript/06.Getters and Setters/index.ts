class BankAccount {
  constructor(
    readonly id: number,
    public name: string,
    private _balance: number
  ) {}
  // getter
  get balance(): number {
    return this._balance;
  }

  getBalance() {
    console.log(`My current balance is ${this._balance} `);
  }

  // setter
  set deposite(amount: number) {
    this._balance = this._balance + amount;
  }

  addDeposite(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAccount = new BankAccount(11212, "Shama", 3000);

myAccount.addDeposite(3000);
myAccount.getBalance();
myAccount.deposite = 1200;
console.log(myAccount.balance);
