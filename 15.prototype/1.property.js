const dog = { name: "와우", emoji: "🐶" };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log("name" in dog);
console.log(dog.hasOwnProperty("name"));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc);

//Object.defineProperties() 메서드는 객체에 새로운 속성을 정의하거나 기존의 속성을 수정하고, 그 객체를 반환한다.
//즉 자바스크립트에서 Object.defineProperties() 메서드를 통해 객체의 키에 더 상세한 속성이 있다는걸 알수있다..
Object.defineProperty(dog, "name", {
  value: "멍멍",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;
console.log(dog.name);

const student = {};

Object.defineProperties(student, {
  firstName: {
    value: "영희",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "김",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(" ");
    },
    configurable: true,
  },
});
console.log(student);
