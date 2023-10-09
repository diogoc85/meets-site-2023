import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Cta from "../../element/cta";
import Head from "next/head";


function crmParaFranquias() {
  return (
    <>
     <Head>
    <title>CRM para Franquias | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>CRM para Franquias</h1>
              {/* <h5>Lorem ipsum dolor</h5> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="solucoes">

            <div className="container">

                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6">
                    <img src="/images/losango.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2>Relacionamento</h2>
                    <p>Integrando um CRM completo junto com uma central de atendimento estruturada, sua franquia conseguirá atrair diversas leads, qualificá-las e analisá-las, além, é claro, de oferecer o melhor relacionamento com o cliente, utilizando-se da rapidez e personalização.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6 col-sm-6">
                    <img src="/images/losango.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2>Organização</h2>
                    <p>Com o Meets CRM, sua franquia estará mais organizada. O estoque de produtos e preços, além do registro de atividades importantes e entrada de oportunidades estará disponível na integração do Meets CRM com sua franquia.</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6">
                    <img src="/images/losango.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2>Gestão de marketing</h2>
                    <p>A gestão de marketing da sua franquia estará descomplicada. Com o Meets CRM, a automação de marketing e a análise do seu ROAS sobre campanhas promovidas, estará facilitada.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6 col-sm-6">
                    <img src="/images/losango.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2>Leads</h2>
                    <p>Estude suas leads, qualifique-as e entenda sua jornada de integração. No Meets, a facilidade para lidar com as leads e entender suas necessidades/problemas é descomplicado desde o topo do funil.</p>
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
