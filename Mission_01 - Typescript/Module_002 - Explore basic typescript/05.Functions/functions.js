// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(3, 4);
// arrow function
var addArrow = function (num1, num2) { return num1 + num2; };
// callback function
var arr = [1, 3, 5];
var newArray = arr.map(function (elem) { return elem * elem; });
