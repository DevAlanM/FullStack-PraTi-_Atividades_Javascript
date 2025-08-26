import { useState, useEffect } from "react";

const FetchUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch user data: " + err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {users.length === 0 && <p>No user data found.</p>}

      <ul>
        {users.map((users) => (
          <li key={users.id}>
            {users.name} - {users.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchUser;
