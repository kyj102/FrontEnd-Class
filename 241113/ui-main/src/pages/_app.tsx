import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";


// ui 설정 세팅
// component, pageProps 라는 두개의 매개변수를 인자값으로 받음
// 자식요소에 페이지로 들어온 요소 = component
// 자식요소의 컴포넌트들은 각각의 props를 받는다 = pageProps
export default function App(
  { Component, pageProps }
  : AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test");
  };
  
  return (
    <>
    <header>
      <Link href={"/"}>Index</Link>
      &nbsp;
      <Link href={"/search"}>Search</Link>
      &nbsp;
      <Link href={"/book/1"}>Book/1</Link>
      <div>
        <button onClick={onClickButton}>
          /test 페이지로 이동
        </button>
      </div>
    </header>
    <Component {...pageProps} />
    </>
  )
}
