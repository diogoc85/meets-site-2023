import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";
import OurServices2 from "../element/our-services-2";
import Equipe from "../element/equipe";
import Head from "next/head";

function Sobre() {
  return (
    <>
    <Head>
    <title>Sobre | Meets CRM</title>
    </Head>
      <Header />
      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2"
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Sobre</h1>
              {/* <h5 className="">available anlable and flexible alert messages.</h5> */}
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        <div className="container">
          <div className="row align-items-center shadow p-4 banner-inner rounded pos-top m-mob">
            <div className="col-lg-7 col-sm-7">
              <h3 className="title m-b20">Institucional</h3>
              <p className="mb-0">Inspirado nas pontes de Recife que unem os diversos bairros da cidade, unem o velho e o novo, o moderno e o antigo. Somos o Meets. Somos as pontes e conexões que unem os diversos canais de aquisição e gestão de leads.</p>
            </div>
            <div className="col-lg-5 col-sm-5 p-3 text-center p-relative">
              <img className="ponte" src="images/banner/giselefotografia.jpg" alt="" />
            </div>  
          </div>
        </div>

        <OurServices2/>

        {/* <Equipe/> */}

      </div>
      <Footer />
    </>
  );
}

export default Sobre;
