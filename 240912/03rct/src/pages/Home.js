import React, {useState, useEffect, useContext} from 'react'
import { DiaryStateContext } from '../App'
import Header from '../component/Header'
import Button from '../component/Button'
import DiaryList from '../component/DiaryList'
import { getMonthRangeByDate, setPageTitle } from '../util'

const Home = () => {
  const data = useContext(DiaryStateContext);
  // pivotDate = 현시점의 날짜정보
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if(data.length >= 1) {
      const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
      // 시작하는 시점과 끝나는 시점 사이에 있는 일기만 찾아오도록
      setFilteredData(data.filter((item) => 
        beginTimeStamp <= item.date && item.date <= endTimeStamp))
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  useEffect(() => {
    setPageTitle("Welcome YEJI Diary!")
  }, []);

  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  };

  const onIDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + -1))
  };

  return (
    <div>
      <Header 
      leftChild={<Button text={"<"} onClick={onIDecreaseMonth} />} 
      title={headerTitle} 
      rightChild={<Button text={">"} onClick={onIncreaseMonth} />} />
      <DiaryList data={filteredData} />
    </div>
  )
}

export default Home;