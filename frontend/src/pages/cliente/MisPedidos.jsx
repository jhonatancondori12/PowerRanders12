import SidebarCliente from "../../components/SidebarCliente";
import Navbar from "../../components/Navbar";

function MisPedidos() {

  return (

    <div style={{display:"flex"}}>

      <SidebarCliente />

      <div style={{width:"100%"}}>

        <Navbar />

        <div className="container mt-4">

          <h2>📦 Mis Pedidos</h2>

          <div className="card shadow p-4">

            <p>
              No existen pedidos registrados.
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default MisPedidos;