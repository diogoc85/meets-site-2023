import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import MenuRecursos from "../../element/menu-recursos";
import HeaderRecursos from "../../element/header-recursos";
import Cta from "../../element/cta";
import Image from 'next/image';

function Relatorios() {
  return (
    <>
      <Header />
      <div className="page-content bg-cinza">
      <HeaderRecursos />

        <section className="relatorios">

            <div className="container">

              <div className="row">
                <MenuRecursos/>
              </div>

                <div className="row align-items-center center-mob mb-mob mob-center">
                    <div className="col-lg-5 col-md-12" data-wow-duration="2s" data-wow-delay="0.1s">
                    <Image className="img-mob mb-mob" src="/images/banner/graficos.png" alt="" width={460} height={460} />
                    </div>
                    <div className="row col-lg-7 col-md-12">
                      <h2>Gráficos</h2>
                      <p>Com o Meets CRM, tenha acesso à gráficos sobre a performance do seu negócio e exporte todas as informações, caso achar necessário. Acompanhe sempre o desempenho da sua empresa.</p>
                      <p>No Meets CRM, você pode visualizar gráficos de metas, sobre clientes e oportunidades e, desse modo, ficar por dentro da performance da sua empresa. Diante disso, você tem em mãos informações valiosas para tomar decisões mais estratégicas no seu negócio.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse center-mob">
                    <div className="col-lg-5 col-md-12" data-wow-duration="2s" data-wow-delay="0.1s">
                    <Image className="img-mob mb-mob" src="/images/banner/desempenho.png" alt="" width={460} height={460} />
                    </div>
                    <div className="row col-lg-7 col-md-12">
                      <h2>Dados de desempenho</h2> 
                      <p>Confira de modo rápido e prático como está o desempenho da sua empresa e da sua equipe nas oportunidades, no atendimento e nas atividades.</p>
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

export default Relatorios;
