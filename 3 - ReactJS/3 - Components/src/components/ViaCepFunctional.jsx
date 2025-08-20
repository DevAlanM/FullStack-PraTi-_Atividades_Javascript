import React, { useState, useEffect } from "react";

function ViaCepFunctional({ cep }) {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    console.log(`Fetching address for CEP: ${cep}`);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.erro) {
          throw new Error("CEP not found");
        }
        setAddress(data);
      })
      .catch((error) => {
        console.error("Error fetching address:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cep]);

  return (
    <div>
      <h2>CEP: {cep}</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {address && (
        <div>
          <p>Logradouro: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Cidade: {address.localidade}</p>
          <p>Estado: {address.uf}</p>
          <p>Complemento: {address.complemento}</p>
          <p>DDD: {address.ddd}</p>
          <p>IBGE: {address.ibge}</p>
          <p>GIA: {address.gia}</p>
          <p>SIAFI: {address.siafi}</p>
        </div>
      )}
    </div>
  );
}

export default ViaCepFunctional;
