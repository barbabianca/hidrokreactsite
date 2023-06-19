import { Container, Row, Col, Card } from 'react-bootstrap';
import manifoldBlokTasarimiImg from '../assets/imgs/manifold-blok-tasarimi.jpg';
import hidrolikUniteImg from '../assets/imgs/hidrolik-unite.jpg';
import hidrolikTankImg from '../assets/imgs/hidrolik-tank.jpg';

const ServiceSection = () => {
  return (
    <section className="section" id="service">
      <Container>
        <h3 className="section-title mb-4">Hizmetler</h3>

        <Row className="text-center">
          <Col lg={4}>
            <Card className="border-0 text-dark">
              <Card.Img
                variant="top"
                src={manifoldBlokTasarimiImg}
                alt="manifold-sogutma-blogu"
              />
              <Card.Body>
                <Card.Title className="title mt-4">Manifold Blok Tasarımı</Card.Title>
                <Card.Text className="xs-font">
                  İş makinelerinden, endüstriyel tesislere kadar, uygulamaya uygun ölçü ve
                  sistem gereksinimlere cevap verecek nitelikte farklı tip valfler
                  kullanılarak tasarlanan manifold bloklar.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0 text-dark">
              <Card.Img
                variant="top"
                src={hidrolikUniteImg}
                alt="hidrolik-unite"
              />
              <Card.Body>
                <Card.Title className="title mt-4">Hidrolik Ünite İmalatı</Card.Title>
                <Card.Text className="xs-font">
                  Endüstriyel alanda faaliyet gösteren firmalar için çalışma koşullarına en
                  uygun şekilde ve müşteri ihtiyaçlarına göre özelleşmiş şekilde hidrolik
                  sistem tasarımları.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0 text-dark">
              <Card.Img
                variant="top"
                src={hidrolikTankImg}
                alt="hidrolik-tank"
              />
              <Card.Body>
                <Card.Title className="title mt-4">Müşteriye Özel Üretim</Card.Title>
                <Card.Text className="xs-font">
                  Müşterilerin ihtiyaçlarına göre özelleşmiş ana ve yardımcı sistemlerin
                  üretimi. Ünite, manifold, rezervuar imalatı.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;
