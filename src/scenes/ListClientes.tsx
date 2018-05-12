import * as React from 'react';
import { connect } from 'react-redux';
import { getListClientsRequest, selectClient } from '../actions/clientsActions';
import swal from 'sweetalert2';
import axios from 'axios';
import {Link} from 'react-router-dom';
import * as moment from 'moment';

class ListCliente extends React.Component<any, any>{
  constructor(props: any){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    this.props.getListClientsRequest();
    swal({
      title: 'AGUARDE!',
      type: 'info',
      text: 'Buscando seus clientes...',
      allowOutsideClick: false,
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
          text: 'Não foi possível buscar uma lista de clientes, certifique-se de que você está conectado à internet!',
          allowOutsideClick: false
        });
      }
    }

    if ( this.props.isGettingList && !nextProps.isGettingList ) {
      swal.close();

      if ( nextProps.getListSuccess && nextProps.getListSuccess.rows && nextProps.getListSuccess.rows.length < 1 ) {
        swal({
          title: 'Nenhum cliente!',
          type: 'error',
          text: 'Não existe nenhum cliente na lista!',
          allowOutsideClick: false
        });
      }
    }
    
  }

  componentWillUnmount(){
    swal.close();
  }

  render(){
      return(
        <div className="col-8 h-100 d-flex flex-column justify-content-center">
          <div className="row">
            <div className="card ">

              <h3 className="card-header" > CLIENTES </h3>

              <div className="card-body">
              
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" cellSpacing={0} >
                    <thead>
                      <tr>
                        <th>Cód Cliente</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Nascimento</th>
                        <th>Ativo</th>
                        <th>#</th>
                        <th>#</th>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.props.getListSuccess && this.props.getListSuccess.rows ?
                          this.props.getListSuccess.rows.map( (client, index) => {
                            return(
                              <tr key={index} > 
                                <td className="" onClick={(e: any) => this.props.selectClient(client) } > <Link to={`/corretor/cliente/${client.cod_cliente}`} style={{ border: '0px' }} > { client.cod_cliente } </Link> </td>
                                <td> {client.nome+" "+client.sobrenome} </td>
                                <td> { client.cpf } </td>
                                <td> { client.rg } </td>
                                <td> { moment(client.dt_nascimento).format('DD-MM-YYYY') } </td>
                                <td> { client.ativo === "1" ? "SIM" : "NÃO" } </td>
                                <td> <Link to={`/corretor/incluirApolice?cod_cliente=${client.cod_cliente}`} > Vincular Apólice </Link> </td>
                                <td> <button className="btn btn-danger" onClick={(e: any) => {
                                    swal({
                                      type: 'info',
                                      title: 'Na, na, nina não...',
                                      text: 'Por enquanto, para deletar usuários, você deve primeiro contatar o administrador do sistema!',
                                    });
                                    // swal({
                                    //   type: 'info',
                                    //   title: 'ATENÇÃO!',
                                    //   text: 'Tem certeza de que quer deletar este usuário?',
                                    //   showConfirmButton: true,
                                    //   confirmButtonText: 'Sim, deletar!',
                                    //   showCancelButton: true,
                                    //   cancelButtonText: 'Não, não estou seguro...'
                                    // }).then( (confirm) => {
                                    //     if ( confirm.value ) {
                                    //       alert('Deletado!');
                                    //     }
                                    // });
                                  }} >DELETAR</button>
                                </td>
                                <td>
                                  <Link to={`/corretor/cliente/alterar/${client.cod_cliente}`} >
                                    <button onClick={(e: any) => this.props.selectClient(client)} className="btn btn-info">Alterar</button>
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
      isGettingList: state.client.isGettingList,
      getListSuccess: state.client.getListSuccess,
      getListError: state.client.getListError
  }
}

export default connect(mapStateToProps, { getListClientsRequest, selectClient })(ListCliente);