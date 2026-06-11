import SidebarCliente from "../../components/SidebarCliente";
import Navbar from "../../components/Navbar";

function Catalogo() {

  const agregarCarrito = (producto) => {

    let carrito =
      JSON.parse(
        localStorage.getItem("carrito")
      ) || [];

    const existe =
      carrito.find(
        item => item.id === producto.id
      );

    if (existe) {

      existe.cantidad += 1;

    } else {

      carrito.push({
        ...producto,
        cantidad: 1
      });

    }

    localStorage.setItem(
      "carrito",
      JSON.stringify(carrito)
    );

    alert(
      producto.nombre +
      " agregado al carrito"
    );
  };

  const productos = [

    {
      id:1,
      nombre:"Nike Air Max 270",
      categoria:"Hombre",
      precio:450,
      imagen:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },

    {
      id:2,
      nombre:"Nike Revolution 7",
      categoria:"Hombre",
      precio:420,
      imagen:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
    },

    {
      id:3,
      nombre:"Adidas Run Falcon",
      categoria:"Hombre",
      precio:400,
      imagen:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
    },

    {
      id:4,
      nombre:"Adidas Duramo Speed",
      categoria:"Hombre",
      precio:480,
      imagen:"https://images.unsplash.com/photo-1543508282-6319a3e2621?w=500"
    },

    {
      id:5,
      nombre:"Puma Flyer Runner",
      categoria:"Hombre",
      precio:390,
      imagen:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500"
    },

    {
      id:6,
      nombre:"Nike Air Force Mujer",
      categoria:"Mujer",
      precio:470,
      imagen:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500"
    },

    {
      id:7,
      nombre:"Adidas Galaxy Mujer",
      categoria:"Mujer",
      precio:420,
      imagen:"https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500"
    },

    {
      id:8,
      nombre:"Puma Carina Mujer",
      categoria:"Mujer",
      precio:410,
      imagen:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500"
    },

    {
      id:9,
      nombre:"Skechers Go Walk",
      categoria:"Mujer",
      precio:430,
      imagen:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"
    },

    {
      id:10,
      nombre:"Reebok Lite Mujer",
      categoria:"Mujer",
      precio:390,
      imagen:"https://images.unsplash.com/photo-1528701800489-20be3c1ea3ef?w=500"
    },

    {
      id:11,
      nombre:"Nike Kids Sport",
      categoria:"Niño",
      precio:280,
      imagen:"https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500"
    },

    {
      id:12,
      nombre:"Adidas Kids Run",
      categoria:"Niño",
      precio:260,
      imagen:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500"
    },

    {
      id:13,
      nombre:"Puma Kids Active",
      categoria:"Niño",
      precio:250,
      imagen:"https://images.unsplash.com/photo-1543508282-6319a3e2621?w=500"
    },

    {
      id:14,
      nombre:"Nike Girls Pink",
      categoria:"Niña",
      precio:270,
      imagen:"https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500"
    },

    {
      id:15,
      nombre:"Adidas Girls Star",
      categoria:"Niña",
      precio:260,
      imagen:"https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=500"
    },

    {
      id:16,
      nombre:"Puma Girls Fashion",
      categoria:"Niña",
      precio:250,
      imagen:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500"
    },

    {
      id:17,
      nombre:"Baby Shoes Blue",
      categoria:"Bebé",
      precio:180,
      imagen:"https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=500"
    },

    {
      id:18,
      nombre:"Baby Shoes Pink",
      categoria:"Bebé",
      precio:180,
      imagen:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500"
    },

    {
      id:19,
      nombre:"Baby Sport White",
      categoria:"Bebé",
      precio:190,
      imagen:"https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500"
    },

    {
      id:20,
      nombre:"Baby Comfort Soft",
      categoria:"Bebé",
      precio:200,
      imagen:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500"
    }

  ];

  return (
    <div style={{display:"flex"}}>

      <SidebarCliente />

      <div style={{width:"100%"}}>

        <Navbar />

        <div className="container mt-4">

          <h2 className="text-center mb-4">
            👟 Catálogo PowerRanders
          </h2>

          <div className="row">

            {productos.map((p)=>(
              <div
                key={p.id}
                className="col-md-3 mb-4"
              >

                <div className="card shadow h-100">

                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="card-img-top"
                    style={{
                      height:"220px",
                      objectFit:"cover"
                    }}
                  />

                  <div className="card-body">

                    <h5>{p.nombre}</h5>

                    <p>
                      Categoría:
                      <strong>
                        {" "}
                        {p.categoria}
                      </strong>
                    </p>

                    <h4 style={{color:"green"}}>
                      Bs {p.precio}
                    </h4>

                    <button
                      className="btn btn-primary w-100"
                      onClick={() =>
                        agregarCarrito(p)
                      }
                    >
                      🛒 Agregar al Carrito
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Catalogo;