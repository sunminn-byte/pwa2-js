
let cnt = 0;

while(true) {
  console.log(cnt);
  cnt++;
  // console.log('while문 시작');

  if(cnt >= 3) {
    break;
  }
  // console.log('while문 끝');
}

// 구구단 2단만
// 선생님
// let multiPlier = 1;

// while(multiPlier < 10) {
//   console.log(`2 X ${multiPlier} = ${2*multiPlier}`);

//   multiPlier++;
// }

// 나
// let num1 = 1;
// let num2 = 2;

// while(true) {
//   console.log(`${num2} X ${num1} = ${num1 * num2}`)
//   num1++;

//   if(num1 > 9) {
//     break;
//   }

// }

// do-while문
let multiPlier = 1;
do {
  console.log(`2 X ${multiPlier} = ${2*multiPlier}`);

  multiPlier++;
} while(multiPlier < 10);