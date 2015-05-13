var x = 3;
var y = 0;
var prime_counter = 2;
var prime = [2,3]
var check = true;
while(prime_counter != 10001){
    x+=2;
    for( y=0;y<prime.length;y++){
        if(x % prime[y] == 0){
            check = false;
        }
    }
    if(check == true){
        prime_counter++;
        console.log(x + " is a prime number");
        prime.push(x);
    }
    check=true;
}