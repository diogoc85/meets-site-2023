
import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Cta from "../element/cta";
import Head from "next/head";


function Central() {
  return (
    <>
     <Head>
    <title>Central de Atendimento OMNICHANNEL | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Central de Atendimento</h1>
              {/* <!-- Breadcrumb Row --> */}
              <h5>OMNICHANNEL COM CRM COMPLETO</h5>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About --> */}
        <section className="banner">
          
        <div className="container pb-5">
                <div className="row align-items-center mt-5 flex-row-reverse">
                    <div className="col-lg-6 col-sm-6 p-relative atendimento-centralizado">
                      <img className="p-absolute icones-atendimento" src="images/banner/icones-atendimento.png" alt="" data-aos="fade-up" data-aos-duration="200"/>
                      <img className="p-absolute lista-contatos move-4" src="images/banner/lista-contatos.png" alt="" data-aos="fade-up" data-aos-duration="400"/>
                      <img className="p-absolute circulo-linhas mob_none" src="images/banner/circulo-linhas.png" alt="" data-aos="fade-up" data-aos-duration="600"/>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <h2 className="mb-3 center-mob">Todos os atendimentos centralizados</h2>
                      <p>Receba e atenda todos os seus leads de vários canais diferentes, tudo em uma única tela, crie oportunidades, adicione tags, faça agendamentos, entre outras funcionalidades. </p>
                    </div>  
                </div>
                <div className="row align-items-center mt-5">
                    <div className="col-lg-6 col-sm-6">
                    <img src="images/banner/unico-numero.png" alt="" data-aos="fade-up" data-aos-duration="600" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2 className="center-mob">Um ou vários números de telefone, vários atendentes, equipes e distribuição de atendimento.</h2>
                    <p>Com a central de atendimento você pode atender vários clientes ao mesmo tempo, uma verdadeira máquina de atendimento e vendas.</p>
                    </div>
                </div>
                <div className="row align-items-center mt-5 flex-row-reverse">
                    <div className="col-lg-6 col-sm-6 p-relative chatbot">
                      <img className="p-absolute robo-central move-4" src="images/banner/robo.png" alt="" />
                      <img className="p-absolute msg-auto"src="images/banner/msg-automatizadas.png" alt="" data-aos="fade-up" data-aos-duration="500" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2 className="center-mob">(Chatbot) <br/>Mensagens automatizadas</h2>
                    <p>Configure quantas mensagens quiser para enviar aos seus leads de forma automática. Categorize as mensagens para um fluxo de trabalho mais organizado e rápido.</p>
                    <a class="btn btn-info rounded-xl" href="/chatbot">Saiba mais</a>
                    </div>
                </div>
                <div className="row align-items-center mt-5">
                    <div className="col-lg-6 col-sm-6 p-relative">
                    <img className="p-absolute card-simples move-4" src="images/banner/card-simples.png" alt="" />
                    <img src="images/banner/integrado-funil.png" alt="" data-aos="fade-up" data-aos-duration="700"/>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2 className="center-mob">Integrado ao funil de vendas/atendimento</h2>
                    <p>Crie oportunidades logo no primeiro atendimento ao cliente.</p>
                    </div>
                </div>

                <Cta />
              
            </div>

        </section>

      </div>
      <Footer />
    </>
  );
}

export default Central;
