import React, {useState, useEffect, useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import EmotionItem from './EmotionItem';
import {getFormattedDate, emotionList} from "../util";

const EditorSection = styled.div`
  margin-bottom: 40px;
  & h4 {
  font-size: 22px;
  }
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 5px;
  padding: 20px;
  background: #ececec;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  width: 93%;
  min-height: 200px;
  resize: none;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background: #ececec;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmotionGroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;

const Editor = ({initData, onSubmit}) => {
  const navigate = useNavigate();
  const [state, setState] = useState(
    {
    date: getFormattedDate(new Date()),
    emotionId: 1,
    content: "",
  });
  useEffect(() => {
    if(initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date)))
      })
    }
  }, [initData])

const handleChangeDate = (e) => {
  setState({
    //원래있었던 객체값은 유지시키고 date 키값만 이벤트의 실행값으로 바꿔주겠다는 의미의 전개연산자
    ...state,
    date: e.target.value,  // 날짜의 상태변화업데이트 => useState 정상적으로 작동
  })
};

const handleChangeContent = (e) => {
  setState({
    ...state,
    content: e.target.value,
  })
}

// 일기 수정시 변경된 값을 가져오려고 하는 경우
const handleSubmit = () => {
  onSubmit(state);
};

const handleGoBack = () => {
  navigate(-1);
};

const handleChangeEmotion = useCallback((emotionId) => {
  setState((state) => ({
    ...state,
    emotionId,
  }))
}, []);

  return (
    <div>
      <EditorSection>
        <h4>오늘의 날짜</h4>
      <Input 
      type='date' 
      value={state.date}
      onChange={handleChangeDate}
      />
      </EditorSection>
      
      <EditorSection>
        <h4>오늘의 감정</h4>
      <EmotionGroup>
        {emotionList.map((item) =>
          <EmotionItem 
          key={item.id}
          onClick={handleChangeEmotion}
          {...item}
          isSelected={state.emotionId === item.id}
          />
          )}
      </EmotionGroup>
      </EditorSection>

      <EditorSection>
        <h4>오늘의 일기</h4>
      <Textarea 
      placeholder='오늘은 어땠나요?' 
      value={state.content}
      onChange={handleChangeContent}
      />
      </EditorSection>

      <EditorSection>
        <ButtonGroup>
          <Button text={"취소하기"} onClick={handleGoBack} />
          <Button text={"작성완료"} type={"positive"}
          onClick={handleSubmit}
          />
        </ButtonGroup>
      </EditorSection>
    </div>
  )
}

export default Editor;
