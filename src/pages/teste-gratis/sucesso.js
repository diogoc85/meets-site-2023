import React, { useEffect, useState } from 'react';
import Link from "next/link";




function Sucesso() {


  return (
    <>


      <div className="page-content page-teste d-flex align-items-center">
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GJQK9J"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

        <section className="teste-gratis">

                <div className="col-12 d-flex justify-content-center">
                    <div className="sucesso d-flex align-items-center justify-content-center flex-wrap col-md-5 p-5 text-center">
                      <img src="../images/icon/check.png"  />
                      <h2 className="text-white">Seu Cadastro foi Realizado com Sucesso!</h2>
                      <h5 className="text-primary">Você receberá um e-mail para ativação da sua conta em instantes.</h5>
                      {/* <a href="https://acesso.meets.com.br/auth" className="btn btn-primary border-0 mt-3">Meu primeiro login</a> */}
                    </div>
                  {/* <img src={`https://meets.idevaffiliate.com/sale.php?profile=72198&idev_saleamt=10.00&idev_ordernum=XXX`} style="height:0px; width:0px; border:0px;" />
                    

                    <script async src={`https://meets.idevaffiliate.com/sale.php?profile=72198&idev_saleamt=10.00&idev_ordernum=XXX`} /> */}
                </div>

        </section>
       
      </div>

    </>
  );
}

export default Sucesso;
