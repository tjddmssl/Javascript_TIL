//변수 이름짓기 : 값을 저장하는 공간, 자료를 저장할수 있는 이름이 주어진 기억장소

/** 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z,), _
 * 대소문자를 구분함
  //! 추천: camelCase (likeThis) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ (_, $ 두가지는 예외)
 * 이모지 ❌
 * 여러개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미있게, 구체적인 이름으로 작성!
 */

/**데이터 타입
 * 1. 원시타입 : 단일 데이터 담음
 * number .....BigInt: 정말 큰 ㄴ 숫자를 표현할때
 * string
 * boolean
 * null
 * undefined
 * Symbol
 *
 * 2. 객체 타입 : 복합 데이터 담음
 * object ...array등등
 * function
 *
 */

let apple;
let redApple;

// 나쁜예제 💩
let number = 20;

// 좋은예제 ✨
let myAge = 20;

// 나쁜예제 💩
let audio1;
let audio2;

// 좋은예제 ✨
let backgroundAudio;
let windAudio;

// 꿀팁! 🍯
let audioBackground;
let audioWind;

audioBackground;
