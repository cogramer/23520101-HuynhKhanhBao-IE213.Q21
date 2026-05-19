import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';

import MoviesList from './components/MoviesList';
import Movie from './components/Movie';
import AddReview from './components/AddReview';
import Login from './components/Login';

function App() {
  // State lưu user hiện tại
  const [user, setUser] = useState(null);

  // Hàm login
  const login = (userData) => {
    setUser(userData);
  };

  // Hàm logout
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

          {/* Toggle menu mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              {/* Link Movies */}
              <Nav.Link as={Link} to="/">
                Movies
              </Nav.Link>

              {/* Login / Logout */}
              {user ? (
                <>
                  <Nav.Link as={Link} to="/">
                    {user.name}
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

      {/* Routes */}
      <Container className="mt-4">
        <Routes>

          {/* Trang danh sách phim */}
          <Route
            path="/"
            element={<MoviesList />}
          />

          {/* Trang chi tiết phim */}
          <Route
            path="/movies/:id"
            element={<Movie user={user} />}
          />

          {/* Trang thêm review */}
          <Route
            path="/movies/:id/review"
            element={<AddReview user={user} />}
          />

          {/* Trang login */}
          <Route
            path="/login"
            element={
              <Login
                user={user}
                setUser={setUser}
                login={login}
              />
            }
          />

        </Routes>
      </Container>
    </div>
  );
}

export default App;