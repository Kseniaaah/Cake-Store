import { useEffect, useRef, useState } from 'react';

// Короткая пауза для демоверсии. При подключении API её заменит ожидание запроса.
const DEMO_DELAY_MS = 350;

export const useLoadingAction = () => {
	const [isLoading, setIsLoading] = useState(false);
	const isPending = useRef(false);
	const isMounted = useRef(true);

	useEffect(() => {
		isMounted.current = true;
		return () => { isMounted.current = false; };
	}, []);

	const runWithLoading = async (action) => {
		if (isPending.current) return;
		isPending.current = true;
		setIsLoading(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, DEMO_DELAY_MS));
			if (isMounted.current) return await action();
		} finally {
			isPending.current = false;
			if (isMounted.current) setIsLoading(false);
		}
	};

	return { isLoading, runWithLoading };
};
