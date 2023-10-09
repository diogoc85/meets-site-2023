import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Precos from "../component/precos";
import PlanoPersonalizado from "../element/plano-personalizado";
import LeadChat from "../element/lead-chat";
import * as Unicons from '@iconscout/react-unicons';
import Tabela from "../element/tabela";
import Head from "next/head";
import verificaHost from '../utils/verificahost'

function Planos() {
  const [state, setState] = useState({
		dominio: null,
		fone: null,
		email: null,
		mailto: null,
		whatsapp_link: null,
		whatsapp_number: null,
		link_site: null,
    subtitulo_planos: null
	})
  
  useEffect(() => {
		const {info_layout} = verificaHost(window.location.hostname ?? 'www.meets.com.br');
    setState(info_layout)
		
  }, []);

  return (
    <>
    <Head>
    <title>Planos | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="mb-3">Planos</h1>
              <h5 className="mb-0">{state.subtitulo_planos}</h5>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        <section className="solucoes">
              
              {/* <div className="container">
                <div className="row align-items-center shadow banner-inner rounded pos-top m-mob p-4">
                  <div className="col-lg-4 col-sm-4 box-whats p-relative">
                    <img className="p-absolute central-whats" src="images/banner/central-whatsapp.png" alt="" />
                  </div>  
                  <div className="col-lg-4 col-sm-4 fadeInUp">
                    <h2 className="mb-3 center-mob">Central Whatsapp</h2>
                        <h3 className="preco mb-0 center-mob">R$239,00<small class="pricingtable-type">/mês</small></h3>
                        <p className="center-mob">+ 64,90 Mensal e 59,90 anual</p>
                    <ul className="pricingtable-features">
											<li><Unicons.UilCheck /> Vários atendentes para uma linha</li>
											<li><Unicons.UilCheck /> Integrado ao Meets CRM</li>
											<li><Unicons.UilCheck /> 1 número Whatsapp</li>
                      <li className="center-mob mb-mob"><a href="teste-gratis" className="btn btn-primary border-0 mt-3">Solicite um teste</a></li>
										</ul>
                  </div>
                  <div className="col-lg-4 col-sm-4 fadeInUp">
                    <h5 className="mb-3 center-mob">Sob consulta:</h5>
                    <ul className="pricingtable-features">
											<li><Unicons.UilCheck /> Vários atendentes para uma linha</li>
											<li><Unicons.UilCheck /> Integrado ao Meets CRM</li>
											<li><Unicons.UilCheck /> Vários números Whatsapp</li>
                      <li><Unicons.UilCheck /> Chatbots</li>
                      <li><Unicons.UilCheck /> WhatsApp Business API</li>
                      <li className="center-mob mb-mob">
                        
                          <a href={state.whatsapp_link} className="btn btn-primary border-0 mt-3" target="_blank" data-aos="fade-up" data-aos-duration="400">Consultar preço</a>
                        
                        </li>
										</ul>
                  </div>
                </div>
              </div> */}

              
                  <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-sm-12 pb-4 pt-4" data-wow-duration="2s" data-wow-delay="0.1s">
                          <Precos/>
                        </div>
                    </div>
                  </div>

                <div className="content-inner pl-2 pr-2 pb-0">
									<div className="container">
                    <div className="row onboarding"> 
                      <div className="col-md-5 p-relative mob-remove">
                        <img className="p-absolute icon-onboarding move-4 img-mob" data-aos="fade-up" data-aos-duration="400" src="images/icon/icon-onboarding.svg" alt="" />
                        <img className="p-absolute mulher-onboarding" src="/images/banner/onboarding.png" alt="" />
                      </div>
                      <div className="col-md-7 pb-5">
                        <h5>Com o Meets CRM, a partir de 3 usuários, nossa equipe fará o onboarding completo para a implementação do sistema, garantindo um melhor resultado e aproveitamento do seu tempo.</h5>
										    <p>Vamos ajudá-lo a configurar o  funil de vendas ou atendimento, usuários, equipes e central de atendimento, além de apresentar todas as funcionalidades da plataforma. Entre em contato para saber mais sobre como podemos ajudar a impulsionar seus negócios.</p>
                        <a href={state.whatsapp_link}  className="btn btn-info btn-round" data-aos="fade-up" data-aos-duration="400" target="_blank">Tenho interesse no onboarding</a>
                      </div> 
									  </div>
                  </div>
								</div>

              <div className="container">
                <PlanoPersonalizado />
              </div>

              
          </section> 
      </div>
      <Footer />
    </>
  );
}

export default Planos;


// export function getServerSideProps(context) {
// 	const { req } = context
// 	console.log('req index--->',req);
// 	let host = ''
// 	if (req) {
// 	  host = req.headers.host // will give you localhost:3000
// 	}
  
  
// 	return {
// 	  props: { host },
// 	};
//   }