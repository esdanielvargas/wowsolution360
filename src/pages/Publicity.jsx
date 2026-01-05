import { ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import { goBack } from "../utils/goBack";

function Publicity() {
  return (
    <div className="page">
      <Helmet>
        <title>PUBLICITY - WOW SOLUTION 360</title>
      </Helmet>
      <div className="page-header">
        <button type="button" className="icon-button" onClick={() => goBack()}>
          <ChevronLeft />
        </button>
        <div className="title">Publicity</div>
        <button type="button" className="icon-button hidden"></button>
      </div>
    </div>
  );
}
export default Publicity;
