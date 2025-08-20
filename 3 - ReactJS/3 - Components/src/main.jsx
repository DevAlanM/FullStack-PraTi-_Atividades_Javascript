import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LifeCycleClassComponent from "./components/LifeCycleClassComponent.jsx";
import "./index.css";
import LifeCycleFunctionalComponent from "./components/LifeCycleFunctionalComponent";
import ViaCepFunctional from "./components/ViaCepFunctional.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LifeCycleClassComponent />
    <LifeCycleFunctionalComponent />
    <ViaCepFunctional cep={"60130450"} />
  </StrictMode>
);
