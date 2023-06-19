import { TfiArrowUp, TfiLocationPin, TfiMicrophone, TfiEmail, TfiFacebook, TfiTwitterAlt, TfiGoogle, TfiPinterestAlt, TfiInstagram, TfiRss } from 'react-icons/tfi';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import firebaseDB from "../firebase";
import 'firebase/database';
// import axios from 'axios';


// import { ToastContainer, toast } from "react-toastify";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-bootstrap';


const ContactSection = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
    }, []);

    const handleButtonClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };


    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const { name, email, subject, message } = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            toast.error("Please provide value in each input field");
        } else {
            firebaseDB.child("message").push(state);
            setState({ name: "", email: "", subject: "", message: "" });
            toast.success("Form Submitted Successfully");
        }
    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!name || !email || !subject || !message) {
    //       toast.error('Please provide a value in each input field');
    //     } else {
    //         firebaseDB.child("contacts").push(state);
    //        setState({ name: "", email: "", subject: "", message: "" });
    //        toast.success("Form Submitted Successfully");
    //       const data = {
    //         name: state.name,
    //         email: state.email,
    //         mobile: '', // Add the mobile field if necessary
    //         message: state.message
    //       };
      
    //       axios
    //         .post('https://us-central1-hidrokcontactform.cloudfunctions.net/sendMailOverHTTP', data)
    //         .then((response) => {
    //           console.log(response);
    //           setState({ name: '', email: '', subject: '', message: '' });
    //           toast.success('Form Submitted Successfully');
    //         })
    //         .catch((error) => {
    //           console.error(error);
    //           toast.error('An error occurred while submitting the form');
    //         });
    //     }
    //   };
      
      

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    

    return (
        <section id="contact" className="section pb-0">
            <Container>
                
                <h3 className="section-title mb-5">Bize Yazın</h3>
                <ToastContainer position="top-center" />

                <Row className="align-items-center justify-content-between">
                    <Col md={8} lg={7}>
                        <Form className="contact-form" onSubmit={handleSubmit}>
                            <Row>
                                <Col className="form-group">
                                    <Form.Control type="text"
                                        name="name"
                                        placeholder="İsim Soyisim"
                                        value={name}
                                        onChange={handleInputChange} />
                                </Col>
                                <Col className="form-group">
                                    <Form.Control type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange} />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="form-group">
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            name="subject"
                                            placeholder="Konu"
                                            value={subject}
                                            onChange={handleInputChange} />

                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="form-group">
                                    <Form.Group>
                                        <Form.Control 
                                            as="textarea"
                                            name="message"
                                            placeholder="Mesaj"
                                            rows="6"
                                            value={message}
                                            onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button variant="primary" type="submit" className="btn-block">Gönder</Button>
                        </Form>

                    </Col>

                    <Col md={4} className="d-none d-md-block order-1">
                        <ul className="list">
                            <li className="list-head">
                                <h6>İletişim</h6>
                            </li>
                            <li className="list-body">
                                <p className="py-2">HİDROK satış sorumlusu en kısa zamanda size geri dönüş sağlayacaktır.</p>
                                <p className="py-2"><TfiLocationPin /> HİDROK Otomasyon San.Tic.Ltd.Şti. İOSB-Eskoop Sanayi Sitesi
                                    Blok: C7, No: 476-474-472-470
                                    34490 Başakşehir / İstanbul - TÜRKİYE</p>
                                <p className="py-2"><TfiEmail />  info@hidrok.com.tr</p>
                                <p className="py-2"><TfiMicrophone /> +90 212 549 05 95</p>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <footer className="footer mt-5 border-top">
                    <Row className="align-items-center justify-content-center">
                        <Col md={6} className="text-center text-md-left">
                            <p className="mb-0">Copyright
                                <script>document.write(new Date().getFullYear())</script> &copy;
                                <a target="_blank" rel='noreferrer' href="http://www.hi-des.com">Hi-Des</a>
                            </p>
                        </Col>
                        <Col md={6} className="text-center text-md-right">
                            <div className="social-links">
                                <a href="javascript:void(0)" className="link"><TfiFacebook /></a>
                                <a href="javascript:void(0)" className="link"><TfiTwitterAlt /></a>
                                <a href="javascript:void(0)" className="link"><TfiGoogle /></a>
                                <a href="javascript:void(0)" className="link"><TfiPinterestAlt /></a>
                                <a href="javascript:void(0)" className="link"><TfiInstagram /></a>
                                <a href="javascript:void(0)" className="link"><TfiRss /></a>
                            </div>
                        </Col>
                    </Row>
                    <Button id="topBtn" onClick={handleButtonClick} title="Go to top" style={{ display: showButton ? 'block' : 'none' }}>
                        <TfiArrowUp />
                    </Button>
                </footer>
            </Container>
        </section>
    );
};

export default ContactSection;
