class Counter {
  static num: number = 0;

  static increment(): number {
    return (Counter.num = Counter.num + 1);
  }
  static decrement(): number {
    return (Counter.num = Counter.num - 1);
  }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
console.log(Counter.increment());
