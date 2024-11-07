import {Col, Container, Row} from "reactstrap";

export function HomeComponentOne() {

    const style = {
        leftCard: {
            backgroundColor: "rgb(78,10,171)",
            color: "white",
            width: "100px",
            height: "100px",
            borderTopLeftRadius: "5px",
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
        },
        middleCard: {
            backgroundColor: "rgb(78,10,171)",
            color: "white",
            width: "100px",
            height: "100px",
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
        },
        rightCard: {
            backgroundColor: "rgb(78,10,171)",
            color: "white",
            width: "100px",
            height: "100px",
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <div className="d-flex justify-content-around">
                        <div style={style.leftCard}>
                            <h6>00</h6>
                            <p>ﺍﻻﻳﺎﻡ</p>
                        </div>
                        <div style={style.middleCard}>
                            <h6>00</h6>
                            <p>ﺍﻟﺴﺎﻋﺎﺕ</p>
                        </div>
                        <div style={style.middleCard}>
                            <h6>00</h6>
                            <p>ﺍﻟﺪﻗﺎﺋﻖ</p>
                        </div>
                        <div style={style.rightCard}>
                            <h6>00</h6>
                            <p>ﺍﻟﺜﻮﺍﻧﻲ</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}