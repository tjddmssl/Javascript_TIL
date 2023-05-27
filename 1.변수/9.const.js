//! let 재할당이 가능
let a = 1;
a = 2;

//! const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = "hello";
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: "apple",
  color: "red",
  display: "🍎",
};
// apple = {};
//! 즉 const로 선언하면 apple의 메모리셀의 재할당이 불가능한것, 즉 메모리셀에 다른 주소를 담을수 없는것 하지만! 가리키는 object안에 값은 변경할수  있다. 즉 const는 재할당만 불가능, 값을 변경하는 것은 가능하다는것을 기억하세요!!!
console.log(apple);
apple.name = "orange";
apple.display = "🍏";
console.log(apple);
