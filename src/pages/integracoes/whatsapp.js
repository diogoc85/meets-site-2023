import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Cta from "../../element/cta";

function Whatsapp() {
  return (
    <>
      <Header />
      <div className="page-content bg-cinza">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Meets + Whatsapp</h1>
              <h5>Transforme o WhatsApp com CRM em um canal poderoso para gerar vendas.</h5>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="solucoes">

            <div className="container pb-5">

              <div className="container">
                <div className="row align-items-center shadow pl-5 pr-5 mb-5 banner-inner rounded pos-top">
                  <div className="col-lg-7 col-sm-7" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h6 class="sub-title text-primary m-b15 center-mob">Comunicação</h6>
                    <h2 className="center-mob">Whatsapp</h2>
                    <p>Veja as conversas com clientes em potencial como um funil de vendas visual, acompanhe as relações comerciais de uma etapa para outra e acelere as comunicações com ferramentas de automação como os gatilhos inteligentes.</p>
                  </div>
                  <div className="col-lg-5 col-sm-5 p-relative" data-wow-duration="2s" data-wow-delay="0.1s">
                  <img className="p-absolute palmas move-4" src="/images/banner/palmas.png" alt="" />
                  <img className="p-absolute smile-01 move-4" src="/images/banner/smile-01.png" alt="" />
                  <img className="p-absolute smile-02 move-4" src="/images/banner/smile-02.png" alt="" />
                  <img className="p-absolute usuario-01 move-4" src="/images/banner/usuario-01.png" alt="" />
                  <img className="p-absolute usuario-02 move-4" src="/images/banner/usuario-02.png" alt="" />
                  <img className="p-absolute usuario-03 move-4" src="/images/banner/usuario-03.png" alt="" />
                  <img className="p-absolute usuario-04 move-4" src="/images/banner/usuario-04.png" alt="" />
                  <img className="p-absolute usuario-05 move-4" src="/images/banner/usuario-05.png" alt="" />
                  <img className="p-absolute usuario-06 move-4" src="/images/banner/usuario-06.png" alt="" />
                  <img className="brasao-whats" src="/images/banner/whatsapp.png" alt="" />
                  </div>  
                </div>
              </div>

                <div className="row align-items-center pt-mob">
                    <div className="col-lg-5 col-sm-5 text-center img-mob center-mob" data-wow-duration="2s" data-wow-delay="0.1s">
                    <img src="/images/banner/whats-oficial.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h6 class="sub-title text-primary m-b15 center-mob">Automação</h6>
                    <h2 className="center-mob">Parceiro oficial Whatsapp</h2>
                    <p>O Whatsapp em automação está liberado para poucas empresas no mundo. Somos parceiros oficiais para utilizar a API WhatsApp Business e criamos automações dentro do CRM Meets que te ajudam no seu dia a dia.</p>
                    <p>O WhatsApp promete revolucionar o mercado de compras e de serviços nos próximos anos, portanto, a empresa que possui uma integração oficial, tem maiores chances de se diferenciar no mercado.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse  pt-mob">
                    <div className="col-lg-5 col-sm-5 text-center img-mob center-mob" data-wow-duration="2s" data-wow-delay="0.1s">
                    <img src="/images/banner/personalizar-whatsapp.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h6 class="sub-title text-primary m-b15 center-mob">Modelos de Mensagens</h6>
                    <h2 className="center-mob">Personalize suas mensagens para vender no Whatsapp</h2>
                    <p>Quando se trata de vender, velocidade é tudo. Desse modo, aumente seu tempo de resposta com nossos modelos de mensagens personalizadas.</p>
                    <p>A melhor parte: você pode personalizar as mensagens com informações do perfil do lead (o nome, por exemplo), para que o atendimento se torne mais próximo e que nenhuma mensagem pareça robótica.</p>
                    </div>
                </div>

                <div className="row align-items-center pt-mob">
                    <div className="col-lg-5 col-sm-5 text-center img-mob center-mob" data-wow-duration="2s" data-wow-delay="0.1s">
                    <img src="/images/banner/inbox.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h6 class="sub-title text-primary m-b15 center-mob">App</h6>
                    <h2 className="center-mob">Comunique-se em um só app com Inbox unificado para WhatsApp</h2>
                    <p>O Meets CRM é um Hub de leads e de comunicação para todas as suas valiosas conversas comerciais.</p>
                    <p>Cada cliente em potencial obtém seu próprio perfil completo, onde você pode se comunicar com eles usando seus canais favoritos: telefone, SMS, e-mail, WhatsApp, Messenger, Instagram e Telegram.</p>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse pt-mob">
                    <div className="col-lg-5 col-sm-5 text-center img-mob center-mob" data-wow-duration="2s" data-wow-delay="0.1s">
                    <img src="/images/banner/envio-arquivos.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-7" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h6 class="sub-title text-primary m-b15 center-mob">Arquivos</h6>
                    <h2 className="center-mob">Envio de arquivos</h2>
                    <p>Assim como no app nativo do Whatsapp, pelo Meets você também pode enviar e receber arquivos de áudio, vídeo, PDF e imagens. Excelente para enviar suas propostas e catálogo de produtos em pdf.</p>
                    </div>
                </div>

                <div className="pt-5 pb-5"><Cta /></div>
              
            </div>

            <div className="text-center estatistica-whats pb-5">
                    
                    <div className="container">
                      <div className="">
                        <h6 class="sub-title m-b15">Estatística</h6>
                        <h4 className="">O WhatsApp tem mais de 2 bilhões de usuários ativos por mês em todo o mundo.</h4>
                        <h5 className="">E está classificado entre os aplicativos de mensagens móveis mais populares do mundo.</h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-sm-3 pt-4">
                          <img src="/images/icon/brasil.svg" alt="" />
                          <h2>120 Milhões</h2>
                          <p className="mb-0">de brasileiros utilizam o Whatsap.</p>
                        </div>
                        <div className="col-lg-3 col-sm-3 pt-4">
                          <img src="/images/icon/celular.svg" alt="" />
                          <h2>99%</h2>
                          <p className="mb-0">dos celulares brasileiros tem o Whatsap instalado.</p>
                        </div>
                        <div className="col-lg-3 col-sm-3 pt-4">
                          <img src="/images/icon/whats-diario.svg" alt="" />
                          <h2>98%</h2>
                          <p className="mb-0">dos brasileiros usam o Whatsapp diariamente.</p>
                        </div>
                        <div className="col-lg-3 col-sm-3 pt-4">
                          <img src="/images/icon/whats-business.svg" alt="" />
                          <h2>5 Milhões</h2>
                          <p className="mb-0">de usuários já utilizam o whatsapp business.</p>
                        </div>
                      </div>
                    </div>
                </div>

                

        </section> 


       
      </div>
      <Footer />
    </>
  );
}

export default Whatsapp;
