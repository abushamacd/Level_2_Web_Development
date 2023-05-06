class BankAccount {
  // readonly id: number
  // name: string
  // balance: number

  constructor(
    readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  getBalance() {
    console.log(`My current balance is ${this._balance} `);
  }
  addDeposite(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAccount = new BankAccount(11212, "Shama", 3000);

myAccount.addDeposite(3000);
myAccount.getBalance();
