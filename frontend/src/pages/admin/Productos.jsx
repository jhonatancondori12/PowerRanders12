import { useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin";
import Navbar from "../../components/Navbar";

function Productos() {

  const [buscar, setBuscar] = useState("");

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const [editando, setEditando] = useState(false);
  const [idEditar, setIdEditar] = useState(null);

  const [productos, setProductos] = useState([]);

  // AGREGAR

  const agregarProducto = () => {

    if (nombre.length < 3) {
      alert("Nombre inválido");
      return;
    }

    if (categoria === "") {
      alert("Seleccione una categoría");
      return;
    }

    if (precio <= 0) {
      alert("Precio inválido");
      return;
    }

    if (stock < 0) {
      alert("Stock inválido");
      return;
    }

    const nuevo = {

      id: Date.now(),

      nombre,
      categoria,
      precio,
      stock,

      estado: true
    };

    setProductos([
      ...productos,
      nuevo
    ]);

    limpiarFormulario();
  };

  // EDITAR

  const cargarProducto = (producto) => {

    setIdEditar(producto.id);

    setNombre(producto.nombre);
    setCategoria(producto.categoria);
    setPrecio(producto.precio);
    setStock(producto.stock);

    setEditando(true);
  };

  // ACTUALIZAR

  const actualizarProducto = () => {

    const nuevosProductos =
      productos.map((p) =>

        p.id === idEditar
          ? {
              ...p,
              nombre,
              categoria,
              precio,
              stock
            }
          : p
      );

    setProductos(nuevosProductos);

    limpiarFormulario();

    alert("Producto actualizado");
  };

  // ELIMINACIÓN LÓGICA

  const eliminarLogico = (id) => {

    const nuevosProductos =
      productos.map((p) =>

        p.id === id
          ? {
              ...p,
              estado: false
            }
          : p
      );

    setProductos(nuevosProductos);
  };

  // LIMPIAR

  const limpiarFormulario = () => {

    setNombre("");
    setCategoria("");
    setPrecio("");
    setStock("");

    setEditando(false);
    setIdEditar(null);
  };

  // BUSCAR

  const productosFiltrados =
    productos.filter((p) =>
      p.nombre
        .toLowerCase()
        .includes(
          buscar.toLowerCase()
        )
    );

  return (

    <div style={{ display: "flex" }}>

      <SidebarAdmin />

      <div style={{ width: "100%" }}>

        <Navbar />

        <div className="container mt-4">

          <h2>CRUD Productos</h2>

          <div className="card p-4 shadow">

            <input
              className="form-control mb-2"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) =>
                setNombre(e.target.value)
              }
            />

            <select
              className="form-control mb-2"
              value={categoria}
              onChange={(e) =>
                setCategoria(e.target.value)
              }
            >
              <option value="">
                Seleccione Categoría
              </option>

              <option>Hombre</option>
              <option>Mujer</option>
              <option>Niño</option>
              <option>Niña</option>
              <option>Bebé</option>

            </select>

            <input
              type="number"
              className="form-control mb-2"
              placeholder="Precio"
              value={precio}
              onChange={(e) =>
                setPrecio(e.target.value)
              }
            />

            <input
              type="number"
              className="form-control mb-3"
              placeholder="Stock"
              value={stock}
              onChange={(e) =>
                setStock(e.target.value)
              }
            />

            {
              editando
                ? (
                    <button
                      className="btn btn-warning"
                      onClick={
                        actualizarProducto
                      }
                    >
                      Actualizar Producto
                    </button>
                  )
                : (
                    <button
                      className="btn btn-success"
                      onClick={
                        agregarProducto
                      }
                    >
                      Agregar Producto
                    </button>
                  )
            }

          </div>

          <input
            className="form-control mt-4"
            placeholder="Buscar producto"
            value={buscar}
            onChange={(e) =>
              setBuscar(e.target.value)
            }
          />

          <table className="table table-striped mt-4">

            <thead>

              <tr>

                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Estado</th>
                <th>Acciones</th>

              </tr>

            </thead>

            <tbody>

              {
                productosFiltrados.map((p) => (

                  <tr key={p.id}>

                    <td>{p.nombre}</td>

                    <td>{p.categoria}</td>

                    <td>
                      Bs {p.precio}
                    </td>

                    <td>{p.stock}</td>

                    <td>

                      {
                        p.estado
                          ? "Activo"
                          : "Eliminado"
                      }

                    </td>

                    <td>

                      {
                        p.estado &&
                        (
                          <>
                            <button
                              className="btn btn-warning me-2"
                              onClick={() =>
                                cargarProducto(p)
                              }
                            >
                              Editar
                            </button>

                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                eliminarLogico(
                                  p.id
                                )
                              }
                            >
                              Eliminar
                            </button>
                          </>
                        )
                      }

                    </td>

                  </tr>

                ))
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

export default Productos;