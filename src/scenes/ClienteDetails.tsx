import * as React from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as moment from 'moment';
import {selectClient} from 'appSrc/actions/clientsActions';

class ClienteDetails extends React.Component<any, any>{
  constructor(props: any){
    super(props);

    this.state = {
      clientDetails: null,
      selectedApolice: null,
      cod_cliente: this.props.location.pathname.slice(18)
    }
  }

  componentDidMount(){
    swal({
      title: 'AGUARDE!',
      type: 'info',
      text: 'Buscando informações...',
      onOpen: () => {
      swal.showLoading()
      }
    });
    
    if ( !Number.isNaN(Number(this.props.location.pathname.slice(18))) ) {

      axios({
        
        method: 'get',
        url: `http://localhost:8383/clientes/busca-detalhes/${ this.props.location.pathname.slice(18) }`
        
      }).then( (response: any) => {
        
        this.setState({
          clientDetails: response.data,
          selectedApolice: response.data.apolices.length > 0 ? response.data.apolices[0].cod_apolice : null
        });
        
        swal.close();
        
      }).catch( (error: any) => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Cliente não encontrado \n'+error
        });
      });
    } else if ( !this.props.selectedClient ) {
      swal.close();

      this.props.history.push('/corretor');

      return;
    } else {
      axios({
        
        method: 'get',
        url: `http://localhost:8383/clientes/busca-detalhes/${ this.props.selectedClient.cod_cliente }`
        
      }).then( (response: any) => {
        this.setState({
          clientDetails: response.data,
          selectedApolice: response.data.apolices.length > 0 ? response.data.apolices[0].cod_apolice : null
        });
        
        swal.close();
        
      }).catch( (error: any) => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Cliente não encontrado \n'+error
        });
      });      
    }
  }

  componentDidUpdate(){
    if ( !this.props.selectedClient && Number.isNaN(Number(this.props.location.pathname.slice(18))) ) {
      this.props.history.push('/corretor');
    }
  }

  handleSelectApolice(e: any){
    const value = e.target.value;

    this.setState({
      selectedApolice: value
    });
  }

  showClienteInfos(client: any){
    return(
      <div className="card text-white bg-info o-hidden  w-100" style={{ minHeight: '200px' }}>
        <div className="card-body">
          <b>{ client.nome+" "+client.sobrenome }</b> <br/>
          Portador do CPF: <b>{ client.cpf }</b> <br/>
          Portador da CNH: <b>{ client.cnh || 'N/A' }</b> <br/>
          Nasceu em: <b> { moment(client.dt_nascimento ).format('DD-MM-YYYY') } </b><br/>
        </div>
      </div>
    );
  }

  checkApolicesExpiring(apolices: Array<any>){
    let apolicesExpiring = apolices.filter( (apolice, index) => ( (moment().month()+1) - (moment(apolice.dt_vigencia).month()+1) ) <= 1 );

    return apolicesExpiring.length;
  }

  showApolicesInfos(apolices: Array<any>){

    return(
      <div className="card text-white bg-danger o-hidden  w-100"  style={{ minHeight: '200px' }}>
        <div className="card-body">
          <b>Possui { apolices ? apolices.length : 0 } apolices.</b> <br/>
          <b> { apolices ? `${this.checkApolicesExpiring(apolices) > 0 ? `Cuidado! ${this.checkApolicesExpiring(apolices)}` : ''}` : 0 } apolice(s) vence(m) até o próximo mês.</b><br/>
          <div className="form-group">
            <b>Apólice: </b>
            <select className="form-control" name="selectedApolice" onChange={(e:any) => this.handleSelectApolice(e)} >
              { apolices.map( (apolice, index) => <option key={Number(apolice.cod_apolice)} value={apolice.cod_apolice}> { apolice.cod_apolice } </option> ) }
            </select>
          </div>
        </div>
      </div>
    )
  }

  showAddressInfos(client: any){
    return(
      <div className="card text-white bg-success  w-100"  style={{ minHeight: '200px' }}>
        <div className="card-body">
          <b>Mora em { client.logradouro }, { client.numero }, { client.bairro }</b><br/>
          <b>CEP: { client.cep }</b><br/>
          <b>{ client.cidade } - { client.uf }</b><br/>
        </div>
      </div>
    );
  }

  showSelectedApolice(apolice: number){
    if ( apolice !== null ) {

      let apoliceObj = this.state.clientDetails.apolices.find( (apol) => apol.cod_apolice === apolice );
  
      return(
        <div className="card text-white bg-secondary  w-100"  style={{ minHeight: '200px' }}>
          <div className="card-body">
            <b> Número: { apoliceObj.cod_apolice } </b>
            <div className="row">
              <div className="col-6">
                <b>De { moment(apoliceObj.dt_emissao).format('DD-MM-YYYY') }</b>
              </div>
              <div className="col-6">
                <b>Até: { moment(apoliceObj.dt_vigencia).format('DD-MM-YYYY') }</b>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <b>Franquia: R$ { apoliceObj.vl_franquia }</b>
              </div>
              <div className="col-6">
                <b>Prêmio: R$ { apoliceObj.vl_premio_total }</b>
              </div>
            </div>
          </div>
        </div>
      );

    } else {
      return null;
    }
  }

  render(){
    return(
      <div className="col-12">
        <div className="row">
          <div className="col-6 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.showClienteInfos(this.state.clientDetails.client) : 'N/a' }
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.showApolicesInfos(this.state.clientDetails.apolices || []) : 'N/a' }
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-6 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.showAddressInfos(this.state.clientDetails.client) : 'N/a' }
            </div>          
          </div>
          <div className="col-6 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.showSelectedApolice(this.state.selectedApolice) : 'N/a' }
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex flex-row justify-content-center">
            <Link to="/corretor/tarefas/adicionar" onClick={(e: any) => this.props.selectClient( (this.props.selectedClient ? this.props.selectedClient.cod_cliente : null) || this.state.cod_cliente)}>
              <button type="button" className="btn btn-warning mx-1 text-light">TAREFA</button>
            </Link>
            <Link to={`/corretor/cliente/alterar/${this.props.selectedClient ? this.props.selectedClient.cod_cliente : '0'}`}>
              <button type="button" className="btn btn-success mx-1">ALTERAR</button>
            </Link>
            <button type="button" className="btn btn-danger mx-1">DELETAR</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      selectedClient: state.client.selectedClient,
      isGettingList: state.client.isGettingList,
      getListSuccess: state.client.getListSuccess,
      getListError: state.client.getListError
  }
}

export default withRouter(connect<any, any, any>(mapStateToProps, {selectClient})(ClienteDetails));