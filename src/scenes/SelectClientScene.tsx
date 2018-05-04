import * as React from 'react';

const SelectClientScene = (props: any) => {
  return (
    <div className="row">
      <div className="col-12 h-100 d-flex flex-column justify-content-center">
        <div className="card">

          <div className="card-header">
            Associe a nova apólice a um dos clientes
          </div>

          <div className="card-body">
          
            <form onSubmit={(e: any) => e.preventDefault()} className="form-inline">
              <div className="form-group">
                <label htmlFor="selectClient" className="mx-3" >
                  Associar ao cliente:
                </label>
                <select name="selectedClient" className="custom-select mx-3" id="selectClient" onChange={(e: any) => props.handleChange(e)} >
                  {
                    props.clientList && props.clientList.length > 0 ? props.clientList.map( (client, index) => {
                        return(
                          <option key={index} >{client.nome}</option>
                        )
                      })
                    :
                      [{
                        cod_cliente: 96900011887,
                        nome: 'Exemplo'
                      }].map( (client, index) => {
                        <option key={index}>{client.nome}</option>
                      })
                  }
                </select>
              </div>
              <div className="form-group">
                  <button className="btn btn-primary" disabled={!props.selectedClient} type="submit" onClick={(e) => props.handleClientChoose(e)}>
                    ASSOCIAR A ESTE
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectClientScene;