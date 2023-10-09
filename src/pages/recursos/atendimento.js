import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import MenuRecursos from "../../element/menu-recursos";
import HeaderRecursos from "../../element/header-recursos";
import Cta from "../../element/cta";
import Image from 'next/image';
import Head from "next/head";


function Atendimento() {
  return (
    <>
     <Head>
    <title>Atendimento | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
      <HeaderRecursos />

        <section className="atendimento">

            <div className="container">

              <div className="row">
                <MenuRecursos/>
              </div>

                <div className="row align-items-center center-mob">
                    <div className="col-lg-5 col-md-12">
                    <Image className="img-mob" src="/images/banner/controle-total.png" alt="" width={460} height={460} />
                    </div>
                    <div className="row col-lg-7 col-sm-7">
                      <h2 className="mb-3">Controle total no atendimento</h2>
                      <p>No mundo dos negócios, o atendimento ao público é peça-chave para o progresso de qualquer empresa. Diante disso, com o  Meets CRM você exerce maior controle sobre as suas negociações e, assim, sempre estará por dentro do que foi tratado pela última vez com os clientes.</p>
                      <p>Tenha maior controle sobre suas negociações e não se esqueça o que foi tratado com os seus clientes anteriormente.</p>
                    </div>
                </div>

              <div className="row align-items-center flex-row-reverse center-mob">
                <div className="col-lg-5 col-md-12">
                  <Image className="img-mob" src="/images/banner/atendimento-concentrado.png" alt="" width={460} height={460} />
                </div>
                <div className="row col-lg-7 col-sm-7">
                  <h2>Atendimentos concentrados em um só lugar</h2>
                  <p>Com o CRM Meets todos os atendimentos realizados por você ou por sua equipe de vendas ficam centralizados em um único só lugar. Desse modo, o histórico de conversas, com o dia, hora e o tipo de atendimento, fica registrado e acessível para você e o seu time fica sempre por dentro do que foi conversado anteriormente.</p>
                  <p>Centralizamos seus atendimentos para que você tenha um maior controle sobre suas oportunidades.</p>
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

export default Atendimento;
