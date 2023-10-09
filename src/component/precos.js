import React from "react";
import { useEffect, useState } from "react";
import * as Unicons from '@iconscout/react-unicons';
import {Tabs, Tab} from 'react-bootstrap';
import verificaHost from '../utils/verificahost'

function Precos() {
	const [state, setState] = useState({
		dominio: null,
		fone: null,
		email: null,
		mailto: null,
		whatsapp_link: null,
		whatsapp_number: null,
		link_site: null,
    	subtitulo_planos: null
	})
  
  useEffect(() => {
		const {info_layout} = verificaHost(window.location.hostname ?? 'www.meets.com.br');
    	setState(info_layout)
		
  }, []);

	return (
		
		<>	
		{/* <!-- Pricing Table 2 --> */}

			<Tabs defaultActiveKey="mensal" transition={false} id="uncontrolled-tab-example" className=" mb-3 col-md-12 justify-content-center">
                          <Tab eventKey="mensal" title="Mensal">
                          	<div className="row">
							  <div className="col-12 col-md-3 mb-4">
									<div className="pricingtable-wrapper style-2">
										<div>
											<div className="pricingtable-title text-center">
												<h3>Básico</h3>
												<h6>Por usuário</h6>
												<div className="pricingtable-price">
													<h2 className=""><small className="pricingtable-type">{state.simbolo_moeda}</small>{state.valor_basico}<small className="pricingtable-type">/mês</small></h2>
													<small>*pagamento trimestral</small>
												</div>
											</div>	
											<ul className="pricingtable-features">
												<li><Unicons.UilCheck /> 20k Contatos e clientes</li>
												<li><Unicons.UilCheck /> 10k Oportunidades</li>
												<li><Unicons.UilCheck /> Melhorias periódicas</li>
												<li><Unicons.UilCheck />1 funil de vendas</li>
											</ul>
										</div>
										<div className="pricingtable-footer">
											<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
										</div>
									</div>
									
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricingtable-wrapper style-2">
										<div>
											<div className="pricingtable-title text-center">
												<h3>Avançado</h3>
												<h6>Por usuário</h6>
												<div className="pricingtable-price">
													<h2 className=""><small className="pricingtable-type">{state.simbolo_moeda}</small>{state.valor_avancado}<small className="pricingtable-type">/mês</small></h2>
												</div>
											</div>	
											<ul className="pricingtable-features">
											<li><Unicons.UilCheck /> 80k Contatos e clientes</li>
												<li><Unicons.UilCheck /> 100k Oportunidades</li>
												<li><Unicons.UilCheck /> 2 funis de vendas</li>
												<li><Unicons.UilCheck /> Integração Facebook Lead Ads (até 5 páginas)</li>
												
												<li><Unicons.UilCheck /> Gestão de Equipes</li>
												<li><Unicons.UilCheck /> Anexos ilimitados</li>
												<li><Unicons.UilCheck /> Suporte via chat, e-mail e telefone</li>
											</ul>
										</div>
										<div className="pricingtable-footer">
											<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
										</div>
									</div>								
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricingtable-wrapper style-2">
										<div>
											<div className="pricingtable-title header-prof text-center">
												<h3>Profissional</h3>
												<p className="promo">Promoção</p>
												<h6>02 usuários + 01 de bônus</h6>
												<div className="pricingtable-price">
													<h2 className="profis"><small className="pricingtable-type">{state.simbolo_moeda}</small>{state.valor_profissional}<small className="pricingtable-type">/mês</small></h2>
												</div>
												
											</div>	
											<div className="text-center pt-3">
											<span className="escolhido">O mais escolhido</span>
												<h6>Central de Atendimento Omni</h6>
												<ul className="d-flex justify-content-center">
													<li><img src="/images/icon/icon-messenger.svg" alt="messenger" className="mr-2" /></li>
													<li><img src="/images/icon/icon-whatsapp.svg" alt="whatsapp" className="mr-2" /></li>
													<li><img src="/images/icon/icon-instagram.svg" alt="instagram" className="mr-2" /></li>
													<li><img src="/images/icon/icon-facebook.svg" alt="facebook" className="mr-2" /></li>
													<li><img src="/images/icon/icon-email.svg" alt="email" className="mr-2" /></li>
													<li><img src="/images/icon/icon-telefone.svg" alt="telefone" className="" /></li>
												</ul>
											</div>
											<ul className="pricingtable-features">
												<li><Unicons.UilCheck />Whatsapp QR Code (1 linha inclusa)</li>
												<li><Unicons.UilCheck />Whatsapp API Oficial</li>
												<li><Unicons.UilCheck />Messenger Facebook</li>
												<li><Unicons.UilCheck />Instagram Direct</li>
												<li><Unicons.UilCheck />Widget Site</li>
												<li><Unicons.UilCheck />Gestão de Equipes</li>
												<li><Unicons.UilCheck />150k Contatos e Clientes</li>
												<li><Unicons.UilCheck />200k oportunidades</li>
												<li><Unicons.UilCheck />3 funis de vendas</li>
												
												<li><Unicons.UilCheck />Integração Facebook Lead Ads (até 5 páginas)</li>
												<li><Unicons.UilCheck />Vários atendentes por linha</li>
												<li><Unicons.UilCheck />1000 conversas/mês - Whatsapp Api Oficial inclusas</li>
												<li><Unicons.UilCheck /> Anexos ilimitados</li>
												<li><Unicons.UilCheck /> Suporte via chat, e-mail e telefone</li>
												
											</ul>
										</div>
										<div className="pricingtable-footer">
											<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricingtable-wrapper style-2">
										<div>
											<div className="pricingtable-title text-center">
												<h3>Corporativo</h3>
												<h6>Acima de 10 usuários</h6>
												<div className="pricingtable-price">
													<h2 className="">Consulte</h2>
												</div>
											</div>
											<ul className="pricingtable-features">
											
											<li><h6>Todos os recursos dos planos anteriores</h6></li>
												 <p>Entre em contato com nossos consultores sobre descontos especiais para mais de 10 usuários, parcerias, integrações, revenda, whitelabel, suporte diferenciado.</p>
												{/* <p>3 canais inclusos opções:</p>
												<li><Unicons.UilCheck />Whatsapp API Oficial</li>
												<li><Unicons.UilCheck />Messenger Facebook</li>
												<li><Unicons.UilCheck />Instagram Direct</li>
												<li className="mb-3"><Unicons.UilCheck />Widget Site</li>
												
												<li><Unicons.UilCheck /> Leads ilimitadas</li>
												<li><Unicons.UilCheck /> Oportunidades ilimitadas</li>
												<li><Unicons.UilCheck /> Multiplos funis de vendas</li>
												
												<li><Unicons.UilCheck />Vários atendentes por linha</li>
												<li><Unicons.UilCheck /> Infoprodutos</li>
												<li><Unicons.UilCheck /> Gestão de Equipes</li>
												<li><Unicons.UilCheck /> Anexos ilimitados</li>
												<li><Unicons.UilCheck /> Suporte via chat, e-mail e telefone</li> */}
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
								<div className="col-12 col-md-3 mb-4">
									<div className="pricingtable-wrapper style-2">
										<div>
											<div className="pricingtable-title text-center">
												<h3>Básico</h3>
												
												<div className="pricingtable-price">
													<h6>Por usuário</h6>
													<h2 className=""><small className="pricingtable-type">{state.simbolo_moeda}</small>{state.valor_basico_anual}<small className="pricingtable-type">/ano</small></h2>
													<p>economia de {state.simbolo_moeda} {state.economia_basico_anual} por usuário/ano</p>
												</div>
											</div>	
											<ul className="pricingtable-features">
												<li><Unicons.UilCheck /> 20k Contatos e clientes</li>
												<li><Unicons.UilCheck /> 10k Oportunidades</li>
												<li><Unicons.UilCheck /> Melhorias periódicas</li>
												<li><Unicons.UilCheck />1 funil de vendas</li>
											</ul>
										</div>
										<div className="pricingtable-footer">
											<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
										</div>
									</div>
									
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricingtable-wrapper style-2">
										<div>
											<div className="pricingtable-title text-center">
												<h3>Avançado</h3>
												
												<div className="pricingtable-price">
													<h6>Por usuário</h6>
													<h2 className=""><small className="pricingtable-type">{state.simbolo_moeda}</small>{state.valor_avancado_anual}<small className="pricingtable-type">/ano</small></h2>												
													<p>economia de {state.simbolo_moeda} {state.economia_avancado_anual} por usuário/ano</p>
												</div>
											</div>	
											<ul className="pricingtable-features">
												<li><Unicons.UilCheck /> 80k Contatos e clientes</li>
												<li><Unicons.UilCheck /> 100k Oportunidades</li>
												<li><Unicons.UilCheck /> 2 funis de vendas</li>
												<li><Unicons.UilCheck /> Integração Facebook Lead Ads (até 5 páginas)</li>
												
												<li><Unicons.UilCheck /> Gestão de Equipes</li>
												<li><Unicons.UilCheck /> Anexos ilimitados</li>
												<li><Unicons.UilCheck /> Suporte via chat, e-mail e telefone</li>
											</ul>
										</div>
										<div className="pricingtable-footer">
											<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
										</div>
									</div>								
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricingtable-wrapper style-2">
										<div>
											<div className="pricingtable-title header-prof text-center">
												<h3>Profissional</h3>
												<p className="promo">Promoção</p>
												<h6>02 usuários + 01 de bônus</h6>
												<div className="pricingtable-price">
													{/* <p className="p-white">em 12 vezes de</p> */}
													<h2 className="profis"><small className="pricingtable-type">{state.simbolo_moeda}</small>{state.valor_profissional_anual}<small className="pricingtable-type">/ano</small></h2>
													{/* <p className="p-white">ou R$2.698,80 pag. à vista</p> */}
												</div>
												
											</div>	
											<div className="text-center pt-3">
											<span className="escolhido">O mais escolhido</span>
												<h6>Central de Atendimento Omni</h6>
												<ul className="d-flex justify-content-center">
													<li><img src="/images/icon/icon-messenger.svg" alt="messenger" className="mr-2" /></li>
													<li><img src="/images/icon/icon-whatsapp.svg" alt="whatsapp" className="mr-2" /></li>
													<li><img src="/images/icon/icon-instagram.svg" alt="instagram" className="mr-2" /></li>
													<li><img src="/images/icon/icon-facebook.svg" alt="facebook" className="mr-2" /></li>
													<li><img src="/images/icon/icon-email.svg" alt="email" className="mr-2" /></li>
													<li><img src="/images/icon/icon-telefone.svg" alt="telefone" className="" /></li>
												</ul>
											</div>
											<ul className="pricingtable-features">

												<li><Unicons.UilCheck />Whatsapp QR Code (1 linha inclusa)</li>
												<li><Unicons.UilCheck />Whatsapp API Oficial</li>
												<li><Unicons.UilCheck />Messenger Facebook</li>
												<li><Unicons.UilCheck />Instagram Direct</li>
												<li><Unicons.UilCheck />Widget Site</li>
												<li><Unicons.UilCheck />Gestão de Equipes</li>
												<li><Unicons.UilCheck />150k Contatos e clientes</li>
												<li><Unicons.UilCheck />200k Oportunidades</li>
												<li><Unicons.UilCheck />3 funis de vendas</li>
												
												<li><Unicons.UilCheck />Integração Facebook Lead Ads (até 10 páginas)</li>
												<li><Unicons.UilCheck />Vários atendentes por linha</li>
												<li><Unicons.UilCheck />1000 conversas/mês - Whatsapp Api Oficial inclusas</li>
												<li><Unicons.UilCheck /> Anexos ilimitados</li>
												<li><Unicons.UilCheck /> Suporte via chat, e-mail e telefone</li>
											
											</ul>
										</div>
										<div className="pricingtable-footer">
											<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricingtable-wrapper style-2">
										<div>
											<div className="pricingtable-title text-center">
												<h3>Corporativo</h3>
												<h6>Acima de 10 usuários</h6>
												<div className="pricingtable-price">
													<h2 className="">Consulte</h2>
												</div>
											</div>
											<ul className="pricingtable-features">
												<li><h6>Todos os recursos dos planos anteriores</h6></li>
												 <p>Entre em contato com nossos consultores sobre descontos especiais para mais de 10 usuários, parcerias, integrações, revenda, whitelabel, suporte diferenciado.</p>
												 {/*
												<li><Unicons.UilCheck />Whatsapp API Oficial</li>
												<li><Unicons.UilCheck />Messenger Facebook</li>
												<li><Unicons.UilCheck />Instagram Direct</li>
												<li className="mb-3"><Unicons.UilCheck />Widget Site</li>
												
												
												<li><Unicons.UilCheck /> Multiplos funis de vendas</li>
												<li><Unicons.UilCheck /> Contatos e clientes ilimitados</li>
												<li><Unicons.UilCheck />Vários atendentes por linha</li>
												<li><Unicons.UilCheck /> Infoprodutos</li>
												<li><Unicons.UilCheck /> Gestão de Equipes</li>
												<li><Unicons.UilCheck /> Anexos ilimitados</li>
												<li><Unicons.UilCheck /> Suporte via chat, e-mail e telefone</li> */}
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

				<div className="container">
					<div className="row align-items-center">
						<div className="col-12">
							<div className="d-flex gratis pricingtable-wrapper align-items-center p-4">
								<div className="col-12 col-md-3 text-center">
									<h3>Grátis</h3>
									<h6>1 usuário</h6>
								</div>
								<ul className="col-12 col-md-6 d-flex justify-content-between pricingtable-features itens-gratis">
									<li><Unicons.UilCheck /> 1000 Contatos e clientes</li>
									<li><Unicons.UilCheck /> 100 Oportunidades</li>
									<li><Unicons.UilCheck /> Melhorias periódicas</li>	
								</ul>
								<div className="col-12 col-md-3 pricingtable-footer d-flex justify-content-center">
									<a href="/teste-gratis" target="_blank" className="btn btn-primary gradient shadow rounded-xl">Começar</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{state.dominio && state.dominio === "br" &&										
					<div className="container">
						<div className="col-12 text-center pt-5 pb-3">
							<h3>Adicione recursos extras ao seu plano</h3>
						</div>
						<div id="addons" className="row">	
								<div className="col-12 col-md-3 mb-4">
									<div className="pricing justify-content-between p-4">
										<div className="d-flex align-items-center">
											<img src="/images/icon/usuario-adicional.svg" alt="usuario-adicional" className="mr-2" />
											<h6>Usuário adicional<br/><span>(Central de atendimento)</span></h6>
										</div>
										<h4>R$89,90</h4>
										<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
									</div>
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricing justify-content-between p-4">
										<div className="d-flex align-items-center bo">
											<img src="/images/icon/linha-whatsapp.svg" alt="" className="mr-2" />
											<h6>Linha adicional whatsapp QrCode</h6>
										</div>
										<h4>R$99,00</h4>
										<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
									</div>
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricing justify-content-between p-4">
										<div className="d-flex align-items-center">
											<img src="/images/icon/caixa-email.svg" alt="" className="mr-2" />
											<h6>Caixa de e-mail</h6>
										</div>
										<h4>R$150,00</h4>
										<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
									</div>
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricing justify-content-between p-4">
										<div className="d-flex align-items-center">
											<img src="/images/icon/chatbot.svg" alt="" className="mr-2" />
											<h6>Chatbots ilimitados</h6>
										</div>
										<h4>R$199,00</h4>
										<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
									</div>
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricing justify-content-between p-4">
										<div className="d-flex align-items-center">
											<img src="/images/icon/chatbot.svg" alt="" className="mr-2" />
											<h6>Distribuição de leads</h6>
										</div>
										<h4>R$199,00</h4>
										<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
									</div>
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricing justify-content-between p-4">
										<div className="d-flex align-items-center">
											<img src="/images/icon/oportunidade.svg" alt="" className="mr-2" />
											<h6>Leads/Oportunidades<br/><span>(Negócios ilimitados)</span></h6>
										</div>
										<h4>R$299,00</h4>
										<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
									</div>
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricing justify-content-between p-4">
										<div className="d-flex align-items-center">
											<img src="/images/icon/multi-funis.svg" alt="" className="mr-2" />
											<h6>Multiplos funis ilimitados<br/></h6>
										</div>
										<h4>R$99,00</h4>
										<a href="/teste-gratis" target="_blank" className="btn btn-sm btn-recursos rounded-xl">Solicitar</a>
									</div>
								</div>
								<div className="col-12 col-md-3 mb-4">
									<div className="pricing justify-content-between p-4">
										<div className="d-flex align-items-center">
											<img src="/images/icon/voip.svg" alt="" className="mr-2" />
											<h6>Voip com discador e recebimento</h6>
										</div>
										<h4>*Em breve</h4>
										<a href="/teste-gratis" target="_blank" className="btn btn-sm btn-recursos rounded-xl">Solicitar</a>
									</div>
								</div>

								{/* <div className="col-12 col-md-12 justify-content-between mb-4">
									<div className="pricing p-4">
										<div className="row align-items-center">
										<div className="col-md-3 d-flex align-items-center">
											<img src="/images/icon/sms.svg" alt="" className="mr-2" />					
											<h5 className="mb-0">SMS</h5>
										</div>
										<div className="col-md-3">
											<div className="d-flex align-items-center">
												<h6>500 sms/mês</h6>
											</div>
											<h4>R$80,00</h4>
											<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
										</div>
										<div className="col-md-3">
											<div className="d-flex align-items-center">
												<h6>1000 sms/mês</h6>
											</div>
											<h4>R$100,00</h4>
											<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
										</div>
										<div className="col-md-3">
											<div className="d-flex align-items-center">
												<h6>2000 sms/mês</h6>
											</div>
											<h4>R$190,00</h4>
											<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
										</div>
										</div>
										
									</div>
								</div> */}

								<div className="col-12 col-md-12 justify-content-between mb-4">
									<div className="pricing p-4">
										<div className="row align-items-center">
										<div className="col-md-3 d-flex">
											<img src="/images/icon/gatilhos-inteligentes.svg" alt="" className="mr-2" />					
											<h5 className="mb-0">Gatilhos<br/>inteligentes</h5>
										</div>
										<div className="col-md-3">
											<div className="d-flex align-items-center">
												<h6>5 mil ações/mês</h6>
											</div>
											<h4>R$199,00</h4>
											<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
										</div>
										<div className="col-md-3">
											<div className="d-flex align-items-center">
												<h6>12 mil ações/mês</h6>
											</div>
											<h4>R$299,00</h4>
											<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
										</div>
										<div className="col-md-3">
											<div className="d-flex align-items-center">
												<h6>25 mil ações/mês</h6>
											</div>
											<h4>R$499,00</h4>
											<a href="/teste-gratis" target="_blank" className="btn btn-recursos rounded-xl">Solicitar</a>
										</div>
										</div>
										<ul className="row pl-3 pr-3 obs d-flex">
											<li className="col-12 col-md-4"><span>*1</span> As ações são contadas apenas para envio de Whatsapp QR Code, E-mail ou SMS.</li>
											<li className="col-12 col-md-4"><span>*2 </span>Whatsapp API Oficial - verificar tarifas Meta para envio de mensagens template.</li>
											<li className="col-12 col-md-4"><span>*3</span> SMS - não estão inclusos valores referente ao envio de SMS.</li>
										</ul>
									</div>
								</div>


							
						</div>
					</div>
				}
				
			
		</>
	)
}

export default Precos;

