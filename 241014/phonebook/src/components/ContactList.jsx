import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import SearchBar from './SearchBar'
import ContactItem from './ContactItem'

const ContactList = () => {
  const [filteredList, setFilteredList] = useState([]);
  const {contactList, keyword} = useSelector((state) => state);


  useEffect(() => {
    // 조건값에 참이 되는 item의 이름(사용자가 검색한 이름)값이 있다면 찾아오고, 찾아온 ture인 값의 배열만 list라는 변수 안의 새로운 배열값으로 보내고, setFilterList에 새로운 배열로 넣기
    if(keyword !== "") {
      const list = contactList.filter((item) => item.name.includes);
      setFilteredList(list);
    } else {
      setFilteredList(contactList)   // 사용자가 아무 값도 입력하지 않았을 때
    }
  }, [keyword]);
  return (
  <>
  <h6>Friends List👩🏻‍❤️‍👩🏻</h6>
  <SearchBar/>
  {filteredList.map((item, index) => (
    <ContactItem key={index} item={item} />
))}
  </>
  );
};

export default ContactList
