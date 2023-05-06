import {TfiQuoteLeft, TfiQuoteRight} from 'react-icons/tfi';
// import './All.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialSection = () => {
  return (
    <section className="section" id="testmonial">
      <div className="container">
        <h3 className="section-title pb-4">Referanslar</h3>
      </div>

      <Carousel className='testmonial-container'
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        centerMode
        centerSlidePercentage={100}
      >
        {/* Add Carousel Items */}
        <div className="textmonial-item">
             <img src="src/assets/imgs/Parker_Hannifin.jpeg" className="avatar" alt="parker_logo" />
             <div className="des">
               <TfiQuoteLeft className="ti-quote-left font-weight-bold"/>
               <p>HİDROK sektördeki yerini müşterilerde sağladığı güven duygusu ile sağlamlaştırıyor. Biz birlikte gözü kapalı çalışabileceğimiz adresteyiz, ESKOOP&apos;ta HİDROK.</p>
               <TfiQuoteRight className="ti-quote-right font-weight-bold"/> 

               <div className="line"></div>
               <h6 className="name">Aygün</h6>
               <h6 className="xs-font">Satış Müdürü</h6>
             </div>
        </div>
        
        <div className="textmonial-item">
             <img src="src/assets/imgs/Hi-Des Logo (500 × 500 px).jpg" className="avatar" alt="hi-des_logo" />
             <div className="des">
               <TfiQuoteLeft className="ti-quote-left font-weight-bold"/>
               <p>HİDROK müşteri memnuniyetini önceleyen iş modeliyle firmamızın değişmez tedarikçileri arasında yerini almıştır.</p>
               <TfiQuoteRight className="ti-quote-right font-weight-bold"/>

               <div className="line"></div>
               <h6 className="name">Ugur</h6>
               <h6 className="xs-font">Genel Müdür</h6>
             </div>
        </div>

        <div className="textmonial-item">
                        <img src="src/assets/imgs/fnss-logo.png" className="avatar" alt="fnss-logo" />
                        <div className="des">
                            <TfiQuoteLeft className="ti-quote-left font-weight-bold"/>
                            <p>Hidrolik tank tasarımı ve üretimi için girdiğimiz HIDROK&apos;tan hidrolik ünite tasarımı ve imalatı için anlaşarak çıktık. Esnekliğe açık olması HİDROK&apos;un bize sağladığı en büyük avantaj.</p>
                            <TfiQuoteRight className="ti-quote-right font-weight-bold"/>

                            <div className="line"></div>
                            <h6 className="name">Semih</h6>
                            <h6 className="xs-font">Mühendislik Bölüm Müdürü</h6>
                        </div>
        </div>
              

      </Carousel>
    </section>
  );
};

export default TestimonialSection;





























// import './All.css';
// import { Container } from 'react-bootstrap';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';


// const TestimonialSection = () => {
//   return (
//     <section className="section" id="testmonial">
//       <Container>
//         <h3 className="section-title">Referanslar</h3>

//         <Carousel className={`${styles.carouselContainer} carousel-container`}

//           centerMode
//           showArrows
//           showStatus={false}
//           showIndicators={false}
//           showThumbs={false}
//           infiniteLoop

//         >

//           {/* Add Carousel Items */}

//           <div className={`${styles.textmonialItem} textmonial-item`}>
//             <img src="src/assets/imgs/Hi-Des Logo (500 × 500 px).jpg" className="avatar" alt="hi-des_logo" />
//             <div className="des">
//               <h5 className="ti-quote-left font-weight-bold"></h5>
//               <p>
//                 HİDROK müşteri memnuniyetini önceleyen iş modeliyle firmamızın değişmez tedarikçileri arasında
//                 yerini almıştır.
//               </p>
//               <h5 className="ti-quote-right text-right font-weight-bold"></h5>

//               <div className="line"></div>
//               <h6 className="name">Uğur</h6>
//               <h6 className="xs-font">İş Geliştirme Müdürü</h6>
//             </div>
//           </div>
//           <div className="textmonial-item">
//             <img src="src/assets/imgs/Parker_Hannifin.jpeg" className="avatar" alt="parker_logo" />
//             <div className="des">
//               <h5 className="ti-quote-left font-weight-bold"></h5>
//               <p>HİDROK sektördeki yerini müşterilerde sağladığı güven duygusu ile sağlamlaştırıyor. Biz birlikte gözü kapalı çalışabileceğimiz adresteyiz, ESKOOP&aposta HİDROK.</p>
//               <h5 className="ti-quote-right text-right font-weight-bold"></h5>

//               <div className="line"></div>
//               <h6 className="name">Aygün</h6>
//               <h6 className="xs-font">Satış Müdürü</h6>
//             </div>
//           </div>
//         </Carousel>
//       </Container>
//     </section>
//   );
// };

// export default TestimonialSection;
