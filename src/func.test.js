const mult = require("./func");

test(`multiply 2 * 3 to equal 6`, ()=> {
    expect(mult(2,3)).toBe(6);
});
