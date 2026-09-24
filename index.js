// Function 1: Calculate 10% tax
function calculateTax(amount) {
  return amount * 0.10;
}

// Function 2: Convert string to uppercase
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3: Find the larger of two numbers
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
  // Alternatively, you can use: return Math.max(num1, num2);
}

// Function 4: Check if a word is a palindrome
function isPalindrome(word) {
  let reversed = word.split('').reverse().join('');
  return word === reversed;
}

// Function 5: Calculate price after a percentage discount
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}




