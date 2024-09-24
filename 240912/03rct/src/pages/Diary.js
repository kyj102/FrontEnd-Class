import React, {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useDiary from '../hooks/useDiary'
import Header from '../component/Header';
import Button from '../component/Button';
import Viewer from '../component/Viewer';
import { getFormattedDate, setPageTitle} from '../util';

const Diary = () => {
  const navigate = useNavigate();
  const {id}  = useParams();
  const data = useDiary(id);
  useEffect(() => {
    setPageTitle(`${id} Diary`);
  }, []);
  // 데이터가 존재할때까지 나타나는 예외조항처리
  // 최초값으로 null을 줘서 값이 없는 상태로 만들어놔야한다
  if(!data) {
    return <div>일기를 불러오고 있습니다...</div>
  } else {
    const goBack = () => {
      navigate(-1);
    };
    const goEdit = () => {
      navigate(`/edit/${id}`);
    };

    const {date, emotionId, contnet} = data;
    const title = `${getFormattedDate(new Date(parseInt(date)))}`
    return (
    <div>
      <Header
      leftChild={<Button text={"< 뒤로가기"} onClick={goBack}/>}
      title={title}
      rightChild={<Button text={"수정하기"} onClick={goEdit}/>}
      />
      <Viewer content={contnet} emotionId={emotionId}/>
    </div>
    );
  }
};

export default Diary