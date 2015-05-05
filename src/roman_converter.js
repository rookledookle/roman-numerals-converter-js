// General rules of conversion
var romanObj = {
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

// Get first digit of number
first_digit = function(n){
  return parseInt(String(n).split('')[0]);
};

// Number of '0's to attach to digit
no_of_zeroes = function(digits){
  return Array(digits).join("0");
};

// Converts any integer from 1 - 3999 to a Roman numeral
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
    number = number_array[key];
    digits = parseInt(String(number).length);
    if(number in romanObj) {/*number in general rules*/
      answer = answer + romanObj[number];
    }
    else if (number === 0) {/*number is 0*/
      answer = answer + '';
    } else {
      remainder = number % parseInt("5" + no_of_zeroes(digits));
      remainder_length = String(remainder).length;
      if (first_digit(number) < 5) {/*first digit 2,3,4 */
        roman_symbol = romanObj[parseInt("1" + no_of_zeroes(digits))];
        roman_number = Array(first_digit(number)+1).join(roman_symbol);
        answer = answer + roman_number;
      }
      else if ((first_digit(number) > 5) && (romanObj[remainder] != null)) {/* first digit 6,9*/
        roman_number = romanObj[parseInt("5" + no_of_zeroes(digits))] + romanObj[remainder]
        answer = answer + roman_number
      } else {/*first digit 7,8*/
        answer = answer + romanObj[parseInt("5" + no_of_zeroes(digits))];
        remainder = number - parseInt("5" + no_of_zeroes(digits));
        roman_symbol = romanObj[parseInt("1" + no_of_zeroes(digits))];
        roman_number = Array(first_digit(remainder)+1).join(roman_symbol);
        answer = answer + roman_number
      }
    }
  }
  return answer
};