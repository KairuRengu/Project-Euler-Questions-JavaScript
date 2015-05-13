var sum_expo_answer = 0;
var expo_sum_answer = 0;
var first_hundred = 100;

 
expo_sum_answer = first_hundred * (first_hundred+1)/ 2; // formula for knowing the sum of all a numbers in a sequence from 1  is n(n+1)/2
sum_expo_answer = (first_hundred * (first_hundred + 1) * (2 * first_hundred + 1)) / 6; //forumla for getting all the numbers that are 1^2 to the designated number is n*(n+1)*(2*n+1)/6
 
console.log(Math.pow(expo_sum_answer, 2) - sum_expo_answer);