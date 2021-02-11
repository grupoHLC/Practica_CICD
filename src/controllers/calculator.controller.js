class CalculatorController{
    constructor(service,view){
        this.view = view;
        this.service = service;

        this.view.bindAdditionButton(this.handlerAddition);
        this.view.bindSubstractionButton(this.handlerSubstraction);
        this.view.bindMultiplicationButton(this.handlerMultiplication);
        this.view.bindDivisionButton(this.handlerDivision);

    }

    handlerAddition = ({ first, second }) => {
        const result = this.service.addition(first, second);
        this.view.writeResult(result);
    }
    handlerSubstraction = ({ first, second }) => {
        const result = this.service.substract(first, second);
        this.view.writeResult(result);
    }
    handlerMultiplication = ({ first, second }) => {
        const result = this.service.multiply(first, second);
        this.view.writeResult(result);
    }
    handlerDivision = ({ first, second }) => {
        try{
            const result = this.service.divided(first, second);
            this.view.writeResult(result);
        } catch(err){
            alert(err.message);
        }
    }
}