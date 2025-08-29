nowTimeIntoElement('#nowTime');

let intervalNowTime = setInterval(() => {
  nowTimeIntoElement('#nowTime');
}, 1000);

// 멈춰 버튼 처리
const btnStop = document.querySelector('#btnStop');
btnStop.addEventListener('click', () => {
  clearInterval(intervalNowTime);
  intervalNowTime = null;
});

// 재시작 버튼 처리
const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', () => {
  nowTimeIntoElement('#nowTime');

  if(intervalNowTime === null){
    intervalNowTime = setInterval(() => {
      nowTimeIntoElement('#nowTime');
    }, 1000);
  }
});

// 기록 버튼
const btnReport = document.querySelector('#btnReport');
btnReport.addEventListener('click', () => {
  const container = document.querySelector('.reportContainer');
  const newP = document.createElement('p');
  newP.textContent = generateNowTimeFormatUntilMilliseconds();
  // newP.textContent = document.querySelector('#nowTime').textContent;
  container.appendChild(newP);
});

// 기록 초기화
const btnReportReset = document.querySelector('#btnReportReset');
btnReportReset.addEventListener('click', () => {
  document.querySelector('.reportContainer').textContent = '';
});

// ------------------ 이하 함수 ------------------

// 만든 함수 위에서 '/**엔터'후 아래와 같이 정보 저장
/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입
 * @param {string} selector 
 */
function nowTimeIntoElement(selector) {
  const element = document.querySelector(selector);
  element.textContent = generateNowTimeFormat();
} 

/**
 * 현재시간을 `오전 hh:mm:SS` 형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormat() {
  const now = new Date();
  // return now.toLocaleTimeString();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  let ampm = '';
  if(hours < 12) {
    ampm = '오전';
  } else {
    ampm = '오후';
    hours -= 12;
  }
  
  return `${ampm} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

/**
 * 현재시간을 `오전 hh:mm:SS.sss` 형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormatUntilMilliseconds() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();

  let ampm = '';
  if(hours < 12) {
    ampm = '오전';
  } else {
    ampm = '오후';
    hours -= 12;
  }
  
  return `${ampm}`
    + ` ${hours.toString().padStart(2, '0')}`
    + `:${minutes.toString().padStart(2, '0')}`
    + `:${seconds.toString().padStart(2, '0')}`
    + `.${milliseconds.toString().padStart(3, '0')}`
}


// ------------------ 내가 한거 ------------------
// const clock = document.querySelector('#clock');

// function getClock() {
//   const now = new Date();
  
//   const nowHours = now.getHours();
//   const nowMinutes = now.getMinutes();
//   const nowSeconds = now.getSeconds();
//   let noon = '';
//   if(nowHours >= 0 && nowHours <= 11 ) {
//     noon = '오전';
//   } else { 
//     noon = '오후';
//   }

//   clock.textContent = `현재 시각 ${noon} ${lpad(nowHours, 2, '0')}:${lpad(nowMinutes, 2, '0')}:${lpad(nowSeconds, 2, '0')}`;

//   function lpad(origin, length, fillStr) {
//     if(typeof(origin) === 'number') {
//         origin = origin.toString();
//       }
//       return origin.padStart(length, fillStr);
//     }

// }

// let intervalTime = setInterval(getClock, 1000);

// const stopBtn = document.querySelector('#stopBtn');
// stopBtn.addEventListener('click', () => {
//   clearInterval(intervalTime);
// });

// const restartBtn = document.querySelector('#restartBtn');
// restartBtn.addEventListener('click', () => {
//   clearInterval(intervalTime);
//   intervalTime = setInterval(getClock, 1000);
// });