import * as React from 'react';
import { connect } from 'react-redux';
import { getListClientsRequest } from '../actions/clientsActions';
import swal from 'sweetalert2';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ListCliente extends React.Component<any, any>{
  constructor(props: any){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    this.props.getListClientsRequest();
  }

  componentWillReceiveProps(nextProps){
    if ( this.props.isGettingList && !this.props.getListSuccess ) {
      swal({
        title: 'AGUARDE!',
        type: 'info',
        text: 'Buscando seus clientes...',
        onOpen: () => {
          swal.showLoading()
        }
      });
    }

    if ( this.props.isGettingList && !nextProps.isGettingList ) {
      swal.close();
    }
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
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.props.getListSuccess && this.props.getListSuccess.rows ?
                          this.props.getListSuccess.rows.map( (client, index) => {
                            return(
                              <tr key={index} > 
                                <td> <Link to={`/cliente/${client.cod_cliente}`} style={{ border: '0px' }} > { client.cod_cliente } </Link> </td>
                                <td> {client.nome+" "+client.sobrenome} </td>
                                <td> { client.cpf } </td>
                                <td> { client.rg } </td>
                                <td> { client.dt_nascimento } </td>
                                <td> { client.ativo === "1" ? "SIM" : "NÃO" } </td>
                                <td> <button className="btn btn-danger" onClick={(e: any) => {
                                  swal({
                                    type: 'info',
                                    title: 'ATENÇÃO!',
                                    text: 'Tem certeza de que quer deletar este usuário?',
                                    showConfirmButton: true,
                                    confirmButtonText: 'Sim, deletar!',
                                    showCancelButton: true,
                                    cancelButtonText: 'Não, não estou seguro...'
                                  }).then( (confirm) => {
                                      if ( confirm.value ) {
                                        alert('Deletado!');
                                      }
                                  });
                                }} >DELETAR</button> </td>
                                <td> <Link to={`/corretor/apolice/incluirApolice/:${client.cod_cliente}`} > Adicionar Apólice </Link> </td>
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

export default connect(mapStateToProps, { getListClientsRequest })(ListCliente);