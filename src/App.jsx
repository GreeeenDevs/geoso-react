// import React from 'react';
// import './App.css'; // O CSS será estilizado aqui

// const App = () => {
//   return (
//     <div className="homepage-container">
//       {/* Hero Section */}
//       <header className="hero-section">
//         <img 
//           src="/path/to/your/top-image.png" 
//           alt="Geo-SO, especialista em limpeza urbana" 
//           className="hero-image" 
//         />
//         <div className="hero-content">
//           <h1>Geo-SO, especialista em limpeza urbana</h1>
//           <button>Saiba Mais!</button>
//         </div>
//       </header>

//       {/* Services Section */}
//       <section className="services-section">
//         <div className="service-card">
//           <h2>Varrição</h2>
//           <p>Consulte as sarjetas de ruas e calçadas...</p>
//         </div>
//         <div className="service-card">
//           <h2>Cata-bagulho</h2>
//           <p>Consulte remoção de objetos volumosos...</p>
//         </div>
//         {/* Adicione mais cards conforme necessário */}
//       </section>

//       {/* Map Section */}
//       <section className="map-section">
//         <h2>Pesquisa de Serviços</h2>
//         <p>Visualize os pontos de limpeza urbana próximo de você!</p>
//         <img src="/path/to/your/map-image.png" alt="Google Maps" />
//         <button>Procure por serviços na sua região</button>
//       </section>

//       {/* Footer */}
//       <footer>
//         <p>&copy; 2024 Geo-SO Todos os direitos reservados.</p>
//         <p>Desenvolvido por Fulano de Tal</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App