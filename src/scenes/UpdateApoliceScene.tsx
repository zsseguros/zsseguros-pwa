import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ApoliceUpdateForm } from 'appSrc/components/UpdateFormsComponents';
import swal from 'sweetalert2';
import * as moment from 'moment';
import types from '../actionTypes';
import { configs } from 'appSrc/actions/configs';

interface UpdateApoliceState {
  formData: {
    cod_apolice: string,
    cod_cliente: string,
    dt_emissao: string,
    dt_vigencia: string,
    seguradora: string,
    classe_bonus: number,
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
};

interface UpdateApoliceProps {
  selectedApolice: any;
  location: any;
  history: any;
}

class UpdateApolice extends React.Component<UpdateApoliceProps, UpdateApoliceState>{
  constructor(props: UpdateApoliceProps){
    super(props);

    this.state = {
      formData: {
        cod_apolice: this.props.selectedApolice ? this.props.selectedApolice.cod_apolice : '',
        cod_cliente: this.props.selectedApolice ? this.props.selectedApolice.cod_cliente : '',
        dt_emissao: this.props.selectedApolice ? this.props.selectedApolice.dt_emissao : '',
        dt_vigencia: this.props.selectedApolice ? this.props.selectedApolice.dt_vigencia : '',
        seguradora: this.props.selectedApolice ? this.props.selectedApolice.seguradora : '',
        classe_bonus: this.props.selectedApolice ? this.props.selectedApolice.classe_bonus : 0,
        vl_franquia: this.props.selectedApolice ? this.props.selectedApolice.vl_franquia : '',
        vl_franquia_vidros: this.props.selectedApolice ? this.props.selectedApolice.vl_franquia_vidros : '',
        nome_arquivo: this.props.selectedApolice ? this.props.selectedApolice.nome_arquivo : '',
        vl_premio_total: this.props.selectedApolice ? this.props.selectedApolice.vl_premio_total : '',
        ativa: true
      },
      step: 0,
      isPosting: false,
      postSuccess: null,
      postError: null,
    }
  }

  componentDidUpdate(pevProps, prevState){

    if ( prevState.isPosting && !this.state.isPosting && this.state.postSuccess ) {
      this.props.history.push('/corretor');
    }
    
  }

  componentWillUnmount(){
    swal.close();
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

  putApolice(payload: any){
    
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

    const request = instance.put(`${configs.api}apolices/altera/${payload.cod_apolice}`, payload);

    request.then( (response: any) => {

      swal({
        type: 'success',
        title: 'Sucesso!',
        text: 'Apólice atualizada com sucesso, retorne para o painel principal.',
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

      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Não ofi possível alterar a apólice. Detalhes: \n'+error.status
      })
    });
  }

  handleSubmit(e: any){
    e.preventDefault();

    this.putApolice(this.buildPayload());
  }

  render(){
    return(
      <div className="container d-flex justify-content-center">
          <ApoliceUpdateForm formData={this.state.formData} handleChange={(e) => this.handleChange(e)} handleSubmit={(e) => this.handleSubmit(e)} isPosting={this.state.isPosting} />;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      selectedApolice: state.apolices.selectedApolice
  }
}

export default withRouter(connect<any, any, any>(mapStateToProps, null)(UpdateApolice));