import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Cta from "../../element/cta";
import Head from "next/head";


function crmParaClinicas() {
  return (
    <>
     <Head>
    <title>CRM para Clínicas | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>CRM para clinícas</h1>
              {/* <h5>Lorem ipsum dolor</h5> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="solucoes">

            <div className="container">

                <div className="row align-items-center mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/agenda.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Agenda</h2>
                    <p>Com a integração do Meets com o Google Agenda, será ainda mais fácil entender o horário e data dos clientes/pacientes, dos procedimentos que serão realizados na sua clínica, para obtenção de um controle maior das ações pré-estabelecidas.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/cadastro.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Cadastro</h2>
                    <p>No Meets, cadastrar uma oportunidade e entender melhor suas necessidades, é uma ação extremamente importante para compreender o funcionamento da clínica e a jornada do cliente/paciente no funil de vendas.</p>
                    </div>
                </div>
                <div className="row align-items-center mb-mob center-mob">
                    <div className="col-lg-5 col-sm-5">
                    <img src="/images/banner/nicho.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7">
                    <h2 className="pt-mob">Nicho</h2>
                    <p>Na definição de nicho do CRM para clínicas, o aumento no foco da equipe e desempenho será expressivamente atendido, valorizando o tempo hábil do colaborador para dedicação em outras atividades.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse mb-mob center-mob pb-5">
                    <div className="col-lg-6 col-sm-6">
                    <img src="/images/banner/fidelizacao.png" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                    <h2 className="pt-mob">Fidelização</h2>
                    <p>Com a aplicação do Meets, o aumento na fidelização de clientes estará destacado na sua clínica. O CRM irá melhorar seu relacionamento com os clientes/pacientes, segmentá-los e desenvolver melhor o processo de cada um de acordo com suas necessidades.</p>
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

export default crmParaClinicas;
