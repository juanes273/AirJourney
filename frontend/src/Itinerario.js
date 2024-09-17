// Itinerario.js
import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, Form, Alert, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2pdf from 'html2pdf.js';
import { FaPlaneDeparture } from 'react-icons/fa';
import './Itinerario.css'; // Importamos los estilos adicionales

const Itinerario = () => {
  const [itinerary, setItinerary] = useState(null);
  const [destino, setDestino] = useState('');
  const [dias, setDias] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateItinerary = async () => {
    if (!destino || !dias) {
      setError('Por favor, ingrese el destino y la cantidad de días.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/generateItinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ destino, dias }),
      });

      if (!response.ok) {
        throw new Error('Error al generar el itinerario. Inténtalo de nuevo.');
      }

      const data = await response.json();
      setItinerary(data.content); // Guardamos directamente el contenido de la API
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  const downloadPDF = () => {
    const element = document.getElementById('itinerary-content');
    html2pdf()
      .from(element)
      .save('itinerary.pdf');
  };

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

      {/* Banner */}
      <div className="banner">
        <div className="banner-text">
          <h2><b>"La vida es un viaje, viajar es vivir dos veces"</b></h2>
        </div>
      </div>

      {/* Contenido Principal */}
      <Container className="my-5">
        <h1 className="text-center mb-4"><b>Planifica tu Viaje con AirJourney</b></h1>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">Generar Itinerario</Card.Title>
                
                <Form.Group>
                  <Form.Label>Destino</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ejemplo: Cartagena"
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Días</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ejemplo: 2"
                    value={dias}
                    onChange={(e) => setDias(e.target.value)}
                  />
                </Form.Group>

                {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

                <div className="text-center">
                  <Button
                    className="mt-4 btn-lg"
                    onClick={generateItinerary}
                    disabled={loading}
                    variant="primary"
                  >
                    {loading ? 'Generando Itinerario...' : 'Generar Itinerario'}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {itinerary && (
          <div id="itinerary-content" className="my-5">
            <h2 className="text-center mb-4">Tu Itinerario Generado</h2>
            <Card className="mb-4">
              <Card.Body>
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                  {itinerary}
                </pre>
              </Card.Body>
            </Card>

            <div className="text-center">
              <Button variant="success" onClick={downloadPDF} className="btn-lg">
                Descargar Itinerario en PDF
              </Button>
            </div>
          </div>
        )}
      </Container>

      <footer className="text-center mt-5">
        <p>&copy; 2024 AirJourney. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default Itinerario;
