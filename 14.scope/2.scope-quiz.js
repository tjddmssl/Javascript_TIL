{
  const x = 1;
  {
    const y = 2;
    console.log(x); //1 => const x = 1; 전체 코드블럭에서 유효하다. 즉 상위에 블록을 참조할수 있다.
  }
  console.log(x); //1 => 같은블럭이기 때문에 const x = 1; 유효
  console.log(y); //에러 발생 => 블록 밖에서는 블록 안을 참조할수 없다.
}

const text = "global"; //! 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = "inside block1"; //! 지역 변수(로컬변수), 지역 스코프(로컬스코프)
  {
    const text = "inside block2";
    console.log(text); //'inside block2'
    // 만약 바로 상위에 없으면 더 상위를 참조
  }
}
