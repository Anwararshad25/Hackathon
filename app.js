function calculateTotal(subTotal, tax) {
    return subTotal + tax;
}

var order1 = calculateTotal(50, 5);
var order2 = calculateTotal(70, 5);
var order3 = calculateTotal(150, 5);

console.log(order1);
console.log(order2);
console.log(order3);

