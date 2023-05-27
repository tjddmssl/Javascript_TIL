//상태와 행동 객체, 객체는 연관된 정보와 함수를 묶어서 관리할수 있다.
const apple = {
  name: "apple",
  display: function () {
    //* 객체안에서 자기자신의 속성에 접근할때, this쓴다.
    console.log(`${this.name}: 🍎`);
  },
};

apple.display();
