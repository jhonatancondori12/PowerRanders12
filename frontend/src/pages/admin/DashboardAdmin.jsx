import SidebarAdmin from "../../components/SidebarAdmin";
import Navbar from "../../components/Navbar";

import PdfProductos from "../../components/PdfProductos";
import GraficoVentas from "../../components/GraficoVentas";

function DashboardAdmin() {

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f1f5f9"
      }}
    >

      <SidebarAdmin />

      <div style={{ width: "100%" }}>

        <Navbar />

        <div className="container mt-4">

          <h2
            className="fw-bold"
            style={{
              color: "#2563eb"
            }}
          >
            ⚡ Dashboard Administrador
          </h2>

          <p>
            Bienvenido al sistema
            PowerRanders - Venta de Tenis
            por Mayor y Menor
          </p>

          <div className="row mt-4">

            <div className="col-md-3">

              <div
                className="card shadow p-3 text-center"
                style={{
                  borderRadius: "15px"
                }}
              >

                <h5>👟 Productos</h5>

                <h2
                  style={{
                    color: "#2563eb"
                  }}
                >
                  15
                </h2>

              </div>

            </div>

            <div className="col-md-3">

              <div
                className="card shadow p-3 text-center"
                style={{
                  borderRadius: "15px"
                }}
              >

                <h5>👥 Clientes</h5>

                <h2
                  style={{
                    color: "#16a34a"
                  }}
                >
                  25
                </h2>

              </div>

            </div>

            <div className="col-md-3">

              <div
                className="card shadow p-3 text-center"
                style={{
                  borderRadius: "15px"
                }}
              >

                <h5>💰 Ventas</h5>

                <h2
                  style={{
                    color: "#f59e0b"
                  }}
                >
                  120
                </h2>

              </div>

            </div>

            <div className="col-md-3">

              <div
                className="card shadow p-3 text-center"
                style={{
                  borderRadius: "15px"
                }}
              >

                <h5>📦 Stock</h5>

                <h2
                  style={{
                    color: "#dc2626"
                  }}
                >
                  350
                </h2>

              </div>

            </div>

          </div>

          <div
            className="card shadow mt-4 p-4"
            style={{
              borderRadius: "15px"
            }}
          >

            <h4>
              📊 Reportes del Sistema
            </h4>

            <p>
              Generar reporte PDF de
              productos registrados.
            </p>

            <PdfProductos />

          </div>

          <div
            className="card shadow mt-4 p-4"
            style={{
              borderRadius: "15px"
            }}
          >

            <GraficoVentas />

          </div>

          <div
            className="card shadow mt-4 p-4"
            style={{
              borderRadius: "15px"
            }}
          >

            <h4>
              🚀 Información General
            </h4>

            <p>
              Sistema desarrollado con:
            </p>

            <ul>

              <li>React JS</li>

              <li>NestJS</li>

              <li>MySQL (XAMPP)</li>

              <li>JWT</li>

              <li>bcrypt</li>

              <li>CAPTCHA Aleatorio</li>

              <li>CRUD con Eliminación Lógica</li>

            </ul>

          </div>

        </div>

      </div>

    </div>

  );
}

export default DashboardAdmin;