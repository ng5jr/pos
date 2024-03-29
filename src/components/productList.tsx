import React from "react";
import Papa from "papaparse";

type Product = {
	codigo: number;
	producto: string;
	precio: number;
};

export async function getData() {
	const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQK253p5XAMI07RIzUc5QVmkq1-HIokRKM7HMpxFGb1BY8lZv3JbizLQZ08Nl_-k0mRBt08xwhCgH6N/pub?gid=100625340&single=true&output=csv");
	const data = await res.text();
	const parsed = await new Promise<Product[]>((resolve, reject) => {
		Papa.parse<Product>(data, { header: true, complete: (result: any) => resolve(result.data), error: reject });
	});

	return parsed;
}

export async function ProductList() {
	const datita = await getData();
	return (
		<ul>
			{datita.length !== 0 &&
				datita.map((producto: any, index) => (
					<li key={index}>
						<h2>{producto.Producto}</h2>
						<p>Precio: {producto["Precio por Unidad"]}</p>
					</li>
				))}
		</ul>
	);
}
