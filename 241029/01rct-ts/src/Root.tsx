import React from 'react'
import { ThemeProvider } from 'styled-components';
import {darktheme, lighttheme} from "./theme"
import { Outlet } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { isDarkAtom } from './atoms';
import { useRecoilValue } from 'recoil';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: "Source Sans 3", serif;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const Root = () => {
  const isDark = useRecoilValue(isDarkAtom);
  console.log(isDark);
  return (
    <>
    <ThemeProvider theme={isDark ? darktheme : lighttheme}>
    <GlobalStyle/>
      <Outlet/>
      <ReactQueryDevtools 
      initialIsOpen={false}
      buttonPosition='bottom-left'
      />
    </ThemeProvider>
    </>
  )
}

export default Root
