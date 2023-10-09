import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import MenuRecursos from "../../element/menu-recursos";
import HeaderRecursos from "../../element/header-recursos";
import Cta from "../../element/cta";
import Image from 'next/image';
import Head from "next/head";


function Oportunidades() {
  return (
    <>
     <Head>
    <title>Controle de Oportunidades e Negócios | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
      <HeaderRecursos />

        <section className="recursos">

            <div className="container">

              <div className="row">
                <MenuRecursos/>
              </div>

                  <div className="row align-items-center">
                      <div className="col-lg-5 col-md-12 center-mob">
                        <Image className="img-mob" src="/images/banner/recursos-oportunidades.png" alt="" width={460} height={460} />
                      </div>
                      <div className="col-md-7">
                        <h2 className="mb-3 center-mob">Gerencie suas oportunidades</h2>
                        <p>Em uma única tela, você encontra todos os dados necessários sobre as suas oportunidades, tudo muito simples e rápido! Como deve ser.  Dessa forma, você e toda a sua equipe estará munida de informações importantes para planejar e executar estratégias mais assertivas. Nas oportunidades você pode acessar os atendimentos e ainda enviar whatsapp, sms ,email ou ligar para seu cliente de modo centralizado, o que otimiza os processos e permite que você e a sua equipe conheçam melhor cada cliente.</p>
                      </div>
                  </div>
                  <div className="row align-items-center mb-5 flex-row-reverse">
                    <div className="col-lg-5 col-md-12 center-mob">
                      <Image className="img-mob" src="/images/banner/organize-oportunidades.png" alt="" width={460} height={460} />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                      <h2 className="mb-3 center-mob">Organize suas oportunidades</h2>
                      <p>Na tela de oportunidades você tem em mãos uma listagem completa de todas as suas oportunidades, a partir da qual é possível construir poderosos filtros e combiná-los de acordo com os objetivos traçados. Como exemplo: segmentar melhor suas leads para campanhas.</p>
                      <p>No menu você dispõe de uma visualização por grade, com um layout fácil de visualizar, o qual permite uma melhor organização e acompanhamento das oportunidades. Com alguns cliques e arrastando você pode mudar uma oportunidade de etapa no seu funil de vendas, inserir e atualizar aquela oportunidade.</p>
                    </div>
                  </div>
            </div>     

            <div className="content-inner-2 mt-3">
              <div className="container">
                <div className="row p-3 studio-bi rounded align-items-center m-mob">
                    <div className="col-md-3 p-relative icons-studio-bi">
                      <div className="bi p-absolute move-4">
                        <Image src="/images/icon/bi.png" alt="" width={460} height={460} />
                      </div>
                      <div className="studio p-absolute move-4">
                        <Image src="/images/icon/studio.png" alt="" width={460} height={460} />
                      </div>
                      <div className="importacao p-absolute">
                        <Image src="/images/icon/importacao.png" alt="" width={460} height={460} />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <p className="mb-0 fs-4">Exporte sua informações para o Google Data Studio e Microsoft BI e tenha gráficos e dashboards fantásticos</p>
                    </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6">
                  <h4 className="center-mob">Cadastro de oportunidades</h4>
                  <p>O Meets tem como filosofia facilitar a vida dos usuários, não é a toa que chamam ele do Iphone dos CRMS e, para isso, dispõe de recursos que facilitam a sua vida.
                    Cadastrando uma oportunidade você pode inserir dados de contato do cliente, tags, funis, compartilhar com outros membros da equipe, adicionar produtos, entre outras informações, que otimizam o seu trabalho e o da sua equipe.</p>
                  </div>
                  <div className="col-md-6">
                  <h4 className="center-mob">Oportunidades de forma otimizadas</h4>
                  <p>Acessando uma oportunidade você verifica todo o histórico de conversas de um cliente com a sua empresa, pode filtrar por atendimento, por atividade, pode consultar de modo rápido e simples o andamento de uma oportunidade entre as etapas do seu funil de vendas, entre outras ações que facilitam a sua vida.</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 pb-5"><Cta /></div>

            </div>

        </section> 

        
       
      </div>
      <Footer />
    </>
  );
}

export default Oportunidades;
