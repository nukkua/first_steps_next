import type { Metadata } from "next"

export const metadata: Metadata = {
	title: 'About page',
	description: 'About',
	keywords: ['About', 'Ala']
}
export default function AboutPage() {
	return (
		<>
			<h1 className='text-pink-600'>About</h1>
		</>
	)

}
