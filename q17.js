var ones = ['zero','one' , 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var onetens = [ 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var hundred = ['hundred'];
var thousand = ['thousand'];
var total = 0;

for( var x = 1; x<=1000; x++){
    var number_string = x.toString();
    if(number_string.length==1){
        var first_digit_string = number_string;
        total+=ones[number(first_digit_string)].length;
    }else if(number_string.length==1){
        var first_digit_string = number_string(0);
        var second_digit_string = number_string(1);
        total+=ones[number(first_digit_string)].length;
        total+=ones[number(first_digit_string)].length;
    }else if(number_string.length==1){
        var first_digit_string = number_string(0);
        var second_digit_string = number_string(1);
        var third_digit_string = number_string(2);
    }else{
        var fourth_digit_string = number_string(3);
    }
    if(.length==1){
        
    }
}
console.log(total);