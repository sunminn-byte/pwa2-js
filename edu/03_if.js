// if문
// 조건에 따라서 서로 다른 처리를 하는 문법 (분기문)
// 조건이 참이면 해당 처리를 진행하고, 거짓이면 다음 처리를 이어감
let rank = 5;

if(rank === 1) {
  console.log('1등 입니다.');
} else if(rank === 2) {
  console.log('2등 입니다.');
} else if(rank === 3) {
  console.log('3등 입니다.');
} else {
  if(rank === 5 || rank === 7) {
    console.log('특별상 입니다.');
  } else {
  console.log('등수 외입니다.');
  }
}

if(rank === 1) {
  console.log('챔피언');
}

// 1번문제의 정답은 2, 2번문제의 정답은 5
// 1번문제와 2번문제 모두 정답이면 100점,
// 둘중 하나만 정답이면 50점
// 모두 오답이면 0점을 출력
let answer1 = 2;
let answer2 = 3;
let score = 0;

if(answer1 === 2 && answer2 === 5) {
  console.log('100점');
} else if(answer1 === 2 || answer1 === 5) {
  console.log('50점');
} else if(!(answer1 === 2 && answer2 === 5)) {
  console.log('0점');
}

// if(answer1 === 2 && answer2 === 5) {
//   score = 100;
// } else if(answer1 === 2 || answer1 === 5) {
//   score = 50;
// }
// console.log(score + '점');

if(answer1 === 2) {
  score += 50;
}
if(answer2 === 5) {
  score += 50;
}
console.log(score + '점');