import React,{Component} from 'react';
import {Button, Col, Form, InputGroup, Row, Alert} from 'react-bootstrap';
import Listagem from '../components/Listagem/Listagem';



class Formulario extends Component{
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
         
        
            <Form  onSubmit={handleOnSubmit}>
            <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label>Name</Form.Label>
            <Form.Control
            type="text"
            placeholder="digite seu nome"
            name="nome"
            value={this.state.formDados.nome}
            onChange={this.hendleOnChange}
            />
            </Form.Group>
            
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
            <Form.Label>Telefone</Form.Label>
            <InputGroup hasValidation>
           
            <Form.Control
            type="number"
            placeholder="digite seu numero"
            aria-describedby="inputGroupPrepend"
            name="numero"
            value={this.state.formDados.numero}
            onChange={this.hendleOnChange}
            />
           
            </InputGroup>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
            type="text"
            placeholder="digite sua cidade"
            name="cidade"
            value={this.state.formDados.cidade}
            onChange={this.hendleOnChange}
            />
            
           
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
            <Form.Label>Estado Civil</Form.Label>
            <Form.Control
            type="text"
            placeholder="Digite seu Estado Civil"
            name="estado"
            value={this.state.formDados.estado}
            onChange={this.hendleOnChange}
            />
           
            </Form.Group>
            
            </Row>

            <Button variant="primary" type="submit">Candidatar-se</Button>
            </Form>
            {this.state.formDados.validate === "ON" ? <Alert variant="success">
        Enviado com Sucesso!
        </Alert> : <Alert variant="warning">
        Falta dado a ser informado!
        </Alert>}
         
        
              <div className='lista'>
              <h3>Lista de Candidatos</h3>
                <button className='btnSortList' onClick={this.sortByEarliest.bind(this)}>
               Do mais Antigo
                </button>
                <button className='btnSortList' onClick={this.sortByLatest.bind(this)}>
                Do mais Recente
                </button>
              <div>
            <Listagem
               ListaCandidatos={this.state.candidatos}
               delete={this.removerCandidato}
            />
           </div>
          </div>
    </>
        );
      }
    }
    
    
    export default Formulario;