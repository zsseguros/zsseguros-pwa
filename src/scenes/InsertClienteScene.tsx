import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ClientInserForm, ContactInsertForm } from '../components/InsertForms';

interface InsertClienteState {
  formData: {
    cod_cliente: string,
    cod_corretor: string,
    nome: string,
    sobrenome: string,
    dt_nascimento: string,
    genero: string,
    cpf: string,
    rg: string,
    logradouro: string,
    nrEndereco: string,
    bairro: string,
    cidade: string,
    uf: string,
    cod_apolice?: string
    uf_list: Array<string>    
  },
  step: number,
  isPosting: boolean,
  postSuccess: any,
  postError: any,
}

class InsertCliente extends React.Component<any, InsertClienteState>{
  constructor(props: any){
    super(props);

    this.state = {
      formData: {
        cod_cliente: '',
        cod_corretor: 'A5269J',
        nome: '',
        sobrenome: '',
        dt_nascimento: '',
        genero: '',
        cpf: '',
        rg: '',
        logradouro: '',
        nrEndereco: '',
        bairro: '',
        cidade: '',
        uf: '',
        cod_apolice: '',
        uf_list: ['SP', 'RJ', 'PR', 'MG', 'MS', 'MT', 'BA'],        
      },
      step: 0,
      isPosting: false,
      postSuccess: null,
      postError: null,
    }
  }

  buildPayload(){
    return {
      cod_cliente: this.state.formData.cod_cliente,
      cod_corretor: 'A5269J',
      nome: this.state.formData.nome,
      sobrenome: this.state.formData.sobrenome,
      dt_nascimento: this.state.formData.dt_nascimento,
      genero: this.state.formData.genero,
      cpf: this.state.formData.cpf,
      rg: this.state.formData.rg,
      logradouro: this.state.formData.logradouro,
      nrEndereco: this.state.formData.nrEndereco,
      bairro: this.state.formData.bairro,
      cidade: this.state.formData.cidade,
      uf: this.state.formData.uf,
      cod_apolice: this.state.formData.cod_apolice,      
    }
  }

  handleChange(e: any){
    const name = e.target.name;
    let value = e.target.value;

    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    });

  }

  postCliente(payload: any){

    this.setState({
      isPosting: true,
      postSuccess: null,
      postError: null
    });

    const instance = axios.create({
      headers: {
        "Content-Type": "application/json"
      }
    });

    const request = instance.post(`http://localhost:8581/api/clientes/insere`, payload);

    request.then( (response: any) => {
      this.setState({
        isPosting: false,
        postSuccess: response,
        postError: null
      });
    })
    .catch( (error: any) => {
      this.setState({
        isPosting: false,
        postError: error,
        postSuccess: null
      })
    });
  }

  handleSubmit(e: any){
    e.preventDefault();

    // this.postCliente(this.buildPayload());
    console.log(this.buildPayload());
  }

  showForms(state: InsertClienteState){
    switch (state.step) {
      case 0:
        return <ClientInserForm uf_list={this.state.formData.uf_list || []} formData={state.formData} handleChange={(e) => this.handleChange(e)} handleSubmit={(e) => this.handleSubmit(e)} isPosting={this.state.isPosting} />
      case 1:
        return <ContactInsertForm handleChange={(e) => this.handleChange(e)} handleSubmit={(e) => this.handleSubmit(e)} isPosting={this.state.isPosting} />
      default:
        return null
    }
  }

  render(){
    return(
      <div className="container d-flex justify-content-center">
          {
            this.showForms(this.state)
          }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    
  }
}

export default connect<any, any, any>(null, null)(InsertCliente);