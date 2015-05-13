var sum_expo_answer = 0;
var expo_sum_answer = 0;
for( var x=0; x<=100; x++){
    sum_expo_answer += Math.pow(x, 2);
    expo_sum_answer += x;
}
expo_sum_answer = Math.pow(expo_sum_answer, 2);
console.log(expo_sum_answer - sum_expo_answer);