import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Link href="/">
					<Image width={100} alt="logo" src={Logo} />
				</Link>
				{children}
			</body>
		</html>
	);
}
