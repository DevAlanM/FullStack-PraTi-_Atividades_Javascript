import { useState } from "react";

const content = [
  {
    label: "Por que React?",
    items: [
      "1 React é extremamente popular",
      "Facilita a criação de interfaces de usuário complexas e interativas",
      "É poderoso e flexível",
      "Possui um ecossistema muito ativo e versátil",
    ],
  },
  {
    label: "Por que não React?",
    items: [
      "2 React é extremamente popular",
      "Facilita a criação de interfaces de usuário complexas e interativas",
      "É poderoso e flexível",
      "Possui um ecossistema muito ativo e versátil",
    ],
  },
  {
    label: "React?",
    items: [
      "3 React é extremamente popular",
      "Facilita a criação de interfaces de usuário complexas e interativas",
      "É poderoso e flexível",
      "Possui um ecossistema muito ativo e versátil",
    ],
  },
];

function App() {
  const [indexAbaAtiva, atualizaIndexAbaAtiva] = useState(0);

  return (
    <>
      <div>
        <header>
          <h1>ReactJs</h1>
          <p>Estou estudando React</p>
        </header>

        <div>
          <menu>
            {content.map((tab, index) => (
              <button
                key={tab.label}
                onClick={() => atualizaIndexAbaAtiva(index)}
              >
                {tab.label}
              </button>
            ))}
          </menu>

          <div>
            <ul>
              {content[indexAbaAtiva].items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
