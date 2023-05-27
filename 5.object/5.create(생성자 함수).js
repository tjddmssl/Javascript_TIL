// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

// 생성자 함수 function 대문자 : 비슷한 객체를 반복해서 생성해야 하는 경우`
//자바스크립트는 프로토타입을 베이스로 객체지향프로그래밍을 지원하기떄문
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능 => 생성자 함수 에서는 this가 자동으로 리턴
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
