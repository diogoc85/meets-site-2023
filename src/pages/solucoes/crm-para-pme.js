import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Cta from "../../element/cta";
import Head from "next/head";


function crmParaPme() {
  return (
    <>
     <Head>
    <title>CRM para Pequenas e Médias Empresas | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>CRM para pequena e média empresa</h1>
              {/* <h5>Lorem ipsum dolor</h5> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="solucoes">

            <div className="container">

                <div className="row align-items-center pt-5 mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/historicos.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Históricos</h2>
                    <p> Com a utilização de históricos, disponíveis no Meets CRM, sua empresa conseguirá ter acesso detalhado das atividades realizadas, como alterações, entrada de novas leads ou envio de e-mails em determinado horário e data.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/gatilhos.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Gatilhos inteligentes</h2>
                    <p>Com a integração de gatilhos inteligentes, disponível no Meets, será possível o envio das leads que entram em critério definido pelo usuário e disparadas em fluxo.</p>
                    </div>
                </div>
                <div className="row align-items-center mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/cs.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Customer Success (CS)</h2>
                    <p>Com a métrica de Sucesso do Cliente, sua empresa oferecerá novas experiências de compra, entendendo as necessidades do cliente e solucionando problemas. Com o CRM, haverá uma diminuição na sua Taxa de Churn, um maior percentual de clientes satisfeitos e uma melhor experiência do pós-venda.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse  mb-mob center-mob pb-5">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/cx.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Customer Experience (CX)</h2>
                    <p>A Experiência do Cliente é tratada como métrica essencial para acompanhar a Jornada do Cliente, oferecendo sempre a melhor forma de atender e solucionar problemas. Com o Meets, sua CX irá alavancar e engajar clientes, possibilitando a melhora no atendimento e o recebimento do feedback.</p>
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

export default crmParaPme;
