import React from 'react';
import {Container, Row, Col, Input, FormGroup, Label} from 'reactstrap';
import {FaFacebook, FaInstagram, FaSnapchat, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (

        <div style={{backgroundColor: '#0b1a8a', color: '#ffffff', padding: '20px 0'}}>
            <Container>
            <Row className="d-flex justify-content-center align-items-center mt-5">
                <Col md="6" className="mb-3">
                    <FormGroup >
                        <Label for="name" style={{ color: '#ffffff' ,paddingLeft:'600px'}}>الاسم</Label>
                        <Input type="text" id="name" placeholder="" style={{ backgroundColor: '#6f7dbb', borderRadius: '20px', color: '#ffffff' }} />
                    </FormGroup>
                </Col>
                <Col md="6" className="mb-3">
                    <FormGroup>
                        <Label for="email" style={{ color: '#ffffff',paddingLeft:'530px' }}>البريد الإلكتروني</Label>
                        <Input type="email" id="email" placeholder="" style={{ backgroundColor: '#6f7dbb', borderRadius: '20px', color: '#ffffff' }} />
                    </FormGroup>
                </Col>
            </Row>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md="6" className="mb-3">
                        <FormGroup >
                            <Label for="name" style={{ color: '#ffffff' ,paddingLeft:'600px'}}>الرسالة</Label>
                            <Input type="text" id="name" placeholder="" style={{ backgroundColor: '#6f7dbb', borderRadius: '20px', color: '#ffffff' }} />
                        </FormGroup>
                    </Col>
                    <Col md="6" className="mb-3">
                        <FormGroup>
                            <Label for="email" style={{ color: '#ffffff',paddingLeft:'600px' }}>الجوال</Label>
                            <Input type="email" id="email" placeholder="" style={{ backgroundColor: '#6f7dbb', borderRadius: '20px', color: '#ffffff' }} />
                        </FormGroup>
                    </Col>
                </Row>
            <Row className="justify-content-center mt-5">
                <Col md="4" >
                    <FaTwitter size={28} style={{ margin: '0 10px', color: '#ffffff' }} />
                    <FaFacebook size={28} style={{ margin: '0 10px', color: '#ffffff' }} />
                    <FaInstagram size={28} style={{ margin: '0 10px', color: '#ffffff' }} />
                    <FaSnapchat size={28} style={{ margin: '0 10px', color: '#ffffff' }} />
                    <FaLinkedin size={28} style={{ margin: '0 10px', color: '#ffffff' }} />
                    <FaYoutube size={28} style={{ margin: '0 10px', color: '#ffffff' }} />
                </Col>
                <Col md="4" className="text-center" style={{fontWeight:'bold'}}>
                    <p>جميع الحقوق محفوظة 2024</p>
                </Col>
                <Col md="4" className='d-flex' style={{textAlign:'left'}}>
                    <p>مؤتمر المحاماة السعودي<br/>Saudi Lawyers Conference</p>
                    <img src="path/to/your/logo.png" alt="Logo" />
                </Col>

            </Row>
            {/*<Row className="justify-content-center mt-4">*/}
            {/*    <Col md="6" className="text-center">*/}
            {/*        <p>جميع الحقوق محفوظة 2024</p>*/}
            {/*        <p>مؤتمر المحاماة السعودي<br />Saudi Lawyers Conference</p>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            </Container>
        </div>
    );
};

export default Footer;
