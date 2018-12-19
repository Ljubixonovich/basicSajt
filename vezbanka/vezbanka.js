'use strict';



let niz1 = [1, 2, 3, 4];
let niz2 = [7, 8, 9, ...niz1];

console.log(niz2);
console.log('------------------');




let addThree = (a, b, c) => {
    console.log(a+b+c);
}
addThree(niz1);
console.log('------------------');



let x = {name: "ljuba", age: 15, niz: [11, ...niz1, 22]};
console.log(x);
// x.niz = x.niz + niz1;
// x.niz = niz1;
console.log('------------------');



var niz11 = [...niz1, 150];
console.log(niz11);

