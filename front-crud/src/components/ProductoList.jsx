import React from 'react';

const ProductoList = ({ productos, eliminar, seleccionarParaEditar }) => {
  return (
    <table className="crud-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map(p => (
          <tr key={p.id}>
            <td>{p.nombre}</td>
            <td>{p.descripcion}</td>
            <td>${p.precio}</td>
            <td>{p.stock}</td>
            <td>
              <button onClick={() => seleccionarParaEditar(p)} className="btn-editar">Editar</button>
              <button onClick={() => eliminar(p.id)} className="btn-eliminar">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductoList;