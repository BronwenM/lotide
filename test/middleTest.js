const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
    it("returns [2, 3] for [1, 2, 3, 4]", () => {
        assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
    });

    it("returns [6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]", () => {
        assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [6]); 
    });

    it("returns [] for [1, 2]", () => {
        assert.deepEqual(middle([1, 2]), []); 
    });

    it("make sure the original array was not altered by the middle function", () => {
        const words = ["hello", "world", "lighthouse"];
        const result = middle(words);
        assert.strictEqual(words.length, 3);
    });
})