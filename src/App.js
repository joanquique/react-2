import React, { useState } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import FilteredList from './FilteredList';

function App() {
  const [elementos, setElementos] = useState([
    { nombre: "Blinding Lights", añoLanzamiento: 2019 },
    { nombre: "Starboy", añoLanzamiento: 2016 },
    { nombre: "Moth To A Flame", añoLanzamiento: 2019 },
    { nombre: "After Hours", añoLanzamiento: 2020 },
    { nombre: "The Hills", añoLanzamiento: 2015 },
  ]);
  
  const [textoBusqueda, setTextoBusqueda] = useState('');

  // Manejar el cambio en el texto de búsqueda
  const handleBuscar = (texto) => {
    setTextoBusqueda(texto);
  };

  return (
    <div className="App">
      <header>
        <h1>Filtrado de Elementos</h1>
      </header>
      <main>
        {/* Integrar el componente SearchBox y pasar la función handleBuscar */}
        <SearchBox onBuscar={handleBuscar} />
        {/* Integrar el componente FilteredList y pasar la lista de elementos y el texto de búsqueda */}
        <FilteredList elementos={elementos} textoBusqueda={textoBusqueda} />
      </main>
      <footer>
        <p>© 2024 - Joan Enrique Alvarez Escalera</p>
      </footer>
    </div>
  );
}

export default App;
