import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FetchUser from "./components/FetchUser";
import AxiosUser from "./components/AxiosUser";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FetchUser />
    <AxiosUser />
  </StrictMode>
);
