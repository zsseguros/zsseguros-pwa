import * as React from 'react';
import { connect } from 'react-redux';
import { getApolicesListRequest, selectApolice } from '../actions/apolicesActions';
import swal from 'sweetalert2';
import axios from 'axios';
import {Link} from 'react-router-dom';
import * as moment from 'moment';

class ListApolices extends React.Component<any, any>{
  constructor(props: any){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    this.props.getApolicesListRequest();
    swal({
        title: 'AGUARDE!',
        type: 'info',
        text: 'Buscando suas apolices...',
        onOpen: () => {
        swal.showLoading()
        }
    });
  }

  componentWillReceiveProps(nextProps){
    if ( this.props.isGettingList && !nextProps.isGettingList ) {
        swal.close();

        if ( nextProps.getListError ) {
          swal({
            title: 'Oops...',
            type: 'error',
            text: 'Não foi possível buscar suas apólices, certifique-se de que há conexão com a internet.',
          });
        }
    }
  }

  componentWillUnmount(){
      swal.close();
  }

  render(){
      return(
        <div className="col-11 h-100 d-flex flex-column justify-content-center">
          <div className="row">
            <div className="card ">

              <h3 className="card-header" > APOLICES </h3>

              <div className="card-body">
              
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" cellSpacing={0} style={{ fontSize: '13px' }} >
                    <thead>
                      <tr>
                        <th>Cód Apólice</th>
                        <th>Data Emissão</th>
                        <th>Data Vigência</th>
                        <th>Seguradora</th>
                        <th>Valor Franquia (R$)</th>
                        <th>Valor Franquia Vidros (R$)</th>
                        <th>Valor Prêmio (R$)</th>
                        <th>Classe Bônus</th>
                        <th>Ativa</th>
                        <th>#</th>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.props.getListSuccess && this.props.getListSuccess.rows ?
                          this.props.getListSuccess.rows.map( (apolice, index) => {
                            return(
                                <tr key={index} > 
                                    <td onClick={(e: any) => this.props.selectApolice(apolice)} > <Link to={`/corretor/apolice/${apolice.cod_apolice}`} style={{ border: '0px' }} > { apolice.cod_apolice } </Link> </td>
                                    <td> { moment(apolice.dt_emissao).format('DD-MM-YYYY') } </td>
                                    <td> { moment(apolice.dt_vigencia).format('DD-MM-YYYY') } </td>
                                    <td> { apolice.seguradora } </td>
                                    <td> { apolice.vl_franquia } </td>
                                    <td> { apolice.vl_franquia_vidros } </td>
                                    <td> { apolice.vl_premio_total } </td>
                                    <td> { apolice.classe_bonus } </td>
                                    <td> { apolice.ativa ? "SIM" : "NÃO" } </td>
                                    <td> <button className="btn btn-danger" onClick={(e: any) => {
                                    swal({
                                        type: 'info',
                                        title: 'ATENÇÃO!',
                                        text: 'Tem certeza de que quer deletar esta apólice?',
                                        showConfirmButton: true,
                                        confirmButtonText: 'Sim, deletar!',
                                        showCancelButton: true,
                                        cancelButtonText: 'Não, cancelar operação.'
                                    }).then( (confirm) => {
                                        if ( confirm.value ) {
                                            alert('Deletado!');
                                        }
                                    });
                                    }} >DELETAR</button> </td>
                                    <td>
                                      <Link to={`/corretor/apolice/alterar/${apolice.cod_apolice}`} >
                                        <button onClick={(e: any) => this.props.selectApolice(apolice)} className="btn btn-info">Alterar</button>
                                      </Link>
                                    </td>
                                </tr>                   
                            )
                          })
                        :
                          null
                      }
                    </tbody>
                  </table>
                </div>      
              </div>  
            </div>
          </div>
        </div>
      );
  }

}

const mapStateToProps = (state) => {
  return {
      isGettingList: state.apolices.isGettingList,
      getListSuccess: state.apolices.getListSuccess,
      getListError: state.apolices.getListError
  }
}

export default connect(mapStateToProps, { getApolicesListRequest, selectApolice })(ListApolices);