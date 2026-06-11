import SidebarAdmin from "../../components/SidebarAdmin";
import Navbar from "../../components/Navbar";

function Ventas() {

  return (

    <div style={{display:"flex"}}>

      <SidebarAdmin />

      <div style={{width:"100%"}}>

        <Navbar />

        <div className="container mt-4">

          <h2>Ventas</h2>

          <div className="card shadow p-4">

            <h4>Ventas Totales</h4>

            <h2>Bs 45.000</h2>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Ventas;