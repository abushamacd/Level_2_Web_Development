class BankAccount {
  // readonly id: number
  // name: string
  // balance: number

  constructor(
    readonly id: number,
    public name: string,
    public balance: number
  ) {}

  getBalance() {
    console.log(`My current balance is ${this.balance} `);
  }
}

const myAccount = new BankAccount(11212, "Shama", 3000);
myAccount.getBalance();
