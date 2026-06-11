import { useState, useEffect } from "react";

import SidebarCliente from "../../components/SidebarCliente";
import Navbar from "../../components/Navbar";

function Carrito() {

  const [carrito, setCarrito] =
    useState([]);

  useEffect(() => {

    const datos =
      JSON.parse(
        localStorage.getItem("carrito")
      ) || [];

    setCarrito(datos);

  }, []);

  const eliminarProducto = (id) => {

    const nuevoCarrito =
      carrito.filter(
        item => item.id !== id
      );

    setCarrito(nuevoCarrito);

    localStorage.setItem(
      "carrito",
      JSON.stringify(nuevoCarrito)
    );
  };

  const total = carrito.reduce(
    (acc, item) =>
      acc +
      (item.precio * item.cantidad),
    0
  );

  const confirmarCompra = () => {

    const pedidos =
      JSON.parse(
        localStorage.getItem("pedidos")
      ) || [];

    pedidos.push({

      fecha:
        new Date()
          .toLocaleString(),

      productos:
        carrito,

      total,

      estado:
        "Pendiente"

    });

    localStorage.setItem(
      "pedidos",
      JSON.stringify(pedidos)
    );

    localStorage.removeItem(
      "carrito"
    );

    alert(
      "Compra realizada correctamente"
    );

    setCarrito([]);
  };

  return (

    <div style={{display:"flex"}}>

      <SidebarCliente />

      <div style={{width:"100%"}}>

        <Navbar />

        <div className="container mt-4">

          <h2>🛒 Mi Carrito</h2>

          <table className="table table-bordered">

            <thead>

              <tr>

                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acción</th>

              </tr>

            </thead>

            <tbody>

              {
                carrito.length === 0 ?

                <tr>

                  <td colSpan="5">
                    No existen productos
                  </td>

                </tr>

                :

                carrito.map((item)=>(
                  <tr key={item.id}>

                    <td>{item.nombre}</td>

                    <td>
                      Bs {item.precio}
                    </td>

                    <td>
                      {item.cantidad}
                    </td>

                    <td>
                      Bs {
                        item.precio *
                        item.cantidad
                      }
                    </td>

                    <td>

                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          eliminarProducto(
                            item.id
                          )
                        }
                      >
                        Eliminar
                      </button>

                    </td>

                  </tr>
                ))
              }

            </tbody>

          </table>

          <h3>
            Total: Bs {total}
          </h3>

          {
            carrito.length > 0 &&

            <button
              className="btn btn-success"
              onClick={
                confirmarCompra
              }
            >
              Confirmar Compra
            </button>
          }

        </div>

      </div>

    </div>

  );
}

export default Carrito;