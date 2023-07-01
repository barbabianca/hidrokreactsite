import { TfiUser, TfiThumbUp, TfiComments } from 'react-icons/tfi';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import BlogImage from "../assets/imgs/Why-Choke-Valves-are-Essential-in-Pilot--8aec.jpg";

const BlogSection = () => {
  return (
    <section className="section" id="blog">
      <Container className="carousel-container mb-3">
        <h3 className="section-title mb-5">Blog Posts</h3>

        <Row className="blog-wrapper">
          <Col sm={12} md={6} lg={4}>
            <div className="img-wrapper">
              <img src={BlogImage} alt="Why Choke Valves are Essential in Pilot Operated Directional Control Valves" />
              <div className="date-container">
                <h6 className="day">29</h6>
                <h6 className="month">Jun</h6> 
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={8}>
            <div className="txt-wrapper">
              <h4 className="blog-title">The Importance of Pilot Choke Valves</h4>
              <p>A pilot choke valve is a type of valve designed to control liquid flow in a hydraulic system. Generally, it is used to regulate liquid flow through a small hole on the valve which creates a pressure drop. This pressure drop helps to regulate the liquid flow and prevent damage to the system.

                  On the other hand, a pilot operated directional control valve (DCV) is a type of direction control valve that uses a pilot valve to control the flow of hydraulic fluid. The pilot valve is usually an electromagnetic valve controlled by an electrical signal. When the pilot valve is energized, it opens a passage for hydraulic fluid to flow in the main valve, thus controlling the fluid flow in the system.</p>

              <Badge variant="info">Hydraulic Valves</Badge>

              <h6 className="blog-footer">
                <a href="javascript:void(0)"><TfiUser /> Admin </a> |
                <a href="javascript:void(0)"><TfiThumbUp /> 213 </a> |
                <a href="javascript:void(0)"><TfiComments /> 123</a>
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
