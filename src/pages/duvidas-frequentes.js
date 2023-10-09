
import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Head from "next/head";



function DuvidasFrequentes() {

  return (
    <>
     <Head>
    <title>Dúvidas frequentes | Meets CRM</title>
    </Head>
      <Header />

      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2 ">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Dúvidas Frequentes</h1>
              {/* <h5>Lorem Ipsum Dolor</h5> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        
        <section className="parceiros">

              <div className="container">
                <div className="row justify-content-md-center">

                  <ul className="col-md-8 p-5">        
                  
                  <li>
                  <h5>1- Como posso contratar um plano?</h5>
                  <p>Crie uma conta no Meets (você tem direito a um teste gratuito). Entre na conta, escolha o plano e pague o valor. Feito! Daí em diante, você recebe o boleto (7 dias antes do vencimento) ou o débito virá no seu cartão todo mês.</p>
                  </li>
                  <li>
                  <h5>2- Quais são os métodos de pagamento?</h5>
                  <p>Você pode pagar por cartão de crédito (VISA, Mastercard, Amex ou Boleto Bancário). O processo de pagamento é sempre iniciado dentro do próprio Meets.</p>
                  </li>
                  <li>
                  <h5>3- Depois de contratar um plano, posso mudar para um plano superior ou inferior?</h5>
                  <p>Sim, o Meets calculará automaticamente a diferença de preço.</p>
                  </li>
                  <li>
                  <h5>4- Além dos valores que aparecem nos planos a serem escolhidos, o que mais teremos de custo?</h5>
                  <p>Você terá o serviço de onboarding que irá lhe ajudar a melhorar seus resultados. Consulte com nossa equipe as condições especiais.</p>
                  </li>
                  <li>
                  <h5>5- Posso utilizar apenas  o LeadMeets separado do CRM?</h5>
                  <p>Estamos trabalhando para que isso aconteça o mais rápido possível.</p>
                  </li>
                  </ul>

                </div>
              </div>



        </section> 

       
      </div>

      <Footer />
      </>
    );
  }
  
  export default DuvidasFrequentes;