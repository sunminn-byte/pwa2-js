// - 아래의 프로그램을 만들어 주세요.
//   - `사과 게임` 위에 `장기` 삽입
//   - `어메이징브릭`에 베이지 배경색 추가
//   - 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

const newJanggi = document.createElement('li');
newJanggi.textContent = '장기';
const targetApple = document.querySelector('#apple');
const selectUl = document.querySelector('ul');
selectUl.insertBefore(newJanggi, targetApple);

const amazingLi = document.querySelector('ul :nth-last-child(1)')
amazingLi.style.backgroundColor = 'beige';
// const noneLi = document.querySelectorAll('.none-li');
// noneLi[7].style.backgroundColor = 'beige';

// for문으로 색 변경
// const game = document.querySelectorAll('li');
// for(let i = 0; i < game.length; i++){
//   if ( i % 2 === 0 ) {
//     game[i].style.color = 'blue';
//   } else {
//     game[i].style.color = 'red';
//   }
//  }

// forEach로 색 변경
const game = document.querySelectorAll('li');
game.forEach((val, key) => {
  if(key % 2 === 0) {
  val.style.color = 'blue';
} else {
  val.style.color = 'red';  
}
});

// (미완성)글자수에 따라 색 변경
// const game = document.querySelectorAll('li');
// game.forEach((val, key) => {
//   let gameLength = game.length;
//   if(gameLength % 2 === 0) {
//   game.style.color = 'red';
// } else {
//   game.style.color = 'blue';  
// }
// });

const result = {
  title: '타이틀',
  content: '내용내용',
  img: 'http://www.admin.com/img/posts/ladsfjakls.png'
}
addCard(result);
// 카드 구조 만들기
function addCard(item) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  
  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');
  
  const newCardTItle = document.createElement('p');
  newCardTItle.textContent = item.title;
  newCardImg.classList.add('card-title');
  
  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;
  
  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTItle);
  newCard.appendChild(newCardContent);
  
  document.body.appendChild(newCard);
}