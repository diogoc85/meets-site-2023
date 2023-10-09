
import { useEffect, useState } from "react";
import Link from "next/link";
import Tabs from 'react-bootstrap/Tabs';
import Footer from "../layout/footer";
import Header from "../layout/header";
import { UilLocationPoint } from '@iconscout/react-unicons';
import verificaHost from '../utils/verificahost'

function FaleConosco() {
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
      <Header />

      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2 ">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Fale Conosco</h1>
              <h5>Estamos a disposição, em que podemos ajudar?</h5>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        
        <section className="parceiros">

              <div className="container">
                <div className="row shadow pl-5 banner-inner rounded pos-top align-items-center m-mob">
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h3 className="title m-b20">Olá, tem alguma dúvida, sugestão?</h3>
                      <p className="mb-0">Estamos aqui para te ajudar, fale conosco pelo formulário abaixo ou fale com um de nossos consultores no botão abaixo.</p>
                      <a href={state.whatsapp_link} target="_blank" className="btn btn-info border-0 mt-3">Falar com um consultor</a>
                    </div>
                    <div className="col-lg-5 col-sm-5 box-ajuda p-relative">
                      <img className="p-absolute foguete move-4" src="images/banner/interrogacao.png" alt="" />
                      <img className="p-absolute img-ajuda" src="images/banner/posso-ajudar.png" alt="" />
                    </div>   
                </div>
              </div>

              <div className="container pb-5">

                <div className="text-center pb-3">
                    <h3>Onde estamos</h3>
                </div>

                  <div className="row">
                    <div className="col-lg-6 col-md-12 ">
                        <div className="banner-inner shadow rounded p-4">
                          <h4 className="dlab-title m-b15"><UilLocationPoint /> Recife/PE</h4>
                          <p>R. Ribeiro de Brito, 930 - 1702 - Boa Viagem, Recife - PE, 51021-310</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">   
                        <div className="banner-inner shadow rounded p-4">
                          <h4 className="dlab-title m-b15"><UilLocationPoint /> São Paulo/SP</h4>
                          <p>R. Amauri, 116 - Jardim Europa, São Paulo - SP, 01406-902</p>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="container pb-5">
                  <div className="text-center pb-3">
                      <h3>Sociais</h3>
                  </div>

                  <div id="" className="d-flex text-center justify-content-center">
                      <ul className="social d-flex center-mob">
                        <li><a className="fa fa-facebook" href="https://www.facebook.com/meetscrm/?ref=br_rs"></a></li>
                        <li><a className="fa fa-instagram" href="https://www.instagram.com/meetscrm/"></a></li>
                        <li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/meetscrm/"></a></li>
                        <li><a className="fa fa-twitter" href="https://twitter.com/meets_crm"></a></li>
                        <li><a className="fa fa-youtube" href="https://www.youtube.com/c/MeetsBr"></a></li>
                        <li><a className="fa fa-pinterest" href="https://br.pinterest.com/meetscrm1/"></a></li>
                      </ul>
                  </div>
                </div>

              <div className="content-inner" id="cadastro">  

                <div className="text-center text-white pb-3">
                    <h3>Cadastro</h3>
                </div>

              <div className="container">

              <div className="row justify-content-md-center">
                <div className="col-lg-6 m-b30">
                  <form className="dlab-form dzForm" method="POST" action="">
                    <div className="dzFormMsg"></div>
                    <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="input-group">
                          <input name="nome" required type="text" className="form-control" placeholder="Nome" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="input-group">
                          <input name="email" required type="text" className="form-control" placeholder="E-mail" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="input-group">
                          <input name="telefone" required type="text" className="form-control" placeholder="Telefone" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="input-group">
                          <input name="mensagem" required type="textarea" className="form-control" placeholder="Mensagem" />
                        </div>
                      </div>
                
                      <div className="col-sm-12 text-center mt-2">
                        <button name="submit" type="submit" value="Submit" className="btn btn-info border-0">Enviar</button>
                      </div>
                    </div>
                  </form>
                </div>
                </div>
              
              </div>
              </div>



        </section> 

       
      </div>

      <Footer />
      </>
    );
  }
  
  export default FaleConosco;