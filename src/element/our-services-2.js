import { useState } from "react";

function OurServices2() {
    const [open, setOpen] = useState("p2")
    return (
      <>
      
		{/* <!-- Services --> */}
		<section className="content-inner pb-5">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5">
						<div className="section-head style-3 mb-4">
						<img className="missao mb-2" src="images/icon/missao.svg" alt="" data-aos="fade-up" data-aos-duration="200" />
							<h2 className="title" data-aos="fade-up" data-aos-duration="400">Nossa missão</h2>
						</div>
						<p data-aos="fade-up" data-aos-duration="600">Nossa missão é transformar os resultados das empresas através da disseminação de nosso conhecimento . Criar uma comunidade forte que possa se apoiar e contribuir para um ecosistema mais eficiente, promovendo a qualidade de vida e dos negócios seja em qualquer estágio sua empresa esteja.</p>
					</div>
					<div className="col-lg-7">
					<div className="icon-bx-wraper style-3 left m-r100 m-b30 d-flex" data-aos="fade-up" data-aos-duration="300">
							<div className="icon-bx"> 
								<img src="images/icon/historia.svg" alt="" />			 
							</div>
							<div className="">
								<h4 className="dlab-title m-b15">História</h4>
								<p>O Meets iniciou sua história com o desafio de dois jovens empreendedores e desenvolvedores em 5 de dezembro de 2010, para desenvolvimento de um CRM para uma empresa de grande cadeia em Pernambuco. Porém, em 2012, aproximadamente, graças à procura de um amigo por um CRM gratuito que conseguisse automatizar ações e levasse uma maior qualidade de vida e diminuição de tempo, eles decidiram levar a ferramenta para frente, visto que, o software tinha um potencial de crescimento. Com isso, aliados a esse amigo que é um experiente profissional de administração e consultoria, decidiram fundar o Meets em Recife - Pernambuco.</p>
							</div>
						</div>
						<div className="icon-bx-wraper style-3 left m-l100 m-b30 d-flex" data-aos="fade-up" data-aos-duration="500">
							<div className="icon-bx"> 
								<img src="images/icon/empresa.svg" alt="" />	
							</div>
							<div className="">
								<h4 className="dlab-title m-b15">Empresa</h4>
								<p>Começamos fazendo software para outras empresas. Hoje estamos 100% focados em criar todo dia uma melhor experiência para você.</p>
							</div>
						</div>
						<div className="icon-bx-wraper style-3 left m-r100 m-b30 d-flex" data-aos="fade-up" data-aos-duration="700">
							<div className="icon-bx"> 
								<img src="images/icon/codigo.svg" alt="" />	
							</div>
							<div className="">
								<h4 className="dlab-title m-b15">Software</h4>
								<p>Somos uma empresa SaaS (Software como Serviço), permitindo aos usuários se conectar e usar aplicativos baseados em nuvem pela Internet. Aqui no Meets, utilizamos toda a tecnologia da Amazon para manter nossos serviços.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
    )
  }
  
  export default OurServices2;