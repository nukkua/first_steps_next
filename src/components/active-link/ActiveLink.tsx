'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./ActiveLink.module.css"

interface Props {
	pathname: string;
	text: string;
}

export const ActiveLink = ({ pathname, text }: Props) => {

	const path = usePathname();

	return (
		<Link className={`${style.link} ${path === pathname && style['active-link']}`} href={pathname} >
			{text}
		</Link>
	)

}
