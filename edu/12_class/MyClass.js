// 클래스(Class)

class MyClass {
  // 인스턴스변수
  name; // public : 클래스 내외부 어디서든 접근 가능
  #age; // private : 클래스 내부에서만 접근 가능
  _addr; // protected : 나와 그리고 상속관계에서 자식클래스들은 접근이 가능, JS에는 없는 기능

  // static 정적변수 : 극히 제한적인 상황말고는 사용x,
  //    new로 인스턴스화하는거 없이 접근 가능, 프로퍼티/메소드 둘다 적용 가능
  static gender = 'M';

  // 생성자 메소드 : 무조건 constructor로 만들어야 함
  // 'new' 키워드로 객체를 인스턴스화 할 때 딱 한번 실행되는 메소드 (MyClass()에서 ()에 default)
  // 객체를 초기화할때 초기값을 셋팅할 때 쓰임
  constructor(name, age, addr) {
    this.name = name;
    this.#age = age;
    this._addr = addr;
  }

  // getter / setter
  // getter : 객체의 속성(프로퍼티)에 접근하여 값을 반환(조회)하는 메소드(안->밖)
  // setter : 객체의 속성(프로퍼티)에 값을 할당할 때 사용하는 메소드(밖->안)
  // 메소드지만 사용할 때 프로퍼티 사용 하듯이 동작한다.
  // getter는 파라미터x, setter는 파라미터 필수
  get age() {
    return this.#age;
  }
  set age(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  // 인스턴스 메소드
  add(a, b) {
    return a + b;
  }
}

// const명을 클래스명과 동일하게 적는것이 관습적이지만, 중복된다면 다른걸로 사용 가능
// const myClass = new MyClass();
// let addNum = myClass.add(5, 10);
// console.log(addNum);

// static은 new로 인스턴스화 없이 바로 접근 가능
// console.log(MyClass.gender);

// _(protected)는 아직 JS에서 지원하지 않기때문에 public으로 인식되어 접근 가능
// console.log(myClass._addr);

// constructor로 초기값 셋팅
const myClass = new MyClass('홍길동', 20, '조선');
const myClass2 = new MyClass('갑순이', 10, '한국');
console.log(myClass.name);
console.log(myClass2.name);

// #(private)에 접근하고 싶을 때
// getter 메소드명으로 접근(#age가 아닌 age)
console.log(myClass.age);
// setter 메소드명으로 접근(#age가 아닌 age)
myClass.age = 40;
console.log(myClass.age);