import * as React from 'react';

export const ApoliceUpdateForm = (props: any) => {
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
          </div>
          <div className="form-group">
            <label htmlFor="txtCodApolice">
              Número Apólice
            </label>
            <input type="text" id="txtCel" maxLength={25} name="cod_apolice" className="form-control" value={props.formData.cod_apolice} onChange={(e) => props.handleChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="dtEmissao">
              Data Emissão
            </label>
            <input type="date" id="dtEmissao" name="dt_emissao" className="form-control" value={props.formData.dt_emissao} onChange={(e) => props.handleChange(e)}/>
            <label htmlFor="dtVigencia">
              Data Vigencia
            </label>
            <input type="date" id="dtVigencia" name="dt_vigencia" className="form-control" value={props.formData.dt_vigencia} onChange={(e) => props.handleChange(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="txtSeguradora">
              Seguradora
            </label>
            <input type="text" maxLength={20} name="seguradora" className="form-control" value={props.formData.seguradora} onChange={(e) => props.handleChange(e)} />
            <label htmlFor="txtBonus">
              Classe Bonus
            </label>
            <input type="number" min={0} max={12} name="classe_bonus" className="form-control" value={props.formData.classe_bonus} onChange={(e) => props.handleChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="txtFranquia">
              Valor da Franquia
            </label>
            <input type="number" min={0} max={1000000.99} name="vl_franquia" className="form-control" value={props.formData.vl_franquia} onChange={(e) => props.handleChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="txtFranquia">
              Valor da Franquia de Vidros
            </label>
            <input type="number" min={0} max={1000000.99} name="vl_franquia_vidros" className="form-control" value={props.formData.vl_franquia_vidros} onChange={(e) => props.handleChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="txtFranquia">
              Valor Prêmio
            </label>
            <input type="number" min={0} max={9000000.99} name="vl_premio_total" className="form-control" value={props.formData.vl_premio_total} onChange={(e) => props.handleChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="txtArquivo">
              Nome Arquivo <small>(se houver)</small>
            </label>
            <input type="text" id="txtArquivo" maxLength={25} placeholder="arquivo.pdf" name="nome_arquivo" className="form-control" value={props.formData.nome_arquivo} onChange={(e) => props.handleChange(e)} />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={props.isPosting}
          >
            {props.isPosting ? "AGUARDE..." : "ALTERAR"}
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};