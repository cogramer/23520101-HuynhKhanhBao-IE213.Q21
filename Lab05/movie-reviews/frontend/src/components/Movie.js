import React, { useState, useEffect } from 'react';
import MovieDataService from '../services/movies';
import { Link, useParams } from 'react-router-dom';
import moment from "moment";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Movie = (props) => {
  const { id } = useParams();

  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    reviews: []
  });

  const getMovie = (id) => {
    MovieDataService.get(id)
      .then(response => {
        setMovie(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <div>
      <Container>
        <Row>
          {/* Poster */}
          <Col md={4}>
            <Image
              src={movie.poster ? movie.poster + "/100px250" : ""}
              fluid
            />
          </Col>

          {/* Info + Reviews */}
          <Col md={8}>
            <Card>
              <Card.Header as="h5">{movie.title}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {movie.plot}
                </Card.Text>

                {props.user && (
                  <Link to={`/movies/${id}/review`}>
                    Add Review
                  </Link>
                )}
              </Card.Body>
            </Card>

            <br />
            <h2>Reviews</h2>
            <br />

            {/* BÀI 4 - HIỂN THỊ REVIEWS */}
            {movie.reviews && movie.reviews.length > 0 ? (
              movie.reviews.map((review, index) => (
                <Card key={index} className="mb-3">
                  <Card.Body>

                    <h5>
                      {review.name} reviewed on{" "}
                      {moment(review.date).format("Do MMMM YYYY")}
                    </h5>

                    <p>{review.review}</p>

                    {/* Edit / Delete */}
                    {props.user && props.user.id === review.user_id && (
                      <Row>
                        <Col>
                          <Link
                            to={`/movies/${id}/review`}
                            state={{ currentReview: review }}
                          >
                            Edit
                          </Link>
                        </Col>

                        <Col>
                          <Button variant="link">
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    )}

                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No reviews yet</p>
            )}

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movie;
