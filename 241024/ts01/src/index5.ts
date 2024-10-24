class Student {
  // Field = 인스턴스객체의 키
  // private name;
  // protected age;
  // public grade;

  // 생성자함수 = field에 매칭될 값을 찾아오는 역할
  constructor(
    private name: string, 
    protected age: number, 
    public grade: number,
  ) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 메서드함수
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`)
  }
}

const studentB = new Student("YEJI", 20, 2);
console.log(studentB);
console.log(studentB.introduce());


class StudentDeveloper extends Student {
  favoraiteSkill;

  constructor(name: string, age: number, grade: number, favoraiteSkill: string) {
    super(name, age, grade);  // super : 부모클래스의 생성자 호출
    this.favoraiteSkill = favoraiteSkill;
  }

  // 접근제어자의 키워드에 따른 접근가능성
  func() {
    this.age;
  }

  programming() {
    console.log(`${this.favoraiteSkill}로 프로그래밍합니다.`);
  }
}

const studentC = new StudentDeveloper("Ronaldo", 40, 2, "TS");
console.log(studentC.programming());


// 접근제어자
// public : 모든 범위에서 접근할 수 있도록 설정 (기본값)
// private: 클래스 내부에서만 접근 가능, 파생클래스 접근불가 (가장 엄격)
// protected: 클래스 내부, 상속받은 파생클래스에서도 접근 가능 (두번째로 엄격)