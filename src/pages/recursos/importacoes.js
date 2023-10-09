import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import MenuRecursos from "../../element/menu-recursos";
import HeaderRecursos from "../../element/header-recursos";
import Cta from "../../element/cta";
import Image from 'next/image';
import Head from "next/head";


function Importacoes() {
  return (
    <>
     <Head>
    <title>Importações | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
      <HeaderRecursos />

        <section className="importacoes">

            <div className="container">

              <div className="row">
                <MenuRecursos/>
              </div>

                <div className="row align-items-center center-mob mb-mob">
                  <div className="col-lg-5 col-md-12">
                    <Image className="img-mob mb-mob" src="/images/banner/importar-meets.png" alt="" width={460} height={460} />
                  </div>
                  <div className="row col-lg-7 col-md-12">     
                    <h2>Importe os dados de outro CRM para o Meets</h2>
                      <p>Com o Meets você pode importar os seus contatos, empresas, oportunidades e dados dos mais diversos de outro CRM ou de planilhas , inclusive o Google Drive.</p>
                      <p>Se você já conta com uma outra solução em CRM e quer mudar para o CRM Meets, deve se perguntar se isso é possível. A resposta é SIM! Você pode importar negócios e todas as suas informações.</p>
                  </div>
                </div>

                <div className="row align-items-center flex-row-reverse center-mob mb-mob">
                  <div className="col-lg-5 col-md-12">
                    <Image className="img-mob mb-mob" src="/images/banner/base-contatos.png" alt="" width={460} height={460} />
                  </div>
                  <div className="row col-lg-7 col-md-12">     
                    <h2>Se você já conta com uma base<br/>de contatos, não se preocupe!</h2>
                    <p>O Meets permite importar contatos a qualquer momento, em poucos passos e sem maiores complicações, além disso dispõe da função de exclusão de importações realizadas, caso não tenha entrado da maneira correta.</p>
                    <p>Com o Meets você pode importar todos os seus contatos/clientes a partir de um arquivo .CSV ou através da integração com o Google Sheets. </p>
                  </div>
                </div>

            </div>     
          

        </section> 

        <div className="pt-5 pb-5"><Cta /></div>
       
      </div>
      <Footer />
    </>
  );
}

export default Importacoes;
