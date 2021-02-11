class CalculatorView{
    constructor(){
        this.$inptFirstNumber = document.getElementById('firstNumber');
        this.$inptSecondNumber = document.getElementById('secondNumber');
        this.$inptResult = document.getElementById('result');
        this.$btnAddition = document.getElementById('btnAddition');
        this.$btnSubstraction = document.getElementById('btnSubstraction');
        this.$btnMultiplication = document.getElementById('btnMultiplication');
        this.$btnDivision = document.getElementById('btnDivision');
    }

    writeResult = result => this.$inptResult.value = result;
    _getNumbers = _ => ({ first: +this.$inptFirstNumber.value, second: +this.$inptSecondNumber.value });


    bindAdditionButton(handler){
        this.$btnAddition.addEventListener('click', () => {
            handler(this._getNumbers());
        });
    }
    bindSubstractionButton(handler){
        this.$btnSubstraction.addEventListener('click', () => {
            handler(this._getNumbers());
        });
    }
    bindMultiplicationButton(handler){
        this.$btnMultiplication.addEventListener('click', () => {
            handler(this._getNumbers());
        });
    }
    bindDivisionButton(handler){
        this.$btnDivision.addEventListener('click', () => {
            handler(this._getNumbers());
        });
    }

}