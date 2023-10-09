
import Image from 'next/image'
function BoxCentral() {
  return (
    // <!-- Slider -->
    <div className="banner">
      <div className="container">
        <div className="banner-inner box-central shadow rounded pos-top">
    
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner-content center-mob">
                <h3
                  className="sub-title pt-mob"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Omnichannel com CRM completo
                </h3>
                <h2
                  className="m-b20"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  Central de atendimento
                </h2>
               
                  <p>Atenda todos os seus clientes em uma única central, WhatsApp, Messenger, Instagram, JivoChat, Facebook entre outros.</p>
                  <p>Escolha a melhor opção, seja API oficial ou Whatsapp Business. Um único número, vários atendentes.</p>
                  <p>Monte sua URA de Whatsapp com um único número, ou vários números, chatbot, filiais, equipes, distribuição automática de leads, tudo integrado aos funis de oportunidades.</p>
                <a
                  href="/central"
                  className="wow fadeInUp btn btn-info shadow rounded-xl"
                  data-aos="fade-up" data-aos-duration="300"
                >
                  Saiba mais detalhes da central
                </a>
              </div>
            </div>
            <div className="col-lg-5 p-relative box-man">
              <div className="move-4 p-absolute lista-contatos">
              <Image  src="/images/banner/lista-contatos.png" width={349} height={489}  />
              </div>
              <div className="move-4 p-absolute robo">
              <Image src="/images/banner/robo.png" width={200} height={215}  />
              </div>
              <div className="move-4 p-absolute icons-msg">
                <Image src="/images/banner/icons-msg.png" width={216} height={164}  />
              </div>
              <div className="move-4 p-absolute nav-msg">
              <Image src="/images/banner/nav-msg.png" width={451} height={99}  />
              </div>
              <div className="p-absolute man-central">
              <Image src="/images/banner/man-central.png"  width={501} height={700} /> 
              </div>
            </div>
          </div>
        
        </div>
      </div>

    </div>
  );
}

export default BoxCentral;
