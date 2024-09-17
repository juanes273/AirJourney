import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');  // Estado para el email
  const [password, setPassword] = useState('');  // Estado para la contraseña
  const [errorMessage, setErrorMessage] = useState('');  // Para manejar errores
  const [loading, setLoading] = useState(false); // Estado de carga

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    setLoading(true); // Iniciar el estado de carga
    setErrorMessage(''); // Limpiar el mensaje de error antes de intentar el login

    // Datos del usuario que se envían al backend
    const loginData = {
      email,
      password,
    };

    try {
      // Realizamos la solicitud POST al backend
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),  // Enviamos los datos como JSON
      });

      const data = await response.json();  // Parseamos la respuesta a JSON

      if (response.ok) {
        // Si el login es exitoso, puedes redirigir al usuario o guardar el token
        console.log('Login exitoso:', data);
        alert('Login exitoso');
      } else {
        // Si hubo un error, mostrar el mensaje devuelto por el backend
        setErrorMessage(data.message || 'Error al iniciar sesión. Verifica tus credenciales.');
      }
    } catch (error) {
      // Manejo de errores en la solicitud (como problemas de conexión)
      console.error('Error en la solicitud:', error);
      setErrorMessage('Error de conexión. Intenta más tarde.');
    } finally {
      setLoading(false);  // Finaliza el estado de carga
    }
  };

  return (
    <div className="login-container container-fluid">
      <div className="row no-gutters vh-100">
        {/* Imagen en la mitad izquierda */}
        <div className="col-md-6 d-none d-md-block left-side">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/07/14/40/airplane-2604540_960_720.jpg"
            alt="Airplane"
            className="img-cover"
          />
        </div>

        {/* Formulario de login en la mitad derecha */}
        <div className="col-md-6 right-side d-flex justify-content-center align-items-center">
          <div className="login-form text-center">
            <h1 className="mb-4">AirJourney</h1>

            {/* Mostrar un mensaje de error si lo hay */}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}  // Actualiza el estado del email
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}  // Actualiza el estado de la contraseña
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </button>
              {/* Botón para registrarse */}
              <button
                type="button"
                className="btn btn-link mt-3"
                // Aquí podrías agregar una función para manejar el clic si es necesario
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
