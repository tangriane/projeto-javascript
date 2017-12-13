import { Component } from "../../../../.cache/typescript/2.6/node_modules/@types/react";

export class FormularioAutor extends Component{
    constructor() {
        super();    
        this.state = {nome:'',email:'',senha:''};
        this.enviaForm = this.enviaForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
      }
      setNome(evento){
        this.setState({nome:evento.target.value});
      }
    
      setEmail(evento){
        this.setState({email:evento.target.value});
      }  
    
      setSenha(evento){
        this.setState({senha:evento.target.value});
      }

    render(){
        return (
            <div className="pure-form pure-form-aligned">
            <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
              <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome"/>                                              
              <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email"/>                                              
              <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} label="Senha"/>                                                                      
              <div className="pure-control-group">                                  
                <label></label> 
                <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
              </div>
            </form>             

          </div>     
        );
    }
}

export class TabelaAutor extends Component{
  
    constructor() {
        super();    
        this.state = {lista : []};
     
      }
    
      componentDidMount(){  
        $.ajax({
            url:"http://localhost:8080/api/autores",
            dataType: 'json',
            success:function(resposta){    
              this.setState({lista:resposta});
            }.bind(this)
          } 
        );          
      }
  
    render(){
        return(
            <div>            
            <table className="pure-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.lista.map(function(autor){
                    return (
                      <tr key={autor.id}>
                        <td>{autor.nome}</td>
                        <td>{autor.email}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table> 
          </div>      
        );
    }
    
}