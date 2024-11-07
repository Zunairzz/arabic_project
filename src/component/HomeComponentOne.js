import {Col, Container, Row} from "reactstrap";
import personImage from '../asset/Person.png';
import "../style/fonts.css";

export function HomeComponentOne() {

    const style = {
        customFont: {
            fontFamily: "DiodrumMedium"
        },
        leftCard: {
            backgroundColor: "rgb(78,10,171)",
            color: "white",
            width: "120px",
            height: "100px",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
        },
        middleCard: {
            backgroundColor: "rgb(78,10,171)",
            color: "white",
            width: "120px",
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
            width: "120px",
            height: "100px",
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
        },
        paragraph: {
            textAlign: "right",
            fontSize: '40px'
        },
        heading: {
            textAlign: "right",
            fontSize: "40px",
            fontWeight: 'bold',
        },
        subHeading: {
            textAlign: "right",
            fontSize: "56px",
            fontWeight: 'bold',
        }
    }
    return (
        <Container style={style.customFont}>
            <Row className="d-flex justify-content-between">
                <Col xl={4} md={4} sm={4}>
                    <img src={personImage} alt="image here..."/>
                </Col>
                <Col xl={6} md={6} sm={6} style={{textAlign: "right"}}>
                    <div className="d-inline-flex gap-3">
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
                    <div>
                        <p style={style.paragraph}>
                            ﺑﺮﻋﺎﻳﺔ ﻣﻌﺎﻟﻲ ﻭﺯﻳﺮ ﺍﻟﻌﺪﻝ ﺭﺋﻴﺲ ﻣﺠﻠﺲ
                            ﺇﺩﺍﺭﺓ ﺍﻟﻬﻴﺌــــﺔ ﺍﻟﺴﻌـــﻮﺩﻳﺔ ﻟﻠﻤﺤﺎﻣﻴـــﻦ
                        </p>
                        <p style={style.heading}>
                            ﺩ. ﻭﻟﻴﺪ ﺑﻦ ﻣﺤﻤﺪ ﺍﻟﺼﻤﻌﺎﻧﻲ
                        </p>
                        <p style={style.subHeading}>
                            ﻋـﻦ ﺍﻟﻤﺆﺗﻤـﺮ
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}