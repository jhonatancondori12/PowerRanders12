import SidebarCliente from "../../components/SidebarCliente";
import Navbar from "../../components/Navbar";

function Perfil() {

  return (

    <div style={{display:"flex"}}>

      <SidebarCliente />

      <div style={{width:"100%"}}>

        <Navbar />

        <div className="container mt-4">

          <h2>👤 Mi Perfil</h2>

          <div className="card shadow p-4">

            <p><b>Nombre:</b> Cliente</p>

            <p><b>Correo:</b> cliente@gmail.com</p>

            <p><b>Rol:</b> CLIENTE</p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Perfil;