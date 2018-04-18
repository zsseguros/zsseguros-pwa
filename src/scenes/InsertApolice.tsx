import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ApoliceInsertForm } from '../components/InsertForms';
import swal from 'sweetalert2';
import * as moment from 'moment';
import SelectClientScene from './SelectClientScene';
import { getListClientsRequest } from '../actions/clientsActions';

interface InsertApoliceState {
  formData: {
    cod_apolice: string,
    cod_cliente: string,
    nome: string,
    dt_emissao: string,
    dt_vigencia: string,
    seguradora: string,
    classe_bonus: string,
    vl_franquia: string,
    vl_franquia_vidros: string,
    nome_arquivo: string,
    vl_premio_total: string,
    ativa: boolean
  },
  step: number,
  isPosting: boolean,
  postSuccess: any,
  postError: any,
  selectedClient: any
}

class InsertApolice extends React.Component<any, InsertApoliceState>{
  constructor(props: any){
    super(props);

    this.state = {
      formData: {
        cod_apolice: '',
        cod_cliente: '',
        nome: '',
        dt_emissao: '',
        dt_vigencia: '',
        seguradora: '',
        classe_bonus: '',
        vl_franquia: '',
        vl_franquia_vidros: '',
        nome_arquivo: '',
        vl_premio_total: '',
        ativa: true  
      },
      step: 0,
      isPosting: false,
      postSuccess: null,
      postError: null,
      selectedClient: null
    }
  }

  componentDidMount(){

    swal({
      title: 'AGUARDE!',
      type: 'info',
      text: 'Buscando suas apolices...',
      onOpen: () => {
      swal.showLoading()
      }
    });

    this.props.getListClientsRequest();
  }

  componentWillReceiveProps(nextProps){
    if ( this.props.isGettingList && !nextProps.isGettingList ) {
      swal.close();

      if ( nextProps.getListError ) {
        swal({
          title: 'Oops...',
          type: 'error',
          text: 'Não foi possível buscar uma lista de clientes, certifique-se de que você está conectado à internet!',
          showConfirmButton: true,
          confirmButtonText: 'VOLTAR'
        }).then( (confirm) => {
          if (confirm.value){
            this.props.history.push('/corretor');
          }
        });
      }

      const cod_cliente = this.props.location.search.split("=")[1];

      if ( nextProps.getListSuccess && cod_cliente !== 'null' ) {

        const selectedClient = nextProps.getListSuccess.rows.filter( (element) => element.cod_cliente === cod_cliente )[0];

        this.setState({
          step: 1,
          formData: {
            ...this.state.formData,
            cod_cliente: selectedClient.cod_cliente || 0,
            nome: selectedClient.nome || 'N/A'
          }
        });
      }
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

  componentWillUnmount(){
    swal.close();
  }

  handleClientSelect(e: any){
    this.setState({
      selectedClient: e.target.value
    })
  }

  handleClientChoose(){
    if ( this.state.selectedClient !== 0 ) {

      const selectedClient = this.props.getListSuccess.rows.filter( (element) => element.nome === this.state.selectedClient && element.sobrenome === this.state.selectedClient )[0];

      this.setState({
        step: 1,
        formData: {
          ...this.state.formData,
          cod_cliente: selectedClient.cod_cliente || 0,
          nome: selectedClient.nome || ''
        }
      });
    }
  }

  buildPayload(){
    return {
      cod_apolice: this.state.formData.cod_apolice,
      cod_cliente: this.state.formData.cod_cliente,
      dt_emissao: this.state.formData.dt_emissao,
      dt_vigencia: this.state.formData.dt_vigencia,
      seguradora: this.state.formData.seguradora,
      classe_bonus: this.state.formData.classe_bonus,
      vl_franquia: this.state.formData.vl_franquia,
      vl_franquia_vidros: this.state.formData.vl_franquia_vidros,
      nome_arquivo: this.state.formData.nome_arquivo,
      vl_premio_total: this.state.formData.vl_premio_total,
      ativa: moment(this.state.formData.dt_emissao).format("YYYY-DD-MM") !== moment(this.state.formData.dt_vigencia).format("YYYY-DD-MM") ,
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

  postApolice(payload: any){
    
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

    const request = instance.post(`http://localhost:8383/apolices/insere`, payload);
    // const request = instance.post(`http://localhost:8383/`, payload);

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

    this.postApolice(this.buildPayload());
  }

  showForms(state: InsertApoliceState){
    switch (state.step) {
      case 0:
        return <SelectClientScene clientList={ this.props.getListSuccess && this.props.getListSuccess.rows ? this.props.getListSuccess.rows : []} handleChange={(e: any) => this.handleClientSelect(e) } handleClientChoose={(e: any) => this.handleClientChoose()} />;
      case 1:
        return <ApoliceInsertForm formData={state.formData} handleChange={(e) => this.handleChange(e)} handleSubmit={(e) => this.handleSubmit(e)} isPosting={this.state.isPosting} />;
      default:
        return null;
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

const mapStateToProps = (state) => {
  return {
      isGettingList: state.client.isGettingList,
      getListSuccess: state.client.getListSuccess,
      getListError: state.client.getListError
  }
}

export default withRouter(connect<any, any, any>(mapStateToProps, {getListClientsRequest})(InsertApolice));