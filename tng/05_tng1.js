// for(let i = 1; i < 6; i++) {
//   console.log('*****');
// }

// *****
// *****
// *****
// *****
// *****

// let star = '*';

// for(let i = 0; i < 5; i++) {
//   let makedStar = '';

//   for(let z = 0; z < 5; z++) {
//     makedStar += star;
//   }
//   console.log(`${makedStar}`);
//   // makedStar = '';
// }

// *
// **
// ***
// ****
// *****
// for문 1개 사용
// let makedStar = '';
// for(let lineCnt = 0; lineCnt < 5; lineCnt++) {
//   makedStar += '*';
//   console.log(makedStar);
// }

// for문 2개 사용
// for(let lineCnt = 0; lineCnt < 5; lineCnt++) {
//   let makedStar = '';
//   for(let starCnt = 0; starCnt <= lineCnt; starCnt++){
//     makedStar += '*';
//   }
//   console.log(makedStar);
// }

// *****
// ****
// ***
// **
// *

// for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
//   let   makedStar = '';
//   for(let starCnt = 0; starCnt < lineCnt; starCnt++) {
//     makedStar += '*';
//   }
//   console.log(makedStar);
// }


//     *
//    **
//   ***
//  ****
// *****
let makedStar = '';

for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += '*';
  let makedSpace = '';

  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + makedStar);
}