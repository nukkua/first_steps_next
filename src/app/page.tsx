import Link from "next/link";

export default function Home() {
	return (

		<div className='flex flex-col min-h-screen justify-between items-center bg-black p-24'>
			<h1 className='text-white '>Hola mundo</h1>
			<h1 className='text-white'>Esta cancion me hace querer estar con ella ahora mismo, y irme a la mierda de aca</h1>
			<Link className='text-white' href={'/about'}>About page</Link>




		</div>
	);
}
