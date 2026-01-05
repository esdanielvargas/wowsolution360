import { ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import { goBack } from "../utils/goBack";

function Dashboard() {
  return (
    <div className="page">
      <Helmet>
        <title>DASHBOARD - WOW SOLUTION 360</title>
      </Helmet>
      <div className="page-header">
        <button type="button" className="icon-button" onClick={() => goBack()}>
          <ChevronLeft />
        </button>
        <div className="title">Dashboard</div>
        <button type="button" className="icon-button hidden"></button>
      </div>
      <div className="page-content">
        <relative-time lang="es" datetime="2024-05-24T16:30:00"></relative-time>
      </div>
    </div>
  );
}
export default Dashboard;
