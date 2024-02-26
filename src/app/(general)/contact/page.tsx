import type { Metadata } from "next"

export const metadata: Metadata = {
	title: 'Contact page',
	description: 'Contact',
	keywords: ['Contact', 'Number']
}
export default function ContactPage() {
	return (
		<>
			<h1 className='text-pink-600'>Contact</h1>
		</>
	)
}
