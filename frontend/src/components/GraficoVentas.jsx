import {

  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid

} from "recharts";

function GraficoVentas() {

  const pedidos =
    JSON.parse(
      localStorage.getItem("pedidos")
    ) || [];

  const datos = [

    {
      nombre: "Ventas",
      cantidad: pedidos.length
    }

  ];

  return (

    <div>

      <h4>
        📊 Gráfico de Ventas
      </h4>

      <BarChart
        width={500}
        height={300}
        data={datos}
      >

        <CartesianGrid />

        <XAxis dataKey="nombre" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="cantidad"
          fill="#2563eb"
        />

      </BarChart>

    </div>

  );
}

export default GraficoVentas;