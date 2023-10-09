import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Cta from "../../element/cta";
import Head from "next/head";


function crmParaImobiliaria() {
  return (
    <>
     <Head>
    <title>CRM para Imobiliárias | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>CRM para imobiliárias</h1>
              {/* <h5>Lorem ipsum dolor</h5> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="solucoes">

            <div className="container">

                <div className="row align-items-center pt-5 mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/automacoes.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Automações</h2>
                    <p>As automações presentes no Meets CRM facilitam o dia a dia das imobiliárias, principalmente, no que diz respeito a automação de envio de e-mails, de marketing e otimização no processo de vendas.   </p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/solucoes-omnichannel.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Omnichannel</h2>
                    <p>A estratégia Omnichannel disponível para integração no Meets, para uso simultâneo de diversos canais de comunicação, será vantajosa para sua imobiliária aprimorando a experiência do cliente e o processo de fidelização.</p>
                    </div>
                </div>
                <div className="row align-items-center mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/funil.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Funil de vendas</h2>
                    <p>O modelo estratégico de divisão do funil de vendas, utilizado do Meets CRM, ajudará sua empresa a selecionar as etapas de atração, conversão, relacionamento, vendas e pós-venda dos clientes.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse mb-mob center-mob pb-5">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/persona.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Persona</h2>
                    <p>Conheça sua persona, seus problemas/necessidades, os canais mais utilizados e quais devem ser seus objetivos para chegar da melhor maneira nelas. Com o Meets CRM, sua persona será facilmente definida e analisada, melhorando as estratégias para conquistá-la.</p>
                    </div>
                </div>
            </div>

        </section> 

        <div className="pt-5 pb-5"><Cta /></div>

      </div>
      <Footer />
    </>
  );
}

export default crmParaImobiliaria;
