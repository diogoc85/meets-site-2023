import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import MenuRecursos from "../../element/menu-recursos";
import HeaderRecursos from "../../element/header-recursos";
import Cta from "../../element/cta";
import * as Unicons from '@iconscout/react-unicons';
import Image from 'next/image';

function Atividades() {
  return (
    <>
      <Header />
      <div className="page-content bg-cinza">
        <HeaderRecursos />

        <section className="atividades">

            <div className="container">

              <div className="row">
                <MenuRecursos/>
              </div>

                    <div className="row align-items-center center-mob mb-mob">
                      <div className="col-lg-5 col-md-12" data-wow-duration="2s" data-wow-delay="0.1s">
                      <Image className="img-mob mb-mob" src="/images/banner/crie-gerencie.png" alt="" width={460} height={460} />
                      </div>
                      <div className="row col-lg-7 col-sm-7">
                        <h4>Crie e gerencie as suas atividades</h4>
                          <p>Gerencie as suas atividades e lembretes para facilitar a sua atuação e a do seu time na execução de estratégias e práticas mais assertivas.</p>
                          <p>Crie lembretes e tarefas repetidas em poucos cliques e defina quem é o responsável pela tarefa.</p>
                          <p>Organizando as atividades, você e o seu time conseguem planejar e adotar ações mais estratégicas que geram melhores resultados.</p> 
                          <p>Além disso, você pode ser lembrado pelo Meets das atividades a partir do recebimento de notificação por e-mail.</p>
                      </div>
                    </div>
                    
                    <div className="row align-items-center pb-5 flex-row-reverse center-mob mb-mob">
                      <div className="col-lg-5 col-md-12" data-wow-duration="2s" data-wow-delay="0.1s">
                        <Image className="img-mob mb-mob" src="/images/banner/lembretes.png" alt="" width={460} height={460} />
                      </div>
                      <div className="row col-lg-7 col-sm-7">
                        <h4>Adicione lembretes as suas atividades</h4>
                          <p>No Meets você tem acesso a todas as atividades cadastradas, sejam elas relacionadas ou não à alguma oportunidade. Além disso, você pode configurar para receber lembretes dessas atividades cadastradas e, assim, não esquecer dos compromissos.</p>
                          <p>Na configuração de lembretes, você escolhe uma determinada atividade e marca a opção “Receber lembrete”, sendo possível, também, escolher horário de chegada do lembrete, uma descrição sobre, entre outras funcionalidades.</p>
                      </div>
                    </div>
                  
            </div>     

                    
            <section className="content-inner-2">

              <div className="container">
                <div className="row align-items-center mt-5 center-mob mb-mob">
                  <div className="col-lg-5 col-md-12" data-wow-duration="2s" data-wow-delay="0.1s">
                    <Image className="img-mob mb-mob" src="/images/banner/crie-atividades.png" alt="" width={460} height={460} />
                  </div>
                  <div className="col-lg-7 col-sm-7 list-atividades">
                    <ul>
                      <li><Unicons.UilCheck /> Crie atividades avulsas, sem necessitar de vínculo com alguma oportunidade, registrando-as em sua agenda;</li>
                      <li><Unicons.UilCheck /> Crie atividades direto na Timeline de Oportunidades;</li>
                      <li><Unicons.UilCheck /> Configure as atividades para cada etapa do Funil de Vendas;</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-5 pb-5"><Cta /></div>

              </section>

        </section> 

       
      </div>
      <Footer />
    </>
  );
}

export default Atividades;
