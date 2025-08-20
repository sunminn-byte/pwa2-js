// For 문
// for(let i = 1; i < 5; i++) {
//   if(i >= 3) {
//     break;
//   }
//   console.log(i);
// }

for(let i = 1; i < 5; i++) {
  if(i === 3) {
    continue;
  }
  console.log(i);
}

// 다중루프
let z = 0
for(let i = 0; i < 3; i++) {
  console.log(`바깥쪽 루프 : ${i}번째`);
  
  for(z; z < 3; z++) {
    console.log(`안쪽 루프 : ${z}번째`);
  }
}

// 구구단 2단 출력
// let dan = 3;
// for(let i = 1; i <= 9; i++) {
//   console.log(`${dan} X ${i} = ${dan * i}`);
// }

let startDan = 2;
let startMultiPlier = 1;
let maxDan = 9;

for(let dan = 2; dan <= 9; dan++) {
  console.log(`** ${dan}단 **`);

  for(let multiPlier = 1; multiPlier <= 9; multiPlier++) {
    console.log(`${dan} X ${multiPlier} = ${dan * multiPlier}`);
  }
}