import { useEffect, useState } from "react";
import verificaHost from '../utils/verificahost'
//import absoluteUrl from 'next-absolute-url'

export default function Footer(props) {
	//const { origin } = absoluteUrl(req)

	//console.log("props footer", props);
	
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
		console.log('host-->',window.location.hostname) 
		const {info_layout} = verificaHost(window.location.hostname ?? 'www.meets.com.br');
		//console.log('info_layout-->',info_layout);
		setState(info_layout)
		//console.log('state-->',state);
		
		
	  }, []);
	

	return (
	  <>
	  {/* <!-- Footer --> */}
	  <footer className="site-footer" id="footer">
		  <div className="footer-top">
			  <div className="container">
				  <div className="row">
					  
					  <div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						  <div className="widget style-1 center-mob">
							  <h5 className="footer-title">Empresa</h5>
							  <ul className="center-mob">
								  <li><a href="/sobre">Sobre</a></li>
								  <li><a href="https://blog.meets.com.br/" target="_blank">Blog</a></li>
								  {/* <li><a href="/parceiros">Afiliados</a></li> */}
								  <li><a href="/fale-conosco">{state.fale}</a></li>
								  <li><a href="/trabalhe-conosco">{state.trabalhe}</a></li>
								  
							  </ul>
						  </div>
					  </div>
					  <div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						  <div className="widget style-1 center-mob">
							  <h5 className="footer-title">Soluções</h5>
							  <ul className="center-mob">
								  <li><a href="/solucoes/crm-para-infoprodutos">CRM para Infoprodutos</a></li>
								  <li><a href="/solucoes/crm-para-agencias">CRM para Agências</a></li>
								  <li><a href="/solucoes/crm-para-pme">CRM para PME</a></li>
								  <li><a href="/solucoes/crm-para-clinicas">CRM para Clínicas</a></li>
								  <li><a href="/solucoes/crm-para-imobiliarias">CRM para Imobiliárias</a></li>
							  </ul>
						  </div>
					  </div>
					  <div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						  <div className="widget style-1 center-mob">
							 <h5 className="footer-title">CRM</h5>
							  <ul className="center-mob">
								  <li><a href="https://apidoc.meets.com.br/" target="_blank">API Meets</a></li>
								  <li><a href="/duvidas-frequentes">Dúvidas Frequentes</a></li>
								  <li><a href="/termos-e-condicoes">Termos e condições</a></li>
								  <li><a href="/termos-de-uso-whatsapp">Termos de uso whatsapp</a></li>
								  <li><a href="/politica-de-privacidade">Política de privacidade</a></li>
								  <li><a href="/lgpd">{state.lgpd}</a></li>
							  </ul>
						  </div>
					  </div>
					  <div className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="1.0s">
						  <div className="widget style-1 center-mob">
							  <h5 className="footer-title">Suporte</h5>
							  <ul className="center-mob">
								  <li><a href="https://ajuda.meets.com.br/" target="_blank">Ajuda</a></li>
								  <li><a href={state.mailto}>{state.email}</a></li>
								  <li>{state.fone}</li>
								  <li><a href={state.whatsapp_link} className="whats" target="_blank"><span className="fa fa-whatsapp"></span> {state.whatsapp_number}</a></li>
							  </ul>
						  </div>
					  </div>
					  <div className="col-xl-3 col-lg-12 col-md-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						  <div className="widget_about">
							  <div className="dlab-social-icon center-mob">
								  <h5 className="footer-title">Social</h5>
								  	{state.dominio && state.dominio === "br" &&
										<ul className="center-mob">
										<li><a className="fa fa-facebook" href="https://www.facebook.com/meetscrm/?ref=br_rs" target="_blank"></a></li>
										<li><a className="fa fa-instagram" href="https://www.instagram.com/meetscrm/" target="_blank"></a></li>
										<li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/meetscrm/" target="_blank"></a></li>
										<li><a className="fa fa-twitter" href="https://twitter.com/meets_crm" target="_blank"></a></li>
										<li><a className="fa fa-youtube" href="https://www.youtube.com/c/MeetsBr" target="_blank"></a></li>
										<li><a className="fa fa-pinterest" href="https://br.pinterest.com/meetscrm1/" target="_blank"></a></li>
										</ul>
									}
									{state.dominio && state.dominio === "pt" &&
										<ul className="center-mob">
											<li><a className="fa fa-instagram" href="https://www.instagram.com/meetscrmpt/" target="_blank"></a></li>
											<li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/meetscrm/" target="_blank"></a></li>
										</ul>
									}
							  </div>
							  <div className="footer-logo center-mob">
								  <img src="images/logo/aws.png" alt=""/>
								  <img src="images/logo/google-safe-browsing.png" alt=""/>						  
								 
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>

		{ state.dominio && state.dominio === "pt" &&

		  <div className="footer-bottom">
			  <div className="container">
				<div className="row">
				 
					  <div className="col-md-6 text-left"> 
						
									<img src="images/Portugal.png" alt="Portugal"/>
									
					  </div>
				 
				  <div className="col-md-6 text-right" >
						  				  
							  <div className="">
								  <h6>Parque Tecnológico de Óbidos</h6>
								  <p>Rua da Criatividade, Ed Centrais - Óbidos<br/>Distrito Leiria -  Código postal: 2510-216</p>				  			 
							  </div>
						  
					  </div>
					  </div>
			  </div>
		  </div>
		  }

		  {/* <!-- footer bottom part --> */}
		  <div className="footer-bottom">
			  <div className="container">
				  <div className="row align-items-center">
					  <div className="col-md-12 text-center"> 
						  <span className="copyright-text">Copyright © {new Date().getFullYear()} <a href={state.link_site} target="_blank">Meets CRM</a>. Todos os direitos reservados.</span>
					  </div>
				  </div>
			  </div>
		  </div>
	  
		  <div className="icon-whats">
		  <a href={state.whatsapp_link} className="whats" target="_blank"><span className="fa fa-whatsapp"></span></a>
		  </div>
		  
		  
		  
		  <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GJQK9J"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
		  
	  
	  </footer>
	  {/* <!-- Footer End --> */}
	  </>
	)
  }

  
export function getServerSideProps(context) {
	const { req } = context
	console.log('req footer--->',req);
	let host = ''
	if (req) {
	  host = req.headers.host // will give you localhost:3000
	}
  
  
	return {
	  host2: { host },
	};
  }

  
