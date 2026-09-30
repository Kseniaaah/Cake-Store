import { useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export const ScrollToTop = () => {
	const { pathname, hash } = useLocation();
	const navigationType = useNavigationType();
	const previousPathname = useRef(pathname);

	useLayoutEffect(() => {
		const pathChanged = previousPathname.current !== pathname;
		previousPathname.current = pathname;

		if (!pathChanged || navigationType === 'POP' || hash) {
			return;
		}

		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [pathname, hash, navigationType]);

	return null;
};
