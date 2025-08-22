// Math 객체

// ceil(arg) : 올림
// round(arg) : 반올림
// floor(arg) : 버림
let double = 0.9;
Math.ceil(double); //1
Math.round(double); //1
Math.floor(double); //0

// random() : 0초과 1미만의 랜덤한 수(난수)를 반환
let randomDouble = Math.random();
// 1~10 난수
console.log(Math.ceil(randomDouble * 10));

// 0. 저장용 배열 만들기(length: 11, 각 요소의 값은 0)
const arrSaveCnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// 1. 루프 100만번 돌려
for(let i = 1; i < 1_000_000; i++) {
  //  1-1. 랜덤수 획득 `Math.ceil(Math.random() * 10)`
  const randomNum = Math.ceil(Math.random() * 10);

  //  1-2. 저장용 배열에 나온 숫자를 카운트해서 저장
  arrSaveCnt[randomNum]++;
}
// 2. 저장용 배열 확인
console.log(arrSaveCnt);

// abs(arg) : 절대값을 반환
Math.abs(1); //1
Math.abs(-1); //1