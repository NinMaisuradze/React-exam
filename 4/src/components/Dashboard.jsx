import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your control panel!</p>

      <nav>
        <Link to="/profile/elene">Go to Elene’s Profile</Link>
        <br />
        <Link to="/profile/nino">Go to Nino’s Profile</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
