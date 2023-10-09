import React from "react";
import * as Unicons from '@iconscout/react-unicons';
import { useState } from "react";
import {Tabs, Tab} from 'react-bootstrap';

function PricingTable2() {

	return (
		
		<>	
		{/* <!-- Pricing Table 2 --> */}
			<div className="container mb-4">

			<Tabs defaultActiveKey="mensal" transition={false} id="uncontrolled-tab-example" className=" mb-3 col-md-12 justify-content-center">
                          <Tab eventKey="mensal" title="Mensal">
                          	<div className="row">
							  <div className="grid justify-content-between">
								<div className="pricingtable-wrapper style-2 m-3">
									<div className="">
										<div className="pricingtable-title text-center">
											<h3>Basic</h3>
											<h6>Por usuário</h6>
											<div className="pricingtable-price">
												<h2 className="pricingtable-bx">Grátis</h2>
											</div>
										</div>	
										<ul className="pricingtable-features">
											<li><Unicons.UilCheck /> 1000 Contatos e clientes</li>
											<li><Unicons.UilCheck /> 100 Oportunidades</li>	
											<li><Unicons.UilCheck /> Melhorias periódicas</li>
										</ul>
									</div>
									<div className="pricingtable-footer">
										<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
									</div>
									
								</div>
								<div className="pricingtable-wrapper style-2 m-3">
									<div className="">
										<div className="pricingtable-title text-center">
											<h3>Premium</h3>
											<h6>Por usuário</h6>
											<div className="pricingtable-price">
												<h2 className="pricingtable-bx"><small className="pricingtable-type">R$</small>64,90<small className="pricingtable-type">/mês</small></h2>
											</div>
										</div>	

										{/* mensal 64,90 */}
										<ul className="pricingtable-features">
											<li><Unicons.UilCheck /> Ganhe um desconto para pagamentos semestral e anual.</li>
											<li><Unicons.UilCheck /> Contatos e clientes ilimitados</li>
											<li><Unicons.UilCheck /> Oportunidades ilimitadas</li>
											<li><Unicons.UilCheck /> Gestão de Equipes</li>
											<li><Unicons.UilCheck /> Anexos ilimitados</li>
											<li><Unicons.UilCheck /> 10 Funis de Venda e atendimento</li>
											<li><Unicons.UilCheck /> Suporte via chat, e-mail e telefone</li>
										</ul>
									</div>
									<div className="pricingtable-footer">
										<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
									</div>
								</div>
								<div className="pricingtable-wrapper style-2 m-3">
									<div className="">
										<div className="pricingtable-title text-center">
											<h3>Enterprise</h3>
											<h6>Por usuário</h6>
											<div className="pricingtable-price">
												<h2 className="pricingtable-bx">Consulte</h2>
											</div>
										</div>
										<ul className="pricingtable-features">
											<li><Unicons.UilCheck /> Facebook Messenger</li>
											<li><Unicons.UilCheck /> Contatos e clientes ilimitados</li>
											<li><Unicons.UilCheck /> Oportunidades ilimitadas</li>
											<li><Unicons.UilCheck /> Infoprodutos</li>
											<li><Unicons.UilCheck /> Gestão de Equipes</li>
											<li><Unicons.UilCheck /> Anexos ilimitados</li>
											<li><Unicons.UilCheck /> Múltiplos Funis de Venda e atendimento</li>
											<li><Unicons.UilCheck /> Suporte via chat, e-mail e telefone</li>
											<li><Unicons.UilCheck /> Ganhe um desconto para pagamentos semestral e anual.</li>
										</ul>
									</div>
										<div className="pricingtable-footer">
											<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
										</div>
								</div>
							</div>
						  	</div>
                          </Tab>
						  <Tab eventKey="anual" title="Anual">
						  <div className="row">
							  <div className="grid justify-content-between">
								<div className="pricingtable-wrapper style-2 m-3">
									<div className="">
										<div className="pricingtable-title text-center">
											<h3>Basic</h3>
											<h6>Por usuário</h6>
											<div className="pricingtable-price">
												<h2 className="pricingtable-bx">Grátis</h2>
											</div>
										</div>	
										<ul className="pricingtable-features">
											<li><Unicons.UilCheck /> 1000 Contatos e clientes</li>
											<li><Unicons.UilCheck /> 100 Oportunidades</li>
											<li><Unicons.UilCheck /> Melhorias periódicas</li>
										</ul>
									</div>
									<div className="pricingtable-footer">
										<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
									</div>
									
								</div>
								<div className="pricingtable-wrapper style-2 m-3">
									<div className="">
										<div className="pricingtable-title text-center">
											<h3>Premium</h3>
											<h6>Por usuário</h6>
											<div className="pricingtable-price">
												<h2 className="pricingtable-bx"><small className="pricingtable-type">R$</small>59,90<small className="pricingtable-type">/mês</small></h2>
											</div>
										</div>	

										{/* mensal 64,90 */}
										<ul className="pricingtable-features">
											<li><Unicons.UilCheck /> Ganhe um desconto para pagamentos semestral e anual.</li>
											<li><Unicons.UilCheck /> Contatos e clientes ilimitados</li>
											<li><Unicons.UilCheck /> Oportunidades ilimitadas</li>
											<li><Unicons.UilCheck /> Gestão de Equipes</li>
											<li><Unicons.UilCheck /> Anexos ilimitados</li>
											<li><Unicons.UilCheck /> 10 Funis de Venda e atendimento</li>
											<li><Unicons.UilCheck /> Suporte via chat, e-mail e telefone</li>
										</ul>
									</div>
									<div className="pricingtable-footer">
										<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
									</div>
								</div>
								<div className="pricingtable-wrapper style-2 m-3">
									<div className="">
										<div className="pricingtable-title text-center">
											<h3>Enterprise</h3>
											<h6>Por usuário</h6>
											<div className="pricingtable-price">
												<h2 className="pricingtable-bx">Consulte</h2>
											</div>
										</div>
										<ul className="pricingtable-features">
											<li><Unicons.UilCheck /> Facebook Messenger</li>
											<li><Unicons.UilCheck /> Contatos e clientes ilimitados</li>
											<li><Unicons.UilCheck /> Oportunidades ilimitadas</li>
											
											<li><Unicons.UilCheck /> Infoprodutos</li>
											<li><Unicons.UilCheck /> Gestão de Equipes</li>
											<li><Unicons.UilCheck /> Anexos ilimitados</li>
											<li><Unicons.UilCheck /> Múltiplos Funis de Venda e atendimento</li>
											<li><Unicons.UilCheck /> Suporte via chat, e-mail e telefone</li>
											<li><Unicons.UilCheck /> Ganhe desconto para pagamentos semestral e anual.</li>
										</ul>
									</div>
										<div className="pricingtable-footer">
											<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
										</div>
								</div>
							</div>
						  	</div>
                          </Tab>
						</Tabs>
				
			</div>
		</>
	)
}

export default PricingTable2;

