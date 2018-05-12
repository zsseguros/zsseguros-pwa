import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {ClientUpdateForm} from 'appSrc/components/UpdateFormsComponents'; 
import swal from 'sweetalert2';
import { selectClient } from 'appSrc/actions/clientsActions';
import { configs } from 'appSrc/actions/configs';

interface UpdateClientState {
  formData: {
    cod_corretor: string,
    nome: string,
    sobrenome: string,
    dt_nascimento: string,
    genero: string,
    cpf: string,
    rg: string,
    cnh: string,
    logradouro: string,
    numero: string,
    bairro: string,
    cep: string,
    cidade: string,
    uf: string,
    uf_list: Array<string>,
    complemento_endereco: string
  },
  step: number,
  isPosting: boolean,
  postSuccess: any,
  postError: any,
}

interface UpdateClientProps {
  selectedClient: any;
  history: any;
  location: any;
}

class UpdateClient extends React.Component<UpdateClientProps, UpdateClientState>{
  constructor(props: any){
    super(props);

    this.state = {
      formData: {
        cod_corretor: 'A5269J',
        nome: this.props.selectedClient ? this.props.selectedClient.nome : '',
        sobrenome:  this.props.selectedClient ? this.props.selectedClient.sobrenome : '',
        dt_nascimento:  this.props.selectedClient ? this.props.selectedClient.dr_nascimento : '',
        genero:  this.props.selectedClient ? this.props.selectedClient.genero : '',
        cpf:  this.props.selectedClient ? this.props.selectedClient.cpf : '',
        rg:  this.props.selectedClient ? this.props.selectedClient.rg : '',
        cnh:  this.props.selectedClient ? this.props.selectedClient.cnh : '',
        logradouro:  this.props.selectedClient ? this.props.selectedClient.logradouro : '',
        numero:  this.props.selectedClient ? this.props.selectedClient.numero : '',
        bairro:  this.props.selectedClient ? this.props.selectedClient.bairro : '',
        cep:  this.props.selectedClient ? this.props.selectedClient.cep : '',
        cidade:  this.props.selectedClient ? this.props.selectedClient.cidade : '',
        uf:  this.props.selectedClient ? this.props.selectedClient.uf : '',
        uf_list: ['SP', 'RJ', 'PR', 'MG', 'MS', 'MT', 'BA'],
        complemento_endereco:  this.props.selectedClient ? this.props.selectedClient.complemento_endereco : ''
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
      nome: this.state.formData.nome,
      sobrenome: this.state.formData.sobrenome,
      dt_nascimento: this.state.formData.dt_nascimento,
      cpf: this.state.formData.cpf,
      rg: this.state.formData.rg,
      cnh: this.state.formData.cnh.length > 0 ? this.state.formData.cnh : 'NA',
      logradouro: this.state.formData.logradouro,
      numero: this.state.formData.numero,
      bairro: this.state.formData.bairro,
      cep: this.state.formData.cep,
      cidade: this.state.formData.cidade,
      uf: this.state.formData.uf,
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

  putClient(payload: any){

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

    const request = instance.put(`${configs.api}clientes/altera/${this.props.selectedClient.cod_cliente}`, payload);

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

    let auxPayload = this.buildPayload()
    let auxArray = Object.keys(auxPayload).map( (key, index) => auxPayload[key] !== '' );
    
    if ( auxArray.indexOf(false) > -1 ) {
      return;
    } else {
      this.putClient(this.buildPayload());
    }

  }

  showForms(state: UpdateClientState){
    switch (state.step) {
      case 0:
        return <ClientUpdateForm uf_list={this.state.formData.uf_list || []} formData={state.formData} handleChange={(e) => this.handleChange(e)} handleSubmit={(e) => this.handleSubmit(e)} isPosting={this.state.isPosting} />
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
    selectedClient: state.client.selectedClient
  }
}

export default connect<any, any, any>(mapStateToProps, null)(UpdateClient);