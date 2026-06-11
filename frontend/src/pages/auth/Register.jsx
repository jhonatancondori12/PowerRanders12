import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const fuerzaPassword = () => {

    if (password.length < 6)
      return "Débil";

    if (
      password.length >= 6 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password)
    )
      return "Media";

    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[@#$%^&*!]/.test(password)
    )
      return "Fuerte";

    return "Débil";
  };

  const registrar = async () => {

    try {

      const response =
        await fetch(
          "http://localhost:3000/users",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              nombre,
              correo,
              usuario,
              password,

              rol: "CLIENTE",

            }),
          }
        );

      if (response.ok) {

        alert(
          "Usuario registrado correctamente"
        );

        navigate("/");

      } else {

        alert(
          "Error al registrar usuario"
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Error de conexión con backend"
      );
    }
  };

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2>Registro Cliente</h2>

        <input
          className="form-control mt-3"
          placeholder="Nombre"
          value={nombre}
          onChange={(e)=>
            setNombre(e.target.value)
          }
        />

        <input
          className="form-control mt-3"
          placeholder="Correo"
          value={correo}
          onChange={(e)=>
            setCorreo(e.target.value)
          }
        />

        <input
          className="form-control mt-3"
          placeholder="Usuario"
          value={usuario}
          onChange={(e)=>
            setUsuario(e.target.value)
          }
        />

        <input
          type="password"
          className="form-control mt-3"
          placeholder="Contraseña"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <div className="mt-2">

          Fuerza:

          <strong>
            {" "}
            {fuerzaPassword()}
          </strong>

        </div>

        <button
          className="btn btn-success mt-3"
          onClick={registrar}
        >
          Registrarse
        </button>

      </div>

    </div>
  );
}

export default Register;