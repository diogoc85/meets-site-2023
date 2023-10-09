import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import MenuRecursos from "../../element/menu-recursos";
import HeaderRecursos from "../../element/header-recursos";
import Cta from "../../element/cta";
import Image from 'next/image';
import Head from "next/head";

function FunilDeVendas() {
  return (
    <>
     <Head>
    <title>Funil de Vendas | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
      <HeaderRecursos />

        <section className="atendimento">

            <div className="container">

              <div className="row">
                <MenuRecursos/>
              </div>

                <div className="row align-items-center center-mob mb-mob">
                    <div className="col-lg-5 col-md-12">
                    <Image className="img-mob mb-mob" src="/images/banner/produtividade.png" alt="" width={460} height={460} />
                    </div>
                    <div className="row col-lg-7 col-md-12">
                      <h2>Aumente a produtividade do seu time e alavanque os resultados do seu negócio com o suporte dos funis de vendas e atendimento.</h2>
                      <p>Crie e organize os funis de forma padrão para você e a sua equipe tomar as melhores decisões e visualizar os pontos de gargalo de seu processo comercial. Você pode criar diversos funis sem preocupação e integra-los.</p>
                      <p>O funil de vendas é um recursos que evidencia toda a jornada de um cliente com a sua empresa, desde o primeiro contato estabelecido, quando ele demonstrou interesse pela sua marca, até o fechamento de algum negócio.
                      O funil é composto por uma série de etapas que, em conjunto, dão suporte à jornada de compras dos perfis de clientes de um negócio.</p>
                    </div>    
                </div>

                <div className="row align-items-center flex-row-reverse center-mob mb-mob">
                    <div className="col-lg-5 col-md-12">
                    <Image className="img-mob mb-mob" src="/images/banner/estreitar.png" alt="" width={460} height={460} />
                    </div>
                    <div className="row col-lg-7 col-md-12">
                      <h2>Estreite a relação entre as equipes da sua empresa</h2>
                      <p>O funil ajuda, também, a estreitar a relação entre os times de marketing e vendas da sua empresa, na medida em que eles dependem diretamente de informações um do outro para estruturar melhor a jornada do cliente e saber o momento certo para fechar as oportunidades. </p>
                    </div>
                </div>

                <div className="row align-items-center center-mob mb-mob">
                    <div className="col-lg-5 col-md-12">
                    <Image className="img-mob mb-mob" src="/images/banner/performance.png" alt="" width={460} height={460} />
                    </div>
                    <div className="col-lg-7 col-md-12">
                      <h2>Melhore a performance da sua empresa com os funis</h2>
                      <p>Crie os seus funis de vendas no Meets cadastrando todas as etapas que você e a sua equipe comercial vão seguir, definindo os passos até chegar na venda final.</p>
                      <p>Além disso, no Meets você também pode criar múltiplos funis de atendimento para organizar melhor seu fluxo de vendas e atendimento. Ou mesmo usar alguns modelos que já temos disponível.</p>
                      <p>Você pode visualizar as suas oportunidades em grade e ficar por dentro de todas elas. Visualizando cada uma, você pode mudar uma oportunidade de etapa no seu funil de vendas, tudo muito rápido e com total praticidade de uma ação arraste e solte.</p>
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

export default FunilDeVendas;
