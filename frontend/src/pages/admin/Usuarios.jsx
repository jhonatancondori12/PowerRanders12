import SidebarAdmin from "../../components/SidebarAdmin";
import Navbar from "../../components/Navbar";

function Usuarios() {

  return (

    <div style={{display:"flex"}}>

      <SidebarAdmin />

      <div style={{width:"100%"}}>

        <Navbar />

        <div className="container mt-4">

          <h2>Usuarios</h2>

          <table className="table table-hover">

            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Rol</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>admin</td>
                <td>ADMIN</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

export default Usuarios;