import type { Metadata } from "next"

export const metadata: Metadata = {
	title: 'Pricing page',
	description: 'Princing',
	keywords: ['Price', 'Money']

}
export default function PricingPage() {

	return (
		<>
			<h1 className='text-pink-600'>Pricing</h1>
		</>
	)
}
