import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "#0f172a",
        padding: "15px"
      }}
    >
      <div className="container-fluid">

        <span
          className="navbar-brand fw-bold"
          style={{
            color: "#38bdf8",
            fontSize: "24px"
          }}
        >
          ⚡ PowerRanders
        </span>

        <button
          className="btn btn-danger"
          onClick={cerrarSesion}
        >
          Cerrar Sesión
        </button>

      </div>
    </nav>
  );
}

export default Navbar;