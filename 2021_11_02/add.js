// This is a function for adding....
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function add(op1, op2) {
    debugger;
    var internalFunctionVariable = 20;
    var letVar = 20;
    return op1 + op2;
}
setTimeout(function () {
    alert("Hello after 2 seconds");
}, 3000);
var arr1 = [10, 20, 30];
var arr2 = [40, 50];
var arr3 = __spreadArrays(arr1, arr2);
add(10, 20);
var Song = /** @class */ (function () {
    function Song() {
        this.name = "Let it be";
        this.singer = "Beatles";
    }
    Song.prototype.setName = function (newName) {
        this.name = newName;
    };
    Song.prototype.printFullName = function () {
        console.log("First name " + this.name + ", Last Name " + this.singer);
    };
    return Song;
}());
var song1 = new Song();
var song2 = new Song();
var s = new Song();
console.log(s);
//let names = ["Ziv", "Yosi"];
var names;
console.log(names);
//# sourceMappingURL=add.js.map