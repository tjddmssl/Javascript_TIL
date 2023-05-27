//객체: 복합데이터, {key:value} value안에는 원시값과 객체값이 들어갈수 있다.
//원시타입은 메모리상의 원시 값에 따라 Data(global하게 선언되어 있다면), Stack(local에 선언되어 있다면)에 보관
//객체타입은 메모리상의 Heap안에 보관, 셀 여러개에 걸쳐서 보관

let name = "apple";
let color = "red";
let display = "🍎";
let orangeName = "orange";

let apple = {
  name: "apple",
  color: "red",
  display: "🍎",
};
console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange = {
  name: "오렌지",
  color: "orange",
  display: "🍊",
};
console.log(orange);
