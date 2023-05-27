//! 접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = "과일";
  constructor(name, emoji) {
    //class안에서만 접근이 가능하다
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
//apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple); // Fruit {}
