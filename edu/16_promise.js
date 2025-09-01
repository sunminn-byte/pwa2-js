// Callback Hell
// setTimeout(() => {
//   console.log('A');

//   setTimeout(() => {
//     console.log('B');

//     setTimeout(() => {
//       console.log('C');
//     }, 1000);
//   }, 2000);
// }, 3000);

// Promise 객체
// 비동기 처리의 결과를 제공하겠다는 약속을 반환
// 단, 비동기 처리가 끝날 때 까지 결과를 기다리는 것은 아니다.
function pro1(str, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(str === 'A' || str === 'B' || str === 'C' ) {
        console.log(str);
        resolve(); // 필수(resolve 앞에 return 생략 가능)
      }  else {
        reject(); // 실패시 reject만 호출하면 됨.
      }
    }, ms);
  });
}

// 함수형에서 자주 쓰이는 chaining기법
// 비동기처리를 동기처리로 바꿀 때 사용
// then, catch에 ()파라미터가 발생하기도 한다. catch는 err객체
// pro1('A', 3000)
// .then(() => {
//   console.log('Then');
// }) // 작업이 성공했을 때, then() 실행
// .catch(() => {
//   console.log('Catch');
// }) // 작업이 실패했을 때, catch() 실행
// .finally(() => {
//   console.log('Finally');
// }); // 성공,실패 여부 상관없이 무조건 실행(항상 제일 마지막에 작성해야 함)

// 여러개의 비동기처리를 동기처리로 바꿀 때
// pro1('A', 3000)
// .then(() => {
//   pro1('B', 2000)
//   .then(() => {
//     pro1('C', 1000)
//     .then()
//     .catch();
//   })
//   .catch();
// })
// .catch();

// 위에걸 아래처럼 chaining으로 연결할 수도 있다.
// then이 길어지면 분석이 어렵다.
pro1('A', 3000)
.then(() => {
  return pro1('B', 2000);
})
.then(() => {
  return pro1('C', 1000);
})
.catch();