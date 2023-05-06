
import {TfiUser , TfiThumbUp , TfiComments} from 'react-icons/tfi';

import { Container, Row, Col, Badge } from 'react-bootstrap';

const BlogSection = () => {
  return (
    <section className="section" id="blog">
      <Container className="mb-3">
        <h3 className="section-title mb-5">Blog Yazıları</h3>

        <Row className="blog-wrapper">
          <Col sm={12} md={6} lg={4}>
            <div className="img-wrapper">
              <img src="src/assets/imgs/Why-Choke-Valves-are-Essential-in-Pilot--8aec.jpg" alt="Why-Choke-Valves-are-Essential-in-Pilot-DCV" />
              <div className="date-container">
                <h6 className="day">29</h6>
                <h6 className="mun">Jun</h6> 
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={8}>
            <div className="txt-wrapper">
              <h4 className="blog-title">Pilot Kısma Valflerinin Önemi</h4>
              <p>Bir pilot kısma valfi, hidrolik bir sistemde sıvı akışını kontrol etmek için tasarlanmış bir valf türüdür. Genellikle, vananın üzerinde bir basınç düşümü yaratan küçük bir delik aracılığıyla sıvı akışını düzenlemek için kullanılır. Bu basınç düşümü, sıvı akışını düzenlemeye ve sisteme zarar verilmesini önlemeye yardımcı olur.

                  Diğer yandan, pilotlu çalışan bir DCV, hidrolik sıvının akışını kontrol etmek için bir pilot valf kullanan bir yönlendirme kontrol valf türüdür. Pilot valf genellikle bir elektromanyetik valf olup, elektrik sinyali tarafından kontrol edilir. Pilot valf enerjize olduğunda, ana valf içinde hidrolik sıvının akması için bir geçit açar ve bu da sistemdeki sıvı akışını kontrol eder.</p>

              <Badge variant="info">Hidrolik Valfler</Badge>

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
