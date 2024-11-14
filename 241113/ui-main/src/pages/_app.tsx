import "@/styles/globals.css";
import { ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/global-layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
}

// ui 설정세팅
// component, pageProps 라는 두개의 매개변수를 인자값으로 받음
// 자식요소에 페이지로 들어온 요소 = component
// 자식요소의 컴포넌트들은 각각의 props를 받는다 = pageProps
export default function App({ 
  Component, 
  pageProps,
  }: AppProps & {Component: NextPageWithLayout}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <GlobalLayout>
        {getLayout(<Component {...pageProps} />)}
      </GlobalLayout>
  )
}
