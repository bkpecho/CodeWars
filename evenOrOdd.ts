// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

export function evenOrOdd(n:number):string {
  return n % 2 === 0 ? "Even" : "Odd"
}
