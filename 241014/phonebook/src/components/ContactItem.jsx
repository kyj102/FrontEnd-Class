import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 20px 0;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Name = styled.div``;

const Number = styled.div``;

const ContactItem = ({item}) => {
  console.log(item)
  return (
    <Wrapper>
      <Row>
        <Col lg={1}>
          <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7QW7-0YLMeoqv448qZ3T33JFoHCkLjjwhQ&s' alt='user'/>
      </Col>
      <Col lg={11}>
        <Name>{item.name}</Name>
        <Number>{item.phoneNumber}</Number>
      </Col>
    </Row>
    </Wrapper>
  )
}

export default ContactItem
