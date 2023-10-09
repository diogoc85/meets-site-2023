import { useEffect, useState } from "react";
import Slider from "react-slick";
import verificaHost from '../utils/verificahost'

function TipoSolucoes() {
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
      
    const [asd, setAsd] = useState();
    const settings = {
        centerMode:true,
        slidesToShow:1,
        dots:true,
        infinite:true,
        slidesToScroll:1,
        autoplay:false,
		responsive: [
			
			{
			  breakpoint: 1320,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				centerMode:false,
			  }
			},
		]	
	};
const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div
          className="owl-prev"
          onClick={() => asd.slickPrev()}
        >
          <i className="fa fa-arrow-left"></i>
        </div>
        <div
          className="owl-next"
          onClick={() => asd.slickNext()}
        >
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
    return (
        <>
            <div className="container">
                <div className="row tipo-solucoes">

                        <div className="col-md-4 d-flex mb-mob" data-aos="fade-up" data-aos-duration="400">
                            <div className="content-inner text-white shadow rounded p-4 text-center">
                                <div className="mb-3">
                                    <img className="" src="images/icon/industria.svg" alt="" />
                                </div>
                                <h2 className="">Indústria</h2>
                                <p>
                                Com a utilização de um CRM na sua indústria, será possível compreender melhor o Workflow, conseguir gerar orçamentos e entender mais da cadência de pedidos, analisando a recorrência e o fluxo de ações automatizadas. O Meets também faz integrações com sistemas ERPs (Enterprise Resource Planning), como o Bling e o Conta Azul.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex mb-mob" data-aos="fade-up" data-aos-duration="700">
                            <div className="content-inner text-white shadow rounded p-4 text-center">
                                <div className="mb-3">
                                    <img className="" src="images/icon/icon-pme.svg" alt="" />
                                </div>
                                <h2 className="">Comércio</h2>
                                <p>
                                O CRM integra as operações e auxilia o domínio da Jornada do Cliente, facilitando processos e reduzindo custos. Atrelando ao seu E-commerce, será ainda mais fácil obter uma visão estratégica, resolver problemas, tomar decisões e trabalhar no Sucesso do Cliente.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex" data-aos="fade-up" data-aos-duration="1000">
                            <div className="content-inner text-white shadow rounded p-4 text-center">
                                <div className="mb-3">
                                    <img className="" src="images/icon/servico.svg" alt="" />
                                </div>
                                <h2 className="">Serviços</h2>
                                <p>{state.servicos}</p>
                            </div>
                        </div>
                </div>
            </div>

        </>
    );
}

export default TipoSolucoes;
