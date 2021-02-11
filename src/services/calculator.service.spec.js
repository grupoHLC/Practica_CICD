/* const assert = require('assert');
const CalculatorTest = require('./calculator.service'); */
const calculator = new CalculatorService();

describe('Calculator Methods', () => {
    describe('Should be true when...', () => {
        it('the addition of 6 plus 4 is equals to 10', () => {
            const result = calculator.addition(6,4);
            expect(result).toBe(10);
        });
        it('the substraction of 6 minus 4 is equals to 2', () => {
            const result = calculator.substract(6,4);
            expect(result).toBe(2);
        });
        it('6 times 4 must be equals to 24', () => {
            const result = calculator.multiply(6,4);
            expect(result).toBe(24);
        });
        it('the division of 6 and 3 is equals to 2', () => {
            const result = calculator.divided(6,3);
            expect(result).toBe(2);
        });
    });
    describe('Should be false when...', () => {
        it('the division by 0 is not permitted', () => {
            expect(() => calculator.divided(6,0)).toThrow(new Error('No se puede dividir entre cero'));
        });
    });
});
