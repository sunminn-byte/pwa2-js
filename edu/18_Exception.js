try {
  // 내가 처리하고 싶은 로직을 작성하는 영역
  console.log('트라이 시작'); 
  const t = 1;
  t = 2;
  console.log('트라이 끝');
} catch(err) {
  // try문에서 에러가 발생했을 때, 처리할 로직을 작성하는 영역
  // catch()에 파라미터 필수, 보통 err || error
  console.log('예외 발생');
  if(err instanceof TypeError) {
    console.log('타입에러 발생');
  } else if(err instanceof ReferenceErrorError) {
    console.log('참조에러 발생');
  }
  // console.log('예외 발생', err instanceof TypeError);
  // err.message : 에러 메시지를 간단하게 표시
  // err instanceof TypeError : 에러의 instance가 typeerror인지 ? true/false로 나옴
} finally {
  // 정상, 에러 여부 상관없이 무조건 실행되는 로직을 작성하는 영역
  // finally 필요없으면 없어도 됨
  console.log('파이널리 실행');
}

// -----------------------------------------------

let divVal = 0;
try {
  // 내가 처리하고 싶은 로직을 작성하는 영역
  console.log('트라이 시작'); 
  if(divVal < 1) {
    // 강제 예외 발생 > catch문으로 들어간다.
    throw new Error('유저 입력값이 0임');
  }
  10 / divVal;
  console.log('트라이 끝');
} catch(err) {
  // try문에서 에러가 발생했을 때, 처리할 로직을 작성하는 영역
  // catch()에 파라미터 필수, 보통 err || error
  console.log('예외 발생');
  if(err instanceof TypeError) {
    console.log('타입에러 발생');
  } else if(err instanceof ReferenceErrorError) {
    console.log('참조에러 발생');
  }
  // console.log('예외 발생', err instanceof TypeError);
  // err.message : 에러 메시지를 간단하게 표시
  // err instanceof TypeError : 에러의 instance가 typeerror인지 ? true/false로 나옴
} finally {
  // 정상, 에러 여부 상관없이 무조건 실행되는 로직을 작성하는 영역
  // finally 필요없으면 없어도 됨
  console.log('파이널리 실행');
}