import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import MenuRecursos from "../../element/menu-recursos";
import HeaderRecursos from "../../element/header-recursos";
import Cta from "../../element/cta";
import {Tabs, Tab} from 'react-bootstrap';
import Image from 'next/image';

function Comunicacao() {
  return (
    <>
      <Header />
      <div className="page-content bg-cinza">
      <HeaderRecursos />

        <section className="Comunicacao">

            <div className="container">

              <div className="row">
                <MenuRecursos/>
              </div>

                      <div className="row align-items-center mb-mob">
                        <div className="col-md-5 col-sm-5 center-mob">
                          <Image src="/images/banner/Omnichannel.png" className="img-mob" alt="" width={460} height={460} />
                        </div>
                        <div className="col-md-7">
                        <h3 className="mb-3 center-mob">Omnichannel</h3> 
                        <p className="center-mob">No Meets CRM você recebe os leads advindos de diversos canais na central de vendas e atendimento integrado com o CRM. Tudo em um único lugar. </p>
                        </div>
                      </div>

                      <div className="row align-items-center flex-row-reverse mb-mob">
                        <div className="col-md-5 col-sm-5 center-mob">
                          <Image src="/images/banner/sms.png" alt="" className="img-mob" width={460} height={460} />
                        </div>
                        <div className="col-md-7">
                        <h4 className="center-mob">Envie SMS e faça ligações diretamente do <br/>Meets CRM a partir da integração com parceiros</h4>
                        <p>Com o Meets CRM você pode enviar SMS e realizar ligações diretamente do sistema.
                        Para isso, é necessário integrar o Meets com parceiros de VOIP.</p>
                        <p>Através da API de telefonia, permite que empresas enviem SMS, torpedos de voz e realizem ligações diretamente dos seus sistemas.
                        Todo esse processo é automatizado, otimiza o tempo da organização e possui baixo custo.</p>
                        </div>
                      </div>

                      <div className="row align-items-center mb-5 mb-mob">
                        <div className="col-md-5 col-sm-5 center-mob">
                          <Image src="/images/banner/emails.png" alt="" className="img-mob" width={460} height={460} />
                        </div>
                        <div className="col-md-7">
                          <h4 className="center-mob">Mande e-mails diretamente do Meets CRM</h4>
                          <p>No Meets CRM, você pode enviar e-mails diretamente da sua oportunidade. Ao enviar e-mails, os remetentes serão os usuários que estão cadastrados no sistema, com o e-mail de login.“E-mail”. Simples e rápido!.Você ainda pode usar os templates.</p>
                        </div>
                      </div>

                      <div className="row p-3 mb-5 integ_whats rounded shadow align-items-center m-mob">
                        <div className="col-md-4 col-sm-4 center-mob">
                          <Image src="/images/banner/integ-whatsapp.png" alt="" className="img-mob" width={460} height={460} />
                        </div>
                        <div className="col-md-8">
                        <h4 className="center-mob">Integração Meets e WhatsApp</h4>
                        <p>Com o Meets CRM você pode transformar o WhatsApp em uma verdadeira máquina de vendas para a sua empresa. Concentre todos os atendimentos do aplicativo em um só lugar, totalmente integrado. </p>
                        <p className="mb-0">Veja os seus resultados aumentarem com um único número compartilhado para vários atendentes. Desse modo, tudo o que é tratado no seu negócio é registrado de modo centralizado para que você não perca nenhuma oportunidade de negócio. 
                        Com o nosso CRM você envia suas mensagens de forma organizada contando com um poderoso suporte.</p>
                        </div>
                      </div>

                      <div className="container mb-0 mb-mob">

                        <Tabs defaultActiveKey="jivochat" id="uncontrolled-tab-example" className="mb-5 col-md-12 justify-content-center">
                        {/* <Tab eventKey="LeadChat" title="LeadChat" >
                          <div className="row align-items-center">
                            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                              <Image src="/images/banner/banner-leadchat.png" alt="" width={360} height={360} />
                            </div>
                            <div className="col-md-8">
                            <p>Capte mais leads com este conjunto de ferramentas poderoso e fácil de usar. Além do Chatbot e LeadChat, você pode engajar seus leads inbound com os Formulários Web. LeadChat (um novo acelarador de leads) pode ser adquirido com qualquer plano do Meets. </p>
                            </div>
                          </div>
                          </Tab> */}
                          <Tab eventKey="Instagram" title="Instagram" className="align-items-center">
                          <div className="row align-items-center">
                            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                              <Image src="/images/banner/banner-instagram.png" alt="" className="img-mob" width={360} height={360} />
                            </div>
                            <div className="col-md-8">
                            <p>O Instagram é uma das redes sociais mais utilizadas em todo o mundo. Diante da sua multiplicidade de funções, destaca-se, hoje, como uma das melhores plataformas de mídia social para determinados nichos de mercado.</p>
                            <p>Em virtude do seu potencial, é de grande importância que a sua empresa, a depender do nicho de mercado, tenha uma boa performance na rede social.</p>
                            <p>O Meets CRM conta com o suporte da integração com o Instagram, na qual são geradas mais oportunidades de negócios a partir do Direct do aplicativo. </p>
                            </div>
                          </div>
                          </Tab>
                          <Tab eventKey="Messenger" title="Messenger" className="align-items-center">
                          <div className="row align-items-center">
                            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                              <Image src="/images/banner/banner-messenger.png" alt="" className="img-mob" width={360} height={360} />
                            </div>
                            <div className="col-md-8">
                            <p>Integre o Meets CRM ao Facebook Messenger e sincronize as mensagens que chegam no Facebook Messenger com a Central de Mensagens do Meets e atualize seu funil dentro do Meets.</p>
                            <p>Aumente o volume de recebimento de leads com o Messenger com respostas rápidas e personalizadas ou use nosso chatbot personalizado.</p>
                            </div>
                          </div>
                          </Tab>
                          <Tab eventKey="jivochat" title="JivoChat" className="align-items-center">
                          <div className="row align-items-center">
                            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                              <Image src="/images/banner/banner-jivo.png" alt="" width={360} height={360} />
                            </div>
                            <div className="col-md-8 col-sm-12 p-mob">
                              <p>Integrando o Meets CRM ao JivoChat ou a outros onde você recebe os leads gerados nesta plataforma no Meets, os quais são armazenados como oportunidades. Tenha todo o volume de leads e histórico de conversas no painel do nosso CRM.</p>
                              <p>Além dessas canais de comunicação, o Meets conta também com o suporte de várias outras integrações que facilitam a comunicação no seu negócio, como chats diversos, a exemplo do Tawk.to, e de alternativas de voz, como o Vtcall, Zenvia e Phonetrack.</p>
                              <p>Tenha todos os seus contatos e conversas registrados no nosso CRM e otimize a comunicação da sua empresa.</p>
                            </div>
                          </div>
                          </Tab>
                        </Tabs>

                    </div>
                   
                  
            </div>     

        </section> 

        <div className="pt-5 pb-5"><Cta /></div>
       
      </div>
      <Footer />
    </>
  );
}

export default Comunicacao;
