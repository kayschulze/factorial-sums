var evenFibonacci = require('./../js/even-fibonacci.js').evenFibonacciModule;

describe('evenFibonacci', function() {
  it('should test if it returns the sum of the even fibonacci numbers', function() {
    var fibonacci = new evenFibonacci(144);
    expect(fibonacci.evenFibonacciSequence()).toEqual(188)
  });
});
