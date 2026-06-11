import SidebarAdmin from "../../components/SidebarAdmin";
import Navbar from "../../components/Navbar";

function Reportes() {

  return (

    <div style={{display:"flex"}}>

      <SidebarAdmin />

      <div style={{width:"100%"}}>

        <Navbar />

        <div className="container mt-4">

          <h2>Reportes</h2>

          <div className="card shadow p-4">

            <button className="btn btn-danger">
              Generar PDF
            </button>

            <button
              className="btn btn-success ms-2"
            >
              Exportar Excel
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Reportes;