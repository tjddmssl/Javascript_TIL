// 우리가 소스코드에서 동적으로 메모리를 생성하는 경우에 메모리힙에 생성=> 콜스택은 함수 실행순서를 기억한다. 전역에서 c함수를 호출하면 c함수가 콜스택에 들어오고, c함수 내에서 b함수를 호출하먄 그다음 b함수가 콜스택에, b함수내에서 a 함수를 호출하면 a함수가 콜스택에 들어온다.=> a함수가 끝나고 반환이 되면 콜스택에서 먼저 나가고, 그다음 b가 끝나고 나가고 그다음 c가 끝나면 콜스택이 비어진다.
// 자바스크립트 엔진은 단하나의 싱글 컨텍스트 스택을 가진다
//=> 한번에 하나의 일만 처리할수 있다. => 싱글쓰레드: 단 하나의 스트림으로만 한가지의 일을 한번에 처리할수 있다.
//자바스크립트는 기본적으로 동기적으로 진행된다.

// function a() {
//   for (let i = 0; i < 1000000000000000; i++);
//   return 1;
// }

// function b() {
//   return a() + 1;
// }

// function c() {
//   return b() + 1;
// }

// console.log("시작했다!");
// const result = c();
// console.log(result);

function level() {
  if (true) {
    var a = 123;
    console.log(a); //123
  }
  console.log(a);
}

level();
console.log(a); //ReferenceError: a is not defined
