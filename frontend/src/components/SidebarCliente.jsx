import { Link } from "react-router-dom";

function SidebarCliente() {

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
        background: "#2563eb",
        padding: "20px"
      }}
    >
      <h3
        style={{
          color: "white",
          textAlign: "center"
        }}
      >
        👤 Mi Cuenta
      </h3>

      <hr style={{ color: "white" }} />

      <Link to="/cliente" style={menuStyle}>
        🏠 Inicio
      </Link>

      <Link to="/catalogo" style={menuStyle}>
        👟 Catálogo
      </Link>

      <Link to="/carrito" style={menuStyle}>
        🛒 Carrito
      </Link>

      <Link to="/pedidos" style={menuStyle}>
        📦 Mis Pedidos
      </Link>

      <Link to="/perfil" style={menuStyle}>
        ⚙ Mi Perfil
      </Link>

      <Link to="/" style={menuStyle}>
        🚪 Salir
      </Link>

    </div>
  );
}

export default SidebarCliente;