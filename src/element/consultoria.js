
import Image from 'next/image';
import { useEffect, useState } from "react";
import verificaHost from '../utils/verificahost';


function Consultoria() {

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
    // <!-- Slider -->
    <div className="banner">
		<div className="container">
				
					{state.dominio && state.dominio === "br" &&
						<div className='p-5 shadow rounded ebook pos-top mb-4'>
							<div className='row'>
								<div className='col-md-12 col-lg-4'>
									<Image src="/images/banner/ebook-ia.png" alt="" width={398} height={370} />
								</div>
								<div className='col-md-12 col-lg-8'>
									<h5>E-book</h5> 
									<h4>Ferramentas de inteligência artificial para clínicas odontológicas.</h4>
									<h6>Eleve seus resultados com a ajuda da inteligência artificial.</h6>
									<a href="https://odonto.meetscrm.com.br" target='_blank' className="btn btn-lg btn-info shadow rounded-xl" data-aos="fade-up" data-aos-duration="100">Baixe grátis</a>
								</div>
							</div>
						</div>
					}
					{state.dominio && state.dominio === "pt" &&
						<div className='consultoria p-5 shadow rounded pos-top mb-4'>
							<div className='row'>
								<div className='col-md-12 col-lg-12'>		
									<h5>Consultoria</h5> 
									<h2>Precisa  de ajuda  para  vender mais <br/>e melhorar seu  atendimento?</h2>
									<h4> Disponibilizamos pra  você  uma consultoria personalizada.</h4>
									<a href="/consultoria" className="btn btn-lg btn-info shadow rounded-xl" data-aos="fade-up" data-aos-duration="100"> Saiba mais</a>
								</div>
							</div>
						</div>
					}
					
      	</div>
    </div>
  );
}

export default Consultoria;
