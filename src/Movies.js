import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Movies.css';

class Movies extends Component {
    render() {
        const movies = this.props.movies.map((movie) => {
            return (
                <Container key={movie.id}>
                    <Row>
                        <Col><img alt={movie.title} src={movie.poster_path} /></Col>
                        <Col>
                            <h2>{movie.title}</h2>
                            <p class="text-sm-left">{movie.overview}</p>
                            <Button variant="primary" size="sm" className="pull-right" href="#">View This Movie</Button>
                        </Col>
                    </Row>
                </Container>
            )
        })
        return (
            <div>
                {movies}
            </div>
        )

    }
}

export default Movies