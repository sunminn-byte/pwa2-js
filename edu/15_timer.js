// setTimeout : 일정 시간이 지난 후 작업 실행하는 함수
// 비동기처리
// const timeoutNum1 = setTimeout(() => {
//   console.log('2초');
// }, 2000);
// setTimeout(() => {
//   console.log('1초');
// }, 1000);
// setTimeout(() => {
//   console.log('3초');
// }, 3000);
// console.log('콘솔');

// setTimeout 취소
// setTimeout은 비동기처리여서 clearTimeout이 먼저 실행되기 때문에
// 위의 setTimeout은 표시되지 않음.
// clearTimeout(timeoutNum1);

// setInterval : 일정 시간마다 반복해서 실행하는 함수(콜백함수)
const intervalId1 = setInterval(() => {
  console.log('인터벌 3초');
}, 3000);
const intervalId2 = setInterval(() => {
  console.log('인터벌 2초');
}, 2000);

// setInterval() 제거
clearInterval(intervalId1);
// 6초 뒤에 clearInterval을 실행하고 싶을 때
// setTimeout(() => {
//   clearInterval(intervalId1);
// }, 6000);