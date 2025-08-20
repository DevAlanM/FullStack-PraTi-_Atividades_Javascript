function Produto(props) {
  return (
    <div className="produto">
      <h2>{props.name}</h2>      
      <p>Preço: R$ {props.price.toFixed(2)}</p>
      <p>Descrição: {props.description}</p>
      <button onClick={props.onComprar}>Comprar</button>
     
    </div>
  );
}

function App() {
  const produtos = [
    { id: 1, name: 'Produto 1', price: 29.99, description: 'Descrição do Produto 1' },
    { id: 2, name: 'Produto 2', price: 49.99, description: 'Descrição do Produto 2' },
    { id: 3, name: 'Produto 3', price: 19.99, description: 'Descrição do Produto 3' },
  ];

  const handleComprar = (produto) => {
    alert(`Você comprou ${produto.name}!`);
  };

  return (
    <div>
      {produtos.map(produto => (
        <Produto
          key={produto.id}
          name={produto.name}
          price={produto.price}
          description={produto.description}
          onComprar={() => handleComprar(produto)}
        />
      ))}
    </div>
  );
} 

export default App;