// 1. 글을 입력하는 란이 있음
// 2. 작성 버튼을 누르면 아래와 같이 작동
//    2-1. 글 입력란이 비워져 있다면 아무 동작 안함
//    2-2. 글 입력란이 작성되어 있다면 해당 글을 기반으로 목록 추가
//      2-2-1. 작성 완료시 글 입력란을 비우기

const writeBtn = document.querySelector('#writeBtn');

writeBtn.addEventListener('click', () => {
  const keywordInput = document.querySelector('#keyword');

  // false | null | undefined | 0 | ''(빈 문자열) 은 if()에서 false로 인식
  // (자바스크립트에서만 !== '' 없이 사용 가능)
  if(keywordInput.value) {

    // content 요소 생성
    const newContent = document.createElement('div');
    newContent.classList.add('content');
      // newContent.innerHTML = `<p>${keywordInput.value}</p>`;
      // ↑ 요즘에는 이렇게 안쓰고 ↓ 이렇게 작성해야 함
    const newP = document.createElement('p');
    newP.textContent = keywordInput.value;
    newContent.appendChild(newP);

    // ↓ 이걸 참고로 위의 content 요소를 생성한 후 html에서 해당 div는 모두 삭제처리
    // <div class="content">
    //   <p>테스트용 글1</p>
    // </div>

    // ----------------- 서비스 -----------------
    // 2. 아이템 클릭하면 완료, 다시 클릭하면 풀리기
    newContent.addEventListener('click', (e) => {
      e.target.classList.toggle('toggle-line-through');
    });
    // ----------------- 서비스 -----------------
  
    // 생성한 요소 추가
    const printBox = document.querySelector('.print-box');
    printBox.appendChild(newContent);
  
    // 검색어 초기화
    keywordInput.value = '';

  }

});

// ----------------- 서비스 -----------------

// 서비스
// 1. 엔터로 작성되게 하기
const keywordInput = document.querySelector('#keyword');
keywordInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault(); // 기존 keypress 이벤트 중지
    const writeBtn = document.querySelector('#writeBtn');
    writeBtn.click(); // 작성 버튼 클릭 이벤트 발생시키기
  }
});


// ----------------- 내가 한거 -----------------
// const input = document.querySelector('#myInput');
// const button = document.querySelector('#btn');

// btn.addEventListener('click', addText); 
// btn.addEventListener('click', blank); 

// function addText() {
//   if(input.value !== "") {
//     const div = document.createElement('div');
//     div.textContent = input.value;
//     container.appendChild(div);
//   }
// }

// function blank() {
//   if(input.value) {
//     input.value = '';
//   }
// }