
// import './All.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PortfolioSection = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h3 className="section-title pb-4">Ürünler</h3>
      </div>

      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={1000}
        centerMode
        centerSlidePercentage={34}
      >
        {/* Add Carousel Items */}
              <div className="item expertises-item">
                  <img src="src/assets/imgs/endustriyel-valfler.jpg" alt="endustriyel-valfler" className="box-shadow" />
                  <h6 className="mt-3 mb-2">Endüstriyel Valfler</h6>
                  <p className="xs-font">CETOP ve sandviç valfler</p>
              </div>
              <div className="item expertises-item">
                  <img src="src/assets/imgs/kartus-valfler.jpg" alt="kartus-valfler" className="box-shadow" />
                  <h6 className="mt-3 mb-2">Kartuş Valfler</h6>
                  <p className="xs-font">Hydraforce kalitesinde,hızlı sevkiyatlı,düşük maliyetli kartuş valfler</p>
              </div>
              <div className="item expertises-item">
                  <img src="src/assets/imgs/havali-sogutucular.jpg" alt="havali-sogutucular" className="box-shadow" />
                  <h6 className="mt-3 mb-2">Kartuş Valfler</h6>
                  <p className="xs-font">AC, DC ve Offline havalı yağ soğutucuları</p>
              </div>
              <div className="item expertises-item">
                  <img src="src/assets/imgs/kuresel-vanalar.jpg" alt="kuresel-vanalar" className="box-shadow" />
                  <h6 className="mt-3 mb-2">Küresel Vanalar</h6>
                  <p className="xs-font">Çelik ve Paslanmaz Çelik, Stecko standardı vanalar</p>
              </div>
              <div className="item expertises-item">
                  <img src="src/assets/imgs/quick-connectors.jpg" alt="quick-connectors" className="box-shadow" />
                  <h6 className="mt-3 mb-2">Hızlı Bağlantı Ekipmanları</h6>
                  <p className="xs-font">Silindir üretiminde piston keçesi testi, manifold fonksiyon testlerinde rakorsuz hızlı bağlantı ekipmanları.</p>
              </div>
              <div className="item expertises-item">
                  <img src="src/assets/imgs/rotary-actuators.jpg" alt="rotary-actuators" className="box-shadow" />
                  <h6 className="mt-3 mb-2">Rotary Aktüatörler</h6>
                  <p className="xs-font">Hidrolik menteşe mekanizması, silindir kullanımı yerine dar alanda yüksek güç iletimi sağlar.</p>
              </div>

      </Carousel>
    </section>
  );
};

export default PortfolioSection;
