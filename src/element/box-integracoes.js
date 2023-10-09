
import Image from 'next/image';

function BoxIntegracoes() {
  return (
    <>
      <section>
			<div className="container integracoes">
				<div className="row align-items-center mb-4">
					<div className="col-lg-7 col-sm-7 center-mob">
                    	<h2 className="title">Integrações</h2>
                    	<p>Dê mais robustez ao seu CRM com mais de 30 ferramentas integradas de forma nativa além de várias outras via o integrador de terceiros.</p>
						<p className="cinza">Conheça todas as ferramentas disponíveis até o momento.</p>
						<ul className="d-flex center-mob">
							<li><a href="/integracoes" className="btn btn-primary mr-3 btn-round" data-aos="fade-up" data-aos-duration="300">Integrações nativas</a></li>
						</ul>
                    </div>
					<div className="col-lg-5 col-sm-5 p-relative">
						<div className="p-absolute hotmart move-4">
							<Image src="/images/banner/hotmart.png" alt="" width={142} height={144} />
						</div>
						<div className="p-absolute contaazul move-4">
							<Image src="/images/banner/contaazul.png" alt="" width={142} height={144} />
						</div>			
						<div className="p-absolute monetize move-4">
							<Image src="/images/banner/monetize.png" alt="" width={142} height={144} />
						</div>
						<div className="p-absolute contatos move-4">
							<Image src="/images/banner/contatos.png" alt="" width={142} height={144} />
						</div>
						<div className="p-absolute pagseguro move-4">
							<Image src="/images/banner/pagseguro.png" alt="" width={142} height={144} />
						</div>
						<div className="p-absolute mailchimp move-4">
							<Image src="/images/banner/mailchimp.png" alt="" width={142} height={144} />
						</div>
						<div className="p-absolute google move-4">
							<Image src="/images/banner/google.png" alt="" width={142} height={144} />
						</div>
						<div className="p-absolute mulher" data-aos="fade-up" data-aos-duration="700">
							<Image src="/images/banner/mulher-integracoes.png" alt="" width={640} height={535} />
						</div>
						<div data-aos="fade-up" data-aos-duration="400">
							<Image src="/images/banner/losango-integracao.png" alt="" width={525} height={584} />
						</div>
                    </div>  
                </div>
			</div>
		</section>
    </>
  )
}

export default BoxIntegracoes;