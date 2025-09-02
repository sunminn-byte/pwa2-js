// -------------------- chaining방식 --------------------
// document.querySelector('.requerst-box > button').addEventListener('click', () => {
//   const url = document.querySelector('#apiUrl').value;
//   const cardBox = document.querySelector('.card-box');
//   cardBox.textContent = '';

//   axios.get(url)
//   .then(res => {
//     res.data.forEach(item => {
//       const newCard = document.createElement('div');
//       newCard.classList.add('card');
//       newCard.style.backgroundImage = `url(${item.download_url})`;

//       cardBox.appendChild(newCard);
//     });
//   })
//   .catch(err => {
//     console.error(err);
//   });
// });


// -------------------- chaining 로딩중 추가 --------------------
// loading on 함수방식 적용
/**
 * 플래그에 따라 로딩을 온(true일 경우)/오프(false일 경우)
 * @param {boolean} flg 
 */
function loadingToggle(flg) {
  const loading = document.querySelector('.loading');
  if(flg) {
    loading.classList.add('loading-on');
  } else {
    loading.classList.remove('loading-on');
  }
}

document.querySelector('.requerst-box > button').addEventListener('click', () => {
  loadingToggle(true);
  const url = document.querySelector('#apiUrl').value;
  const cardBox = document.querySelector('.card-box');
  cardBox.textContent = '';

  axios.get(url)
  .then(res => {
    res.data.forEach(item => {
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.style.backgroundImage = `url(${item.download_url})`;

      cardBox.appendChild(newCard);
    });
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    loadingToggle(false);
  });
});


// -------------------- async방식 --------------------
// document.querySelector('.requerst-box > button').addEventListener('click', async() => {
//   const url = document.querySelector('#apiUrl').value;
//   const cardBox = document.querySelector('.card-box');
//   cardBox.textContent = '';

//   try {
//     const res = await axios.get(url);
//     res.data.forEach(item => {
//       const newCard = document.createElement('div');
//       newCard.classList.add('card');
//       newCard.style.backgroundImage = `url(${item.download_url})`;

//       cardBox.appendChild(newCard);
//     })
//   } catch (err) {
//     console.error(err);
//   }

// });


// -------------------- async방식에 로딩중 추가 --------------------
// loading on 함수방식 X
// document.querySelector('.requerst-box > button').addEventListener('click', async() => {
//   const loading = document.querySelector('.loading');
  
//   try {
//     loading.classList.add('loading-on');
//     const url = document.querySelector('#apiUrl').value;
//     const cardBox = document.querySelector('.card-box');
//     cardBox.textContent = '';

//     const res = await axios.get(url);
//     res.data.forEach(item => {
//       const newCard = document.createElement('div');
//       newCard.classList.add('card');
//       newCard.style.backgroundImage = `url(${item.download_url})`;

//       cardBox.appendChild(newCard);
//     })
//   } catch (err) {
//     console.error(err);
//   } finally {
//     loading.classList.remove('loading-on');
//   }
// });