import { useEffect } from "react";
import MeetsCrm from "../element/meets-crm";
import Clients2 from "../element/clients-2";
import SliderSolucoes from "../element/slider-solucoes";
import BoxRecursos from "../element/box-recursos";
import BoxCentral from "../element/box-central";
import LeadChat from "../element/lead-chat";
import BoxAutomatize from "../element/box-automatize";
import BoxIntegracoes from "../element/box-integracoes";
import Slider3 from "../element/slider-3";
import Counter2 from "../element/counter2";
import Consultoria from "../element/consultoria";
import Chamada from "../element/chamada";
import BoxPrincipal from "../element/box-principal";
import SliderDepoimentos from "../element/slider-depoimentos";
import Cta from "../element/cta";
import Footer from "../layout/footer"
import Header from '../layout/header';

import verificaHost from '../utils/verificahost'


// import "../css/skin/skin-1.css"


export default function Index2(props) {

  console.log("props index-->",props);


  const {info_layout} = verificaHost(props.host ?? 'meets.com.br');

  useEffect(() => {
		console.log("info_layout----->",info_layout);
	  }, []);

 
  return (
    <>
      <Header />
      <div className="page-content">
        <Slider3 />
        <Consultoria />
        <Chamada />
        <BoxPrincipal />
        <BoxAutomatize />
        {/* <LeadChat /> */}
        <SliderSolucoes />
        <BoxRecursos />
        <MeetsCrm />
        <div id="action-home">
        <Cta />
        </div>
        <BoxIntegracoes />
        <Counter2 />
        {/* <SliderDepoimentos /> */}
        <Clients2 />
        
        
      </div>
      
      <Footer info={info_layout} />
    </>
  );
}



export function getServerSideProps(context) {
	const { req } = context
	console.log('req index--->',req.headers);
	let host = ''
  let googleAnalyticsId = "";
	if (req) {
	  host = req.headers.host // will give you localhost:3000
	}
  if (req.headers.host.includes('localhost')) {
    googleAnalyticsId = "UA-2333523-28";
    console.log("host -->", req.headers.host);
  } else if (req.headers.host === "www.meets.com.br") {
    console.log("host -->", req.headers.host);
    googleAnalyticsId = "UA-2333523-28";
  } else if (req.headers.host === "www.meets.pt") {
    console.log("host -->", req.headers.host);
    googleAnalyticsId = "G-6NTVW08QC7";
  }
  
	return {
	  props: { host, googleAnalyticsId},
	};
  }
