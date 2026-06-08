import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';

function LoginForm() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    // Mencegah reload halaman otomatis
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card className="p-4 shadow-sm border-0" style={{ width: '100%', maxWidth: '400px', borderRadius: '12px' }}>
        <Card.Body>
          {/* Judul Form */}
          <h3 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.5rem' }}>
            Welcome to Jayjay Login
          </h3>

          {/* Form React Bootstrap dengan Validasi Natif */}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
            {/* Input Username */}
            <Form.Group className="mb-3" controlId="validationCustomUsername">
              <Form.Label className="fw-semibold text-secondary mb-1">Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Masukan Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Control.Feedback type="valid" className="text-success small mt-1">
                Username Valid
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Masukkan username yang valid.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Input Password */}
            <Form.Group className="mb-3" controlId="validationCustomPassword">
              <Form.Label className="fw-semibold text-secondary mb-1">Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Masukan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Password tidak boleh kosong!
              </Form.Control.Feedback>
            </Form.Group>

            {/* Checkbox Ingat Password */}
            <Form.Group className="mb-4" controlId="validationCustomCheckbox">
              <Form.Check
                required
                type="checkbox"
                label="Ingat Password"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                feedback="Kamu harus mengingat password!"
                feedbackType="invalid"
                className="text-danger small"
              />
            </Form.Group>

            {/* Block Button (Menggunakan utilitas w-100 milik Bootstrap) */}
            <Button type="submit" variant="primary" className="w-100 py-2 fw-semibold">
              Submit form
            </Button>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginForm;