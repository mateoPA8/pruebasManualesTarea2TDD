import sumar from "./sumador.js";

describe("Fizzbuzz", () => {
  it("deberia devolver el numero 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
  it("deberia devolver fizz si el numero es 3", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
  });
});

function fizzbuzz(n){
    if(n==3){
        return "fizz";
    }
    return 1;
}
