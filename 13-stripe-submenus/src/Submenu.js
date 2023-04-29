import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
	const { isSubmenuOpen, location } = useGlobalContext();

	const container = useRef();

	useEffect(() => {
		const submenu = container.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		{
			/* 6.28.18 */
		}
		submenu.style.top = `${bottom}px`;
	}, [location]);

	return (
		<aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}></aside>
	);
};

export default Submenu;
