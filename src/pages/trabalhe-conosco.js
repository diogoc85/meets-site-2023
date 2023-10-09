
import Link from "next/link";
import Tabs from 'react-bootstrap/Tabs';
import Footer from "../layout/footer";
import Header from "../layout/header";

function TrabalheConosco() {

  return (
    <>
      <Header />

      <div className="page-content">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2 ">
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Trabalhe Conosco</h1>
              <h5>Sempre tem uma vaga abrindo na equipe, envia teus dados!</h5>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        
        <section className="parceiros">

              <div className="container">
                <div className="row align-items-center shadow pl-5 banner-inner rounded pos-top m-mob">
                  <div className="col-lg-7 col-sm-7 center-mob">
                    <h3 className="title m-b20">Decole sua carreira no Meets CRM</h3>
                    <p className="mb-0">Somos uma empresa dinâmica e com muitas oportunidades. Acreditamos que você pode ser crescer e transformar o mundo a sua volta. Estamos aqui para apoiar o seu desenvolvimento. Estamos juntos para orientar o caminho.</p>
                    <a href="#cadastro" className="btn btn-info border-0 mt-3">Preencha o formulário abaixo</a>
                  </div>
                  <div className="col-lg-5 col-sm-5 box-job p-relative">
                    <img className="p-absolute foguete move-4" src="images/banner/foguete.png" alt="" />
                    <img className="p-absolute img-man-job" src="images/banner/man-job.png" alt="" />
                  </div>  
                </div>
              </div>

              <div className="container">

                <div className="text-center pb-3">
                    <h3>Por que trabalhar no Meets CRM?</h3>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-6 col-sm-6">
                        <p>Nosso objetivo foi de tornar os processos de vendas simples e fáceis para deixar seu tempo mais livre. Estamos trabalhando muito forte para ir nessa direção.</p>
                        <p>Atualmente atendemos clientes de todos segmentos e por todo país além dos clientes estrangeiros em vários continentes. Essa é uma ótima oportunidade de conhecer e aplicar sólidos conhecimento em Marketing  para empresas e negócios de todos os tipos e tamanhos.</p>
                    </div>  
                    <div className="col-lg-6 col-sm-6">
                        <p>Nosso objetivo foi de tornar os processos de vendas simples e fáceis para deixar seu tempo mais livre. Estamos trabalhando muito forte para ir nessa direção.</p>
                        <p>Atualmente atendemos clientes de todos segmentos e por todo país além dos clientes estrangeiros em vários continentes. Essa é uma ótima oportunidade de conhecer e aplicar sólidos conhecimento em Marketing  para empresas e negócios de todos os tipos e tamanhos.</p>
                    </div>  
                </div>
                
              </div>

                <div className="container pb-5">

                      <div className="row justify-content-between">
                            <div className="d-flex col-md-6 mb-mob">
                              <div className="banner-inner shadow rounded p-4">
                                <h4 className="dlab-title m-b15">O que fazemos?</h4>
                                <p>Ajudamos centenas de empresas a potencializarem e alavancarem suas vendas e atendimentos aos seus clientes.Juntos aumentamos suas vendas e potencializamos seus resultados.</p>
                              </div>
                            </div>
                            <div className="d-flex  col-md-6">   
                              <div className="banner-inner shadow rounded p-4">   
                                <h4 className="dlab-title m-b15">Onde estamos?</h4>
                                <p>Nosso escritório fica em Recife Pernambuco. Estamos na cidade onde tem o velho e o novo. Onde os sol nasce antes das 5 da manhã e se põe antes das 18 horas. Onde tem praia, cultura e uma economia bem eclética. Aqui até onde nossa vista alcança, vemos o mar e seus tons de azul todos os dias.						</p>
                              </div>
                            </div>
					            </div>
                </div>
              <div className="content-inner" id="cadastro">  

                <div className="text-center text-white pb-3">
                    <h3>Cadastro</h3>
                </div>

              <div className="container">

              <div className="row justify-content-md-center">
                <div className="col-lg-6 m-b30">
                  <form className="dlab-form dzForm" method="POST" action="">
                    <div className="dzFormMsg"></div>
                    <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="input-group">
                          <input name="dzName" required type="text" className="form-control" placeholder="Nome" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="input-group">
                          <input name="dzEmail" required type="text" className="form-control" placeholder="E-mail" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="input-group">
                          <input name="dzOther[phone]" required type="text" className="form-control" placeholder="Telefone" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                      <div className="input-group">
                          <select name="dzOther[priority]" className="form-control" required>
                            <option selected>Pretensão salarial</option>
                            <option value="1">Até R$1.000,00</option>
                            <option value="2">Entre R$1.000,00 a R$2.000,00</option>
                            <option value="3">Entre R$3.000,00 a R$4.000,00</option>
                            <option value="3">Acima de R$5.000,00</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="col-sm-12">
                        <div className="input-group">
                          <select name="dzOther[choose_service]" className="form-control" required>
                            <option selected>Estado</option>
                            <option value="Acre">Acre</option>
                            <option value="Alagoas">Alagoas</option>
                            <option value="Amapá">Amapá</option>
                            <option value="Amazonas">Amazonas</option>
                            <option value="Bahia">Bahia</option>
                            <option value="Ceará">Ceará</option>
                            <option value="Distrito Federal">Distrito Federal</option>
                            <option value="Espírito Santo">Espírito Santo</option>
                            <option value="Goiás">Goiás</option>
                            <option value="Maranhão">Maranhão</option>
                            <option value="Mato Grosso">Mato Grosso</option>
                            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                            <option value="Minas Gerais">Minas Gerais</option>
                            <option value="Pará">Pará</option>
                            <option value="Paraíba">Paraíba</option>
                            <option value="Paraná">Paraná</option>
                            <option value="Pernambuco">Pernambuco</option>
                            <option value="Piauí">Piauí</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                            <option value="Rondônia">Rondônia</option>
                            <option value="Roraima">Roraima</option>
                            <option value="Santa Catarina">Santa Catarina</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Sergipe">Sergipe</option>
                            <option value="Tocantins">Tocantins</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="input-group">
                          <textarea name="dzMessage" required className="form-control" placeholder="Por que deseja trabalhar no meets?"></textarea>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="input-group">
                          <input name="dzOther[choose_file]" type="file" required className="form-control custom-file-input"/>
                          <label className="custom-file-label">Anexar currículo</label>
                        </div>
                      </div>
                
                      <div className="col-sm-12 text-center mt-2">
                        <button name="submit" type="submit" value="Submit" className="btn btn-info border-0">Enviar</button>
                      </div>
                    </div>
                  </form>
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
  
  export default TrabalheConosco;