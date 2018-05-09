import * as React from 'react';
import {connect} from 'react-redux';
import { getListTasksRequest } from 'appSrc/actions/clientsActions';
import swal from 'sweetalert2';
import * as moment from 'moment';
import {Link} from 'react-router-dom';

class ListTasksScene extends React.Component<any, any> {
  constructor(props: any){
    super(props);

    this.state = {

    }

    swal({
      title: 'AGUARDE!',
      type: 'info',
      text: 'Buscando tarefas...',
      onOpen: () => {
        swal.showLoading()
      }
    });
  }

  componentDidMount(){
    if (this.props.selectedClient) {
      this.props.getListTasksRequest(this.props.selectedClient);
    } else {
      this.props.getListTasksRequest(null);
    }
  }

  componentWillReceiveProps(nextProps: any){
    if ( nextProps.getListTasksSuccess ) {

    }
  }

  componentWillUnmount(){
    swal.close();
  }

  render(){
    return(
      <div className="container">
        <div className="card">
          <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" cellSpacing={0}>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Data Criação</th>
                  <th>Data Fim</th>
                  <th>Descrição</th>
                  <th>Cliente</th>
                </tr>
                {
                  this.props.getListTasksSuccess ? swal.close() : null
                }
                {
                  this.props.getListTasksSuccess && this.props.getListTasksSuccess.rows ?
                    this.props.getListTasksSuccess.rows.reverse().map( (task, index) => {
                      return(
                        <tr key={index} >
                          <td>{task.titulo}</td>
                          <td>{moment(task.dt_criacao).format("DD-MM-YYYY")}</td>
                          <td>{moment(task.dt_final).format("DD-MM-YYYY")}</td>
                          <td>{task.descricao}</td>
                          <td><Link to={`/corretor/cliente/${task.cod_cliente}`}>{task.cod_cliente}</Link></td>
                        </tr>
                      )
                    })
                    :
                      null                 
                }
              </thead>
            </table>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isGettingListTasks: state.client.isGettingListTasks,
    getListTasksSuccess: state.client.getListTasksSuccess,
    getListTasksError: state.client.getListTasksError,

  }
}

export default connect(mapStateToProps, {getListTasksRequest})(ListTasksScene);