function isPrime(num, divisor = 2) {
    // Base cases for efficiency
    if (num <= 1) {
      return false; // 1 or less are not prime
    } else if (num <= 3) {
      return true; // 2 and 3 are prime
    } else if (num % 2 === 0 || num % 3 === 0) {
      return false; // Even numbers and multiples of 3 are not prime (except 2 and 3)
    }
  
    // Recursive check for divisibility by odd numbers starting from 5
    if (divisor * divisor > num) {
      return true; // No divisors found, number is prime
    } else {
      return !(num % divisor === 0 || num % (divisor + 2) === 0); // Check divisibility by current and next odd number
    }
  }
  
  // Example usage
  const number = 11;
  const isNumberPrime = isPrime(number);
  
  console.log(`${number} is prime: ${isNumberPrime}`);
  