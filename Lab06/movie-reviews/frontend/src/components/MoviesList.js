import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movies";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MoviesList = () => {

  const [movies, setMovies] = useState([]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("All Ratings");

  const [ratings, setRatings] = useState(["All Ratings"]);

  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(0);

  // current search mode
  const [currentSearchMode, setCurrentSearchMode] = useState("");

  // load ratings once
  useEffect(() => {
    retrieveRatings();
  }, []);

  // whenever page changes
  useEffect(() => {
    retrieveNextPage();
  }, [currentPage]);

  // reset page when search mode changes
  useEffect(() => {
    setCurrentPage(0);
  }, [currentSearchMode]);

  // input handlers
  const onChangeSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  const onChangeSearchRating = (e) => {
    setSearchRating(e.target.value);
  };

  // get all movies
  const retrieveMovies = () => {

    setCurrentSearchMode("");

    MovieDataService.getAll(currentPage)
      .then((response) => {

        console.log(response.data);

        setMovies(response.data.movies);

        setEntriesPerPage(response.data.entries_per_page);

      })
      .catch((e) => {
        console.log(e);
      });
  };

  // get ratings
  const retrieveRatings = () => {

    MovieDataService.getRatings()
      .then((response) => {

        console.log(response.data);

        setRatings(["All Ratings"].concat(response.data));

      })
      .catch((e) => {
        console.log(e);
      });
  };

  // search helper
  const find = (query, by) => {

    MovieDataService.find(query, by, currentPage)
      .then((response) => {

        console.log(response.data);

        setMovies(response.data.movies);

        setEntriesPerPage(response.data.entries_per_page);

      })
      .catch((e) => {
        console.log(e);
      });
  };

  // search by title
  const findByTitle = () => {

    setCurrentSearchMode("findByTitle");

    if (currentPage !== 0) {
      setCurrentPage(0);
    } else {
      find(searchTitle, "title");
    }
  };

  // search by rating
  const findByRating = () => {

    setCurrentSearchMode("findByRating");

    if (searchRating === "All Ratings") {

      retrieveMovies();

    } else {

      if (currentPage !== 0) {
        setCurrentPage(0);
      } else {
        find(searchRating, "rated");
      }
    }
  };

  // pagination helper
  const retrieveNextPage = () => {

    if (currentSearchMode === "findByTitle") {

      find(searchTitle, "title");

    } else if (currentSearchMode === "findByRating") {

      if (searchRating === "All Ratings") {
        retrieveMovies();
      } else {
        find(searchRating, "rated");
      }

    } else {

      retrieveMovies();
    }
  };

  return (
    <div className="container mt-3">

      <h2>Movies List</h2>

      {/* SEARCH FORM */}
      <Row className="mb-3">

        {/* Search by Title */}
        <Col md={6}>

          <Form.Group>

            <Form.Control
              type="text"
              placeholder="Search by title"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />

          </Form.Group>

          <Button
            variant="primary"
            type="button"
            onClick={findByTitle}
            className="mt-2"
          >
            Search
          </Button>

        </Col>

        {/* Search by Rating */}
        <Col md={6}>

          <Form.Group>

            <Form.Select
              onChange={onChangeSearchRating}
              value={searchRating}
            >

              {ratings.map((rating, index) => (
                <option key={index} value={rating}>
                  {rating}
                </option>
              ))}

            </Form.Select>

          </Form.Group>

          <Button
            variant="primary"
            type="button"
            onClick={findByRating}
            className="mt-2"
          >
            Search
          </Button>

        </Col>
      </Row>

      {/* MOVIES LIST */}
      <Row>

        {movies &&
          movies.map((movie) => (

            <Col key={movie._id} md={4} className="mb-4">

              <Card style={{ width: "18rem" }}>

                <Card.Img
                  variant="top"
                  src={movie.poster ? movie.poster + "/100px180" : ""}
                />

                <Card.Body>

                  <Card.Title>
                    {movie.title}
                  </Card.Title>

                  <Card.Text>
                    <strong>Rating:</strong> {movie.rated}
                  </Card.Text>

                  <Card.Text>
                    {movie.plot}
                  </Card.Text>

                  <Link to={`/movies/${movie._id}`}>
                    View Reviews
                  </Link>

                </Card.Body>

              </Card>

            </Col>
          ))}

      </Row>

      {/* PAGINATION */}
      <br />

      <p>
        Showing page: {currentPage}
      </p>

      <Button
        variant="link"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Get next {entriesPerPage} results
      </Button>

    </div>
  );
};

export default MoviesList;