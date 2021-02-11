class CalculatorService {
    constructor(){}

    addition = (a,b) => a + b;
    
    substract = (a,b) => a - b;
    
    multiply = (a,b) => a * b;

    divided = (a,b) => {
        if(b === 0){
            throw new Error('No se puede dividir entre cero');
        }
        return a / b;
    }
}