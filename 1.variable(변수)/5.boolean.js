// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예:
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);

console.clear();

//!!을 붙이면 값의 Truthy, Falshy을 나타낼수 있다.
//!! Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//!! Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{}); //any object
console.log(!![]);
console.log(!!Infinity);
