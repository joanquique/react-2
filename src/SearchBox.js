import React from 'react';
import './SearchBox.css';

function SearchBox({ onBuscar }) {
  // Manejar el cambio en el texto de búsqueda
  const handleChange = (event) => {
    const texto = event.target.value;
    onBuscar(texto);
  };

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
