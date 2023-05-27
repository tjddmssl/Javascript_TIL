/** 
 객체 => 순수데이터 객체 let apple = {name:'apple', color:'red'}
    =>상태와 행동 객체 let apple = {name:'apple', display:function(){console.log(')}}
*/

//객체만드는 방법
// 1. Object literal { key: value }
// 2. new Object()
// 3. Object.create();

// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

let apple = {
  //키 : 값
  name: "apple",
  "hello-bye": "✋",
  0: 1,
  ["hello-bye1"]: "✋",
};

// 속성,즉  데이터에 접근하기 위한 방법
apple.name; // 1. 마침표 표기법 dot notation
console.log(apple["hello-bye1"]); //2. 대괄호 표기법 bracket notation
apple["name"];

// 속성 추가
apple.emoji = "🍎";
console.log(apple.emoji);
console.log(apple["emoji"]);

// 속성 삭제
delete apple.emoji;
console.log(apple);
