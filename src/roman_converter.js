var romanHash = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
}

first_digit = function(n){
  return parseInt(String(n).split('')[0])
};

no_of_zeroes = function(n){
  return Array(parseInt(n)).join("0")
};

roman_converter = function(n){
  digit_array = String(n).split('').reverse();
  var digit_hash = {};

  for(var i in digit_array) {
   digit_hash[i] = digit_array[i]
  };

  var number_array = []
  Object.keys(digit_hash).forEach(function (key) { 
    var value = digit_hash[key]
    number_array.push(value + Array(parseInt(key)+1).join("0"))
  });
  number_array = number_array.reverse().map(Number);

  answer = ''

  for(var key in number_array) {
    number = number_array[key]
    digits = String(number).length
    if(number in romanHash)
      answer + romanHash[number]
    else if (number === 0)
      answer + ''
    else 
      remainder = number % parseInt("5" + Array(parseInt(digits)-1).join("0"))
      remainder_length = String(remainder).length
      if (first_digit(number) < 5)
        answer + romanHash[parseInt("1" + no_of_zeroes(digits))] * first_digit(number)
      else if ((first_digit(number) > 5) && (romanHash[remainder] != nil))
        answer + (romanHash[parseInt("5" + no_of_zeroes(digits))] + (romanHash[remainder]))
      else
        answer + (romanHash[parseInt("5" + no_of_zeroes(digits))] + (romanHash[parseInt("1"+Array(parseInt(remainder_length)-1).join("0"))]* (first_digit(remainder))))
  }
  return answer
};