// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("encoding", () =>{
it("it should encode a messege", () =>{
    const messege = "messager";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const actual = substitution(messege,alphabet);
    const expected = "ykrrpikx";
    expect(actual).to.equal(expected);
})
it("should work with any kind of key with unique characters", () => {
    const message = "messager";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet);
    const expected = "ysii.rsb";

    expect(actual).to.equal(expected);
  });

  it("should preserve spaces", () => {
    const message = "the messager";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet);
    const expected = "jds ysii.rsb";

    expect(actual).to.equal(expected);
  });




})

describe("error handeling", () => {
    it("should returns false if the given alphabet isn't exactly 26 characters long.", () => {
        const messege = "hello";
        const alphabet = "plmo";
        const actual = substitution(messege, alphabet);
        expect(actual).to.be.false;
    })
    it("should return false if alphabet its not provided", () =>{
        const messege = "hello";
        const actual = substitution(messege);
        expect(actual).to.be.false;
    })

    it("should return false if the aphabet has repeating charactes", () => {
        const message = "hello";
        const alphabet = "abcabcabcabcabcabcabcabc"
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    })

})

describe("decoding",() =>{
    it("should decode a message by using the given substitution alphabet", () => {
        const message = "ykrrpikx";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "messager";
  
        expect(actual).to.equal(expected);
      });

      it("should work with any kind of key with unique characters", () => {
        const message = "ysii.rsb";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "messager";
  
        expect(actual).to.equal(expected);
      });
  
      it("should preserve spaces", () => {
        const message = "jds ysii.rsb";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "the messager";
  
        expect(actual).to.equal(expected);
      });
    
})
