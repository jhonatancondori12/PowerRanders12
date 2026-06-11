import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// AUTH
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// ADMIN
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import Productos from "../pages/admin/Productos";
import Clientes from "../pages/admin/Clientes";
import Ventas from "../pages/admin/Ventas";
import Usuarios from "../pages/admin/Usuarios";
import Reportes from "../pages/admin/Reportes";

// CLIENTE
import DashboardCliente from "../pages/cliente/DashboardCliente";
import Catalogo from "../pages/cliente/Catalogo";
import Carrito from "../pages/cliente/Carrito";
import MisPedidos from "../pages/cliente/MisPedidos";
import Perfil from "../pages/cliente/Perfil";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* AUTH */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* ADMIN */}

        <Route
          path="/admin"
          element={<DashboardAdmin />}
        />

        <Route
          path="/productos"
          element={<Productos />}
        />

        <Route
          path="/clientes"
          element={<Clientes />}
        />

        <Route
          path="/ventas"
          element={<Ventas />}
        />

        <Route
          path="/usuarios"
          element={<Usuarios />}
        />

        <Route
          path="/reportes"
          element={<Reportes />}
        />

        {/* CLIENTE */}

        <Route
          path="/cliente"
          element={<DashboardCliente />}
        />

        <Route
          path="/catalogo"
          element={<Catalogo />}
        />

        <Route
          path="/carrito"
          element={<Carrito />}
        />

        <Route
          path="/pedidos"
          element={<MisPedidos />}
        />

        <Route
          path="/perfil"
          element={<Perfil />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default AppRoutes;