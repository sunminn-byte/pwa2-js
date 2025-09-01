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

// async/await 문법
// promise 지옥을 개선하기 위해 나온 문법
// 내부적으로 promise 객체를 사용하여 비동기 처리를 실행
// 꼭 await가 포함되어 있는 함수에 async가 붙어있어야 한다.
async function test() {
    await pro1('A', 1500);
    await pro1('B', 1000);
    await pro1('C', 500);
  }

// async function test() {
//   try {
//     // 예외가 발생할만한 키워드
//     await pro1('A', 1500);
//     await pro1('D', 1000);
//     await pro1('C', 500);
//   } catch (error) {
//     // 예외가 발생하면 catch안에 들어간다
//     console.log(error);
//   }
// }

test();