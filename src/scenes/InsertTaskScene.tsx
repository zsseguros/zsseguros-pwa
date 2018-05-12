import * as React from 'react';
import * as moment from 'moment';
import axios from 'axios';
import {TaskInsertForm} from 'appSrc/components/InsertForms';
import {connect} from 'react-redux';
import swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';
import { getListTasksRequest } from 'appSrc/actions/clientsActions';
import { configs } from 'appSrc/actions/configs';

class InsertTask extends React.Component<any, any>{
  constructor(props: any){
    super(props);

    this.state = {
      formData: {
        cod_cliente: '',
        titulo: '',
        dt_final: '',
        notificar: false,
        descricao: ''
      },
      isPosting: false,
      postSuccess: null,
      postError: null
    }
  }

  componentDidMount(){
    this.setState({
      formData:{
        ...this.state.formData,
        cod_cliente: this.props.selectedClient || ''
      },
      isPosting: true
    });
  }

  handleChange(e: any){
    let name = e.target.name;
    let value = e.target.value;

    if(name === "notificar") {
      this.setState({
        formData: {
          ...this.state.formData,
          notificar: e.target.checked
        }
      });
    } else if(name === "cod_cliente" && (value.indexOf(".") > -1 || value.indexOf("-") > -1)) {
      swal({
        type: 'error',
        title: 'Apenas números!'
      });
    } else {
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: value
        }
      });
    }

  }

  postTask(payload: any){

    this.setState({
      isPosting: true
    });

    const request = axios({
      method: 'post',
      url: `${configs.api}clientes/tarefa-insere`,
      data: payload
    }).then( (response: any) => {
      this.setState({
        isPosting: false,
        postSuccess: response.data
      });

      swal({
        type: 'success',
        title: 'Tarefa criada com sucesso!',
      }).then( (confirm) => {
        this.props.getListTasksRequest(null);

        this.props.history.push('/corretor');
      });
    })
    .catch( (error: any) => {
      this.setState({
        isPosting: false,
        postError: error
      });

      swal({
        type: 'error',
        title: String(error),
      }).then( (confirm) => {
        this.props.history.push('/corretor');
      });
    });
  }

  handleSubmit(e: any){
    e.preventDefault();

    this.setState({
      isPosting: true
    }, () => {
      this.postTask(this.state.formData)
    });

  }

  render(){
    return(
      <div className="container d-flex justify-content-center">
        <TaskInsertForm
          formData={this.state.formData}
          handleChange={(e: any) => this.handleChange(e)}
          isPosting={this.state.isPosting}
          handleSubmit={(e:any) => this.handleSubmit(e)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedClient: state.client.selectedClient,
  }
}

export default withRouter(connect(mapStateToProps, {getListTasksRequest})(InsertTask));