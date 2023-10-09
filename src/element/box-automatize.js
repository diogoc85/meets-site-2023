import { useEffect, useState } from "react";
import Footer from "../layout/footer";
import Header from "../layout/header";
import verificaHost from '../utils/verificahost'

function BoxAutomatize() {
	const [state, setState] = useState({
		dominio: null,
		fone: null,
		email: null,
		mailto: null,
		whatsapp_link: null,
		whatsapp_number: null,
		link_site: null
	})

	useEffect(() => {
        const {info_layout} = verificaHost(window.location.hostname ?? 'www.meets.com.br');
		setState(info_layout)
      }, []);
    return (
      <>
        <section className="content-inner-2 pb-5 automatize">
			<div className="container">
				<div className="row align-items-center">
					<div className="">
						<div className="section-head style-3 text-center mb-0">
							<h2 className="title">Automatize</h2>
							<h3 className="sub-title m-b20">{state.automatize}</h3>
						</div>
						<div className="row">
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/funil.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="500">
										<h4 class="dlab-tilte text-capitalize">Funil</h4>
										<p>Configure e deixe o seu funil automatizado para as ações repetitivas do dia a dia.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="700">
										<img src="images/icon/cadencia.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="900">
										<h4 class="dlab-tilte text-capitalize">Etapas</h4>
										<p>Crie cadências organizadas de acordo com o estado das suas leads.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/tarefas.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1200">
										<h4 class="dlab-tilte text-capitalize">Tarefas</h4>
										<p>Defina tarefas para cada etapa do funil de acordo com os gatilhos.</p>
									</div>
								</div>
							</div>
							
						</div>
						
					</div>
					
				</div>
			</div>
		</section>
    </>
  );
}
  
  export default BoxAutomatize;