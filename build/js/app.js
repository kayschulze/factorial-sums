(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Factorial = require("./../js/factorial-sum.js").factorialModule;

$(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#factorial-digits").val());

    var result = new Factorial(input);
    $("#output").text("The sum is:  " + result.factorialSum());
  });
});

},{"./../js/factorial-sum.js":1}]},{},[2]);
