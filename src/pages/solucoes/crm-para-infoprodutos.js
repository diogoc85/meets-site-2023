import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Cta from "../../element/cta";
import Head from "next/head";


function crmParaInfoprodutos() {
  return (
    <>
     <Head>
    <title>CRM para Infoprodutos | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>CRM para Infoprodutos</h1>
              {/* <h5>Lorem ipsum dolor</h5> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="solucoes">

            <div className="container">

                <div className="row align-items-center pt-5 mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/controle.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Controle</h2>
                    <p>Você terá um maior controle na gestão dos seus infoprodutos, na recuperação de boletos e carrinhos abandonados  e na organização do histórico de seus leads .</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/trafego.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Tráfego</h2>
                    <p>O aumento do seu tráfego, diminuindo custos e otimizando resultados em seu site, é uma estratégia que a aplicação do Meets CRM trabalha na utilização do CRM no seu domínio para infoprodutos. </p>
                    </div>
                </div>
                <div className="row align-items-center mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/comunicacao.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Comunicação</h2>
                    <p>Aumentar a comunicação com os potenciais clientes, utilizando os canais necessários e essenciais, como o WhatsApp, é possibilitado com o Meets. Com a nossa central de atendimento e vendas, sua empresa conseguirá alavancar métricas do Customer Experience (CX) e Customer Success (CS), importantes para melhoria comunicacional.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/conversao.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Conversão de vendas</h2>
                    <p>Nas integrações disponibilizadas em nossa plataforma, a conversão de vendas, transações e suporte estão otimizadas para melhor atender a necessidade da sua empresa de infoprodutos.</p>
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

export default crmParaInfoprodutos;
