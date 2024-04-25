import React from 'react';
import {Container, Button, Col, Form, InputGroup, Row, Alert} from 'react-bootstrap';

 function Formulario (props){

      
    
        
        return (

  <>
        <Container fluid="md">
         
        
            <Form  onSubmit={props.formSubmit}>
            <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label>Name</Form.Label>
            <Form.Control
            type="text"
            placeholder="digite seu nome"
            name="nome"
            value={props.dados.nome}
            onChange={props.onChange}
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
            value={props.dados.numero}
            onChange={props.onChange}
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
           value={props.dados.cidade}
            onChange={props.onChange}
            />
            
           
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
            <Form.Label>Estado Civil</Form.Label>
            <Form.Control
            type="text"
            placeholder="Digite seu Estado Civil"
            name="estado"
            value={props.dados.estado}
            onChange={props.onChange}
            />
           
            </Form.Group>
            
            </Row>

            <Button variant="primary" type="submit">Candidatar-se</Button>
            </Form>
            </Container> 
            {props.dados.validate === "ON" && <Alert variant="success">
        Enviado com Sucesso!
        </Alert> || <Alert variant="warning">
        Falta dado a ser informado!
        </Alert>}
         
        
            
    </>
        );
      }
    
    
    
    export default Formulario;