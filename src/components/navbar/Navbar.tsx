import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."

const navItems = [
	{ pathname: '/about', text: 'about' },
	{ pathname: '/contact', text: 'contact' },
	{ pathname: '/pricing', text: 'pricing' },
]

export const Navbar = () => {
	return (
		<nav className='flex bg-blue-800 opacity-30 p-2 m-2 rounded'>
			<Link className='flex justify-center items-center' href={'/'} >
				<HomeIcon />
				<span className='ml-2'>Home</span>

			</Link>

			<div className='flex flex-1'></div>
			{
				navItems.map((nav) => (
					<ActiveLink key={nav.pathname} {...nav} />
				))
			}


		</nav>
	)
}
