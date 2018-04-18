import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ClientInserForm, ContactInsertForm } from '../components/InsertForms';
import swal from 'sweetalert2';

interface InsertClienteState {
  formData: {
    cod_corretor: string,
    nome: string,
    sobrenome: string,
    dt_nascimento: string,
    genero: string,
    cpf: string,
    rg: string,
    logradouro: string,
    numero: string,
    bairro: string,
    cep: string,
    cidade: string,
    uf: string,
    cod_apolice?: string
    uf_list: Array<string>,
    complemento_endereco: string
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
        cod_corretor: 'A5269J',
        nome: '',
        sobrenome: '',
        dt_nascimento: '',
        genero: '',
        cpf: '',
        rg: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cep: '',
        cidade: '',
        uf: 'SP',
        cod_apolice: '',
        uf_list: ['SP', 'RJ', 'PR', 'MG', 'MS', 'MT', 'BA'],
        complemento_endereco: ''    
      },
      step: 0,
      isPosting: false,
      postSuccess: null,
      postError: null,
    }
  }

  componentDidUpdate(pevProps, prevState){

    if ( prevState.isPosting && !this.state.isPosting && this.state.postSuccess ) {
      // this.setState({
      //   step: 1
      // });
      this.props.history.push('/corretor');
    }
    
  }

  buildPayload(){
    return {
      cod_cliente: this.state.formData.cpf.replace('.', '').replace('-', ''),
      cod_corretor: 'A5269J',
      nome: this.state.formData.nome,
      sobrenome: this.state.formData.sobrenome,
      dt_nascimento: this.state.formData.dt_nascimento,
      cpf: this.state.formData.cpf,
      rg: this.state.formData.rg,
      logradouro: this.state.formData.logradouro,
      numero: this.state.formData.numero,
      bairro: this.state.formData.bairro,
      cep: this.state.formData.cep,
      cidade: this.state.formData.cidade,
      uf: this.state.formData.uf,
      cod_apolice: this.state.formData.cod_apolice,
      complemento_endereco: this.state.formData.complemento_endereco,
      genero: this.state.formData.genero,
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
        "Content-Type": "application/json",
      }
    });

    const request = instance.post(`http://localhost:8383/clientes/insere`, payload);

    request.then( (response: any) => {

      swal({
        type: 'success',
        title: 'Sucesso!',
        text: 'Cliente adicionado com sucesso, retorne para o painel principal.',
      }).then( (confirm) => {
        if ( confirm ) {
          this.setState({
            isPosting: false,
            postSuccess: response,
            postError: null            
          });
        }
      });

    })
    .catch( (error: any) => {
      this.setState({
        isPosting: false,
        postError: error,
        postSuccess: null
      });
    });
  }

  handleSubmit(e: any){
    e.preventDefault();

    this.postCliente(this.buildPayload());
    // console.log(this.buildPayload());
  }

  showForms(state: InsertClienteState){
    switch (state.step) {
      case 0:
        return <ClientInserForm uf_list={this.state.formData.uf_list || []} formData={state.formData} handleChange={(e) => this.handleChange(e)} handleSubmit={(e) => this.handleSubmit(e)} isPosting={this.state.isPosting} />
      case 1:
        // return <ContactInsertForm handleChange={(e) => this.handleChange(e)} handleSubmit={(e) => this.handleSubmit(e)} isPosting={this.state.isPosting} />
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