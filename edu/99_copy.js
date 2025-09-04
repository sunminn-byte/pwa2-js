
// ----------------------------------- 
// shallow copy 와 deep copy
// ----------------------------------- 

const user = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
};



// --shallow copy(얕은 복사)
// 최상위 계층의 요소만 독립적으로 복사
// , 그 외 계층은 참조형태로 복사

const shallowCopy = {...user};
// 최상위 계층 : name, age, friends (독립적 복사-shallowCopy만 바뀜)
shallowCopy.age = 30;
shallowCopy.friends = {test: 'ttt'};
// 그 외 계층 : friends.id (참조형태 복사-둘 다 바뀜)
shallowCopy.friends.id = 100;

console.log(user, shallowCopy);



// --deep copy(딮카피)
// 모든 계층의 요소를 독립적으로 복사

// JSON
// 1) JSON.stringify(user) : user 객체를 json으로 바꿈
// 2) JSON.parse() : parse로 
// 문제점 : 함수, symbole, undefined는 복사가 안됨
const jsonCopy = JSON.parse(JSON.stringify(user));
jsonCopy.friends.id = 200;

console.log(user);

// structuredClone
// 문제점 : node 17버전 이상(Node.js 17+) 또는 브라우저 최신환경에서만 가능함
const cloneCopy = structuredClone(user);
jsonCopy.friends.id = 200;

console.log(user);



// -----------------------------------
// Destructuring 문법
// -----------------------------------



// --배열일 경우
const arr = ['hong', 20];

// arr[0];
// arr[1];
const [name1, age1] = arr;
const [name2] = arr;
const [, age2] = arr;

// 위와 같이 하면 index가 아니라 age1, name2 등으로 불러올 수 있음
console.log(age1);



// --객체일 경우
const user2 = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
};

// user2.age;
// user2.name;
// user2.friends;

// 객체의 키(name, age...)를 매체로 가져오기 때문에 동일하게 적어줘야 하고
// , 순서는 상관없다.
const {name, friends} = user2;

console.log(name, friends);