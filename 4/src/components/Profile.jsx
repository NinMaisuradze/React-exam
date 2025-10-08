import { useParams, Link } from "react-router-dom";

function Profile() {
  const { username } = useParams();

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Currently viewing profile of: <strong>{username}</strong></p>

      <Link to="/">Back to Dashboard</Link>
    </div>
  );
}

export default Profile;
