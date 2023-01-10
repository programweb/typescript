function sum(x, y, z) {
    return x + y + z;
}

var numberArr: [number, number, number] = [1, 2, 3];

console.log( sum(...numberArr) );