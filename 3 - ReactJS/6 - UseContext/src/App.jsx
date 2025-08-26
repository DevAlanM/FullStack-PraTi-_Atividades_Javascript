import { ThemeProvider } from "./context/theme";
import ThemeToggle from "./components/ThemeStatus.jsx";
import ThemeStatus from "./components/ThemeToggle.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 20 }}>
        <h1>Mini-app de Tema</h1>
        <ThemeToggle />
        <ThemeStatus />
      </div>
    </ThemeProvider>
  );
}
