function palidrome(string){
    var l = string.length;
    for (var i = 0; i < l / 2; i++) {
        if (string.charAt(i) != string.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}
var x = 100;
var y = 100;
var product = 0;
var largest = 0;
for(x=100;x<1000; x++){
    for(y=100;y<1000; y++){
       product = x * y;
       product = String(product);
       result = palidrome(product);
        if (result == true){
            largest = product;
        }
    }
}
console.log(largest);