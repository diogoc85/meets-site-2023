import Footer from '../layout/footer';
import Header from '../layout/header';
import { useState } from "react";
import AllServices2 from '../element/all-services-2';
import Clients2 from '../element/clients-2';
import OurServices2 from '../element/our-services-2';
import Testimonial2 from '../element/testimonial-2';
import Link from 'next/link';



function GatilhosInteligentes() {
    const [open, setOpen] = useState("p2")
  return (
    <>
    <Header/>

    <div className="page-content">

		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2">
			<div className="container">
				<div className="dlab-bnr-inr-entry">

					<h1>Gatilhos inteligentes</h1>
					<h5>Disparo de mensagens automáticas</h5>

				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}

		{/* <!-- Service --> */}
		
		<section className='bg-white'>
			<div className='container'>
				<div className='row align-items-center pt-4'>
					<div className="col-lg-5 col-sm-5">
						<img className="" src="/images/banner/envie-gatilhos-inteligentes.png" alt="" />
					</div>
					<div className="col-lg-7 col-sm-7">
						<h6></h6>
						<h4>Crie fluxos de envios automáticos de mensagens por Whatsapp, e-mail ou SMS.</h4>
						<p>O Gatilho Inteligente é a solução para você.<br/> Ele permite que você crie fluxos de envios automáticos de mensagens por Whatsapp, e-mail ou SMS, integrando as comunicações no ponto chave do seu Funil de vendas. Com esse recurso você melhora a jornada do cliente e acelera os negócios.</p>					
					</div>		
				</div>
			</div>
		</section>
		
		<section>
			<div className='container'>
				<div className='row align-items-center flex-row-reverse pt-4'>
					<div className="col-lg-5 col-sm-5">
						<img className="" src="/images/banner/conecte-se.png" alt="" />
					</div>
					<div className="col-lg-7 col-sm-7">
						<h4>Conecte-se com os seus clientes. </h4>
						<p>Com esta poderosa ferramenta, você pode facilmente criar gatilhos personalizados que enviam automaticamente e-mails e mensagens de texto usando WhatsApp e SMS no momento perfeito.</p>
						<p>Seja você um proprietário de uma pequena empresa que deseja enviar lembretes e promoções para seus clientes ou um profissional ocupado que deseja automatizar sua comunicação. Basta criar um gatilho usando nossa interface amigável e o Meets cuidará do resto.</p>
					</div>
				</div>
			</div>
		</section>
		<section className="bg-white">
			<div className='container'>
				<div className='text-center pb-5 pt-5'>
					<h4>Alguns dos principais recursos do gatilho incluem:</h4>
				</div>
				<div className='row pb-5 gatilhos'>
					<div className="col-lg-3 col-sm-3">
						<img src="/images/banner/personalizado.svg" alt="" />
						<p>A capacidade de criar gatilhos personalizados para e-mails e mensagens de texto usando WhatsApp e SMS.</p>
					</div>
					<div className="col-lg-3 col-sm-3">
						<img src="/images/banner/interface.svg" alt="" />
						<p>Uma interface amigável que facilita a configuração e o gerenciamento de seus gatilhos e programações.</p>
					</div>
					<div className="col-lg-3 col-sm-3">
						<img src="/images/banner/opcoes-avancadas.svg" alt="" />
						<p>Opções avançadas para envio de gatilho através das mudanças de etapas, tag ou funil de oportunidade e atendimento.</p>
					</div>
					<div className="col-lg-3 col-sm-3">
						<img src="/images/banner/conectado-cliente.svg" alt="" />
						<p>Com o Gatilhos Inteligente, você pode ficar conectado com seus clientes como nunca antes. Comece a automatizar sua comunicação com máxima eficiência e eficácia.</p>
					</div>
				</div>
			</div>
		</section>
		
	</div>
  <Footer/>
    </>
  )
}


export default GatilhosInteligentes;

