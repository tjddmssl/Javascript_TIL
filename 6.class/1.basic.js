// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ✨ es6

//자바스크립트 내부에선 프로토타입을 통해 객체지향 프로그래밍을 하지만, 개발자들은 class를 써도 자스 내부에서 프로토타입을 이용한다.

//* 클래스 class : 객체를 생성할수 있는 템플릿(청사진, 툴) => 요즘엔 생성자함수 거의 안쓰고 클래스 쓴다.
//!!!!! 인스턴스 레벨의 프로퍼티와 메소드, 각각의 객체마다 서로다른 데이터를 가지고 있어서 이런식으로 만드는게 맞지만....(2.static.js 참고)

class Fruit {
  //* 생성자 = constructor : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  //function 쓰면 에러나=> 일반함수나 화살표함수로 적으면 돼
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };

  /** 또는 display(){
    console.log(`${this.name}: ${this.emoji}`);
  };*/
}
//* 인스턴스 : 클래스를 통해 만들어진 객체

//? apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
//? orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: "ellie" };
