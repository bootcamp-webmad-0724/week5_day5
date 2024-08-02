import { useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

const NewItemForm = () => {

    const [movieData, setMovieData] = useState({
        title: '',
        director: '',
        rating: 0,
        hasOscars: false
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setMovieData({ ...movieData, [name]: value })
    }

    return (
        <div className="NewItemForm">

            <Form>

                <Form.Group className="mb-3" controlId="titleField">
                    <Form.Label>Título de la película</Form.Label>
                    <Form.Control type="text" value={movieData.title} onChange={handleInputChange} name="title" />
                </Form.Group>

                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="directorFiled">
                            <Form.Label>Director/a</Form.Label>
                            <Form.Control type="text" value={movieData.director} onChange={handleInputChange} name="director" />
                        </Form.Group>

                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="ratingFiled">
                            <Form.Label>Puntuación IMDB</Form.Label>
                            <Form.Control type="number" value={movieData.rating} onChange={handleInputChange} name="rating" />
                        </Form.Group>

                    </Col>

                </Row>

                <Form.Group className="mb-3" controlId="oscarsField">
                    <Form.Check type="checkbox" label="Ganó Oscar" checked={movieData.hasOscars} onChange={handleInputChange} name="hasOscars" />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit" className="mt-3">Crear nueva película</Button>
                </div>
            </Form>

        </div>
    )
}

export default NewItemForm