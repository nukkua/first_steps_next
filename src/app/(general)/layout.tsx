import { Navbar } from "@/components";

export default function GeneralLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='bg-black text-white'>
			<Navbar />
			<h1>General layout</h1>
			{children}
		</div>
	);
}
