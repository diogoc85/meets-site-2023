import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Image from 'next/image';

function LeadChat() {
    return (
      <>
        <section className="content-inner-2">
			<div className="container pb-4 " data-aos="fade-up" data-aos-duration="300">
		
					<div className="row action-box style-1 lead-chat shadow rounded align-items-center pb-0 reverse-mob m-mob">
						<div className="col-lg-4 col-md-12 p-relative box-menina-lead">						
							<div className="lead-01 p-absolute move-4" >
								<Image  src="/images/banner/lead-01.png" alt="" width={42} height={42} />
							</div>				
							<div className="lead-02 p-absolute move-4" data-aos="fade-up" data-aos-duration="300">
								<Image  src="/images/banner/lead-02.png" alt="" width={56} height={56} />
							</div>				
							<div className="lead-03 p-absolute move-4" data-aos="fade-up" data-aos-duration="300">
								<Image  src="/images/banner/lead-03.png" alt="" width={70} height={70} />
							</div>			
							<div className="lead-04 p-absolute move-4" data-aos="fade-up" data-aos-duration="300">
								<Image  src="/images/banner/lead-04.png" alt="" width={84} height={84} />
							</div>
							<div className="menina-lead p-absolute img-mob" data-aos="fade-up" data-aos-duration="300">
								<Image  src="/images/banner/menina-lead-chat.png" alt="" width={344} height={443} />
							</div>
						</div>
						<div className="col-lg-8 col-md-12">
							<div className="d-flex flex-column align-items-center justify-content-center">
								<div className="center-mob" data-aos="fade-up" data-aos-duration="500">
									<h6 className="sub-title m-b10 text-primary">Novo recurso</h6>
									<h1 className="title">LeadChat</h1>
									<p className="text-white">Capte mais leads com esse conjunto de ferramentas poderoso e fácil de usar. Além do Chatbot e Lead Chat, você pode engajar suas leads inbound com os Formulários Web.</p>
									<p className="text-white">*LeadChat pode ser adquirido com qualquer plano do Meets.</p>
								</div>
							</div>
						</div>
						
					</div>

			</div>
		</section>
    </>
  );
}
  
  export default LeadChat;