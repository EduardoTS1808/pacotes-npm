import React from "react";
import {Button, Col, Form, InputGroup, Row} from 'react-bootstrap';

function FormCadrastro (){
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

    return(
    <>   
        <Form  onSubmit={handleOnSubmit}>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationFormik01">
        <Form.Label>Name</Form.Label>
        <Form.Control
        type="text"
        placeholder="digite seu nome"
        name="nome"
        // value={this.state.formDados.nome}
        // onChange={this.hendleOnChange}
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
        // value={this.state.formDados.numero}
        // onChange={this.hendleOnChange}
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
        // value={this.state.formDados.cidade}
        // onChange={this.hendleOnChange}
        />
        
       
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationFormik04">
        <Form.Label>Estado Civil</Form.Label>
        <Form.Control
        type="text"
        placeholder="Digite seu Estado Civil"
        name="estado"
        // value={this.state.formDados.estado}
        // onChange={this.hendleOnChange}
        />
       
        </Form.Group>
        
        </Row>

        <Button variant="primary" type="submit">Candidatar-se</Button>
        </Form>
        {/* {this.state.formDados.validate === "ON" ? <Alert variant="success">
    Enviado com Sucesso!
    </Alert> : <Alert variant="warning">
    Falta dado a ser informado!
    </Alert>}
      */}
    
  </>
    )
}



export default FormCadrastro