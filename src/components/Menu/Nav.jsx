import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function PillsExample() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">
          <Link to='/'>Home</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <Link to='/formulario'>Formulário</Link>
          </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" >
        <Link to='/listagem'>Listagem</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default PillsExample;