import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { setBooks, books, setHome } = props;
  const [title, setTitle] = useState('');

  const handleChangeId = (e) => {
    setTitle(e.target.value);
  };

  const searchBar = (e) => {
    e.preventDefault();
    console.log('id값: ', title);

    const books2 = books.filter((book) => {
      return ~book.title.indexOf(title); //문자열 포함 여부, 있을 경우만 ~
    });
    console.log('수정한 배열', books2);

    setBooks(books2);

    //props.history.push('/');
  };

  const home = () => {
    setHome([1]);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand" onClick={home}>
          홈
        </Link>
        <Nav className="mr-auto">
          <Link to="/joinForm" className="nav-link">
            회원가입
          </Link>
          <Link to="/loginForm" className="nav-link">
            로그인
          </Link>
          <Link to="/saveForm" className="nav-link">
            글쓰기
          </Link>
        </Nav>

        <Form onSubmit={searchBar} inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            name="keyword"
            value={title}
            onChange={handleChangeId}
          />
          <Button type="submit" variant="outline-info">
            Search
          </Button>
        </Form>
      </Navbar>
      <br />
    </>
  );
};

export default Header;
