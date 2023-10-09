import { useEffect, useState } from "react";
import Image from 'next/image';
import verificaHost from '../utils/verificahost'

function BoxPrincipal() {
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
      <section className="importante">

			<div className="container">		
				<div className="row caixa-central align-items-center">
					<div className="col-lg-6 col-sm-6 p-relative atendimento-centralizado">
						<img className="p-absolute icones-atendimento" src="images/banner/icones-atendimento.png" alt="" data-aos="fade-up" data-aos-duration="200"/>
						<img className="p-absolute lista-contatos move-4" src="images/banner/lista-contatos.png" alt="" data-aos="fade-up" data-aos-duration="400"/>
						<img className="p-absolute circulo-linhas mob_none" src="images/banner/circulo-linhas.png" alt="" data-aos="fade-up" data-aos-duration="600"/>
					</div>
					<div className="banner-content center-mob col-lg-6 col-sm-6">
						<h3 className="sub-title center-mob">Central Omnichannel </h3>
						<h2 className="mb-3 center-mob">{state.central}</h2>
						<p>{state.receba}</p>
						<a href="/central" className="btn btn-mini btn-info shadow rounded-xl" data-aos="fade-up" data-aos-duration="100"> Saiba mais</a>
					</div>  
				</div>
			</div>

			<div className="container">
				<div className="row caixa-bot align-items-center flex-row-reverse">
					<div className="col-lg-5 col-sm-5 pos-relative auto" data-wow-duration="2s" data-wow-delay="0.1s">
						<img className="p-absolute robozinho move-4" src="/images/banner/robo.png" alt="" />
						<img className="p-absolute tela-chat" src="/images/banner/msg-automatizadas.png" alt="" data-aos="fade-up" data-aos-duration="700" />
					</div> 
					<div className="banner-content center-mob col-lg-7 col-sm-7" data-wow-duration="2s" data-wow-delay="0.1s">
						<h3 class="sub-title center-mob">{state.deixe}</h3>
						<h2 className="center-mob">Automatize seus atendimentos com nosso chatbot</h2>
						<p>Monte o seu chatbot com a cara da sua empresa para um atendimento personalizado e assertivo. Transfira o atendimento do bot para um atendimento humano quando for preciso.</p>
						<a href="/chatbot" className="btn btn-mini btn-info shadow rounded-xl" data-aos="fade-up" data-aos-duration="100"> Saiba mais</a>
					</div>
				</div>
            </div>
			<div className="container">
				<div className="row caixa-funil align-items-center">
					<div className="col-lg-6 col-sm-6 p-relative">
					<img className="p-absolute card-simples move-4" src="images/banner/card-simples.png" alt="" />
					<img src="images/banner/integrado-funil.png" alt="" data-aos="fade-up" data-aos-duration="700"/>
					</div>
					<div className="col-lg-6 col-sm-6">
					<h2 className="center-mob">{state.integrado}</h2>
					<p>{state.crie}</p>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row caixa-gatilho align-items-center flex-row-reverse">
					<div className="col-lg-5 col-sm-5 pos-relative img-gatilho" data-wow-duration="2s" data-wow-delay="0.1s">
						<img className="p-absolute aviao move-6" src="/images/banner/aviao-papel.png" alt="" />
						<img className="tela-gatilho" src="/images/banner/gatilhos-inteligentes.png" alt="" data-aos="fade-up" data-aos-duration="700" />
					</div> 
					<div className="banner-content center-mob col-lg-7 col-sm-7" data-wow-duration="2s" data-wow-delay="0.1s">
						<h3 class="sub-title center-mob">Processos automatizados</h3>
						<h2 className="center-mob">Gatilhos inteligentes</h2>
						<p>Crie fluxos de disparo automáticos de mensagens por Whatsapp, e-mail ou SMS.</p>
						<p>{state.gatilho}</p>
						<a href="/gatilhos-inteligentes" className="btn btn-mini btn-info shadow rounded-xl" data-aos="fade-up" data-aos-duration="100"> Saiba mais</a>
					</div>	 	
				</div>
            </div>
		
	</section>
    </>
  )
}

export default BoxPrincipal;