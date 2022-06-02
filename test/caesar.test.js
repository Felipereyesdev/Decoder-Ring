// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("encoding a messege", () =>{
    it("should encode a messege when shifting letters", () => {
        const message = "hello";
        const shift = 3;
        const actual = caesar(message,shift);
        const expected = "khoor";
        expect(actual).to.equal(expected);

    })

    it("should ignore spaces and grammatical symbols", () =>{
        const message = "hello hello.";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "khoor khoor."
        expect(actual).to.equal(expected);

    })

    it("should ignore capital letters", () => {
        const messege = "Hello hello.";
        const shift = 3;
        const actual = caesar(messege,shift);
        const expected = "khoor khoor."
        expect(actual).to.equal(expected);
    })

    it("should allow for negative shifts", () =>{
        const messege = "Hello hello.";
        const shift = -3;
        const actual = caesar(messege,shift);
        const expected = "ebiil ebiil."
        expect(actual).to.equal(expected);
    })

    it("should shift letters at the end of the alphabet" ,() =>{
        const message = "zebra magazine";
        const shift = 3;
        const actual = caesar(message,shift);
        const expected = "cheud pdjdclqh";
        expect(actual).to.equal(expected);
    })

})

describe("error handeling shift", () =>{
    it("should return false if input value is equal to 0", () => {
        const message = "hello";
        const shift = 0;
        const actual = caesar(message,shift);
        expect(actual).to.be.false;
    })
    it("should return false if input value is greater than 25", () =>{
        const message = "hello";
        const shift = 26;
        const actual = caesar(message,shift);
        expect(actual).to.be.false;
    })

    it("should return false if value is greater than -25",() =>{
        const message = "hello";
        const shift = -26;
        const actual = caesar(message,shift);
        expect(actual).to.be.false;
    })


})

describe("decoding messege", () =>{
    it("should decode a messege when shifting letters and encode its false", () =>{
        const message = "khoor";
        const shift = 3;
        const actual = caesar(message,shift, false);
        const expected = "hello";
        expect(actual).to.equal(expected);

    })

})

