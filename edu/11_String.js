// String 객체
// let str = new string('문자열입니다.');
let str = `문자"'\`열입니다.`;

// length : 문자열의 길이를 반환
console.log(str.length);

// charAt(idx) : idx의 요소의 값을 반환
console.log(str.charAt(3));

// indexOf(searchStr, idx) : 해당 문자열에서 searchStr을 찾아 최초의 인덱스를 반환
//    찾지 못하면 -1 반환
//      idx는 생략 가능,start 지점 지정
str = '문자열입니다. 문자열입니다.';
console.log(str.indexOf('열'));
console.log(str.indexOf('열', 3));
console.log(str.indexOf('입니다'));
console.log(str.indexOf('숫자'));
console.log(str.includes('숫자')); // 존재여부 체크할때는 includes 이용시 가독성 향상

// replace(pattern, replacement) : pattern을 찾아서 첫번째 문자열을 replacement로 치환한 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replace('문자열', '숫자'));
// 지우고 싶을 때는 아래처럼 사용 가능
// console.log(str.replace('문자열', ''));

// replaceAll(pattern, replacement) : pattern을 찾아서 모든 문자열을 replacement로 치환한 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replaceAll('문자열', ''));

// substring(startIdx, endIdx) : startIdx 부터 endIdx 앞까지 자른 문자열을 반환
// endIdx는 생략 가능
str = '문자열입니다. 문자열입니다.';
console.log(str.substring(2, 5));

// split(seperator, limit) : 문자열에서 seperator 기준으로 각 문자열을 잘라 배열 요소로 담은 배열을 반환
// limit로 배열의 길이를 조절하며, 생략 가능
str = '탕수육,짜장면,짬뽕,크림새우';
let arr = str.split(',');
// str을 ','를 기준으로 잘라 배열로 반환
// arr = ['탕수육', '짜장면', '짬뽕', '크림새우']
// let arr = str.split(',', 1);
// arr = ['탕수육'] > 잘 안쓰기 때문에 보통 limit은 생략

// trim() : 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환
// ()에 파라미터로 특정문자 제거에 사용가능하지만, replace로 가능하기 때문에 잘 안씀
str = '     하  하  ';
console.log(str.trim()); //하  하

// toUpperCase(), toLowerCase() : 영어 대/소문자로 변환해서 반환
str = 'AfdvWdeSDa';
console.log(str.toUpperCase());
console.log(str.toLowerCase());