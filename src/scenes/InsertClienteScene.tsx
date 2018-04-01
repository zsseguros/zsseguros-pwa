import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

interface InsertClienteState {
  cod_cliente: string,
  cod_corretor: string,
  nome: string,
  sobrenome: string,
  dt_nascimento: string,
  genero: string,
  cpf: string,
  rg: string,
  logradouro: string,
  nrEndereco: string,
  bairro: string,
  cidade: string,
  uf: string,
  cod_apolice?: string
  isPosting: boolean,
  postSuccess: any,
  postError: any,
  uf_list: Array<string>
}

class InsertCliente extends React.Component<any, InsertClienteState>{
  constructor(props: any){
    super(props);

    this.state = {
      cod_cliente: '',
      cod_corretor: 'A5269J',
      nome: '',
      sobrenome: '',
      dt_nascimento: '',
      genero: '',
      cpf: '',
      rg: '',
      logradouro: '',
      nrEndereco: '',
      bairro: '',
      cidade: '',
      uf: '',
      cod_apolice: '',
      isPosting: false,
      postSuccess: null,
      postError: null,
      uf_list: ['SP', 'RJ', 'PR', 'MG', 'MS', 'MT', 'BA'],
    }
  }

  buildPayload(){
    return {
      cod_cliente: this.state.cod_cliente,
      cod_corretor: 'A5269J',
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      dt_nascimento: this.state.dt_nascimento,
      genero: this.state.genero,
      cpf: this.state.cpf,
      rg: this.state.rg,
      logradouro: this.state.logradouro,
      nrEndereco: this.state.nrEndereco,
      bairro: this.state.bairro,
      cidade: this.state.cidade,
      uf: this.state.uf,
      cod_apolice: this.state.cod_apolice,      
    }
  }

  handleChange(e: any){
    const name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });

  }

  postCliente(payload: any){

    this.setState({
      isPosting: true,
      postSuccess: null,
      postError: null
    });

    const instance = axios.create({
      headers: {
        "Content-Type": "application/json"
      }
    });

    const request = instance.post(`http://localhost:8581/api/clientes/insere`, payload);

    request.then( (response: any) => {
      this.setState({
        isPosting: false,
        postSuccess: response,
        postError: null
      });
    })
    .catch( (error: any) => {
      this.setState({
        isPosting: false,
        postError: error,
        postSuccess: null
      })
    });
  }

  handleSubmit(e: any){
    e.preventDefault();

    this.postCliente(this.buildPayload());
  }

  render(){
    return(
      <div className="row">
      <div className="col-md-5 col-md-push-4" style={{ padding: '10px', backgroundColor: 'rgba(100, 100, 100, 0.1)' }} >
        <form onSubmit={(e: any)=> this.handleSubmit(e)}>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="txtName">Nome</label>
            <input type="text" className="form-control" id="txtName" name="nome" required placeholder="Nome" onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="txtLastName">Sobrenome</label>
            <input type="text" className="form-control" id="txtLastName" name="sobrenome" placeholder="Sobrenome" required onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="dtBirth">Data Nascimento</label>
            <input type="text" className="form-control" id="dtBirth" name="dt_nascimento" required onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="txtGender">Genero</label>
            <input type="text" className="form-control" id="txtGender" name="genero" placeholder="Sobrenome" required onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="txtCpf">CPF</label>
            <input type="text" className="form-control" id="txtCpf" name="cpf" placeholder="Sobrenome" required onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="txtRg">RG</label>
            <input type="text" className="form-control" id="txtRg" name="rg" placeholder="Sobrenome" required onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="txtAddress">Logradouro</label>
            <input type="text" className="form-control" id="txtAddress" name="logradouro" placeholder="Rua Conego Araújo Marcondes" onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="nrAddress">Número do imóvel</label>
            <input type="text" className="form-control" id="nrAddress" name="nrEndereco" onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="txtAddress">Bairro</label>
            <input type="text" className="form-control" id="txtNeiborhood" name="bairro" placeholder="Bairro do Limão" onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="txtExtra">Complemento</label>
            <input type="text" className="form-control" id="txtExtra" name="complemento" placeholder="apto 01" onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="txtCep">CEP</label>
            <input type="text" className="form-control" id="txtCep" name="cep" placeholder="00000-000" onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="txtCity">Cidade</label>
            <input type="text" className="form-control" id="txtCity" name="cidade" placeholder="São Paulo" onChange={(e: any) => this.handleChange(e)} />
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="selectUf">ESTADO</label>
            <select className="form-control" id="selectUf" defaultValue="SP" name="uf" onChange={(e: any) => this.handleChange(e)} >
              {
                this.state.uf_list.map( (uf, index) => {
                  return(
                    <option key={index} value={uf}>{uf}</option> 
                  );
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}} htmlFor="txtApolice">Número da Apólice</label>
            <input type="text" className="form-control" id="txtApolice" name="cod_apolice" placeholder="0092019039103" onChange={(e: any) => this.handleChange(e)} />
          </div>
          <button type="submit" className="btn btn-primary" disabled={this.state.isPosting} >{this.state.isPosting ? "AGUARDE..." : "CADASTRAR"}</button><br />
          <b> <Link to="/corretor" >Voltar</Link> </b>
        </form>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {

  }
}

export default connect<any, any, any>(null, null)(InsertCliente);