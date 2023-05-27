//! typeof: 데이터 타입을 확인
//! 값을 타입 문자열로 반환
let variable;
console.log(typeof variable); //undefined

variable = "";
console.log(typeof variable); //string

variable = 123; //! ⬅ 할당된 값에 따라 타입이 결정됨!
//! => 즉 자바스크립트에도 타입이 있다. 단 동적이고(dynamic), weakly 타입이다.(할당되는 값에 따라 타입이 바뀐다.)
console.log(typeof variable); //number

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof "123");
