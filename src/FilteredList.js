import React from 'react';
import './FilteredList.css';

function FilteredList({ elementos, textoBusqueda }) {
  // Filtrar los elementos que coinciden con el texto de búsqueda
  const elementosFiltrados = elementos.filter((elemento) =>
    elemento.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  return (
    <div className="filteredList"> {/* Asigna la clase "filteredList" al contenedor principal */}
      <h2>Elementos Filtrados</h2>
      <ul>
        {/* Iterar sobre los elementos filtrados y crear una lista */}
        {elementosFiltrados.map((elemento) => (
          <li key={elemento.id}>{elemento.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
