import { Container, Row, Col } from "react-bootstrap"
import NewItemForm from "../../components/NewItemForm/NewItemForm"

const NewItemPage = () => {

    return (
        <div className="NewItemPage">

            <Container>

                <Row>

                    <Col md={{ span: 6, offset: 3 }}>

                        <h1 className="mt-5">Nuevo item</h1>

                        <hr />

                        <NewItemForm />

                    </Col>

                </Row>

            </Container>
        </div>
    )
}

export default NewItemPage