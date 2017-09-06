var Factorial = require("./../js/factorial-sum.js").factorialModule;

$(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#factorial-digits").val());

    var result = new Factorial(input);
    $("#output").text("The sum is:  " + result.factorialSum());
  });
});
