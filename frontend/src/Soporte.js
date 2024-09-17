// Soporte.js
import React from 'react';
import { Accordion, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FaPlaneDeparture } from 'react-icons/fa';
import './Itinerario.css'; // Importamos los mismos estilos usados en Itinerario

const Soporte = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">
            <FaPlaneDeparture className="me-2" />
            AirJourney
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#flights">Vuelos</Nav.Link>
              <Nav.Link href="#itinerary">Itinerario</Nav.Link>
              <Nav.Link href="#support">Soporte</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#logout">Cerrar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenido de Soporte - Centramos todo */}
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="mb-4">Soporte al Usuario</h1>
            <Accordion defaultActiveKey="0">
              {/* FAQ 1 */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>¿Cómo puedo comprar un vuelo en AirJourney?</Accordion.Header>
                <Accordion.Body>
                  Para comprar un vuelo, debes buscar tu destino, seleccionar la fecha de viaje y los pasajeros. Luego, elige entre las opciones de vuelos disponibles y sigue el proceso de pago seguro en nuestra plataforma.
                </Accordion.Body>
              </Accordion.Item>
              
              {/* FAQ 2 */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>¿Qué métodos de pago aceptan?</Accordion.Header>
                <Accordion.Body>
                  Aceptamos varios métodos de pago, incluyendo tarjetas de crédito y débito, PayPal, y transferencias bancarias. Asegúrate de verificar que el método de pago seleccionado esté disponible para tu región.
                </Accordion.Body>
              </Accordion.Item>
              
              {/* FAQ 3 */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>¿Puedo cancelar o modificar mi reserva?</Accordion.Header>
                <Accordion.Body>
                  Sí, puedes cancelar o modificar tu reserva dependiendo de la política de la aerolínea. Algunas tarifas no son reembolsables, así que asegúrate de revisar los términos y condiciones antes de realizar tu compra.
                </Accordion.Body>
              </Accordion.Item>

              {/* FAQ 4 */}
              <Accordion.Item eventKey="3">
                <Accordion.Header>¿Cómo obtengo el reembolso si cancelo un vuelo?</Accordion.Header>
                <Accordion.Body>
                  El reembolso depende de la política de la aerolínea. En la mayoría de los casos, puedes solicitar el reembolso desde la sección "Mis Reservas" en tu cuenta, y el reembolso se procesará en el método de pago original.
                </Accordion.Body>
              </Accordion.Item>

              {/* FAQ 5 */}
              <Accordion.Item eventKey="4">
                <Accordion.Header>¿Qué documentos necesito para viajar?</Accordion.Header>
                <Accordion.Body>
                  Necesitas un documento de identificación válido, como tu pasaporte para viajes internacionales o tu documento nacional para vuelos domésticos. Revisa si tu destino requiere visa o alguna documentación adicional.
                </Accordion.Body>
              </Accordion.Item>

              {/* FAQ 6 */}
              <Accordion.Item eventKey="5">
                <Accordion.Header>¿Cómo puedo verificar el estado de mi vuelo?</Accordion.Header>
                <Accordion.Body>
                  Puedes verificar el estado de tu vuelo en tiempo real en la sección "Mis Reservas" de tu cuenta o contactando directamente a la aerolínea.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <footer className="text-center mt-5">
        <p>&copy; 2024 AirJourney. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default Soporte;
