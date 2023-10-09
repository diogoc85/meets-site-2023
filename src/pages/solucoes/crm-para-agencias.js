import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Cta from "../../element/cta";
import Head from "next/head";


function crmParaFranquias() {
  return (
    <>
    
     <Head>
    <title>CRM para Agências | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>CRM para agências</h1>
              {/* <h5>Lorem ipsum dolor</h5> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="solucoes">

            <div className="container">

                <div className="row align-items-center pt-5 mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/integracoes.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Integrações</h2>
                    <p>Com o Meets, as integrações estarão disponíveis para facilitar pagamentos, cadastro de oportunidades e auxiliar suas estratégias de marketing digital.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/dashboard.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Dashboard</h2>
                    <p>Entenda mais sobre indicadores e métricas importantes para sua agência. Com a aplicação do Meets CRM, haverá recursos que auxiliam na tomada de decisões e análise de desempenho, todos analisados em tempo real e com segurança. </p>
                    </div>
                </div>
                <div className="row align-items-center  mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/proposta.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Propostas</h2>
                    <p>Não perca tempo construindo novas propostas, com o CRM, será possível gerar orçamentos personalizados e automáticos, facilitando o controle das propostas da sua agência e agilizando o processo de venda.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse  mb-mob center-mob pb-5">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/roi-roas.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">ROI e ROAS</h2>
                    <p>Saiba mais sobre o seu ROI (Retorno sobre Investimento) e sobre o ROAS (Retorno do Investimento em Publicidade) da sua agência, métricas utilizadas para entender melhor sobre seus canais de marketing e anúncios.</p>
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

export default crmParaFranquias;
