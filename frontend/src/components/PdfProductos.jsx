import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function PdfProductos() {

  const generarPDF = () => {

    const productos =
      JSON.parse(
        localStorage.getItem("productos")
      ) || [];

    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text(
      "Reporte Productos PowerRanders",
      20,
      20
    );

    autoTable(doc, {

      startY: 35,

      head: [[
        "ID",
        "Producto",
        "Categoria",
        "Precio",
        "Stock"
      ]],

      body: productos.map((p) => [

        p.id,
        p.nombre,
        p.categoria,
        p.precio,
        p.stock

      ])

    });

    doc.save(
      "productos_powerranders.pdf"
    );
  };

  return (

    <button
      className="btn btn-danger"
      onClick={generarPDF}
    >
      📄 Generar PDF
    </button>

  );
}

export default PdfProductos;