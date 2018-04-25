import * as React from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as moment from 'moment';

class ApoliceDetails extends React.Component<any, any>{
  constructor(props: any){
    super(props);

    this.state = {
      apoliceDetails: null,
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

    if ( !this.props.selectedApolice ) {
      swal.close();

      this.props.history.push('/corretor');

      return;
    } else {
      this.setState({
        apoliceDetails: this.props.selectedApolice
      });

      swal.close();
    }
  }

  showSelectedApolice(apolice: any){
    
    return(
      <div className="card text-dark bg-light w-100" style={{ height: '200px' }}>
        <div className="card-body">
          <b> Número: { apolice.cod_apolice } </b>
          <div className="row my-3" style={{ border: 'solid 0px 0px 0px 1px', borderColor: 'rgba(100, 100, 100, 0.5)' }} >
            <div className="col-6">
              <b>De: { moment(apolice.dt_emissao).format('DD-MM-YYYY') }</b>
            </div>
            <div className="col-6">
              <b>Até: { moment(apolice.dt_vigencia).format('DD-MM-YYYY') }</b>
            </div>
          </div>
          <div className="row my-3" style={{ border: 'solid 0px 0px 0px 1px', borderColor: 'rgba(100, 100, 100, 0.5)' }}>
            <div className="col-6">
              <b>Franquia: R$ { apolice.vl_franquia }</b>
            </div>
            <div className="col-6">
              <b>Prêmio: R$ { apolice.vl_premio_total }</b>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12">
              <b>Arquivo: { apolice.nome_arquivo }</b>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render(){
    return(
      <div className="col-12">
        <div className="row">
          <div className="d-flex flex-direction-row justify-content-center w-100">
            <div className="card w-50">
              <div className="card-header">Apolice</div>
              { this.state.apoliceDetails ? this.showSelectedApolice(this.state.apoliceDetails) : 'N/a' }
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      selectedApolice: state.apolices.selectedApolice,
      isGettingList: state.apolices.isGettingList,
      getListSuccess: state.apolices.getListSuccess,
      getListError: state.apolices.getListError
  }
}

export default withRouter(connect<any, any, any>(mapStateToProps, null)(ApoliceDetails));