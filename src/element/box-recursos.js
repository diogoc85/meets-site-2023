import { useEffect, useState } from "react";

import Footer from "../layout/footer";
import Header from "../layout/header";
import {Tabs, Tab} from 'react-bootstrap';
import Image from 'next/image';
import verificaHost from '../utils/verificahost'

function OsRecursos() {
	const [state, setState] = useState({
		dominio: null,
		fone: null,
		email: null,
		mailto: null,
		whatsapp_link: null,
		whatsapp_number: null,
		link_site: null
	})

	useEffect(() => {
        const {info_layout} = verificaHost(window.location.hostname ?? 'www.meets.com.br');
		setState(info_layout)
      }, []);

    return (
      <>
        <section className="banner pt-5 pb-4">
			<div className="container">
				<div className="row align-items-center">
					
						<div className="container section-head style-3 text-center mb-2">
							<h2 className="title">Recursos / Soluções</h2>
							<h3 className="sub-title">Explore os diversos recursos que oferecemos unindo <br/>a versatilidade e adaptação ao seu tipo e volume de negócios</h3>
						</div>
						<div className="container text-center">

						<Tabs defaultActiveKey="times" id="uncontrolled-tab-example" className=" mb-3 col-md-12 justify-content-center">
                          <Tab eventKey="times" title={state.times}>
                          <div className="row align-items-center">
						  <div className="col-md-4 col-sm-4">
                            <Image src="/images/banner/para-times.png" alt="" width={370} height={370} />
                          </div>
                          <div className="col-md-8 list-atividades">
						  	<ul className="text-left">
							  	<li><strong>Marketing</strong>: Saiba atrair, envolver e como agir.</li>
								<li><strong>Vendas</strong>: Organize, promova e venda mais.</li>
								<li><strong>Sucesso do Cliente</strong>: conheça mais sobre o seu cliente e saiba como encantá-lo.</li>
								<li><strong>Suporte</strong>: ajude de forma rápida e prática o seu cliente.</li>
							</ul>
                          </div>
						  </div>
                          </Tab>
						  <Tab eventKey="produtos" title="Para Produtos">
                          <div className="row align-items-center">
						  <div className="col-md-4 col-sm-4">
                            <Image src="/images/banner/para-produtos.png" alt="" width={370} height={370} />
                          </div>
                          <div className="col-md-8 list-atividades">
						  	<ul className="text-left">
							  	<li><strong>Gatilhos inteligentes</strong>: Crie cadência, ações e sequências como em nenhum lugar.</li>
								<li><strong>Chatbot</strong>: Qualifique, automatize e escale processos e leads.</li>
								<li><strong>Omnichannel</strong>: Centralize suas leads em um só lugar e personalize o atendimento em cada canal.</li>
								<li><strong>Fluxo</strong>: Crie fluxos de tarefas e atividades automáticas ou manuais que poss</li>
							</ul>
                          </div>
						  </div>
                          </Tab>
						</Tabs>


						</div>
						{/* <div className="row">
							<div class="col-lg-6 col-md-12">
								<div class="icon-bx-wraper left m-b50 icon-up">
									<div class="icon-bx-sm m-b20">
										<a href="javascript:void(0);" class="icon-cell text-white"><i class="flaticon-coding"></i></a>
									</div>
									<div class="icon-content">
										<h4 class="dlab-tilte">Importações</h4>
										<h5 class="sub-titulo">Gerencie suas Oportunidades</h5>
										<p>Importe seus contatos/leads/oportunidades de qualquer planilha ou CRM no mercado. Temos uma equipe que irá te ajudar</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6 col-md-12">
								<div class="icon-bx-wraper left m-b50 icon-up">
									<div class="icon-bx-sm m-b20">
										<a href="javascript:void(0);" class="icon-cell text-white"><i class="flaticon-coding"></i></a>
									</div>
									<div class="icon-content">
										<h4 class="dlab-tilte text-capitalize">Funil de vendas</h4>
										<h5 class="sub-titulo">Lorem ipsum</h5>
										<p>Não se limite a apenas um funil. Use e abuse de todas as possibilidades com nosso construtor de funis. Afinal use os funis para segmentar sua audiência e melhorar sua taxa de conversão.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6 col-md-12">
								<div class="icon-bx-wraper left m-b50 icon-up">
									<div class="icon-bx-sm m-b20">
										<a href="javascript:void(0);" class="icon-cell text-white"><i class="flaticon-coding"></i></a>
									</div>
									<div class="icon-content">
										<h4 class="dlab-tilte text-capitalize">Oportunidades</h4>
										<h5 class="sub-titulo">Lorem ipsum</h5>
										<p>Centralize todas as informações de seus clientes em um único lugar. Envie whatsapp , email, sms ou ligue para seus clientes direto da oportunidade. Agende um próximo contato e saiba o que foi negociado .Tudo em um único ponto. Visualize em lista ou em grade e ainda transfira as oportunidades em lote para outro membro ou equipe com apenas dois clicks.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6 col-md-12">
								<div class="icon-bx-wraper left m-b50 icon-up">
									<div class="icon-bx-sm m-b20">
										<a href="javascript:void(0);" class="icon-cell text-white"><i class="flaticon-coding"></i></a>
									</div>
									<div class="icon-content">
										<h4 class="dlab-tilte text-capitalize">Lorem ipsum</h4>
										<h5 class="sub-titulo">Lorem ipsum</h5>
										<p>Gerencie as atividades do dia em um único lugar e saiba tudo que está pendente. Priorize as oportunidades que desejar mantendo um ritmo de produtividade sem aborrecimentos</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6 col-md-12">
								<div class="icon-bx-wraper left m-b50 icon-up">
									<div class="icon-bx-sm m-b20">
										<a href="javascript:void(0);" class="icon-cell text-white"><i class="flaticon-coding"></i></a>
									</div>
									<div class="icon-content">
										<h4 class="dlab-tilte text-capitalize">Lorem ipsum</h4>
										<h5 class="sub-titulo">Lorem ipsum</h5>
										<p>Realize diversos atendimentos com sua equipe , usando um pré atendimento automático com nosso robô/ bot ou mesmo de forma manual. Use os canais de whatsapp, facebook, instagram, telegram ou qualquer chat * (verifique as integrações disponíveis)</p>
									</div>
								</div>
							</div>
							<div class="col-lg-6 col-md-12">
								<div class="icon-bx-wraper left m-b50 icon-up">
									<div class="icon-bx-sm m-b20">
										<a href="javascript:void(0);" class="icon-cell text-white"><i class="flaticon-coding"></i></a>
									</div>
									<div class="icon-content">
										<h4 class="dlab-tilte text-capitalize">Gatilhos inteligentes</h4>
										<h5 class="sub-titulo">Lorem ipsum</h5>
										<p>Use e abuse dos nossos gatilhos inteligentes. Opções de envio segmentados de mensagens de whatsapp, notificações, mudanças de funis, de tags e muito mais.</p>
									</div>
								</div>
							</div>
						</div> */}
					
				</div>

				

			</div>
		</section>
    </>
  );
}
  
  export default OsRecursos;