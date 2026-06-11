import { useEffect, useState } from "react";

function PedidosAdmin() {

  const [pedidos,setPedidos] =
    useState([]);

  useEffect(()=>{

    const datos =
      JSON.parse(
        localStorage.getItem(
          "pedidos"
        )
      ) || [];

    setPedidos(datos);

  },[]);

  return (

    <div className="container mt-4">

      <h2>
        📦 Pedidos Clientes
      </h2>

      <table className="table">

        <thead>

          <tr>

            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>

          </tr>

        </thead>

        <tbody>

          {
            pedidos.map(
              (p,index)=>(

                <tr key={index}>

                  <td>
                    {p.fecha}
                  </td>

                  <td>
                    Bs {p.total}
                  </td>

                  <td>
                    {p.estado}
                  </td>

                </tr>

              )
            )
          }

        </tbody>

      </table>

    </div>
  );
}

export default PedidosAdmin;