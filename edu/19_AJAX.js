
const url = 'https://picsum.photos/v2/list?page=1&limit=10';

// axios는 html에 script로 불러왔기 때문에 전역스코프로
// get : http method(put, delete ...)
axios.get(url) // 첫번째 파라미터는 무조건 url
.then(response => {
  // console.log(response);
  response.data.forEach((item, idx) => {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', item?.download_url);
    newImg.setAttribute('width', '300px');

    const container = document.querySelector('.container');
    container.appendChild(newImg);
  });
})
.catch(err => {
  console.log(err);
});

// post, put, delete는 1차 프로젝트 후에 배운다.
// 그 전까지는 get만 사용