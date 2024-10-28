interface Developer {
  type: string;
  skill: string;
}

interface Student {
  type: string;
  school: string;
}


// 서로소 유니온 타입
interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: "YEJI",
  profile: {
    type: "developer",
    skill: "typescript",
  }
};

const studentUser: User<Student> = {
  name: "Wonbin",
  profile: {
    type: "student",
    school: "서울대학교",
  }
};


// 서로소 유니온타입의 반대급부
const gotoSchool = (user: User<Student>) => {
  const school = user.profile.school;
  console.log(`${school}로 등교완료!`);
}