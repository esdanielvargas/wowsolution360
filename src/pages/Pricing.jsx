import { ChevronLeft, Plus } from "lucide-react";
import { goBack } from "../utils/goBack";

function Pricing() {
  const services = [
    {
      name: "Puerta de vibrio ducha",
      price: 100,
    },
    {
      name: "Puerta de vibrio ducha",
      price: 100,
    },
    {
      name: "Puerta de vibrio ducha",
      price: 100,
    },
    {
      name: "Puerta de vibrio ducha",
      price: 100,
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <button
          type="button"
          className="icon-button"
          title="Go back"
          onClick={() => goBack()}
        >
          <ChevronLeft size={22} />
        </button>
        <div className="title">Pricing</div>
        <button type="button" className="icon-button" title="New item">
          <Plus size={22} />
        </button>
      </div>
      <div className="page-content">
        <table className="table" cellSpacing={0}>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Description</th>
            <th>Categoría</th>
            <th>Código</th>
            <th>Tipo</th>
          </tr>
          {services.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{"$" + row.price.toFixed(2) + " USD"}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default Pricing;
