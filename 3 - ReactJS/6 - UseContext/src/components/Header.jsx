import { useAuth } from "../context/auth";

function Header() {
  const { user, login, logout } = useAuth();

  return (
    <header>
      {user ? (
        <>
          <p>Welcome, {user}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={() => login("Alan")}>Login</button>
        </div>
      )}
    </header>
  );
}

export default Header;
