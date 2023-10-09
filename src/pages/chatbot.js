import Footer from '../layout/footer';
import Header from '../layout/header';
import { useState } from "react";
import AllServices2 from '../element/all-services-2';
import Clients2 from '../element/clients-2';
import OurServices2 from '../element/our-services-2';
import Testimonial2 from '../element/testimonial-2';
import Link from 'next/link';



function Chatbot() {
    const [open, setOpen] = useState("p2")
  return (
    <>
    <Header/>

    <div className="page-content">

		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2">
			<div className="container">
				<div className="dlab-bnr-inr-entry">

					<h1>Chatbot integrado ao CRM</h1>
					<h5>24 horas por dia, 7 dias por semana</h5>

				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}

		<div className="container">
			<div id='chamada-bot' className="row align-items-center shadow pl-5 pr-5 p-5 mb-5 m-0 banner-inner rounded pos-top">
				<div className="col-lg-7 col-sm-7" data-wow-duration="2s" data-wow-delay="0.1s">
				<h6 class="sub-title text-primary m-b15 center-mob">Não deixe seu lead/cliente esperando atendimento</h6>
				<h2 className="center-mob">Automatize seus atendimentos</h2>
				<p>Configure quantas mensagens quiser do jeito que quiser, monte seu bot com a cara da sua empresa para um atendimento personalizado e assertivo.</p>
				</div>
				<div className="col-lg-5 col-sm-5 p-relative" data-wow-duration="2s" data-wow-delay="0.1s">
				<img className="p-absolute robozinho move-4" src="/images/banner/robo.png" alt="" />
				<img className="p-absolute tela-chat" src="/images/banner/msg-automatizadas.png" alt="" />
				</div>  
			</div>
		</div>
		{/* <!-- Service --> */}
		
		<section >
			<div className='container'>
			<div className='row align-items-center pb-5'>
					<div className="col-lg-4 col-sm-4">
						<img className="" src="/images/banner/integrado.png" alt="" />
					</div>
					<div className="col-lg-8 col-sm-8">
						<h6>Chatbot multicanais</h6>
						<h4>Integrado as principais ferramentas de atendimento</h4>
						<p>Já pensou em atender seus clientes nos principais canais digitais usando todo o poder da inteligência artificial? O chatbot do Meets proporciona essa tecnologia para sua empresa atender e vender muito mais e melhor, 24 horas por dia 07 dias por semana.</p>
						<p>Integre os principais canais como o whatsapp, instagram e facebook messenger ao chatbot. Use de forma integrada uma central de voip com a ura de atendimento e vendas do meets.</p>					
					</div>		
				</div>
			</div>
		</section>

		<section className="bg-white">
			<div className='container'>
				<div className='row align-items-center pt-5 pb-5'>
				<div className="col-lg-8 col-sm-8">
						<h6>Atendimento híbrido</h6>
						<h4>Transfira o atendimento do bot para um atendimento humano assim que for preciso.</h4>
						<p>Caso seja preciso, o atendimento que começou no automático pode ser encaminhado para um atendimento humano para que a conclusão seja satisfatória para ambas as partes.</p>
					</div>
					<div className="p-relative col-lg-4 col-sm-4">
						<img className="p-absolute robo move-4" src="/images/banner/robo.png" alt="" />
						<img className="hibrido" src="/images/banner/chatbot.png" alt="" />
					</div>
				</div>
			</div>
		</section>

		<section className="bg-white">
			<div className='container'>
				<div className='row align-items-center pb-5'>
					<div className="col-lg-4 col-sm-4">
						<img className="" src="/images/banner/chatbot-crm.png" alt="" />
					</div>
					<div className="col-lg-8 col-sm-8">
						<h6>CRM integrado</h6>
						<h4>Tenha um poderoso CRM rodando, automatizando e melhorando o fluxo do seu atendimento.</h4>
						<p>Além de todo o poder de um bot de atendimento/vendas sua empresa vai contar com um CRM completo auxiliando desde a captura do lead até a última etapa do funil de vendas.</p>
						<p>Utilize nossos gatilhos inteligentes para envio personalizado de mensagens aos seus clientes/leads.
						<br/>Use e abuse dos multiplos funis de vendas e atendimento onde você pode visualizar de forma fácil todas as etapas que seu cliente/lead percorre.</p>
					</div>
					
				</div>
			</div>
		</section>

		<section>
			<div className='container'>
				<div className='row'>
					<div className="col-lg-4 col-sm-4 pt-5 pb-5 text-center">
						<img className="mb-3" src="/images/banner/lead-automatico.png" alt="" />
						<h6>Ações automáticas</h6>
						<h5>Leads e Campos personalizados</h5>
						<p>Permita que o bot solicite os dados de seus clientes/leads e já crie automaticamente uma oportunidade dentro do seu crm.</p>
					</div>
					<div className="col-lg-4 col-sm-4 pt-5 pb-5 text-center">
						<img className="mb-3" src="/images/banner/midias.png" alt="" />
						<h6>Mídias</h6>
						<h5>Vários formatos de arquivos</h5>
						<p>Além de textos o bot trabalha com diversos outros tipos de arquivos como, audio, pdf e imagens, aumentando assim o leque de opções e deixando o atendimento mais dinâmico.</p>
					</div>
					<div className="col-lg-4 col-sm-4 pt-5 pb-5 text-center">
						<img className="mb-3" src="/images/banner/flow.png" alt="" />
						<h6>Painel visual</h6>
						<h5>Chatbot Flow</h5>
						<p>Edite o flow de forma simples do seu bot sem interferência de terceiros ou se necessitar com o apoio de nosso time de especialistas.</p>
					</div>
					
				</div>
			</div>
		</section>

		<AllServices2/>

		{/* <section className=" text-center pt-0 pb-5">
			<div className='container link-test banner-inner pt-5 pb-5 rounded shadow'>
				<h4>Entenda como será a experiência do seu cliente.</h4>
				<p>Escolha o canal abaixo e comece o atendimento.</p>
				<ul className='d-flex text-center align-items-center justify-content-center'>
					<li><a href='#'><img src="images/icon/home-instagram.png" width={46} height={46} /></a></li>
					<li><a href='#'><img src="images/icon/home-messenger.png" width={46} height={46} /></a></li>
					<li><a href='#'><img src="images/icon/home-whatsapp.png" width={46} height={46} /></a></li>
					<li><a href='#'><img src="images/icon/home-telegram.png" width={46} height={46} /></a></li>
					<li><a href='#'><img src="images/icon/icon-site.png" width={46} height={46} /></a></li>
				</ul>
			</div>
		</section> */}

		
	</div>
  <Footer/>
    </>
  )
}


export default Chatbot;

