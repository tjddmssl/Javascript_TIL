//Promise는 비동기 처리에 사용되는 객체로 pending, fulfilled, rejected 상태를 가지고, .then() .catch() 등 PromiseAPI를 사용할 수 있어서 코드의 양을 줄이고 가독성을 증가시킬 수 있다.

/*Promise와 Callback의 차이점
- Callback 함수는 함수 안에서만 결과값 처리를 할 수 있지만 Promise는 비동기 로직에서 처리된 결과값이 Promise 객체에 저장되기 때문에 로직 밖에서도 사용 가능하다.

- Callback 함수는 함수 내부에서 연달아 다음 함수를 호출하기에 가독성이 떨어지지만 Promise 함수는 PromiseAPI를 사용해 가독성을 높여준다.*/

function runInDelay(seconds){
  return new Promise();
}
runInDelay(2)
  .then(필요한 일을 수행)
  .catch(에러를 처리)
  .finally(성공하든 실패하든 무조건 호출);


  
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("seconds가 0보다 작음"));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log("타이머 완료!"))
  .catch(console.error)
  .finally(() => console.log("끝났다!"));
