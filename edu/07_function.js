// 함수(Function)
// 입력을 받아 출력을 하는 일련의 과정을 정의한 것

// 함수 선언식
// 매개변수(parameter) : 외부로부터 입력받은 값을 저장하는 변수
function fnc1(a, b) {
  return a + b;
}
// 인수(Argument) : 함수를 호출할 때 전달 해주는 값
// 선언 후 console로 출력
let resultFnc1 = fnc1(1, 2);
console.log(resultFnc1);
//console로 바로 출력
console.log(fnc1(2, 3));

// 함수 선언식 : 호이스팅에 영향을 받는다.
// 재할당이 가능하므로, 함수명이 중복되지 않도록 조심해야된다.
function fnc3(a, b) {
  return a + b;
}
function fnc3(a, b) {
  return a + b - 9999;
}

console.log(fnc3(1, 2));

// 함수 표현식 : 호이스팅에 영향을 받지 않는다.
// 재할당이 불가능
const fnc4 = function(a, b) {
  return a + b;
}

fnc4(1, 3);

// 화살표 함수 : 함수표현식과 동일하지만 일부 생략 및 화살표(=>) 추가
const fnc5 = (a, b) => a + b;

// fnc 4와 5 동일
// parameter가 1개면 '()' 생략가능, 0개, 2개이상이면 '()' 필수 (헷갈리면 그냥 ()사용)
// fnc 6과 7 동일

const fnc6 = function(a) {
  let test = a / 2;
  return test;
}
const fnc7 = a => {
  let test = a / 2;
  return test;  
}


// 콜백(callback) 함수
// 다른 함수의 파리미터로 전달되어서 특정 조건에 따라 호출되는 함수
// function myChk(a) {
//   a();
// }
function myChk(callback) {
  callback();
}
// ()익명함수 : 이름이 없는 함수. 단발성으로 사용
// myChk(() => console.log('콜백함수'));
const test11 = () => console.log('콜백함수');
myChk(test11);