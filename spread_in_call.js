function sum(x, y, z) {
    return x + y + z;
}
var numberArr = [1, 2, 3];
console.log(sum.apply(void 0, numberArr));
