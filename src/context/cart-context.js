import { createContext, useContext } from 'react';

export const CartContext = createContext(null);

export const useCart = () => {
	const cart = useContext(CartContext);

	if (!cart) {
		throw new Error('useCart must be used inside CartProvider');
	}

	return cart;
};
