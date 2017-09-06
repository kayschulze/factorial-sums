function Factorial(input){
  this.input = input;
}

// Finds a list of all factorials to a certain index input.
Factorial.prototype.factorialList = function() {
  var product = 1;

  for (var i = 1; i <= this.input; i++) {
    product *= i;
  }

  return product;
};

//Finds the sum of the digits in a number.
Factorial.prototype.factorialSum = function() {
  var digitSum = 0;
  var number = this.factorialList();

  var numberString = number.toString();
  var splitNumber = numberString.split("");

  for (var i = 0; i < splitNumber.length; i++) {
    digitSum += parseInt(splitNumber[i]);
    console.log(digitSum);
  }

  return digitSum;
};

exports.factorialModule = Factorial;
