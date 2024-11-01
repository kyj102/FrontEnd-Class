import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useRecoilState, useRecoilValue } from 'recoil';
import { minuteState, hourSelector } from './atoms';

const GlobalStyle = createGlobalStyle`
  * {
    margin: auto;
    padding: 0%;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  };

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => {
  const hours = useRecoilValue(hourSelector);
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  return (
    <>
    <GlobalStyle/>
      <div>
        <input 
        value={minutes} 
        onChange={onMinutesChange} 
        type='number' 
        placeholder='Minutes'
        />
        <input 
        value={hours}
        type='number' 
        placeholder='Hours'
        />
      </div>
    </>
  )
}

export default App
