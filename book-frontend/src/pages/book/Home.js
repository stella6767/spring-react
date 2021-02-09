import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BookItem from '../../components/BookItem';
import Header from '../../components/Header';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [home, setHome] = useState([]); //이 방법밖에 없나..

  //함수 실행시 최초 한번 실행되는 것 + 상태값이 변경될때마다 실행, 최초한번만 할려면 []=어디에도 의존안함
  useEffect(() => {
    fetch('http://localhost:8080/book')
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
        setBooks(res);
      }); //비동기 함수
  }, [home]);
  return (
    <div>
      <Header setBooks={setBooks} books={books} setHome={setHome} />
      <Container>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </Container>
    </div>
  );
};

export default Home;
