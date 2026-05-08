import React, { useState, useEffect } from 'react';

const ProductoForm = ({ agregarOEditar, productoEditando, cancelarEdicion }) => {
  const initialState = { nombre: '', descripcion: '', precio: '', stock: '' };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (productoEditando) setFormData(productoEditando);
    else setFormData(initialState);
  }, [productoEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarOEditar(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="crud-form">
      <h3>{productoEditando ? 'Editar Producto' : 'Nuevo Producto'}</h3>
      <div className="form-inputs">
        <input type="text" placeholder="Nombre" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} required />
        <input type="text" placeholder="Descripción" value={formData.descripcion} onChange={e => setFormData({...formData, descripcion: e.target.value})} required />
        <input type="number" step="0.01" placeholder="Precio" value={formData.precio} onChange={e => setFormData({...formData, precio: e.target.value})} required />
        <input type="number" placeholder="Stock" value={formData.stock} onChange={e => setFormData({...formData, stock: e.target.value})} required />
      </div>
      <button type="submit" className="btn-guardar">
        {productoEditando ? 'Actualizar' : 'Guardar'}
      </button>
      {productoEditando && (
        <button type="button" onClick={cancelarEdicion} className="btn-cancelar">
          Cancelar
        </button>
      )}
    </form>
  );
};

export default ProductoForm;