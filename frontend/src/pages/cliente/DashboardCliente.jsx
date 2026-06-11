import SidebarCliente from "../../components/SidebarCliente";
import Navbar from "../../components/Navbar";

function DashboardCliente() {

  return (

    <div style={{display:"flex"}}>

      <SidebarCliente />

      <div style={{width:"100%"}}>

        <Navbar />

        <div className="container mt-4">

          <h2>🏠 Bienvenido a PowerRanders</h2>

          <div className="row mt-4">

            <div className="col-md-4">

              <div className="card shadow p-3">

                <h4>👟 Productos</h4>

                <h2>15</h2>

              </div>

            </div>

            <div className="col-md-4">

              <div className="card shadow p-3">

                <h4>🛒 Carrito</h4>

                <h2>0</h2>

              </div>

            </div>

            <div className="col-md-4">

              <div className="card shadow p-3">

                <h4>📦 Pedidos</h4>

                <h2>0</h2>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default DashboardCliente;