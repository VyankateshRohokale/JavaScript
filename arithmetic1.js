var arithmetic = /** @class */ (function () {
    function arithmetic(A, B) {
        this.no1 = A;
        this.no2 = B;
    }
    arithmetic.prototype.Addition = function () {
        var ans;
        ans = this.no1 + this.no2;
        return ans;
    };
    arithmetic.prototype.Substraction = function () {
        var ans;
        ans = this.no1 - this.no2;
        return ans;
    };
    return arithmetic;
}());
var obj1 = new arithmetic(11, 10);
var obj2 = new arithmetic(25, 21);
var result = 0;
result = obj1.Addition();
console.log(result);
result = obj2.Substraction();
console.log(result);
