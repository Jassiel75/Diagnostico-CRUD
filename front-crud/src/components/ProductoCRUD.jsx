import React, { useState, useEffect } from 'react';
import ProductoForm from './ProductoForm';
import ProductoList from './ProductoList';
import * as productoService from '../services/productoService';

const ProductoCRUD = () => {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const res = await productoService.getProductos();
    setProductos(res.data);
  };

  const handleGuardar = async (data) => {
    if (productoEditando) {
      await productoService.updateProducto(productoEditando.id, data);
    } else {
      await productoService.createProducto(data);
    }
    setProductoEditando(null);
    cargarDatos();
  };

  const handleEliminar = async (id) => {
    if (window.confirm("¿Eliminar producto?")) {
      await productoService.deleteProducto(id);
      cargarDatos();
    }
  };

  return (
    <div className="crud-container">
      <h1 className="crud-title">Gestión de Productos</h1>
      
      <ProductoForm 
        agregarOEditar={handleGuardar} 
        productoEditando={productoEditando} 
        cancelarEdicion={() => setProductoEditando(null)} 
      />

      <ProductoList 
        productos={productos} 
        eliminar={handleEliminar} 
        seleccionarParaEditar={setProductoEditando} 
      />
    </div>
  );
};

export default ProductoCRUD;