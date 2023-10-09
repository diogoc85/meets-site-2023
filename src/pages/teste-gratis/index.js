import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import Head from "next/head";
import ReactLoading from 'react-loading';
import verificaHost from '../../utils/verificahost'

const api = axios.create({
  baseURL: 'https://api.meets.com.br/api/',
  timeout: 45000,
});
const api_antiga = axios.create({
  baseURL: 'https://acesso.meets.com.br/',
  timeout: 10000,
});

export default function Index() {
  const router = useRouter();

  const [stateDomain, setStateDomain] = useState({
		dominio: null,
		fone: null,
		email: null,
		mailto: null,
		whatsapp_link: null,
		whatsapp_number: null,
		link_site: null,
    subtitulo_planos: null
	})

  const [state, setState] = useState({
    name: null,
    email: null,
    password: null,
    confirm_password: null,
    mobile: null,
    showErrorPassword: false,
    showErrorEmailExist: false,
    qtd_users: 0,
    empresa_interesse: null
  });


  useEffect(() => {
		console.log('host teste --> ',window.location.hostname) 
		
		const {info_layout} = verificaHost(window.location.hostname ?? 'www.meets.com.br');
    setStateDomain(info_layout)
		console.log('state teste --> ',state) 

		
	  }, []);

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSelectChange = (e) => {
    console.log('qtd_user', typeof e.target.value);
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  async function saveRegister(event) {

    event.preventDefault();
    
    setLoading(true)
    
    //setLoading(true);
    const response = await api.post('v1/test-register', state);
    const status = response.data.status ? response.data.status : false

    // caso seja mais de 10 usuários não entra na distribuição de leads e vai para a equipe 
    const usar_distribuicao = state.qtd_users === '10' ? 0 : 1;
    const id_equipe = state.qtd_users === '10' ? '2083' : null;
    const id_usuario = state.qtd_users === '10' ? '33012' : null;
    const interesse = state.empresa_interesse === 'central' ? '72387' : '85958';
    const acima_10 = state.qtd_users === '10' ? '85959' : '79864';

    const arrayTags = ['79864',interesse, acima_10];

    if(status){
      console.log("Cadastro sucesso");
      console.log("QTD User",state.qtd_users);
      console.log("usar_distribuicao",usar_distribuicao);
      
      if (stateDomain.dominio === "br") {
        // cadastrando oportunidade brasil
          const oportunidade = await api_antiga.post('oportunidade/salvar', {
            id_origem: '73657',
            // concatenar variavel de interesse e acima de 10
            id_status: JSON.stringify(arrayTags),
            tipo_pessoa:'PJ',
            usar_distribuicao: usar_distribuicao,
            id_equipe: id_equipe,
            id_usuario: id_usuario,
            razao_cliente: state.name,
            celular_cliente: state.mobile,
            email_cliente:state.email
          }, {
            headers: {
              'Authorization': '36FDCDB9-FF0D-D6B7-01EA-3A68D350B50C' 
            }
          })
          console.log({oportunidade});
          router.push('/teste-gratis/sucesso')
        
      } else {
        // cadastrando oportunidade pt
        const oportunidade = await api_antiga.post('oportunidade/salvar', {
          id_origem: '133309',
          id_status: "[\"88373\"]",
          tipo_pessoa:'PJ',
          id_equipe: '2435',
	  id_funil: '64010',
	  id_etapa: '221080',
          usar_distribuicao: 1,
          razao_cliente: state.name,
          celular_cliente: `+351 ${state.mobile}`,
          email_cliente:state.email
        }, {
          headers: {
            'Authorization': 'C3F826AE-6C0C-475F-6D53-1232BE73DCD0' 
          }
        })
        console.log({oportunidade});
        router.push('/teste-gratis/sucesso')
    
      }
   
    } else {
      setLoading(false)
      if(response.data.code === 'E101'){
        setState({ ...state, showErrorEmailExist: true });
        return false
      }
    }
  }

  return (
    <>
     <Head>
    <title>Teste Grátis | Meets CRM</title>
    </Head>

      <div className="page-content page-teste d-flex align-items-center justify-content-center">

        <section className="teste-gratis">

                <div className="col-12 d-flex justify-content-center">
                    <div className="d-flex align-content-between flex-wrap col-md-4 p-5 chamada-teste text-white justify-content-end text-right" >
                      <img src="images/logo/logo-meets.svg" alt="" />
                      <h2 className="text-white">Vamos começar seu período de testes!</h2>
                      <h5 className="text-white">Aproveite!</h5>
                    </div>
                    <div className="justify-content-between col-md-4 p-5 formulario-teste" > 
                      <div className="">
                        <form className="dlab-form dzForm" onSubmit={saveRegister}>
                          <div className=""></div>
                          <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                            <div className="w-100">
                              <div className="input-group">
                                <input name="name" id="name" onChange={handleInputChange} required type="text" className="form-control" placeholder="Nome pessoal ou empresa" />
                              </div>
                            </div>
                            <div className="w-100">
                              <div className="input-group">
                                <input name="email" id="email" onChange={handleInputChange} title="Preencha o e-mail corretamente." required type="email" className="form-control" placeholder="E-mail" />
                              </div>
                            </div>
                            <span className={state.showErrorEmailExist === true ? 'ft11-red' : 'd-none'}>Este e-mail já foi cadastrado. Solicite ao suporte para reativar sua conta.</span>
                            <div className="w-100">
                              <div className="input-group">
                                <input name="mobile" id="mobile" onChange={handleInputChange} required type="text" className="form-control" placeholder="Celular" />
                              </div>
                            </div>
                            <div className="w-100">
                              <div className="input-group">
                                <select name='qtd_users' className="form-control" onChange={handleSelectChange}>
                                  <option value={0}>Quantos usuários?</option>
                                  <option value={1}>1 a 3 usuários</option>
                                  <option value={5}>4 a 10 usuários</option>
                                  <option value={10}>acima de 10 usuários</option>
                                </select>
                              </div>
                            </div>
                            {/* <div className="w-100">
                              <div className="input-group">
                                <select name='qtd_users' className="form-control" onChange={handleSelectChange}>
                                  <option value={0}>Qual o segmento da sua empresa?</option>
                                  <option value={1}>Alimentação</option>
                                  <option value={5}>Barbearia</option>
                                  <option value={5}>Corretor(a) de imóveis</option>
                                  <option value={5}>Barbearia</option>
                                  <option value={5}>Salão de beleza</option>
                                  <option value={5}>Logística</option>
                                  <option value={10}>Clínica odontológica/estética</option>
                                  <option value={5}>Outros</option>
                                </select>
                              </div>
                            </div> */}

                            <div className="w-100">
                              <div
                              className='teste-gratis'>Como você gostaria de iniciar seus testes?</div>
                              <div className="input-group">
                                <select name='empresa_interesse' className="form-control" onChange={handleSelectChange}>
                                  <option value={0}>-- Selecione uma opção --</option>
                                  <option value={'central'}>Central de Atendimento (Whatsapp, Messenger, Instagram)</option>
                                  <option value={'crm'}>CRM Completo (Funil, Central, Gatilhos, outros)</option>
                                </select>
                              </div>
                            </div>


                            <div className="w-100">
                              <button name="submit" type="submit" value="Submit"className="btn btn-primary">
                                Começar
                              </button>
                            </div>

                            <div className={loading === true ? 'show' : 'd-none'}>
                               <ReactLoading type='bubbles' color='#000' height='34px' width='34px' />
                            </div>
                           
                        </form>
                      </div>
                    </div>
                </div>

        </section>
       
      </div>

    </>
  );
}


