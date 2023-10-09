import Link from "next/link";
import Tabs from 'react-bootstrap/Tabs';
import Footer from "../layout/footer";
import HeaderLp from "../layout/header-lp";
import SejaParceiro from "../element/seja-parceiro";
import Image from 'next/image';
import Script from 'next/script';
import Head from "next/head";

function CadastroClientes() {

  return (
    <>
    <Head>
    <title>Cadastro Clientes | Meets CRM</title>
    </Head>
      <HeaderLp />
      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2 ">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Cadastro de clientes</h1>
              <h5>Cadastre seus clientes meets</h5>
            </div>
          </div> 
        </div>

        <section className="parceiros">

               <div className="container">
                <div className="row align-items-center shadow pl-5 banner-inner rounded pos-top m-mob">
                  <div className="col-lg-6 col-sm-6">
                    <h2>Olá parceiro meets.</h2>
                    <h3 className="title m-b20">Cadastre abaixo seus clientes!</h3>
                    <p className="mb-0">Para uma lista de clientes mais organizada e personalizada, cadastre aqui sua base de clientes.</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 box-parceiros p-relative">
                    <img className="p-absolute img-parceiro" src="/images/banner/cadastrar-clientes.png" alt="" />
                  </div>  
                </div>
              </div>

              <div className="container">

                <div className="row">
                  <h3>Cadastro de clientes</h3>
                  <Script src="https://acesso.meets.com.br/form/index/id/a1496d4ad0a359b6fe93d819e4a2141bd9d9ac35" strategy="lazyOnload" />
                </div>

              </div>

        </section> 

       
      </div>
      <Footer />
    </>
  );
}

export default CadastroClientes;
