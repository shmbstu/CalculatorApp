module testApp {





    export class calculatorController 
    {

        number1: string;
        number2: string;
        result: number;

        AddNumber():void
        {
            this.result = parseInt(this.number1) + parseInt( this.number2);
        }

        Subtract(): number {
            return this.result = parseInt(this.number1) - parseInt(this.number2);
        }

        Divide(): number {
            return this.result = parseInt(this.number1) / parseInt(this.number2)
        }

        Multi(): number {
            return this.result = parseInt(this.number1) * parseInt(this.number2);
        }
    }
    
     var app = angular.module('testApp', []);
     angular.module('testApp').controller("calculatorController", calculatorController);
    

}