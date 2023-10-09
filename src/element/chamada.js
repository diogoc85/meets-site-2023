
import Image from 'next/image'
function Chamada() {
  return (
    // <!-- Slider -->
    <div className="banner">
		<div className="container">
			<div className="banner-inner p-3 shadow rounded pos-top">
				<ul className='row chamadas pt-4 pb-2'>
					<li className='col-md-12 col-lg-4 text-center justify-content-between flex-column'>
						<div>
						<Image src="/images/icon/icon-omnichannel.svg" alt="" width={100} height={100} />
						<h4>Central Omnichannel</h4> 
						<p>Chat Online com Whatsapp, Messenger, Instagram e em breve SMS e recebimento de ligação Voip.</p>
						</div> 
						<a href="/central" className="btn btn-mini btn-info shadow rounded-xl" data-aos="fade-up" data-aos-duration="100"> Saiba mais</a>
					</li>
					<li className='col-md-12 col-lg-4 text-center justify-content-between flex-column'>
						<div>
						<Image src="/images/icon/icon-chatbot.svg" alt="" width={100} height={100} />
						<h4>Chatbot</h4>
						<p>Com distribuição automática de atendimento</p>
						</div>
						<a href="/chatbot" className="btn btn-mini btn-info shadow rounded-xl" data-aos="fade-up" data-aos-duration="200"> Saiba mais</a>
					</li>
					<li className='col-md-12 col-lg-4 text-center justify-content-between flex-column'>
						<div>
						<Image src="/images/icon/icon-gatilhos.svg" alt="" width={100} height={100} />
						<h4>Gatilhos inteligentes</h4>
						<p>Com disparo de Whatsapp, E-mail e em breve SMS</p>
						</div>
						<a href="/gatilhos-inteligentes" className="btn btn-mini btn-info shadow rounded-xl" data-aos="fade-up" data-aos-duration="300"> Saiba mais</a>
					</li>
				</ul>        
        	</div>
      	</div>
    </div>
  );
}

export default Chamada;
