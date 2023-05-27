// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //접근자 프로퍼티를 사용하면 함수지만, 단순히 속성만 바꿔주는 함수면  단순히 속성에 접근하듯이 쓸수 있다.

  //접근시에는 get
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  //할당할때는 set
  set fullName(value) {
    console.log("set", value);
  }
}

const student = new Student("수지", "김");
student.firstName = "안나";

//get
console.log(student.firstName);
console.log(student.fullName);

//set
student.fullName = "김철수";
