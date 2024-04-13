import React,{Component} from 'react';



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
    
    
       
        
        return (
          <div>
            <h1>Home</h1>
          </div>
      
        );
      }
    }
    
    
    export default Home;