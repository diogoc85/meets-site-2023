import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Cta from "../element/cta";
import Image from 'next/image';
import Head from "next/head";


function Solucoes() {
  return (
    <>
    <Head>
    <title>Soluções | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Soluções</h1>
              <h5>O Meets oferece as melhores soluções alinhadas a tecnologia,<br/> estratégias e desenvolvimento para diversos nichos</h5>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        <section className="solucoes mb-5">

            <div className="container">
                <div className="row align-items-center mt-4">
                    <div className="col-lg-5 col-sm-5 p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/white-label.png" alt="" width={434} height={491} data-aos="fade-up" data-aos-duration="800" />
                    <div className="icon-dir p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                      <Image src="/images/icon/icon-whitelabel.svg" alt="" width={130} height={150}  />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM White Label</h2>
                      <p>Aplicando o White Label na sua empresa, com a ajuda do Meets Pro, será possível ofertar o produto de desenvolvimento, visando o planejamento do conteúdo disponibilizado pela sua marca.</p>
                      <p>Desta forma, seu empreendimento conseguirá obter uma personalização completa, um funil de conversão, a aplicação de um serviço prestado por uma equipe profissional, a automação das leads e uma precisão de informações.</p>
                      {/* <a href="/solucoes/white-label" className=" btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a> */}
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-5 col-sm-5  p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/solar.png" alt="" width={434} height={560} data-aos="fade-up" data-aos-duration="800" />
                    <div className="icon-esq p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-energia-solar.svg" alt="" width={130} height={130}  />
                    </div>
                    
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para Energia solar</h2>
                      <p>Para melhorar a gestão da sua empresa de energia solar, o Meets oferece condições para gerenciamento de propostas, administração da sua equipe de engenharia, integração com o marketing e acompanhamento do funil de vendas.</p>
                      {/* <a href="/solucoes/energia-solar" className=" btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a> */}
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 col-sm-5 p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/corretores.png" alt="" width={434} height={561} data-aos="fade-up" data-aos-duration="1000" />
                    <div className="icon-dir p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-seguradora.svg" alt="" width={130} height={130}  />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para Seguradoras</h2>
                      <p>No gerenciamento de processos de vendas ou manutenção da carteira, o CRM se torna imprescindível para uma empresa de seguros. O Meets, o CRM mais simples de usar e completo do mercado, concentra e gerencia todas as informações em um único software, além de aumentar sua taxa de conversão e disponibilizar relatórios gerenciais. </p>
                      {/* <a href="/solucoes/crm-para-agencias" className=" btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a> */}
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-5 col-sm-5 p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/cobranca.png" alt="" width={434} height={491} data-aos="fade-up" data-aos-duration="1000" />
                    <div className="icon-esq p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-cobranca.svg" alt="" width={130} height={130} />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para Empresas de Cobrança</h2>
                      <p>Na gestão de pagamentos, enriquecimento de dados dos clientes e geração de boletos através de integrações, o Meets é o CRM adequado para sua empresa de cobrança.</p>
                      <p>A melhoria na comunicação, a segurança oferecida, o aumento da produtividade e a satisfação do cliente são pontos importantes que o CRM atinge em sua aplicação direta.</p>
                      {/* <a href="/solucoes/crm-para-agencias" className=" btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a> */}
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 col-sm-5 p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/agronegocio.png" alt="" width={434} height={544} data-aos="fade-up" data-aos-duration="1000" />
                    <div className="icon-dir p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-agronegocio.svg" alt="" width={130} height={130} />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para o Agronegócio</h2>
                      <p>Um CRM voltado para o agronegócio, como o Meets, estará disponível para um acompanhamento maior baseado em históricos e segmentação de possíveis clientes, separando por localização, produtos e propriedades.</p>
                      <p> As visitas que poderão ocorrer aos produtores rurais e as metas de vendas, devem estar conectadas ao CRM.</p>
                      {/* <a href="/solucoes/crm-para-agencias" className=" btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a> */}
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-5 col-sm-5  p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/educacao.png" alt="" width={434} height={519} data-aos="fade-up" data-aos-duration="800" />
                    <div className="icon-esq p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-educacao.svg" alt="" width={130} height={130}  />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para Educação</h2>
                      <h5>(escolas/faculdades/cursos técnicos)</h5>
                      <p>Para Universidades,escolas,faculdades,cursos técnicos e cursos online: Para desenvolvimento da relação entre a entidade e o cliente em potencial, o CRM é um grande aliado.</p>
                      <p>Com o Meets, haverá a possibilidade de gerir sua leads em potencial vindo de diversas fontes de tráfego, identificar novas oportunidades, comandar processos seletivos, indicar turma/curso de interesse, registrar todas as atividades, realizar matrícula através da plataforma e mapear propensões dos pais e estudantes. A facilidade de comunicação e o controle sobre a evasão preditiva também será alcançado com o CRM.</p>
                      {/* <a href="/solucoes/educacao" className=" btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a> */}
                    </div>
                </div>
                
                <div className="row align-items-center">
                    <div className="col-lg-5 col-sm-5 p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/concessionarias.png" alt="" width={434} height={491} data-aos="fade-up" data-aos-duration="1000" />
                    <div className="icon-dir p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-concerssionarias.svg" alt="" width={130} height={130}  />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para Concessionárias</h2>
                      <p>O aumento da prospecção e follow-up, além da importância de um banco de dados, estará disponível no Meets para atribuição em concessionárias. O controle de atividades dos vendedores para potencializar o time, o acompanhamento do relacionamento com o cliente e a gestão completa das leads  será acessível no uso do nosso software.</p>
                      <p>Atendemos diversos segmentos como empresas de seguros, contabilidade, cobrança, educação, energia solar, indústrias, serviços, comércio, telecomunicações, concessionárias, clínicas e agências de publicidade e muito mais.</p>
                      {/* <a href="/solucoes/crm-para-concessionarias" className="btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a> */}
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-5 col-sm-5 p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/agencias.png" alt="" width={434} height={546} data-aos="fade-up" data-aos-duration="1000" />
                    <div className="icon-esq p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-agencias.svg" alt="" width={130} height={130} />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para Agências</h2>
                      <p>O CRM feito para agências ajuda a conectar seus clientes e sua agência de marketing com fontes de geração das leads, auxiliando suas estratégias digitais e otimizando suas campanhas.</p>
                      <p>O Meets também aumenta o destaque da sua marca em um mercado extremamente concorrido, aumenta sua produtividade, acompanha o engajamento das leads de seus clientes, além de conseguir reter os clientes atuais e organizar seu planejamento, avaliando o ROI e ROAS de suas campanhas.</p>
                      <a href="/solucoes/crm-para-agencias" className="btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 col-sm-5 p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/pme.png" alt="" width={434} height={491} data-aos="fade-up" data-aos-duration="1200" />
                    <div className="icon-dir p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-pme.svg" alt="" width={130} height={130} />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para PME</h2>
                      <p>O CRM na sua PME (Pequena e Média Empresa) auxilia no crescimento e busca alavancar novos negócios. Com o Meets, a gestão de relacionamento com o cliente será otimizada e o atendimento estará mais integrado a diversos canais, ajudando a aumentar a métrica de Customer Experience (CX) e visando construir relações mais duradouras.</p>
                      <p>O software será responsável por abastecer seu funil de vendas, oferecendo gatilhos inteligentes e expandindo a produtividade da sua equipe de vendas.</p>
                      <a href="/solucoes/crm-para-pme" className="btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-5 col-sm-5 p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/clinicas.png" alt="" width={434} height={491} data-aos="fade-up" data-aos-duration="1400" />
                    <div className="icon-esq p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-clinicas.svg" alt="" width={130} height={130} />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para Clínicas</h2>
                      <p>O Clinic é um spinoff do Meets, estará diretamente focado no CRM especializado para clínicas odontológicas, médicas e de estética. Com a plataforma será possível deixar de lado processos manuais e confusos, adotando prontuários eletrônicos.</p>
                      <p> Ademais, será capaz de centralizar os dados e mantê-los em segurança, acompanhar os clientes individualmente, aumentar o ticket médio, integrar com a agenda de avaliação e avançar nos processos relacionados ao setor de marketing da clínica. No CRM, as informações se encontram de forma mais prática e auxiliam o time a entender melhor o cliente/paciente e sua necessidade.</p>
                      <p>Há uma gestão de leads bem detalhada e a produção de relatórios específicos, ajudando seus colaboradores a compreender os procedimentos realizados e trabalhar de maneira mais eficiente.</p>
                      <a href="/solucoes/crm-para-clinicas" className="btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a>
                    </div>
                </div>
                <div className="row align-items-center pb-4">
                    <div className="col-lg-5 col-sm-5 p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/seguradora.png" data-aos="fade-up" data-aos-duration="1600" alt="" width={434} height={491} />
                    <div className="icon-dir p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-corretores.svg" alt="" width={130} height={130} />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para imobiliárias</h2>
                      <p>Para auxiliar os corretores de imóveis, o CRM irá melhorar seu relacionamento com os prospects, otimizando negociações e estratégias de vendas. Outrossim, será possível automatizar processos, aumentar a produtividade, melhorar o relacionamento com o cliente e obter destaque no mercado imobiliário.</p>
                      <p>O CRM poderá ser acessado através de dispositivos móveis, por meio de aplicativos. O Meets é o melhor CRM para imobiliárias e seus clientes!</p>
                      <a href="/solucoes/crm-para-imobiliarias" className="btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a>
                    </div>
                </div>
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-5 col-sm-5 p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/infoprodutos.png" alt="" width={434} height={575} data-aos="fade-up" data-aos-duration="1400" />
                    <div className="icon-esq p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-infoprodutos.svg" alt="" width={130} height={130} />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para Infoprodutos</h2>
                      <p>A maneira mais inteligente para vender infoprodutos todos os dias pela internet, é utilizando o Meets CRM. Com um CRM especializado, o “ponto de ativação com seu cliente” é criado e problemas de “Como fazer isso do jeito certo?” serão sanados. O Meets fará isso por você e auxiliará a aumentar as conversões de seus infoprodutos.</p>
                      <p>Com integrações disponibilizadas em nosso software, aliadas a Hotmart, Eduzz e Pagseguro, será possível resgatar boletos, observar pagamentos e compras realizadas, além, é claro, de aumentar a integração com o cliente e acompanhar seu histórico dentro do funil de vendas.</p>
                      <a href="/solucoes/crm-para-infoprodutos" className="btn btn-info shadow btn-round center-mob" data-wow-delay="2s">Saiba mais</a>
                    </div>
                </div>
                <div className="row align-items-center mb-5">
                    <div className="col-lg-5 col-sm-5 p-relative center-mob sol-mob">
                    <Image src="/images/solucoes/franquias.png" alt="" width={434} height={565} data-aos="fade-up" data-aos-duration="1400" />
                    <div className="icon-dir p-absolute move-4" data-aos="fade-up" data-aos-duration="700">
                    <Image src="/images/icon/icon-franquia.svg" alt="" width={130} height={130} />
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 center-mob">
                      <h2>CRM para Franquias</h2>
                      <p>O Meets CRM é uma ótima opção para integrar a sua franquia. Com o CRM acessível, sua franquia conseguirá ter landing pages eficientes, possuir relatórios completos e atualizados, além de compreender o seu tráfego, definir sua persona e aplicar um funil de vendas.</p>
                      <p>Ainda você como master franqueado terá a gestão de suas franquias de forma centralizada ou descentralizada conforme desejar. Controle resultados, receba leads e distribua de forma organizada para sua base de franqueados. Tudo isso organizado e tenha a melhor central de atendimento integrada a um CRM.</p>
                      {/* <a href="/solucoes/crm-para-franquias" className="btn btn-info shadow btn-round" data-wow-delay="2s">Saiba mais</a> */}
                    </div>
                </div>
            </div>

        <Cta />
        
        </section> 
       
      </div>
      <Footer />
    </>
  );
}

export default Solucoes;
