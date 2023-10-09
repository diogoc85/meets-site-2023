import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Head from "next/head";


function crmParaConcessionarias() {
  return (
    <>
     <Head>
    <title>CRM para Concessionárias | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>CRM para concessionárias</h1>
              {/* <h5>Lorem ipsum dolor</h5> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="solucoes">

            <div className="container">

                <div className="row align-items-center flex-row-reverse mb-mob center-mob">
                    <div className="col-lg-6 col-sm-6">
                    <img src="/images/losango.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2 className="pt-mob">Comunicação/WhatsApp</h2>
                    <p>Com a aplicação do App de mensagens mais utilizado em todo o mundo, sua empresa conseguirá expandir e facilitar a comunicação com os clientes em uma central de atendimento.</p>
                    </div>
                </div>
                <div className="row align-items-center mb-mob center-mob">
                    <div className="col-lg-6 col-sm-6">
                    <img src="/images/losango.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2 className="pt-mob">Suas conversas de WhatsApp organizadas e segmentadas</h2>
                    <p>Através do Meets, o primeiro CRM com uma central de vendas e atendimento disponível em um número para vários atendentes, suas conversas no WhatsApp serão organizadas e segmentadas.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse mb-mob center-mob">
                    <div className="col-lg-6 col-sm-6">
                    <img src="/images/losango.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2 className="pt-mob">Importações</h2>
                    <p>Com o Meets, o processo de importação de contatos estará facilitado no seu CRM. Dados e históricos de clientes também podem ser importados e armazenados no software, encontrando-se em segurança nos nossos banco de dados na nuvem.</p>
                    </div>
                </div>
                <div className="row align-items-center mb-mob center-mob">
                    <div className="col-lg-6 col-sm-6">
                    <img src="/images/losango.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2 className="pt-mob">Relatórios</h2>
                    <p>Os relatórios das leads, de pipeline de vendas, de atividade e de vendas perdidas estarão disponíveis no CRM. Com a utilização e análise das informações, mais fácil será a compreensão de dados importantes da sua empresa.</p>
                    </div>
                </div>
            </div>


        </section> 

      </div>
      <Footer />
    </>
  );
}

export default crmParaConcessionarias;
