import { ProductList, getData } from "@/components/productList";
import Link from "next/link";
import PointOfSale from "@/components/pointOfSale";
export default async function Home() {
	const datita = await getData();
	return (
		<main>
			<Link href="/about">VENTAS</Link>

			{datita.length !== 0 && <PointOfSale prods={datita} />}
		</main>
	);
}
