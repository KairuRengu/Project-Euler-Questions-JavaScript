var x = 3;
var y = 0;
var prime = [2,3]
var check = true;
var sum = 0;
while(x < 2000001){
    x+=2;
    for( y=0;y<prime.length;y++){
        if(x % prime[y] == 0){
            check = false;
        }
    }
    if(check == true){
        console.log(x + " is a prime number");
        prime.push(x);
    }
    check=true;
}

for(var index = 0; index <prime.length ; index ++){
  sum += prime[index];
}
console.log(sum);
