import Link from "next/link";
import Tabs from 'react-bootstrap/Tabs';
import Cta from "../element/cta";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Head from "next/head";
import Image from 'next/image';

function Integracoes() {

  return (
    <>
    <Head>
    <title>Integrações | Meets CRM</title>
    </Head>

      <Header />
      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Integrações</h1>
              <h5>Turbine seu CRM com as melhores ferramentas do mercado</h5>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="integracoes">

              <div className="container">
                <div className="row align-items-center shadow banner-inner rounded pos-top m-0 m-mob">
                  <div className="col-lg-7 col-sm-7 pl-5 fadeInUp">
                    <h2 className="mb-3 center-mob">Dê super poderes ao seu CRM</h2>
                    <p className="mb-0">As diversas integrações nativas do CRM permitem que você utilize o Meets como um Hub de leads . Você centraliza suas leads vindas de todas as fontes de tráfego e distribui elas para sua equipe de vendas, atendimento ou administrativa. 
                    Conecte diretamente com várias canais de anúncios, ferramentas, landing pages. Você ainda tem a opção de usar nossa API ou integração com parceiros.</p>
                  </div>
                  <div className="col-lg-5 col-sm-5 box-homem p-relative">
                    <div className="p-absolute homem">
                      <Image src="/images/banner/homem-integracoes.png" alt="" width={500} height={446} />
                    </div>
                  </div>  
                </div>
              </div>

              <div className="container aplicativo">
                
                <div className="text-center pb-3">
                  <h3>Comunicação (Chat)</h3>
                </div>

                <div className="row align-items-center justify-content-center pb-5">
                      
                  <div className=" " data-aos="fade-up" data-aos-duration="300">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-whatsapp.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Whatsapp</h5>
                        <a href="/integracoes/whatsapp" className=" btn btn-info shadow rounded-xl" >Saiba mais</a>
                      </div>
                    </div>
                  </div>  
                  <div className=" " data-aos="fade-up" data-aos-duration="500">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-instagram.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Instagram</h5>
                        {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        <p className="btn btn-secondary">Integrado</p>
                      </div>
                    </div>
                  </div>  
                  <div className="" data-aos="fade-up" data-aos-duration="700">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-telegram.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Telegram</h5>
                        <p className="btn btn-breve">Em breve</p>
                        {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                      </div>
                    </div>
                  </div>  
                  <div className="" data-aos="fade-up" data-aos-duration="900">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-messenger.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Messenger</h5>
                        <p className="btn btn-secondary">Integrado</p>
                        {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                      </div>
                    </div>
                  </div> 
                  <div className="" data-aos="fade-up" data-aos-duration="1100">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-jivochat.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Jivochat</h5>
                        <p className="btn btn-secondary">Integrado</p>
                        {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                      </div>
                    </div>
                  </div> 
                  <div className="" data-aos="fade-up" data-aos-duration="1100">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-manychat.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Manychat</h5>
                        <p className="btn btn-secondary">Integrado</p>
                        {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                      </div>
                    </div>
                  </div>  
                  {/* <div className="" data-aos="fade-up" data-aos-duration="1300">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-tawkto.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Tawk.to</h5>
                        <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link>
                      </div>
                    </div>
                  </div>   */}
               
                </div>
              </div>

              <div className="container aplicativo">
                
                <div className="text-center pb-3">
                  <h3>Comunicação (Voz)</h3>
                </div>

                <div className="row align-items-center justify-content-center pb-5">
                      
                  <div className="" data-aos="fade-up" data-aos-duration="300">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-vtcall.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Vtcall</h5>
                        <p className="btn btn-secondary">Integrado</p>
                        {/* <Link href=""><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                      </div>
                    </div>
                  </div>  
                  <div className="" data-aos="fade-up" data-aos-duration="500">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-zenvia.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Zenvia</h5>
                        <p className="btn btn-breve">Em breve</p>
                        {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                      </div>
                    </div>
                  </div>  
                  <div className="" data-aos="fade-up" data-aos-duration="700">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-totalvoice.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Phonetrack</h5>
                        <p className="btn btn-secondary">Integrado</p>
                        {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                      </div>
                    </div>
                  </div>  
                  <div className="" data-aos="fade-up" data-aos-duration="900">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-paco.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Falepaco</h5>
                        <p className="btn btn-breve">Em breve</p>
                        {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="" data-aos="fade-up" data-aos-duration="900">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-b2.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">B2 Comunicação</h5>
                        <p className="btn btn-secondary">Integrado</p>
                        {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                      </div>
                    </div>
                  </div>  
                  {/* <div className="" data-aos="fade-up" data-aos-duration="1100">
                    <div className="shadow rounded m-3 p-4 text-center">
                      <div className=""> 
                          <img className="icon-int" src="images/icon/icon-twilio.png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="dlab-title m-b15">Twilio</h5>
                        <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link>
                      </div>
                    </div>
                  </div>   */}
               
                </div>
              </div>


              <div className="container aplicativo">
                
                <div className="text-center pb-3">
                  <h3>Auto responders(e-mails)</h3>
                </div>

                  <div className="row align-items-center justify-content-center pb-5">
                      
                    <div className="" data-aos="fade-up" data-aos-duration="300">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-rd.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Rd Station</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="500">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-mailchimp.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Mailchimp</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="700">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-lead-lovers.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Lead Lovers</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="900">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-active-campaign.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Active Campaign</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div> 
                    <div className="" data-aos="fade-up" data-aos-duration="1100">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-lahar.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Lahar</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="1300">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-egoi.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Egoi</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="1100">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-nitronews.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Nitronews</h5>
                          <p className="btn btn-breve">Em breve</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
               
                </div>
              </div>

              <div className="container aplicativo">
                
                <div className="text-center pb-3">
                  <h3>Meios de pagamento</h3>
                </div>

                  <div className="row align-items-center justify-content-center pb-5">
                      
                    
                    <div className="" data-aos="fade-up" data-aos-duration="300">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-pag-seguro.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">PagSeguro</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="500">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-pagarme.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Pagar.me</h5>
                          <p className="btn btn-breve">Em breve</p>
                          {/* <Link href=""><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="700">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-hotmart.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Hotmart</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href=""><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="900">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-monetizze.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Monetizze</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href=""><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div> 
                    <div className="" data-aos="fade-up" data-aos-duration="1100">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-eduzz.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Eduzz</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
               
                </div>
              </div>

              <div className="container aplicativo">
                
                <div className="text-center pb-3">
                  <h3>E-commerce / ERP</h3>
                </div>

                  <div className="row align-items-center justify-content-center pb-5">
                      
                    <div className="" data-aos="fade-up" data-aos-duration="300">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-shopfy.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Shopfy</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="500">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-conta-azul.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Conta Azul</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="700">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-bling.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Bling</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div> 
                    <div className="" data-aos="fade-up" data-aos-duration="900">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-olx.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Olx</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-sm btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  

                </div>
              </div>

              <div className="container aplicativo">
                
                <div className="text-center pb-3">
                  <h3>Apps</h3>
                </div>

                  <div className="row align-items-center justify-content-center pb-5">
                      
                    <div className="" data-aos="fade-up" data-aos-duration="300">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-google-calendario.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Google Calendário</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="500">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-google-contatos.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Google contatos</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="700">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-pluga.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Pluga</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div> 
                    <div className="" data-aos="fade-up" data-aos-duration="900">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-google-sheets.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Google Sheets</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-sm btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="1100">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-google-drive.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">Google Drive</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-sm btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  
                    <div className="" data-aos="fade-up" data-aos-duration="1100">
                      <div className="shadow rounded m-3 p-4 text-center">
                        <div className=""> 
                            <img className="icon-int" src="images/icon/icon-one-drive.png" alt="" />
                        </div>
                        <div className="">
                          <h5 className="dlab-title m-b15">One Drive</h5>
                          <p className="btn btn-secondary">Integrado</p>
                          {/* <Link href="" ><a className=" btn btn-sm btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                        </div>
                      </div>
                    </div>  

                  </div>
              </div> 

              <div className="container aplicativo">
                
                <div className="text-center pb-3">
                  <h3>Formulários</h3>
                </div>

                  <div className="row align-items-center justify-content-center pb-5">
                      
                      <div className="" data-aos="fade-up" data-aos-duration="300">
                        <div className="shadow rounded m-3 p-4 text-center">
                          <div className=""> 
                              <img className="icon-int" src="images/icon/icon-google-forms.png" alt="" />
                          </div>
                          <div className="">
                            <h5 className="dlab-title m-b15">Google Forms</h5>
                            <p className="btn btn-secondary">Integrado</p>
                            {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                          </div>
                        </div>
                      </div>  
                      <div className="" data-aos="fade-up" data-aos-duration="500">
                        <div className="shadow rounded m-3 p-4 text-center">
                          <div className=""> 
                              <img className="icon-int" src="images/icon/icon-form-html.png" alt="" />
                          </div>
                          <div className="">
                            <h5 className="dlab-title m-b15">Form html</h5>
                            <p className="btn btn-secondary">Integrado</p>
                            {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                          </div>
                        </div>
                      </div> 
                      <div className="" data-aos="fade-up" data-aos-duration="500">
                        <div className="shadow rounded m-3 p-4 text-center">
                          <div className=""> 
                              <img className="icon-int" src="images/icon/icon-type-form.png" alt="" />
                          </div>
                          <div className="">
                            <h5 className="dlab-title m-b15">Type Form</h5>
                            <p className="btn btn-secondary">Integrado</p>
                            {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                          </div>
                        </div>
                      </div>  
   
                  </div> 
              </div> 

              <div className="container aplicativo">
                
                <div className="text-center pb-3">
                  <h3>Campanhas de marketing</h3>
                </div>

                  <div className="row align-items-center justify-content-center pb-5">
                      
                      <div className="" data-aos="fade-up" data-aos-duration="300">
                        <div className="shadow rounded m-3 p-4 text-center">
                          <div className=""> 
                              <img className="icon-int" src="images/icon/icon-lead-ads.png" alt="" />
                          </div>
                          <div className="">
                            <h5 className="dlab-title m-b15">Lead Ads</h5>
                            <p className="btn btn-secondary">Integrado</p>
                            {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                          </div>
                        </div>
                      </div>  
                      <div className="" data-aos="fade-up" data-aos-duration="700">
                        <div className="shadow rounded m-3 p-4 text-center">
                          <div className=""> 
                              <img className="icon-int" src="images/icon/icon-cata-cliente.png" alt="" />
                          </div>
                          <div className="">
                            <h5 className="dlab-title m-b15">Cata cliente</h5>
                            <p className="btn btn-secondary">Integrado</p>
                            {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                          </div>
                        </div>
                      </div>
                      <div className="" data-aos="fade-up" data-aos-duration="700">
                        <div className="shadow rounded m-3 p-4 text-center">
                          <div className=""> 
                              <img className="icon-int" src="images/icon/icon-leadster.png" alt="" />
                          </div>
                          <div className="">
                            <h5 className="dlab-title m-b15">Leadster</h5>
                            <p className="btn btn-secondary">Integrado</p>
                            {/* <Link href="" ><a className=" btn btn-info shadow rounded-xl" >Saiba mais</a></Link> */}
                          </div>
                        </div>
                      </div>  
   
                  </div> 
              </div> 


              <div className="pb-5">
              <Cta />
              </div>

        </section> 

       
      </div>
      <Footer />
    </>
  );
}

export default Integracoes;
