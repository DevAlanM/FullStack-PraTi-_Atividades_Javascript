import { useTheme } from "../context/theme";

export default function ThemeStatus() {
  const { theme } = useTheme();

  return <p>Tema atual: {theme}</p>;
}
