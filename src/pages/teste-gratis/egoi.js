import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import Head from "next/head";
import ReactLoading from 'react-loading';

const api = axios.create({
  baseURL: 'https://api.meets.com.br/api/',
  timeout: 45000,
});
const api_antiga = axios.create({
  baseURL: 'https://acesso.meets.com.br/',
  timeout: 10000,
});

function Index() {
  const router = useRouter();

  const [state, setState] = useState({
    name: null,
    email: null,
    password: null,
    confirm_password: null,
    mobile: null,
    showErrorPassword: false,
    showErrorEmailExist: false,
  });

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  async function saveRegister(event) {

    event.preventDefault();
    
    setLoading(true)

    if(state.password !== state.confirm_password){
      console.log('Senha está diferente');
      setState({ ...state, showErrorPassword: true });
      setLoading(false)
      return false
    } else {
      setLoading(true)
      setState({ ...state, showErrorPassword: false });
    } 
    
    //setLoading(true);
    const response = await api.post('v1/test-register', state);
    const status = response.data.status ? response.data.status : false

    if(status){

      console.log("Cadastro sucesso");
      // cadastrando oportunidade
      const oportunidade = await api_antiga.post('oportunidade/salvar', {
        id_origem: '73657',
        id_status: "[\"79864\"]",
	      tipo_pessoa:'PJ',
        usar_distribuicao: 1,
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
      setLoading(false)
      if(response.data.code === 'E101'){
        setState({ ...state, showErrorEmailExist: true });
        return false
      }
    }
    //setLoading(false);
   
  }

  return (
    <>
     <Head>
    <title>Teste Grátis | Meets CRM</title>
    </Head>

      <div className="page-content page-teste d-flex align-items-center justify-content-center">

        <section className="teste-gratis">

                <div id='mobi' className="col-12 d-flex justify-content-center">
                    <div className="d-flex align-content-between flex-wrap col-md-4 p-5 chamada-teste text-white justify-content-end text-right" >
                      <div className='d-flex w-100 justify-content-end'>
                        <img src="/images/logo/logo-egoi.svg" alt="" className='mr-3 egoi' />
                        <img src="/images/logo/logo-meets.svg" alt="" />
                      </div>
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
                                <input name="password" id="password" onChange={handleInputChange} required type="password" className="form-control" placeholder="Senha" />
                              </div>
                            </div>
                            <span className={state.showErrorPassword === true ? 'ft11-red' : 'd-none'}>As senhas digitadas estão diferentes.</span>
                            <div className="w-100">
                              <div className="input-group">
                                <input name="confirm_password" id="confirm_password" onChange={handleInputChange} required type="password" className="form-control" placeholder="Confirmar senha" />
                              </div>
                            </div>
                            <span className={state.showErrorPassword === true ? 'ft11-red' : 'd-none'}>As senhas digitadas estão diferentes.</span>
                           
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

export default Index;
