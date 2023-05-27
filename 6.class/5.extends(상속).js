// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("잔다");
  }
}

//! 상속: 공통된것이 있다면 부모와 자식간의 처럼 상속을 만들수 있다.
class Tiger extends Animal {}
const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  //상속도 하고, 새로운 것도 추가할수 있어
  //단 상속받고있는 부모한테 필요한것도 받아오고color, 추가하고 싶은것ownerName 추가하고
  constructor(color, ownerName) {
    //super(부모거) => super 부모의 생성자함수를 호출해서, 부모의생성자함수에서 필요한것을 전달해준다.
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자아~!");
  }

  // 오버라이딩 overriding : 자식클래스에서 부모클래스의 것을 덮어씌움 => 함수를 그대로 선언해서 덮어씌우면 된다.
  eat() {
    super.eat();
    console.log("강아지가 먹는다!");
  }
}
const dog = new Dog("빨강이", "엘리");
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
