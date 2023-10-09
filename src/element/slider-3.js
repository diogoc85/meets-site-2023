
import Link from "next/link";
import Slider from "react-slick";
import Image from 'next/image';
import { useEffect, useState } from "react";
import verificaHost from '../utils/verificahost'

function Slider3 () {
	
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
        
		<div className="banner-three">
			<div className="container">
				<div className="">
				<div className="row align-items-center">
						<div className="col-md-6">
							<div className="banner-content text-white">
								{state.dominio && state.dominio === "br" &&
                                    <h1 className="m-b20 c-at center-mob" data-aos="fade-right" data-aos-duration="100">Primeiro Sistema de CRM, Integrado a uma Central de Atendimento Omnichannel e Chatbot.</h1>
                                }
                                {state.dominio && state.dominio === "pt" &&
                                    <h1 className="m-b20 c-at center-mob" data-aos="fade-right" data-aos-duration="100">Primeiro Sistema de CRM, Integrado a uma Central de Atendimento Multicanal e Chatbot.</h1>
                                }
								<h6 className="sub-title text-primary mt-2 center-mob" data-aos="fade-right" data-aos-duration="200">Tenha a sua gestão de leads COMPLETA em um único software.</h6>
								<ul className="d-flex icons-social center-mob">
									<li className="move-1"><Image src="/images/icon/home-instagram.png" width={46} height={46} /></li>
									<li className="move-2"><Image src="/images/icon/home-messenger.png" width={46} height={46} /></li>
									<li className="move-3"><Image src="/images/icon/home-whatsapp.png" width={46} height={46} /></li>
									<li className="move-4"><Image src="/images/icon/home-jivochat.png" width={46} height={46}/></li>
									<li className="move-5"><img src="images/icon/sms.png" data-aos="fade-up" width={46} height={46}/></li>
								</ul>
								<div class="d-flex center-mob acoes">
								<a href="teste-gratis" data-aos="fade-up" data-aos-duration="300" className="btn btn-primary mr-3 btn-round">{state.comece}</a>
								<a href={state.whatsapp_link} target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn btn-light btn-round">{state.solicite}</a>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="d-flex justify-content-center center-mob" data-aos="fade-right" data-aos-duration="0">
								<Image src="/images/banner/chamada-home.png" alt="" width={500} height={535} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      </>
    )
  }
  
  
  export default Slider3;