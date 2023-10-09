import Link from 'next/link';
import { useEffect, useState } from "react";
import * as Unicons from '@iconscout/react-unicons';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import verificaHost from '../utils/verificahost'

import React from 'react'

function Header() {
    const [state, setState] = useState({
		dominio: null,
		fone: null,
		email: null,
		mailto: null,
		whatsapp_link: null,
		whatsapp_number: null,
		link_site: null
	})
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    const [header, setHeader] = useState("fixed");
    const [header_, setHeader_] = useState();
    let scrollPosition = useScrollPosition();

    useScrollPosition(({ currPos }) => {
        if (currPos.y < -200) {
         header_ && header_[0].classList.add("is-fixed");
        } else if (currPos.y > -200) {
         header_ && header_[0].classList.remove("is-fixed");
        } 
    })

    useEffect(() => {
        const {info_layout} = verificaHost(window.location.hostname ?? 'www.meets.com.br');
		setState(info_layout)
        
        setHeader_(document.getElementsByClassName("main-bar-wraper"));
      }, []);

      const chageHeader = (value) => {
        setHeader(value);
        if (value === "fixed") {
          header_[0].classList.add("sticky-header");
          header_[0].classList.remove("sticky-no");
        } else {
          header_[0].classList.add("sticky-no");
          header_[0].classList.remove("sticky-header");
          header_[0].classList.remove("is-fixed");
        }
      };

      const options = [
        { value: 'PT', label: 'PT' },
        { value: 'ES', label: 'ES' },
        { value: 'EN', label: 'EN' }
      ]
      
      
    //header === "fixed" && scrollPosition > 10
    //? header_ && header_[0].classList.add("is-fixed")
    //: header_ && header_[0].classList.remove("is-fixed");
  
    return (
        <>

            <div className="breve">
            <p><a href="/chatbot"><Unicons.UilExclamationCircle /> Excelente! Agora  temos Chatbot integrado ao Meets.</a></p>
            </div>

            <header className="site-header mo-left header-transparent">

                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                             
                                    <a href="/">
                                        <img className="custom-logo-white" src="../images/logo-meets-white.svg" alt="" />
                                        <img className="custom-logo" src="../images/logo-meets-azul.svg" alt="" />
                                    </a>
                                
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">     
                                    <a href="/teste-gratis/" target="_blank" className="btn btn-teste rounded-xl" rel="noreferrer">Teste Grátis</a>
                                    <a href="https://acesso.meets.com.br" className="btn btn-login rounded-xl" target="_blank" rel="noreferrer">Login</a> 
                                </div>
                                {/* <div className=''>
                                    <Select options={options}  />
                                </div> */}
                            </div>
                            
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <a href="/index">
                                        <img src="images/logo-meets-azul.svg" alt="" />
                                    </a>
                                </div>

                                <ul className="nav navbar-nav navbar">                    
									<li><a href="/recursos/comunicacao/">Recursos</a></li>
                                    <li><a href="/solucoes">Soluções</a></li>
                                    <li><a href="/integracoes">Integrações</a></li>
                                    <li><a href="/planos">Planos</a></li>
                                    {state.dominio && state.dominio === "pt" && <li><a href="https://blog.meets.pt/" target="_blank" rel="noreferrer" >Blog</a></li>}
                                    {state.dominio && state.dominio === "br" && <li><a href="https://blog.meets.com.br/" target="_blank" rel="noreferrer" >Blog</a></li>}
                                    <li><a href="https://ajuda.meets.com.br" target="_blank" rel="noreferrer" >Ajuda</a></li>
                                </ul>
                                 <div className="dlab-social-icon">
                                    <div className="extra-cell d-flex flex-column">
                                        <a href="teste-gratis" className="btn btn-teste rounded-xl shadow" target="_blank" rel="noreferrer" >Teste Grátis</a>
                                        <a href="login" className="btn btn-login rounded-xl border border-white border-5" target="_blank" rel="noreferrer">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header;
