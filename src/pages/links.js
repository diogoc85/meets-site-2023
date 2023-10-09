


import React from "react";
import { useEffect, useState } from "react";
import * as Unicons from '@iconscout/react-unicons';
import Head from "next/head";


function Links() {

  const [state, setState] = useState({
		dominio: null,
		fone: null,
		email: null,
		mailto: null,
		whatsapp_link: null,
		whatsapp_number: null,
		link_site: null
	})

  return (
    <>
     <Head>
    <title>Links | Meets CRM</title>
    </Head>

      <div className="page-content page-links d-flex br-5 align-items-center justify-content-center">

        <section className="teste-gratis">

                <div className="col-12 d-flex justify-content-center">
                    
                    <div className="d-flex flex-column col-md-5 p-4 chamada-teste text-white text-center align-items-center justify-content-center" >
                      
                      <div className="logo-meets">
                        <img src="../images/logo-meets-white.svg" alt="meets crm" max-width="50%"/> 
                      </div>

                      <div className="">
                        <p>O sistema CRM integrado a central de atendimento Omnichannel e Chatbot. Tenha a sua gestão de leads completa num único software.</p>
                      </div>
                      
                      <div className="lista">  
                        
                        <p className="mt-3 mb-0">Meets Brasil <img src="/images/icon/bandeira-br.jpg" /></p>
                        <ul>
                          <li>
                          <a href="https://api.whatsapp.com/send?phone=558192971917" className="link whats" target="_blank">
                          <Unicons.UilWhatsapp /> Whatsapp</a>
                          </li>
                          <li>
                            <a href="https://meets.com.br/" className="link" target="_blank">
                            <Unicons.UilGlobe /> Site</a>
                          </li>
                          <li>
                            <a href="https://blog.meets.com.br/" className="link" target="_blank">
                            <Unicons.UilGlobe /> Blog</a>
                          </li>
                          <li>
                            <a href="https://www.meets.com.br/teste-gratis" className="link" target="_blank">
                            <Unicons.UilCheckSquare /> Teste grátis</a>
                          </li>
                        </ul>
                        <ul className="social">
                          <li><a href="https://www.threads.net/@meetscrm" className="link" target="_blank"><img src="/images/logo/threads.png" max-width="50%" /></a></li>
                          <li><a href="https://www.facebook.com/meetscrm/?ref=br_rs" className="link" target="_blank"><Unicons.UilFacebook /></a></li>
                          <li><a href="https://www.instagram.com/meetscrm/" className="link" target="_blank"><Unicons.UilInstagram /></a></li>
                          <li><a href="https://www.linkedin.com/company/meetscrm/" className="link" target="_blank"><Unicons.UilLinkedin /></a></li>
                          <li><a href="https://twitter.com/meets_crm" className="link" target="_blank"><Unicons.UilTwitter /></a></li>
                          <li><a href="https://www.youtube.com/c/MeetsBr" className="link" target="_blank"><Unicons.UilYoutube /></a></li>
                        </ul>

                        <p className="mt-3 mb-0">Meets Portugal <img src="/images/icon/bandeira-pt.jpg" /></p>
                        <ul>
                        <li>
                          <a href="https://api.whatsapp.com/send?phone=351914250061" className="link whats" target="_blank">
                          <Unicons.UilWhatsapp /> Whatsapp</a>
                          </li>
                        <li>
                          <a href="https://meets.pt/" className="link" target="_blank">
                          <Unicons.UilGlobe /> Site</a></li> 
                        <li>
                          <a href="https://blog.meets.pt/" className="link" target="_blank">
                          <Unicons.UilGlobe /> Blog</a>
                        </li>
                        <li>
                          <a href="https://www.meets.pt/teste-gratis" className="link" target="_blank">
                          <Unicons.UilCheckSquare /> Teste grátis</a>
                        </li>
                        </ul>
                        <ul className="social">
                          <li><a href="https://www.threads.net/@meetscrmpt" className="link" target="_blank"><img src="/images/logo/threads.png" max-width="50%" /></a></li>
                          <li><a href="https://www.facebook.com/meetscrmpt" className="link" target="_blank"><Unicons.UilFacebook /></a></li>
                          <li><a href="https://www.instagram.com/meetscrmpt/" className="link" target="_blank"><Unicons.UilInstagram /></a></li>
                        </ul>
              
                      </div>
                    </div>
                    
                </div>

        </section>
       
      </div>

    </>
  )
}

export default Links;

