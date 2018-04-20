import * as React from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as moment from 'moment';

class ClienteDetails extends React.Component<any, any>{
  constructor(props: any){
    super(props);

    this.state = {
      clientDetails: null
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

    if ( !this.props.selectedClient ) {
      swal.close();

      this.props.history.push('/corretor');

      return;
    }

    axios({

      method: 'get',
      url: `http://localhost:8383/clientes/busca-detalhes/${ this.props.selectedClient.cod_cliente }`

    }).then( (response: any) => {
      this.setState({
        clientDetails: response.data
      });

      console.log("!!", response.data)

      swal.close();

    }).catch( (error: any) => {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Cliente não encontrado \n'+error
      });
    });
  }

  showClienteInfos(client: any){
    return(
      <div className="card text-white bg-info o-hidden h-100 w-100">
        <div className="card-body">
          <b>{ client.nome+" "+client.sobrenome }</b> <br/>
          Portador do CPF: <b>{ client.cpf }</b> <br/>
          Nasceu em: <b> { client.dt_nascimento } </b>
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
      <div className="card text-white bg-danger o-hidden h-100 w-100">
        <div className="card-body">
          <b>Possui { apolices ? apolices.length : 0 } apolices.</b> <br/>
          <b> { apolices ? `${this.checkApolicesExpiring(apolices) > 0 ? `Cuidado! ${this.checkApolicesExpiring(apolices)}` : ''}` : 0 } apolice(s) vence(m) até o próximo mês.</b>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div className="col-12">
        <div className="row">
          <div className="col-4 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.showClienteInfos(this.state.clientDetails.client) : 'N/a' }
            </div>
          </div>
          <div className="col-4 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.showApolicesInfos(this.state.clientDetails.apolices) : 'N/a' }
            </div>
          </div>
          <div className="col-4 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.state.clientDetails.client.nome : 'N/a' }
            </div>          
          </div>
        </div>
        <div className="row">
          <div className="col-4 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.state.clientDetails.client.nome : 'N/a' }
            </div>
          </div>
          <div className="col-4 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.state.clientDetails.client.nome : 'N/a' }
            </div>
          </div>
          <div className="col-4 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.state.clientDetails.client.nome : 'N/a' }
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.state.clientDetails.client.nome : 'N/a' }
            </div>
          </div>
          <div className="col-4 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.state.clientDetails.client.nome : 'N/a' }
            </div>
          </div>
          <div className="col-4 my-1">
            <div className="d-flex flex-direction-row justify-content-center">
              { this.state.clientDetails ? this.state.clientDetails.client.nome : 'N/a' }
            </div>          
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

export default withRouter(connect<any, any, any>(mapStateToProps, null)(ClienteDetails));