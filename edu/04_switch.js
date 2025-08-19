// switch 문
let food = '돈까스';
let foodKinds = '';

switch(food) {
  case '돈까스':
    foodKinds ='경양식';
    break;
  case '김치찌개':
    foodKinds = '한식';
    break;
  case '초밥':
    foodKinds = '일식';
    break;
  default:
    foodKinds = '기타';
    break;
}

if(food === '돈까스') {
  foodKinds = '경양식';
} else if(food === '김치찌개') {
  foodKinds = '한식';
} else if(food === '초밥') {
  foodKinds = '일식';
} else {
  foodKinds = '기타';
}