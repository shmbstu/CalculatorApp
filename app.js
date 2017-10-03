var testApp;
(function (testApp) {
    var calculatorController = (function () {
        function calculatorController() {
        }
        calculatorController.prototype.AddNumber = function () {
            this.result = parseInt(this.number1) + parseInt(this.number2);
        };
        calculatorController.prototype.Subtract = function () {
            return this.result = parseInt(this.number1) - parseInt(this.number2);
        };
        calculatorController.prototype.Divide = function () {
            return this.result = parseInt(this.number1) / parseInt(this.number2);
        };
        calculatorController.prototype.Multi = function () {
            return this.result = parseInt(this.number1) * parseInt(this.number2);
        };
        return calculatorController;
    }());
    testApp.calculatorController = calculatorController;
    var app = angular.module('testApp', []);
    angular.module('testApp').controller("calculatorController", calculatorController);
})(testApp || (testApp = {}));
//# sourceMappingURL=app.js.map