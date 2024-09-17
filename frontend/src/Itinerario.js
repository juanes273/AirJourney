
import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2pdf from 'html2pdf.js';

const Itinerario = () => {
  const [itinerary, setItinerary] = useState(null);
  const [destino, setDestino] = useState('');
  const [dias, setDias] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Función para consumir la API y generar el itinerario
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

  // Función para descargar el itinerario en PDF
  const downloadPDF = () => {
    const element = document.getElementById('itinerary-content');
    html2pdf()
      .from(element)
      .save('itinerary.pdf');
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">AirJourney - Planifica tu Viaje</h1>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Generar Itinerario</Card.Title>
              
              {/* Input para el destino */}
              <Form.Group>
                <Form.Label>Destino</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ejemplo: Cartagena"
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                />
              </Form.Group>

              {/* Input para los días */}
              <Form.Group>
                <Form.Label>Días</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ejemplo: 2"
                  value={dias}
                  onChange={(e) => setDias(e.target.value)}
                />
              </Form.Group>

              {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

              <Button className="mt-3" onClick={generateItinerary} disabled={loading}>
                {loading ? 'Generando Itinerario...' : 'Generar Itinerario'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Visualización del Itinerario */}
      {itinerary && (
        <div id="itinerary-content" className="my-5">
          <h2 className="text-center">Tu Itinerario Generado</h2>
          <Card className="mb-4">
            <Card.Body>
              <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                {itinerary}
              </pre>
            </Card.Body>
          </Card>

          <div className="text-center">
            <Button variant="success" onClick={downloadPDF}>Descargar Itinerario en PDF</Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Itinerario;
