import { Link } from "react-router-dom";

function SidebarAdmin() {

  const menuStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "8px"
  };

  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#0f172a",
        padding: "20px"
      }}
    >
      <h3
        style={{
          color: "#38bdf8",
          textAlign: "center"
        }}
      >
        ⚡ PowerRanders
      </h3>

      <hr style={{ color: "white" }} />

      <Link to="/admin" style={menuStyle}>
        📊 Dashboard
      </Link>

      <Link to="/productos" style={menuStyle}>
        👟 Productos
      </Link>

      <Link to="/clientes" style={menuStyle}>
        👥 Clientes
      </Link>

      <Link to="/ventas" style={menuStyle}>
        💰 Ventas
      </Link>

      <Link to="/usuarios" style={menuStyle}>
        👨‍💻 Usuarios
      </Link>

      <Link to="/reportes" style={menuStyle}>
        📄 Reportes
      </Link>

      <Link to="/" style={menuStyle}>
        🚪 Salir
      </Link>

    </div>
  );
}

export default SidebarAdmin;