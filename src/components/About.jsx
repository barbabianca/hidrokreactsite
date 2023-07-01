import {TfiCalendar , TfiFaceSmile, TfiStatsUp, TfiUser} from 'react-icons/tfi';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <section className="section" id="about">
      <Container className='carousel-container'>
        <Row className="align-items-center">
          <Col md={4}>
            <h3 className="section-title">Hakkımızda</h3>
            <p>
              Hidrolik sistem tasarımı ve imalatından tedarikine ve bakım
              işlerine kadar, HIDROK sisteminizin sorunsuz çalışmasını
              sağlamak için uzmanlığa sahiptir.
            </p>
            <a href="#" className="read-more">
              Devamı...
            </a>
          </Col>
          <Col sm={6} md={4} className="ml-auto">
            <div className="widget">
              <div className="icon-wrapper">
                <TfiCalendar /> 
              </div>
              <div className="infos-wrapper">
                <h4 className="text-primary">7/24</h4>
                <p>Servis Hizmeti</p>
              </div>
            </div>
            <div className="widget">
              <div className="icon-wrapper">
                <TfiFaceSmile />
              </div>
              <div className="infos-wrapper">
                <h4 className="text-primary">%95</h4>
                <p>Müşteri Memnuniyeti</p>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4}>
            <div className="widget">
              <div className="icon-wrapper">
                <TfiStatsUp />

              </div>
              <div className="infos-wrapper">
                <h4 className="text-primary">%50</h4>
                <p>Yüksek büyüme oranı</p>
              </div>
            </div>
            <div className="widget">
              <div className="icon-wrapper">
                <TfiUser />
              </div>
              <div className="infos-wrapper">
                <h4 className="text-primary">20+</h4>
                <p>Tecrübeli Kadro</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
