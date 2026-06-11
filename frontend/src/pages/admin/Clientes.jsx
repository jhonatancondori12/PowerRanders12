import SidebarAdmin from "../../components/SidebarAdmin";
import Navbar from "../../components/Navbar";

function Clientes() {

  return (

    <div style={{display:"flex"}}>

      <SidebarAdmin />

      <div style={{width:"100%"}}>

        <Navbar />

        <div className="container mt-4">

          <h2>Clientes</h2>

          <table className="table table-bordered">

            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Juan Perez</td>
                <td>juan@gmail.com</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

export default Clientes;