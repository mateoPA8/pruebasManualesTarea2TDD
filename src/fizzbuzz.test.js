import sumar from "./sumador.js";

describe("Fizzbuzz", () => {
  it("deberia devolver el numero 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
  it("deberia devolver fizz si el numero es 3", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
  });
  it("deberia devolver buzz si el numero es 5", () => {
    expect(fizzbuzz(5)).toEqual("buzz");
  });
   it("deberia devolver fizzbuzz si el numero es par de 3 y 5", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });
  it("deberia devolver buzzfizz si el numero es 100", () => {
    expect(fizzbuzz(100)).toEqual("buzzfizz");
  });
});

function fizzbuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "fizzbuzz";
    } else if (n % 3 === 0) {
        return "fizz";
    } else if (n % 5 === 0) {
        return "buzz";
    } else if(n===1){
        return 1;
    }
    if(n==50){
        return "hola";
    }
}
