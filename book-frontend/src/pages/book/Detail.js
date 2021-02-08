import React, { useEffect, useState } from 'react';

const Detail = (props) => {
  const id = props.match.params.id;

  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
  });
  useEffect(() => {
    fetch('http://localhost:8080/book/' + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res); //계속 새로 만들어지기 때문에 깊은복사함수 필요없음
      });
  }, []);

  return (
    <div>
      <h1>책 상세보기</h1>
      <hr />
      <h3>{book.author}</h3>
      <h1>{book.title}</h1>
    </div>
  );
};

export default Detail;
