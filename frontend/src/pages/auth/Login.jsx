import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const [captchaGenerado, setCaptchaGenerado] =
    useState("");

  const [captchaUsuario, setCaptchaUsuario] =
    useState("");

  const generarCaptcha = () => {

    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let captcha = "";

    for (let i = 0; i < 6; i++) {

      captcha += caracteres.charAt(
        Math.floor(
          Math.random() *
          caracteres.length
        )
      );

    }

    setCaptchaGenerado(captcha);

  };

  useEffect(() => {

    generarCaptcha();

  }, []);

  const ingresar = async () => {

    if (
      captchaUsuario !==
      captchaGenerado
    ) {

      alert(
        "CAPTCHA incorrecto"
      );

      generarCaptcha();

      setCaptchaUsuario("");

      return;

    }

    try {

      const response =
        await fetch(
          "http://localhost:3001/users"
        );

      const usuarios =
        await response.json();

      const encontrado =
        usuarios.find(
          (u) =>
            u.usuario === usuario
        );

      if (!encontrado) {

        alert(
          "Usuario no encontrado"
        );

        return;

      }

      localStorage.setItem(
        "usuario",
        JSON.stringify(
          encontrado
        )
      );

      localStorage.setItem(
        "token",
        "TOKEN_DE_PRUEBA"
      );

      try {

        await fetch(
          "http://localhost:3001/logs",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              usuario:
                encontrado.usuario,

              ip:
                "127.0.0.1",

              browser:
                navigator.userAgent,

              evento:
                "Inicio de Sesion",

            }),

          }
        );

      } catch {

        console.log(
          "No se pudo registrar log"
        );

      }

      if (
        encontrado.rol ===
        "ADMIN"
      ) {

        navigate("/admin");

      } else {

        navigate("/cliente");

      }

    } catch (error) {

      console.error(error);

      alert(
        "Error de conexión con backend"
      );

    }

  };

  return (

    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <div
        className="card shadow-lg"
        style={{
          width: "500px",
          padding: "35px",
          borderRadius: "20px"
        }}
      >

        <h1
          className="text-center"
          style={{
            color: "#2563eb",
            fontWeight: "bold"
          }}
        >
          ⚡ PowerRanders
        </h1>

        <h5
          className="text-center mb-4"
        >
          Venta de Tenis por Mayor y Menor
        </h5>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) =>
            setUsuario(
              e.target.value
            )
          }
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <label
          className="fw-bold mb-2"
        >
          CAPTCHA
        </label>

        <div
          style={{
            background:
              "#f1f5f9",
            fontSize: "28px",
            fontWeight:
              "bold",
            textAlign:
              "center",
            letterSpacing:
              "5px",
            padding: "10px",
            borderRadius:
              "10px",
            marginBottom:
              "10px"
          }}
        >
          {captchaGenerado}
        </div>

        <button
          className="btn btn-warning mb-3"
          onClick={
            generarCaptcha
          }
        >
          🔄 Nuevo CAPTCHA
        </button>

        <input
          className="form-control mb-3"
          placeholder="Escriba el CAPTCHA"
          value={captchaUsuario}
          onChange={(e) =>
            setCaptchaUsuario(
              e.target.value
            )
          }
        />

        <button
          className="btn btn-primary w-100"
          onClick={
            ingresar
          }
        >
          Ingresar
        </button>

        <Link
          to="/register"
          className="btn btn-success w-100 mt-2"
        >
          Crear Cuenta
        </Link>

      </div>

    </div>

  );

}

export default Login;