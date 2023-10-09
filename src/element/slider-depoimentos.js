
import Depoimentos from '../component/depoimentos';

function SliderDepoimentos() {
  return (
    <>
      <section className="content-inner-2">

	  <div className="section-head style-3 text-center">
							<h6 className="sub-title m-b20 text-primary">Depoimentos</h6>
							<h2 className="title">O que dizem os nossos clientes</h2>
						</div>
			<div className="container">
				<div className="row testimonials-wraper-1">
					<div className="col-lg-12">
						<Depoimentos/>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default SliderDepoimentos;