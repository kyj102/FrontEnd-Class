import React, { ReactNode, useEffect } from 'react'
import style from "./index.module.css";
import SearchableLayout from '@/components/searchable-layout';
import BookItem from '@/components/book-item';
import books from "@/mock/book.json";
import { InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';


// Home이라는 페이지 컴포넌트가 실행되기 전에 먼저 실행되어서, 컴포넌트에 필요한 데이터를 사전에 패칭 및 불러와주는 기능을 하는 함수
export const getServerSideProps = async () => {
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(), 
    fetchRandomBooks(),
  ])

  return {
    props: {allBooks, recoBooks},
    };
  };

const Home = ({
  allBooks,
  recoBooks,
} : InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
          ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
          ))}
      </section>
    </main>
  );
};

// index페이지에서 특정한 레이아웃 사용 직접지정
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}

export default Home
