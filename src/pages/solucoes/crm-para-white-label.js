import Link from "next/link";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Head from "next/head";


function crmParaWhiteLabel() {
  return (
    <>
     <Head>
    <title>CRM Whitelabel | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content bg-cinza">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>CRM para White Label</h1>
              {/* <h5>Lorem ipsum dolor</h5> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}


        <section className="solucoes">

            <div className="container">

                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                    <img src="/images/losango.svg" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h2>Suas conversas de WhatsApp organizadas e segmentadas</h2>
                    <p>sākuma. Tajā laikā kāds nezināms iespiedējs izveidoja teksta fragmentu, lai nodrukātu grāmatu ar burtu paraugiem. Tas ir ne tikai pārdzīvojis piecus gadsimtus, bet bez ievērojamām izmaiņām saglabājies arī mūsdienās, pārejot uz datorizētu</p>
                    </div>
                </div>
              
            </div>

        </section> 


       
      </div>
      <Footer />
    </>
  );
}

export default crmParaWhiteLabel;
