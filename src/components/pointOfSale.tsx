"use client";
// @ts-nocheck
import React from "react";

import { useState, useEffect } from "react";

function PointOfSale({ prods }: any) {
	const productos = prods;
	console.log(productos);
	const [venta, setVenta] = useState([]);
	const [total, setTotal] = useState(0);

	const [nuevaVenta, setNuevaVenta] = useState(false);

	const handleAddToCart = (producto: any) => {
		const item = {
			...producto,
			cantidad: 1,
			subtotal: parseFloat(producto["Precio por Unidad"].replace("$", "")),
		};
		// @ts-ignore
		setVenta([...venta, item]);
		setTotal(total + item.subtotal);
	};

	const handleRemoveFromCart = (index: any) => {
		const itemToRemove = venta[index];
		setVenta(venta.filter((item, i) => i !== index));
		// @ts-ignore
		setTotal(total - itemToRemove.subtotal);
	};

	return (
		<>
			<button onClick={() => setNuevaVenta(!nuevaVenta)}>{nuevaVenta ? "CANCELAR VENTA" : "NUEVA VENTA"}</button>
			{nuevaVenta && (
				<div>
					<h2>INGRESE ORDEN</h2>
					<ul>
						{productos.map((producto: any, index: any) => (
							<li key={index}>
								{producto.Producto} - {producto["Precio por Unidad"]}
								<button onClick={() => handleAddToCart(producto)}>Add to Cart</button>
							</li>
						))}
					</ul>
					<h2>Cart</h2>
					<ul>
						{venta.map((item: any, index) => (
							<li key={index}>
								{item.Producto} - {item.cantidad} x {item["Precio por Unidad"]} = ${item.subtotal.toFixed(2)}
								<button onClick={() => handleRemoveFromCart(index)}>Remove</button>
							</li>
						))}
					</ul>
					<h2>Total: ${total.toFixed(2)}</h2>
				</div>
			)}
		</>
	);
}

export default PointOfSale;
