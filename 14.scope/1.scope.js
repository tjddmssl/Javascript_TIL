// 코드 블럭: { }, if() { }, for() { }, function() { }
//! 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
  const a = "a";
}
console.log(a); //에러 발생
const b = "b";

//! 함수 외부에서는 함수 내부의 변수를 참조 ❌
function print() {
  const message = "Hello World"; //함수안에서만 쓰이는 로컬변수(지역변수)
  console.log(message); //"Hello World"
}
console.log(message); //에러 발생

//!ㄴ 함수 외부에서는 함수의 매개변수를 참조 ❌
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b); //에러 발생
