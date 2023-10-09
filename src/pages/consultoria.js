import React from 'react';
import Link from "next/link";
import { useEffect, useState } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Footer from "../layout/footer";
import Header from "../layout/header";

function Consultoria() {

  return (
    <>
      <Header />

      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2 ">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Consultoria</h1>
              <h5>Proposta de consultoria para implantação do sistema Meets CRM,<br/> com central de atendimento multicanal.</h5>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        
        <section className="termos-condicoes">

            <div className="obj_consult">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12 col-lg-6">
                    <h3>Objectivo:</h3>
                    <ul className="consult">
                      <li>Acelerar o acesso às vantagens do CRM e Central de Atendimento Multicanal do Sistema Meets;</li>
                      <li>Ter maior conhecimento das necessidades dos leads;</li>
                      <li>Mapeamento das ações em andamento através de funis:</li>
                      <li>Etapas e controle de tarefas;</li>
                      <li>Maior clareza nas decisões com o uso de relatórios claros e de fácil geração;</li>
                      <li>Automação de lembretes, classificação de clientes e identificação por tags personalizadas;</li>
                      <li>Mapeamento da origem dos leads, análise automática de desempenho da equipa;</li>
                      <li>Centralização simples das informações recebidas por WhatsApp, e-mails, redes sociais e chat;</li>
                      <li>Aumento das vendas, redução do prazo de fechamento das negociações.</li>
                    </ul>
                    <h4>Deseja saber mais sobre a consultoria ou tirar alguma dúvida?</h4>
                    <a href="https://api.whatsapp.com/send?phone=351914250061" className="btn btn-lg rounded-xl" target="_blank">Fale com um consultor</a>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    {/* <img className="img-mob" data-aos="fade-up" data-aos-duration="400" src="images/banner/mulher-planos.png" alt="" /> */}
                  </div>

                </div>
              </div>
            </div>

              <div className="container">
                <div className="row pb-5">
                    <div className="col-lg-12 col-sm-12 pt-5">

                      <h3>Descrição:</h3>
                      <p>Para acelerar a utilização da solução Meets, é possível a contratação simultânea do onboarding 
                      e da implementação. Neste modelo, nossas equipas de pedagogia empresarial, suporte, 
                      marketing e comercial, realizarão reuniões de diagnóstico e co-criação de processos em 
                      quantidade adequada às necessidades mútuas, sem incluir estas horas no custo, e execução das 
                      seguintes ações:</p>
                      
                      <div className="row pt-3">
                        <div className="col-md-12 col-lg-6">
                          <ul className="consult">
                            <li>Configurações da conta;</li>
                            <li>Configurações do cadastro;</li>
                            <li>Importação de clientes recebidos via Excel;</li>
                            <li>Inclusão de usuários;</li>
                            <li>Cadastro de produtos;</li>
                            <li>Cadastro de tags;</li>
                            <li>Cadastro de motivos de perda;</li>
                            <li>Cadastro de origens;</li>
                          </ul>
                        </div>
                        <div className="col-md-12 col-lg-6">
                          <ul className="consult">
                            <li>Configurações das integrações aprovadas na contatação;</li>
                            <li>Configurações das automações;</li>
                            <li>Co-criação de até três funis;</li>
                            <li>Co-criação das etapas dos funis;</li>
                            <li>Co-criação dos gatilhos dos funis;</li>
                            <li>Configurações das dos modelos;</li>
                            <li>Configurações de gatilhos;</li>
                            <li>Co-criação de tag;</li>
                          </ul>
                        </div>
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
  
  export default Consultoria;