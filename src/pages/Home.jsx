import React,{Component} from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route, Link} from "react-router-dom";
import Menu from '../components/Menu/Nav'
import FormCadrastro from './Formulario';
import Listagem from '../components/Listagem/Listagem'
import Carrossel from '../components/Carrossel/Carrossel'




class Home extends Component{
  constructor(props){
    super(props);
    this.nextId = 1;
    this.state = {
      formDados:{
        id: this.nextId++,
        nome: '',
        numero:'',
        cidade:'',
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
  

  
  removerCandidato = (idSelect)=>{
    this.setState( prevState=>(
      {candidatos: prevState.candidatos.filter(candidato =>
        candidato.id !== idSelect)}))
      }
      
      render(){
    
        const handleOnSubmit=(event)=>{
          event.preventDefault()
          const dados = this.state.formDados;
         if((dados.nome === '') || (dados.numero === '') || (dados.cidade === '') || (dados.estado === '')){ 
              this.setState({formDados:{...dados, validate: "OFF-F"}})
  
              return false
           } else{
               this.setState({formDados:{...dados, validate: "ON",id: this.nextId++}})
               this.setState(prevState =>({candidatos:[...prevState.candidatos, dados]}))
           return
         }
      }
       
        
        return (
 <>   
<Container fluid="md">

  <Menu/>

  <Routes>
    <Route path='/' element={<Carrossel/>}/>
    <Route path='/formulario' element={ <FormCadrastro  dados={this.state.formDados} formSubmit={handleOnSubmit} onChange={this.hendleOnChange}/>}/>
    <Route path='/listagem' element={ <Listagem ListaCandidatos={this.state.candidatos} delete={this.removerCandidato} />}/>
  </Routes>

</Container>
    


</>
        )
      }
    }
    
    
    export default Home;