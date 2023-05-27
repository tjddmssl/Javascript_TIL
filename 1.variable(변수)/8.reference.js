//원시타입은 값이 메모리에 들어가 있지만,
//! 원시타입은 값이 복사되어 전달됨, 깊은 복사=> 즉 값이 독립적이야
let a = 1;
let b = a; //1
b = 2;
console.log(a); //1
console.log(b); //2

//객체타입은 메모리의 주소가 변수에 들어가있다.(이미지 캡터한것 참고)
//! 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨, 얕은 복사 => 즉 동일한 object 가리킴
let apple = {
  // 메모리 주소 =  0x1234
  name: "사과",
};
let orange = apple; // 메모리 주소 =  0x1234
orange.name = "오렌지";
console.log(apple); //{ name:'오렌지'}
console.log(orange); //{ name:'오렌지'}
