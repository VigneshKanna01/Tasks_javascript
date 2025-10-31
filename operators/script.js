
// 1. Sum, difference, product, quotient
let a = 20, b = 10;
console.log("1. Sum:", a + b, "Difference:", a - b, "Product:", a * b, "Quotient:", a / b);

// 2. Average of three numbers
let n1 = 10, n2 = 20, n3 = 30;
console.log("2. Average:", (n1 + n2 + n3) / 3);

// 3. Area of a rectangle
let length = 5, breadth = 3;
console.log("3. Area of rectangle:", length * breadth);

// 4. Celsius to Fahrenheit
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("4. Temperature in Fahrenheit:", fahrenheit);

// 5. Remainder
console.log("5. Remainder:", a % b);

// 6. Increase by 10
let num = 5;
num += 10;
console.log("6. After +=10:", num);

// 7. Multiply by 5
num = 4;
num *= 5;
console.log("7. After *=5:", num);

// 8. Decrease by 3
num = 10;
num -= 3;
console.log("8. After -=3:", num);

// 9. Divide by 2
num = 20;
num /= 2;
console.log("9. After /=2:", num);

// 10. Combined example
let x = 5;
x += 2; x *= 3; x -= 4;
console.log("10. Combined assignment:", x);

// 11. Equal or not
console.log("11. Are 10 and 10 equal?", 10 == 10);

// 12. Greater number
console.log("12. Is 15 greater than 12?", 15 > 12);

// 13. Compare two strings
let s1 = "hello", s2 = "hello";
console.log("13. Are strings same?", s1 === s2);

// 14. Less than or equal to 100
let val = 90;
console.log("14. <=100:", val <= 100);

// 15. Strict equality
console.log("15. Strictly equal:", 10 === '10');

// 16. Number between 10 and 50
let num1 = 25;
console.log("16. Between 10 and 50:", num1 > 10 && num1 < 50);

// 17. Less than 10 or greater than 100
num1 = 5;
console.log("17. <10 or >100:", num1 < 10 || num1 > 100);

// 18. NOT operator
let isTrue = false;
console.log("18. NOT:", !isTrue);

// 19. Complex condition
let age = 25, hasLicense = true;
console.log("19. Complex condition:", (age >= 18 && hasLicense) || age > 70);

// 20. Check student pass
let marks = 40;
console.log("20. Student pass:", marks >= 35 && "Pass" || "Fail");

// 21. Counter increment
let counter = 0;
counter++;
console.log("21. Counter:", counter);

// 22. Decrement variable
let num2 = 10;
num2--;
console.log("22. After decrement:", num2);

// 23. Pre vs Post increment
let pre = 5, post = 5;
console.log("23. Pre-increment:", ++pre, "Post-increment:", post++);

// 24. Loop decrement from 10 to 1
console.log("24. Loop decrement:");
for (let i = 10; i >= 1; i--) console.log(i);

// 25. ++ and -- in same expression
let y = 5;
let result = y++ + --y;
console.log("25. Result of ++ and --:", result);

// 26. Even or Odd
let n = 7;
console.log("26. Even/Odd:", n % 2 === 0 ? "Even" : "Odd");

// 27. Greater number
let a1 = 15, b1 = 25;
console.log("27. Greater number:", a1 > b1 ? a1 : b1);

// 28. Check voting age
let voterAge = 17;
console.log("28. Can vote?", voterAge >= 18 ? "Yes" : "No");

// 29. Positive, Negative, or Zero
let num3 = 0;
console.log("29. Pos/Neg/Zero:", num3 > 0 ? "Positive" : num3 < 0 ? "Negative" : "Zero");

// 30. Check empty string
let str = "";
console.log("30. String empty?", str === "" ? "Empty" : "Not Empty");

// 31. Bitwise AND
console.log("31. Bitwise AND:", 5 & 3);

// 32. Bitwise OR
console.log("32. Bitwise OR:", 5 | 3);

// 33. Bitwise XOR
console.log("33. Bitwise XOR:", 5 ^ 3);

// 34. Left and Right shift
console.log("34. Left shift:", 5 << 1, "Right shift:", 5 >> 1);

// 35. Combine bitwise and logical
let bitCheck = (5 & 1) && true;
console.log("35. Combined bitwise & logical:", bitCheck);

// 36. Different data types
let str1 = "JS", num4 = 100, bool1 = true;
console.log("36. Mix types:", str1 + num4, num4 + 20, !bool1);

// 37. Swap two numbers (without third variable)
let p = 5, q = 10;
p = p + q; q = p - q; p = p - q;
console.log("37. After swapping:", p, q);

// 38. Arithmetic + Comparison + Logical
let test = 20;
console.log("38. Combined:", test + 5 > 20 && test < 50);

// 39. Score evaluation
let score = 85;
let grade = score >= 90 ? "Excellent" : score >= 35 ? "Pass" : "Fail";
console.log("39. Grade:", grade);

// 40. Mini calculator (all operators)
let numA = 8, numB = 4;
console.log("40. Mini Calculator => +:", numA + numB, "-:", numA - numB, "*:", numA * numB, "/:", numA / numB, "%:", numA % numB);