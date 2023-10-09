
import TestimonialSlider from './../component/testimonialSlider';

function Testimonial() {
  return (
    <>
      <section className="content-inner bg-primary">
			<div className="px-xl-5 px-md-4 px-3">
				<div className="row testimonials-wraper-1">
					
					<div className="col-lg-3 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="section-head style-1 text-white p-t15">
							<h2 className="title m-b10">Algumas das mais de 1.200<br/> que confiam no meets.</h2>
						</div>
					</div>
					<div className="col-lg-9">
						<TestimonialSlider/>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Testimonial;