// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");
describe("encoding",() =>{
    it("should encode a message into number pairs",() =>{
        const message = "hello";
        const actual = polybius(message);
        const expected = "3251131343";
        expect(actual).to.equal(expected);
    });
    it("should make both 'i' and 'j' to 42", () => {
        const message = "jiggle";
        const actual = polybius(message);
        const expected = "424222221351";
  
        expect(actual).to.equal(expected);
      });
      it("should leave spaces as is", () => {
        const message = "hi hello";
        const actual = polybius(message);
        const expected = "3242 3251131343";
  
        expect(actual).to.equal(expected);
      });


})
describe("decoding",() => {
    it("should decode message",() =>{
        const message = "3251131343";
        const actual = polybius(message,false);
        const expected = "hello";
        expect(actual).to.equal(expected);

    })
    it("should translate 42 to both 'i' and 'j'", () => {
        const message = "424222221351";
        const actual = polybius(message, false);
  
        expect(actual).to.include("i");
        expect(actual).to.include("j");
      });

      it("should leave spaces as is", () => {
        const message = "2345 23513434112251";
        const actual = polybius(message, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
      });
  
      it("should return false if the length of all numbers is odd", () => {
        const message = "2345 235134341122514";
        const actual = polybius(message, false);
  
        expect(actual).to.be.false;
      });

      
})