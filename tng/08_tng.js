// 각 회원의 rank가 코드 형식으로 저장되어 있습니다.
// 이 코드는 각각 아래와 같은 의미를 가집니다.
//    1 = 관리자, 2 = 팀장, 3 = 주임, 4 = 사원
// 코드로 되어 있는 rank를 한글로 바꿔주세요.
const result = [
  {
    userId: 1,
    email: 'admin1@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'jhon',
    rank: 1,
  },
  {
    userId: 2,
    email: 'admin2@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'suzan',
    rank: 2,
  },
  {
    userId: 3,
    email: 'admin3@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'ahoi',
    rank: 3,
  },
  {
    userId: 4,
    email: 'admin4@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'yoho',
    rank: 2,
  },
];

const resultMap = result.map(item => {
  let krRank = '';
  if(item.rank === 1) {
    krRank = '관리자';
  } else if(item.rank === 2) {
    krRank = '팀장'
  } else if(item.rank === 3) {
    krRank = '주임'
  } else {
    krRank = '사원'
  }

  item.rank = krRank;
  return item;
  
  // 원본을 변경없이 유지하고 싶을 때
  // const copyItem = {...item};

  // copyItem.rank = krRank;
  // return copyItem;
});

console.log(resultMap);