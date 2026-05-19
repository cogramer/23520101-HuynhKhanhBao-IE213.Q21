import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';

import MoviesList from './components/MoviesList';
import Movie from './components/Movie';
import AddReview from './components/AddReview';
import Login from './components/Login';

function App() {
  // Lưu trữ trạng thái đăng nhập của người dùng
  const [user, setUser] = useState(null);

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            Movie Reviews
          </Navbar.Brand>

          {/* Collapse menu */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Liên kết Movies */}
              <Nav.Link as={Link} to="/">
                Movies
              </Nav.Link>

              {/* Liên kết Login/Logout */}
              {user ? (
                <>
                  <Nav.Link as={Link} to="/">
                    {user}
                  </Nav.Link>
                  <Nav.Link onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Định tuyến */}
      <Container className="mt-4">
        <Routes>
          {/* Trang danh sách phim */}
          <Route path="/" element={<MoviesList />} />

          {/* Trang chi tiết phim với review */}
          <Route path="/movies/:id" element={<Movie />} />

          {/* Trang thêm review */}
          <Route path="/movies/:id/review" element={<AddReview />} />

          {/* Trang đăng nhập */}
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
