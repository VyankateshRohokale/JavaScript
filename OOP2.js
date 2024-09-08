var Demo = /** @class */ (function () {
    function Demo() {
    }
    // behaviour
    Demo.prototype.display = function () {
        console.log("Inside Display Function of Demo class");
    };
    return Demo;
}());
var obj = new Demo();
obj.display();
