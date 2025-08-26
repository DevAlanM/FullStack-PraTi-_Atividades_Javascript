import { useTheme } from "../context/theme";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Alternar tema</button>;
}
