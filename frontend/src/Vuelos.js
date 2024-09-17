import React, { useState, useEffect } from 'react';
import { Button, Container, Form, ListGroup, Card, Navbar, Nav, Col, Row } from 'react-bootstrap';
import { FaPlaneDeparture } from 'react-icons/fa';

const Vuelos = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState({ start: '', end: '' });
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [trips, setTrips] = useState([]);

  // Datos de muestra
  const sampleFlights = [
    { id: 1, airline: 'Airline A', price: '$500', duration: '3h 45m', stops: '1' },
    { id: 2, airline: 'Airline B', price: '$450', duration: '4h 10m', stops: '0' },
    { id: 3, airline: 'Airline C', price: '$550', duration: '2h 30m', stops: '2' },
  ];

  const sampleRecommendations = [
    { id: 1, name: 'Cancún, México' },
    { id: 2, name: 'Barcelona, España' },
    { id: 3, name: 'Tokio, Japón' },
  ];

  const sampleReviews = [
    { id: 1, author: 'Juan Pérez', text: 'Excelente experiencia. Muy cómodo y puntual.', rating: '4.5/5' },
    { id: 2, author: 'María López', text: 'El vuelo fue retrasado, pero el servicio fue bueno.', rating: '3.5/5' },
    { id: 3, author: 'Carlos Gómez', text: 'Todo perfecto, recomiendo esta aerolínea.', rating: '5/5' },
  ];

  const sampleTrips = [
    { id: 1, date: '2024-08-15', destination: 'Nueva York' },
    { id: 2, date: '2024-07-10', destination: 'Londres' },
    { id: 3, date: '2024-06-05', destination: 'París' },
  ];

  // Funciones de búsqueda
  const handleSearch = async () => {
    // Simulación de búsqueda
    setFlights(sampleFlights);
  };

  // Cargar datos de muestra
  useEffect(() => {
    setRecommendations(sampleRecommendations);
    setReviews(sampleReviews);
    setTrips(sampleTrips);
  }, []);

  return (
    <div>
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
      <div className="banner bg-primary text-white text-center py-4 mb-4">
        <div className="banner-text">
          <h2><b>"Tus vuelos de una forma facil y rapida"</b></h2>
        </div>
      </div>

      <Container>
        <h1 className="my-4 text-center"><b>Planificador de Viajes</b></h1>

        {/* Sección de búsqueda de vuelos */}
        <Card className="mb-4 shadow-sm">
          <Card.Header className="bg-primary text-white">Buscar Vuelos</Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formOrigin">
                    <Form.Label>Ciudad de Origen</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ciudad de Origen"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formDestination">
                    <Form.Label>Ciudad de Destino</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ciudad de Destino"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="my-3">
                <Col md={6}>
                  <Form.Group controlId="formStartDate">
                    <Form.Label>Fecha de Inicio</Form.Label>
                    <Form.Control
                      type="date"
                      value={dates.start}
                      onChange={(e) => setDates({ ...dates, start: e.target.value })}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEndDate">
                    <Form.Label>Fecha de Fin</Form.Label>
                    <Form.Control
                      type="date"
                      value={dates.end}
                      onChange={(e) => setDates({ ...dates, end: e.target.value })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="btn btn-dark" onClick={handleSearch} className="w-100">Buscar</Button>
            </Form>
          </Card.Body>
        </Card>

        {/* Lista de vuelos */}
        {flights.length > 0 && (
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-primary text-white">Resultados de la Búsqueda</Card.Header>
            <ListGroup variant="flush">
              {flights.map((flight) => (
                <ListGroup.Item key={flight.id}>
                  <div>{flight.airline} - {flight.price}</div>
                  <Button variant="link" onClick={() => setSelectedFlight(flight)} className="text-primary">Ver Detalles</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        )}

        {/* Sección de detalles del vuelo seleccionado */}
        {selectedFlight && (
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-primary text-white">Detalles del Vuelo</Card.Header>
            <Card.Body>
              <p><strong>Aerolínea:</strong> {selectedFlight.airline}</p>
              <p><strong>Precio:</strong> {selectedFlight.price}</p>
              <p><strong>Duración:</strong> {selectedFlight.duration}</p>
              <p><strong>Escalas:</strong> {selectedFlight.stops}</p>
              <Button variant="success">Seleccionar Vuelo</Button>
            </Card.Body>
          </Card>
        )}

        {/* Sección de recomendaciones de destinos */}
        <Card className="mb-4 shadow-sm">
          <Card.Header className="bg-primary text-white">Recomendaciones de Destinos</Card.Header>
          <Card.Body>
            <ListGroup>
              {recommendations.map((dest) => (
                <ListGroup.Item key={dest.id}>{dest.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>

        {/* Sección de reseñas y valoraciones */}
        <Card className="mb-4 shadow-sm">
          <Card.Header className="bg-primary text-white">Reseñas y Valoraciones</Card.Header>
          <Card.Body>
            <ListGroup>
              {reviews.map((review) => (
                <ListGroup.Item key={review.id}>
                  <div><strong>{review.author}</strong>: {review.text}</div>
                  <div><strong>Valoración:</strong> {review.rating}</div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>

        {/* Sección del historial de viajes */}
        <Card className="mb-4 shadow-sm">
          <Card.Header className="bg-primary text-white">Historial de Viajes</Card.Header>
          <Card.Body>
            <ListGroup>
              {trips.map((trip) => (
                <ListGroup.Item key={trip.id}>
                  {trip.date} - {trip.destination}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>

        
      </Container>
    </div>
  );
};

export default Vuelos;
