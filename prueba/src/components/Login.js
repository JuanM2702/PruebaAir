import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import './login.css';
import logoImage from '../img/descarga.png'; 
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptcha(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const csrfResponse = await fetch("/get-csrf-token");
    const csrfData = await csrfResponse.json();
    setCsrfToken(csrfData.csrfToken);

    const response = await fetch("/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CSRF-Token": csrfToken,
      },
      body: JSON.stringify({ username, password, captcha }),
    });

    const responseData = await response.json();
    console.log(responseData);
  };

  return (
    <div className="login-container">
      <div className="login-content">
      <img src={logoImage} alt="Logo" className="logo" />

        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <ReCAPTCHA
            sitekey="tu-clave-de-sitio-recaptcha"
            onChange={handleCaptchaChange}
          />
          <br />
          <button type="submit">Iniciar sesión</button>
        </form>
        <p>
          ¿No tienes una cuenta? <a href="/register">Registrarse</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
