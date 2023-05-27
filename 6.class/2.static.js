// static 정적 프로퍼티, 메서드

class Fruit {
  //!!!!!!!  클래스 레벨의 메서드 : 모든객체마다 동일하게 사용할수 있는 속성이나 행동이 있다면 클레스 레벨의 프로퍼티와 메소드를 사용한다.static를 사용하고, class에 딱 한번만 정의하고, 각각의 인스턴스에 가져다 쓰지 않아도 재사용이 가능하다. 그리고 인스턴스에 들어있지 않다. class이름을 사용해야 접근이 가능하다
  static MAX_FRUITS = 4;

  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  //!!!!!인스턴스 레벨
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  //!!!!!!!  클래스 레벨의 메서드 : 모든객체마다 동일하게 사용할수 있는 속성이나 행동이 있다면 클레스 레벨의 프로퍼티와 메소드를 사용한다.static를 사용하고, class에 딱 한번만 정의하고, 각각의 인스턴스에 가져다 쓰지 않아도 재사용이 가능하다. 그리고 인스턴스에 들어있지 않다. class이름을 사용해야 접근이 가능하다
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit("banana", "🍌");
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

//!!!!!!static가져다 쓸때는 class이름.메소드()
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);
// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

//** static예들.. 구지 우리가 객체를 만들지 않아도, 가져다 쓸수 있다.
Math.pow();
Number.isFinite(1);
