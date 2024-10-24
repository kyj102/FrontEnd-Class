// 외부 API 찾아올 떄의 타입지정

// 옵셔널 체이닝을 사용하지 않고 세 가지 타입으로 독립시키고 서로 겹쳐진 요소가 없는 타입들
// 교집합을 만들어 낼 수 없는 타입들
type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  }
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  }
};

// 서로소 유니온 타입을 합칩합으로 만들기
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 합집합에서 값을 찾아오기
const processResult = (task: AsyncTask) => {
  switch(task.state) {
    case "LOADING": {
      console.log("로딩중...");
      break;
    }
    case "FAILED": {
      console.log(`에러발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
};