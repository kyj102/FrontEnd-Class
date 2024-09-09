import {useState} from "react";

const Body1 = () => {



  const [text, SetText] = useState("");
  const handleOnChange = (e) => {
    console.log("변경된 값:", e.target.value);
    SetText(e.target.value);
  }


  // const [option, setOption] = useState("");
  // const handleOnChange = (e) => {
  //   console.log("변경된 값:", e.target.value);
  //   setOption(e.target.value);
  // };



  // const handleOnClick = (e) => {
  //   console.log(e.target.name)
  // };



  // const[count, setCount] = useState(0);
  // // state : 초기값
  // // setState : state의 변수값을 업데이트시켜주는 함수

  // const onIncrease = () => {
  //   setCount(count + 1);
  // };



  // const [text, setText] = useState("");

  // const handleOnChnage = (e) => {
  //   setText(e.target.value);
  // };



  // const [date, setDate] = useState("");
  // const handleOnChange = (e) => {
  //   console.log(e.target.value);
  //   setDate(e.target.value);
  // }




  return (
  <div>
    <textarea value={text} onChange={handleOnChange}/>
    {/* <select value={option} onChange={handleOnChange}>
      <option key={"1번"}>1번</option>
      <option key={"2번"}>2번</option>
      <option key={"3번"}>3번</option>
    </select> */}



    {/* <input type="date" value={date} onChange={handleOnChange}/> */}


    
    {/* <input onChange={handleOnChnage} />
    <div>{text}</div> */}


    {/* <h2>{count}</h2>
    <button onClick={onIncrease}>+</button> */}


      {/* <button name="A버튼" onClick={handleOnClick}>A버튼</button>
      <button name="B버튼" onClick={handleOnClick}>B버튼</button> */}
  </div>
  );
};

export default Body1;