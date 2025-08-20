import { useState } from "react";

function Product() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("electronics");
  const [productDescription, setProductDescription] = useState("");

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("all");

  const handleProductName = (e) => {
    setProductName(e.target.value);
  };
  const handleProductPrice = (e) => {
    setProductPrice(e.target.value);
  };
  const handleProductCategory = (e) => {
    setProductCategory(e.target.value);
  };
  const handleProductDescription = (e) => {
    setProductDescription(e.target.value);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!productName || !productPrice || !productDescription) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    if (isNaN(productPrice) || parseFloat(productPrice) <= 0) {
      setError("O preço deve ser um número positivo.");
      return;
    }

    setError("");

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice).toFixed(2),
      category: productCategory,
      description: productDescription,
    };

    setProducts([...products, newProduct]);
    setProductName("");
    setProductPrice("");
    setProductDescription("");
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  const filteredProducts = products.filter(
    (prod) => categoryFilter === "all" || prod.category === categoryFilter
  );

  return (
    <div>
      <h1>Cadastro de Produtos</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleAddProduct}>
        <label>
          Nome do Produto:
          <input type="text" value={productName} onChange={handleProductName} />
        </label>
        <br />
        <label>
          Preço do Produto:
          <input
            type="number"
            value={productPrice}
            onChange={handleProductPrice}
          />
        </label>
        <br />
        <label>
          Categoria do Produto:
          <select value={productCategory} onChange={handleProductCategory}>
            <option value="electronics">Eletrônicos</option>
            <option value="clothing">Roupas</option>
            <option value="books">Livros</option>
            <option value="home">Casa</option>
          </select>
        </label>
        <br />
        <label>
          Descrição do Produto:
          <input
            type="text"
            value={productDescription}
            onChange={handleProductDescription}
          />
        </label>
        <br />
        <button type="submit">Adicionar Produto</button>
      </form>

      <label>
        Filtrar Por Categoria
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="electronics">Eletrônicos</option>
          <option value="clothing">Roupas</option>
          <option value="books">Livros</option>
          <option value="home">Casa</option>
        </select>
      </label>
      <br />

      <h2>Lista de Produtos</h2>
      <ul>
        {filteredProducts.map((prod) => (
          <li key={prod.id}>
            <h3>{prod.name}</h3>
            <p>Preço: R$ {prod.price}</p>
            <p>Categoria: {prod.category}</p>
            <p>Descrição: {prod.description}</p>
            <button onClick={() => handleDeleteProduct(prod.id)}>
              Remover Produto
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
