import { useEffect, useState } from 'react';
import {
  Accordion,
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Modal,
  Nav,
  Navbar,
  Row,
  Spinner
} from 'react-bootstrap';
import { API_BASE_URL } from '../config/api';

const features = [
  {
    title: 'Responsive Navbar',
    text: 'A mobile-friendly navigation bar that collapses automatically on smaller screens.',
    badge: 'Navigation'
  },
  {
    title: 'Bootstrap Grid',
    text: 'Container, Row and Col make it easy to build responsive layouts for desktop and mobile browsers.',
    badge: 'Layout'
  },
  {
    title: 'Cards & Buttons',
    text: 'Reusable Bootstrap cards and button variants give the website a clean, consistent UI.',
    badge: 'Components'
  }
];

export default function HomeScreen() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const loadApi = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/hello`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message || 'Could not reach API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <div className="min-vh-100 bg-light">
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            Universal App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#api">API</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="bg-white border-bottom">
        <Container className="py-5 py-lg-6">
          <Row className="align-items-center g-4 py-lg-5">
            <Col lg={7}>
              <Badge bg="primary" className="mb-3 px-3 py-2">
                REACT NATIVE WEB + EXPRESS
              </Badge>
              <h1 className="display-4 fw-bold mb-3">
                A responsive website built with React-Bootstrap
              </h1>
              <p className="lead text-secondary mb-4">
                The browser UI uses Bootstrap components, while the same project can still run as a React Native mobile app.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button size="lg" onClick={() => setShowModal(true)}>
                  Open Bootstrap Modal
                </Button>
                <Button size="lg" variant="outline-secondary" href="#features">
                  View Features
                </Button>
              </div>
            </Col>

            <Col lg={5}>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-4">
                  <Card.Title className="mb-3">Included in this demo</Card.Title>
                  <ul className="mb-0 text-secondary">
                    <li className="mb-2">Responsive navigation bar</li>
                    <li className="mb-2">Bootstrap grid system</li>
                    <li className="mb-2">Cards, badges and buttons</li>
                    <li className="mb-2">Alerts and loading spinner</li>
                    <li className="mb-2">Accordion</li>
                    <li>Modal popup</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="features">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Bootstrap Features</h2>
            <p className="text-secondary mb-0">
              Ready-made components that adapt across browser sizes.
            </p>
          </div>

          <Row className="g-4">
            {features.map((feature) => (
              <Col md={6} lg={4} key={feature.title}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body className="p-4">
                    <Badge bg="secondary" className="mb-3">
                      {feature.badge}
                    </Badge>
                    <Card.Title as="h3" className="h5">
                      {feature.title}
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      {feature.text}
                    </Card.Text>
                    <Button variant="outline-primary" onClick={() => setShowModal(true)}>
                      Try Component
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="api" className="bg-white border-top border-bottom">
        <Container className="py-5" style={{ maxWidth: 900 }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Express API Connection</h2>
            <p className="text-secondary">
              This section calls the Express backend running on port 4000.
            </p>
          </div>

          <Card className="shadow-sm border-0">
            <Card.Body className="p-4 p-md-5 text-center">
              {loading && (
                <div className="py-3">
                  <Spinner animation="border" role="status" />
                  <div className="mt-2 text-secondary">Connecting to API...</div>
                </div>
              )}

              {!loading && error && (
                <Alert variant="danger" className="text-start">
                  <strong>API error:</strong> {error}
                </Alert>
              )}

              {!loading && !error && (
                <Alert variant="success" className="text-start">
                  <strong>Server says:</strong> {message}
                </Alert>
              )}

              <Button onClick={loadApi} disabled={loading}>
                Refresh API
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <section id="faq">
        <Container className="py-5" style={{ maxWidth: 900 }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold">FAQ</h2>
          </div>

          <Accordion defaultActiveKey="0" className="shadow-sm">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Why use React-Bootstrap?</Accordion.Header>
              <Accordion.Body>
                React-Bootstrap provides Bootstrap components as React components, so you can build common website UI without manually wiring Bootstrap JavaScript.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Does Bootstrap run on native Android and iOS?</Accordion.Header>
              <Accordion.Body>
                No. React-Bootstrap is used only by the web-specific screen. The native screen uses React Native components instead.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Which ports are used?</Accordion.Header>
              <Accordion.Body>
                Vite runs the browser client on port 5173, Express runs on port 4000, and Expo/Metro uses port 8081 for the mobile app.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <footer className="bg-dark text-white py-4">
        <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span>Universal App</span>
          <span className="text-white-50">React Native Web · React-Bootstrap · Express</span>
        </Container>
      </footer>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Bootstrap Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This popup is created using the React-Bootstrap Modal component.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
