const calculator = require("../src/basic");

describe('Add', () => {
    var BVAdata = [
        [1,2,3],
        [4,5,9],
        [3,12,15],
        [4,6,10]
    ]

    describe.each(BVAdata)('BVA: add(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.add(a,b)}`, () => {
            expect(calculator.add(a, b)).toBe(expected);
        });
    })

    var DTdata = [
        [0, 89, 89],
        [-17, -35, -52],
        [65, -12, 53],
        [-78, 24, -54]
    ]

    describe.each(DTdata)('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.add(a,b)}`, () => {
            expect(calculator.add(a, b)).toBe(expected);
        });
    })
});

describe('Subtract', () => {
    var BVAdata = [
        [2,1,1],
        [5,4,1],
        [12,3,9],
        [6,4,2]
    ]

    describe.each(BVAdata)('BVA: subtract(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.subtract(a,b)}`, () => {
            expect(calculator.subtract(a, b)).toBe(expected);
        });
    })

    var DTdata = [
        [2,1,1],
        [5,4,1],
        [12,3,9],
        [6,4,2]
    ]

    describe.each(DTdata)('DT: subtract(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.subtract(a,b)}`, () => {
            expect(calculator.subtract(a, b)).toBe(expected);
        });
    })
});

describe('Multiply', () => {
    var BVAdata = [
        [1,2,2],
        [4,5,20],
        [3,12,36],
        [4,6,24]
    ]

    describe.each(BVAdata)('BVA: multiply(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.multiply(a,b)}`, () => {
            expect(calculator.multiply(a, b)).toBe(expected);
        });
    })

    var DTdata = [
        [1,2,2],
        [4,5,20],
        [3,12,36],
        [4,6,24]
    ]

    describe.each(DTdata)('DT: multiply(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.multiply(a,b)}`, () => {
            expect(calculator.multiply(a, b)).toBe(expected);
        });
    })
});

describe('Divide', () => {
    var BVAdata = [
        [2,1,2],
        [8,4,2],
        [12,3,4],
        [6,6,1]
    ]

    describe.each(BVAdata)('BVA: divide(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.divide(a,b)}`, () => {
            expect(calculator.divide(a, b)).toBe(expected);
        });
    })

    var DTdata = [
        [2,1,2],
        [8,4,2],
        [12,3,4],
        [6,6,1]
    ]

    describe.each(DTdata)('DT: divide(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.divide(a,b)}`, () => {
            expect(calculator.divide(a, b)).toBe(expected);
        });
    })
});