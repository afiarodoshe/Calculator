const calculator = require("../src/advanced");

describe('Pow', () => {
    var BVAdata = [
        [1,2,1],
        [4,2,16],
        [3,1,3],
        [4,3,64]
    ]

    describe.each(BVAdata)('BVA: pow(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.pow(a,b)}`, () => {
            expect(calculator.pow(a, b)).toBe(expected);
        });
    })

    var DTdata = [
        [1,2,1],
        [4,2,16],
        [3,1,3],
        [4,3,64]
    ]

    describe.each(DTdata)('DT: pow(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.pow(a,b)}`, () => {
            expect(calculator.pow(a, b)).toBe(expected);
        });
    })
});

describe('Modulo', () => {
    var BVAdata = [
        [2,1,0],
        [5,4,1],
        [12,3,0],
        [6,4,2]
    ]

    describe.each(BVAdata)('BVA: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a,b)}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    })

    var DTdata = [
        [2,1,0],
        [5,4,1],
        [12,3,0],
        [6,4,2]
    ]

    describe.each(DTdata)('DT: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a,b)}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    })
});
