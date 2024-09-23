const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
    it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
    });

    it("returns [] for ['one']", () => {
        assert.deepEqual(tail(["one"]), []); 
    });

    it("returns [] for []", () => {
        assert.deepEqual(tail([]), []); 
    });

    it("returns undefined for undefined", () => {
        assert.strictEqual(tail(), undefined); 
    });
})