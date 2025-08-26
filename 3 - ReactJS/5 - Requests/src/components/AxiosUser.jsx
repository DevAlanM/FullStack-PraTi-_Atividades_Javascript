import { useState, useEffect } from "react";
import axios from "axios";

const AxiosUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (e) => {
    const newUser = {
      name,
      email,
    };

    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users/",
        newUser
      );
      setMessage(`User ${response.data.name} created successfully!`);
      setLoading(false);
    } catch (err) {
      setError("Failed to create user: " + err.message);
      setLoading(false);
      return;
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setUsers(response.data);
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
      <h1>Create new User</h1>

      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <button onClick={createUser} disabled={loading}>
        {" "}
        {loading ? "Sending..." : "Create User"}
      </button>

      {message && <p style={{ color: "green" }}>{message}</p>}
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

export default AxiosUser;
