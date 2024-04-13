  import React, {Component} from 'react';
import './style.css'
import InputTxtNmb from '../../components/InputTxtNmb/InputTxtNmb'
import InputsRadio from '../../components/InputsR/InputsR'
import ButtonEnv from '../../components/ButtonEnv/ButtonEnv';
import ListaCandidatos from '../../components/ListaCandidatos/ListaCandidatos'
import MsgErro from '../../components/MensagemErro/MsgErro';


class Formulario extends Component{
    
 constructor(props){
       super(props);
       this.nextId = 1;
       this.state = {
            formDados:{
                id: this.nextId++,
                 nome: '',
                numero:'',
                genero: '',
                estado:'',
                validate: "OFF",
            },
            candidatos: []
        }
   }

   sortByEarliest() {
    const sortedList = this.state.candidatos.sort((a, b) => {
      return a.id - b.id;
    });
    this.setState({
      candidatos: [...sortedList],
    });
  }

  sortByLatest() {
    const sortedList = this.state.candidatos.sort((a, b) => {
      return b.id - a.id;
    });
    this.setState({
      candidatos: [...sortedList],
    });
  }

   hendleOnChange = (event)=>{
    const dados =  this.state.formDados;
       const {name, value} = event.target;
       this.setState({formDados :{...dados, [name]: value}})
    }
    
    handleRadioChange = (event) => {
    const dados =  this.state.formDados;
    const {name, value} = event.target;
    this.setState( {formDados:{...dados, [name]: value}}) 
   }
  
   removerCandidato = (idSelect)=>{
    this.setState( prevState=>(
        {candidatos: prevState.candidatos.filter(candidato =>
             candidato.id !== idSelect)}))
    }
 
   render(){
      
       const handleOnSubmit=(event)=>{
           event.preventDefault()
           const dados = this.state.formDados;
          if((dados.nome === '') || (dados.numero === '') ||
          (dados.genero === '') || (dados.estado === '')){ 
               this.setState({formDados:{...dados, validate: "OFF"}})
               return false
            } else{
                this.setState({formDados:{...dados, validate: "ON",id: this.nextId++}})
                this.setState(prevState =>({candidatos:[...prevState.candidatos, dados]}))
            return
          }
       }
     return (
        <><form onSubmit={handleOnSubmit} className='formulario'>
             <InputTxtNmb
                 funcEv={this.hendleOnChange}
                 estado={this.state.formDados} />
             <InputsRadio
                 opcao={this.handleRadioChange} />
             <ButtonEnv texto={"enviar"} typeBotton={"submit"} />
              {(this.state.formDados.validate === "OFF") ? <MsgErro />: <p>Enviado com Sucesso!</p> }
         </form>
            <div className='lista'>
                  <h3>Lista de Candidatos</h3>
                    <button className='btnSortList' onClick={this.sortByEarliest.bind(this)}>
                   Do mais Antigo
                    </button>
                    <button className='btnSortList' onClick={this.sortByLatest.bind(this)}>
                    Do mais Recente
                    </button>
                  <div>
                <ListaCandidatos
                   ListaCandidatos={this.state.candidatos}
                   delete={this.removerCandidato}
                />
               </div>
        </div>
</>
       
     )
        
   }

}


export default Formulario