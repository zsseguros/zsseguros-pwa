import * as React from "react";
import {Link} from 'react-router-dom';

export const ClientInserForm = (props: any) => {
  console.log(props.formData)
  return (
    <div
      className="col-xs-10 col-xs-push-2 col-md-6 col-md-push-4 card rounded"
      style={{ padding: "10px" }}
    >
      <div className="card rounded">
      
        <form
          onSubmit={(e: any) => props.handleSubmit(e)}
          className="bg-light px-3 rounded"
        >
            <h2>Cliente</h2>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="txtName"
            >
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="txtName"
              name="nome"
              required
              placeholder="Nome"
              maxLength={50}
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.nome}
              title="Obirgatório"
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="txtLastName"
            >
              Sobrenome
            </label>
            <input
              type="text"
              className="form-control"
              id="txtLastName"
              name="sobrenome"
              placeholder="Sobrenome"
              maxLength={50}
              required
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.sobrenome}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="dtBirth"
            >
              Data Nascimento
            </label>
            <input
              type="date"
              className="form-control"
              id="dtBirth"
              name="dt_nascimento"
              required
              onChange={(e: any) => props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="txtGender"
            >
              Genero
            </label>
            <input
              type="text"
              className="form-control"
              id="txtGender"
              name="genero"
              placeholder="Masculino"
              required
              maxLength={1}
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.genero}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="txtCpf"
            >
              CPF
            </label>
            <input
              type="text"
              className="form-control"
              id="txtCpf"
              name="cpf"
              placeholder="416.943.288-64"
              required
              maxLength={14}
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.cpf}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="txtRg"
            >
              RG
            </label>
            <input
              type="text"
              className="form-control"
              id="txtRg"
              name="rg"
              placeholder="421771951"
              required
              maxLength={9}
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.rg}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="txtAddress"
            >
              Logradouro
            </label>
            <input
              type="text"
              className="form-control"
              required
              id="txtAddress"
              name="logradouro"
              maxLength={20}
              placeholder="Rua Conego Araújo Marcondes"
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.logradouro}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="nrAddress"
            >
              Número do imóvel
            </label>
            <input
              type="text"
              className="form-control"
              required
              id="nrAddress"
              name="numero"
              maxLength={9}
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.numero}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="txtAddress"
            >
              Bairro
            </label>
            <input
              type="text"
              className="form-control"
              required
              id="txtNeiborhood"
              name="bairro"
              maxLength={15}
              placeholder="Bairro do Limão"
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.bairro}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="txtExtra"
            >
              Complemento
            </label>
            <input
              type="text"
              className="form-control"
              id="txtExtra"
              name="complemento_endereco"
              placeholder="apto 01"
              maxLength={6}
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.complemento_endereco}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="txtCep"
            >
              CEP
            </label>
            <input
              type="text"
              className="form-control"
              required
              id="txtCep"
              name="cep"
              placeholder="00000-000"
              maxLength={9}
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.cep}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="txtCity"
            >
              Cidade
            </label>
            <input
              type="text"
              className="form-control"
              required
              id="txtCity"
              name="cidade"
              placeholder="São Paulo"
              maxLength={19}
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.cidade}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="selectUf"
            >
              ESTADO
            </label>
            <select
              className="form-control"
              required
              id="selectUf"
              defaultValue="SP"
              name="uf"
              onChange={(e: any) => props.handleChange(e)}
            >
              {props.uf_list.map((uf, index) => {
                return (
                  <option key={index} value={uf}>
                    {uf}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
              htmlFor="txtApolice"
            >
              Número da Apólice<br/>
            </label>
            <small style={{ textAlign: 'left', width: '100%', fontSize: '9px' }} >Opcional</small>
            <input
              type="text"
              className="form-control"
              id="txtApolice"
              name="cod_apolice"
              placeholder="0092019039103"
              onChange={(e: any) => props.handleChange(e)}
              value={props.formData.cod_apolice}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={props.isPosting}
          >
            {props.isPosting ? "AGUARDE..." : "CADASTRAR"}
          </button>
          <br />
          <b>
            
            <Link className="text-primary" to="/corretor">Voltar</Link>
          </b>
        </form>
      </div>
    </div>
  );
};

export const ContactInsertForm = (props: any) => {
  return(
    <div
      className="col-xs-10 col-xs-push-2 col-md-6 col-md-push-4 card "
      style={{ padding: "10px" }}
    >
    <form onSubmit={(e) => props.handleSubmit(e)} className="bg-light px-1">
      <div className="bg-primary text-light text-left p-1 rounded">
        <div className="form-group">
          <label htmlFor="txtPhone">
            Telefone
          </label>
          <input type="text" id="txtPhone" name="telefone" placeholder="11 00000000" className="form-control" onChange={(e) => props.handleChange(e)} />
          <label htmlFor="txtCel">
            Celular
          </label>
          <input type="text" id="txtCel" name="celular" placeholder="11 000000000" className="form-control" onChange={(e) => props.handleChange(e)} />
        </div>  
        <div className="form-group">
          <label htmlFor="txtEmail">
            E-mail
          </label>
          <input type="text" id="txtEmail" name="email" placeholder="fulano@gmail.com" className="form-control" onChange={(e) => props.handleChange(e)}/>
        </div>  
        <button
          type="submit"
          className="btn btn-primary"
          disabled={props.isPosting}
        >
          {props.isPosting ? "AGUARDE..." : "CADASTRAR"}
        </button>
      </div>
    </form>
  </div>
  );

}
export const ApoliceInsertForm = (props: any) => {
  return(
    <div
      className="col-xs-10 col-xs-push-2 col-md-6 col-md-push-4 card"
      style={{ padding: "10px" }}
    >
    <div className="card-header">
    Apólice
    </div>
    <div className="card-body">
    
      <form onSubmit={(e) => props.handleSubmit(e)} className="bg-light px-1">
        <div className="text-dark text-left p-1 rounded">
            <div className="form-group">
              <label htmlFor="txtCel">
                Código do Cliente (CPF)
              </label>
              <input type="text" id="txtNome" name="cod_cliente" disabled className="form-control" value={props.formData.cod_cliente} />
              <label htmlFor="txtCel">
                Nome do Cliente
              </label>
              <input type="text" id="txtNome" name="nome" disabled className="form-control" value={props.formData.nome} />
            </div>
          <div className="form-group">
            <label htmlFor="txtCodApolice">
              Número Apólice
            </label>
            <input type="text" id="txtCel" maxLength={25} name="cod_apolice" className="form-control" onChange={(e) => props.handleChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="dtEmissao">
              Data Emissão
            </label>
            <input type="date" id="dtEmissao" name="dt_emissao" className="form-control" onChange={(e) => props.handleChange(e)}/>
            <label htmlFor="dtVigencia">
              Data Vigencia
            </label>
            <input type="date" id="dtVigencia" name="dt_vigencia" className="form-control" onChange={(e) => props.handleChange(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="txtSeguradora">
              Seguradora
            </label>
            <input type="text" maxLength={20} name="seguradora" className="form-control" onChange={(e) => props.handleChange(e)} />
            <label htmlFor="txtBonus">
              Classe Bonus
            </label>
            <input type="number" min={0} max={12} name="classe_bonus" className="form-control" onChange={(e) => props.handleChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="txtFranquia">
              Valor da Franquia
            </label>
            <input type="number" min={0} max={1000000.99} name="vl_franquia" className="form-control" onChange={(e) => props.handleChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="txtFranquia">
              Valor da Franquia de Vidros
            </label>
            <input type="number" min={0} max={1000000.99} name="vl_franquia_vidros" className="form-control" onChange={(e) => props.handleChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="txtFranquia">
              Valor Prêmio
            </label>
            <input type="number" min={0} max={9000000.99} name="vl_premio_total" className="form-control" onChange={(e) => props.handleChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="txtArquivo">
              Nome Arquivo <small>(se houver)</small>
            </label>
            <input type="text" id="txtArquivo" maxLength={25} placeholder="arquivo.pdf" name="nome_arquivo" className="form-control" onChange={(e) => props.handleChange(e)} />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={props.isPosting}
          >
            {props.isPosting ? "AGUARDE..." : "CADASTRAR"}
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}