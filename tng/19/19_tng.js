
function result() {
  const url = document.querySelector('#urlInput').value;
  const container = document.querySelector('.container');
  container.innerHTML='';

  axios.get(url) // 첫번째 파라미터는 무조건 url
  .then(response => {
    response.data.forEach((item) => {

      const card = document.createElement('div');
      card.classList.add('cardClass');
      const newImg = document.createElement('img');
      newImg.setAttribute('src', item?.download_url);
      newImg.setAttribute('width', '100%');
      newImg.classList.add('new_img');

      container.appendChild(card);
      card.appendChild(newImg);
    });        
  })
  .catch(err => {
    console.log(err);
  });

}

const btn = document.querySelector('#btn');
btn.addEventListener('click', result);