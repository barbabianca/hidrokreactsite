// import React from 'react'
import {TfiMicrophone, TfiEmail, TfiFacebook, TfiTwitterAlt, TfiGoogle, TfiPinterestAlt, TfiInstagram, TfiRss} from 'react-icons/tfi';
// import './All.css';
import { Navbar, Nav, Carousel, Container, Col, Row } from 'react-bootstrap';
// import $ from 'jquery';
import { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';



function Header() {

  const [isBgWhite, setIsBgWhite] = useState(false);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset > 20) {
      setIsBgWhite(true);
    } else {
      setIsBgWhite(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleNavClick = (event) => {
    event.preventDefault();
    const target = event.target;
    const hash = target.hash;
    const offsetTop = document.querySelector(hash).offsetTop;
    window.scrollTo({
      top: offsetTop - 70,
      behavior: "smooth"
    });
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
      if (link !== target) {
        link.classList.remove("active");
      } else {
        link.classList.add("active");
      }
    });
  };
  
  


  window.addEventListener("scroll", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("section");
  const currentPos = window.pageYOffset;
  let currentIndex = 0;
  sections.forEach((section, index) => {
    const top = section.offsetTop - 70;
    const bottom = top + section.offsetHeight;
    if (currentPos >= top && currentPos <= bottom) {
      currentIndex = index;
    }
  });
  navLinks.forEach((link, index) => {
    if (index === currentIndex) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

  
  

  return (
    
    <>


      <Navbar expand="lg" className={`navbar navbar-light fixed-top ${isBgWhite ? 'bg-white' : 'bg-transparent'}`}
  id="scrollspy"
  data-spy="scroll"
  data-offset-top="20">
  
        <div className="container">
          <Navbar.Brand href="#"><img src="https://github.com/barbabianca/hidrokreactsite/blob/main/src/assets/imgs/Hidrok-logo-transparent.png?raw=true" alt="" className="brand-img" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" onClick={(event) => {handleNavClick(event)}}>
            <Nav.Link href="#home">Anasayfa</Nav.Link>
            <Nav.Link href="#about">Hakkımızda</Nav.Link>
            <Nav.Link href="#service">Hizmetler</Nav.Link>
            <Nav.Link href="#portfolio">Ürünler</Nav.Link>
            <Nav.Link href="#testmonial">Referanslar</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Bize Ulaşın</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>

      </Navbar>
      <section id="home" className="header">
        <div className="overlay"></div>

        <Carousel className='carousel-container'>
          <Carousel.Item className='carousel-item'>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-title">Hidrolik Ünite<br /> Tasarım ve İmalatı</h1>
              <button className="btn btn-primary btn-rounded"><a href="#contact">Bize Yazın</a></button>
            </div>
          </Carousel.Item>

          <Carousel.Item className='carousel-item'>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-title">Manifold Blok <br /> Tasarım ve İmalatı</h1>
              <button className="btn btn-primary btn-rounded"><a href="#contact">Bize Yazın</a></button>
            </div>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-title">Hidrolik Komponent <br /> Satışı</h1>
              <button className="btn btn-primary btn-rounded"><a href="#contact">Bize Yazın</a></button>
            </div>
          </Carousel.Item>

        </Carousel>

        <Container className="infos mb-4 mb-md-2">
          <div className="title">
            <h5>HİDROK Otomasyon San.Tic.Ltd.Şti.</h5>
            <p className="font-small">
              İOSB-Eskoop Sanayi Sitesi Blok: C7, No: 476-474-472-470 34490 Başakşehir /
              İstanbul - TÜRKİYE
            </p>
          </div>
          <div className="socials text-right">
            <Row className="justify-content-between">
              <Col>
                <a className="d-block subtitle">
                <TfiMicrophone /> +90 212 549 05 95
                </a>
                <a className="d-block subtitle">
                  <TfiEmail /> info@hidrok.com.tr
                </a>
              </Col>
              <Col>
                <h6 className="subtitle font-weight-normal mb-2">Sosyal Medya</h6>
                <div className="social-links">
                  <a href="#" className="link pr-1">
                  <TfiFacebook />
                  </a>
                  <a href="#" className="link pr-1">
                    <TfiTwitterAlt />
                  </a>
                  <a href="#" className="link pr-1">
                  <TfiGoogle />
                  </a>
                  <a href="#" className="link pr-1">
                    <TfiPinterestAlt />
                  </a>
                  <a href="#" className="link pr-1">
                    <TfiInstagram />
                  </a>
                  <a href="#" className="link pr-1">
                    <TfiRss />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Header