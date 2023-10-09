import { useState } from 'react';
import Slider from "react-slick";


function TestimonialSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        dots:true,
        arrows:false,
        centerMode:true,
        slidesToShow:1,
        dots:false,
        infinite:true,
        slidesToScroll:1,
        autoplay:true,
		responsive: [
			
			{
			  breakpoint: 1320,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
		]	
	};
const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div
          className="owl-prev"
          onClick={() => asd.slickPrev()}
        >
          <i className="fa fa-arrow-left"></i>
        </div>
        <div
          className="owl-next"
          onClick={() => asd.slickNext()}
        >
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
    return (
        <>
        <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
            <Slider ref={c => setAsd(c)} {...settings} >
                <div className="item" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="row align-items-center pb-4 pt-4">
                        <div className="col-md-4 col-sm-12 center-mob">
                            <div className="testimonial-pic p-relative">
                                <img className="foto-depoi rounded-circle" src="images/testimonials/pic3.jpg" alt="" />
                                <img className="logo-depoi p-absolute" src="images/logo/depoimento-sebrae.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 center-mob">
                            <strong className="testimonial-name">Fulano da Silva</strong>
                            <span className="testimonial-position">Vendedor</span>
                            <p>
                                “Aenean massa diam, sollicitudin non dui ut,
                                facilisis viverra libero. Nulla facilisi. Nunc
                                sed purus erat. Praesent placerat dictum libero,
                                eu varius nulla vulputate non”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="row align-items-center pb-4 pt-4">
                        <div className="col-md-4 col-sm-12 center-mob">
                            <div className="testimonial-pic p-relative">
                                <img className="foto-depoi rounded-circle" src="images/testimonials/pic3.jpg" alt="" />
                                <img className="logo-depoi p-absolute" src="images/logo/depoimento-sebrae.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 center-mob">
                            <strong className="testimonial-name">Fulano da Silva</strong>
                            <span className="testimonial-position">Vendedor</span>
                            <p>
                                “Aenean massa diam, sollicitudin non dui ut,
                                facilisis viverra libero. Nulla facilisi. Nunc
                                sed purus erat. Praesent placerat dictum libero,
                                eu varius nulla vulputate non”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="row align-items-center pb-4 pt-4">
                        <div className="col-md-4 col-sm-12 center-mob">
                            <div className="testimonial-pic p-relative">
                                <img className="foto-depoi rounded-circle" src="images/testimonials/pic3.jpg" alt="" />
                                <img className="logo-depoi p-absolute" src="images/logo/depoimento-sebrae.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 center-mob">
                            <strong className="testimonial-name">Fulano da Silva</strong>
                            <span className="testimonial-position">Vendedor</span>
                            <p>
                                “Aenean massa diam, sollicitudin non dui ut,
                                facilisis viverra libero. Nulla facilisi. Nunc
                                sed purus erat. Praesent placerat dictum libero,
                                eu varius nulla vulputate non”
                            </p>
                        </div>
                    </div>
                </div>
  

      
            </Slider>
            {renderArrows()}
            </div>
        </>
    );
}

export default TestimonialSlider;
