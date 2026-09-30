import { useEffect, useState } from 'react';
import { CartContext } from './cart-context';
import { productRecords } from '../data/mock-products';
import { fillers } from '../data/mock-fillers';
import { certificateAmounts, certificateEmailPattern } from '../data/certificate-options';
import certificateImage from '../components/icon/products/certificate.png';

const CART_STORAGE_KEY = 'sweet-life-cart';

const getCartItemId = (item) =>
	item.type === 'certificate'
		? item.id
		: `product:${item.productId}:${item.fillerId ?? 'none'}`;

const isValidCartItem = (item) => {
	if (!item || !Number.isSafeInteger(item.quantity) || item.quantity <= 0) return false;

	if (item.type === 'certificate') {
		return (
			typeof item.id === 'string' && item.id.startsWith('certificate:') &&
			certificateAmounts.includes(item.amount) &&
			typeof item.recipientName === 'string' && Boolean(item.recipientName.trim()) &&
			typeof item.recipientEmail === 'string' && certificateEmailPattern.test(item.recipientEmail) &&
			typeof item.message === 'string' && item.message.length <= 150
		);
	}

	// Старые записи с тортами ещё не содержат поле type.
	return (
		(item.type === undefined || item.type === 'product') &&
		productRecords.some((product) => product.id === item.productId) &&
		(item.fillerId === null || fillers.some((filler) => filler.id === item.fillerId))
	);
};

const readCart = () => {
	try {
		const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');

		if (!Array.isArray(savedCart)) return [];

		return savedCart.filter(isValidCartItem);
	} catch {
		return [];
	}
};

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState(readCart);

	useEffect(() => {
		try {
			localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
		} catch {
			// Если хранилище недоступно, корзина продолжает работать в памяти.
		}
	}, [items]);

	const addToCart = (product, fillerId = null) => {
		setItems((currentItems) => {
			const isSameItem = (item) =>
				item.type !== 'certificate' &&
				item.productId === product.id && item.fillerId === fillerId;

			return currentItems.some(isSameItem)
				? currentItems.map((item) =>
						isSameItem(item) ? { ...item, quantity: item.quantity + 1 } : item,
					)
				: [...currentItems, { type: 'product', productId: product.id, fillerId, quantity: 1 }];
		});
	};

	const addCertificateToCart = ({ amount, recipientName, recipientEmail, message = '' }) => {
		const certificate = {
			type: 'certificate',
			id: `certificate:${crypto.randomUUID()}`,
			amount: Number(amount),
			recipientName: recipientName.trim(),
			recipientEmail: recipientEmail.trim(),
			message: message.trim(),
			quantity: 1,
		};

		setItems((currentItems) => [...currentItems, certificate]);
	};

	const removeFromCart = (cartItemId) => {
		setItems((currentItems) =>
			currentItems.filter((item) => getCartItemId(item) !== cartItemId),
		);
	};

	const cartProducts = items.map((item) => {
		if (item.type === 'certificate') {
			return {
				...item,
				cartItemId: getCartItemId(item),
				title: 'Подарочный сертификат',
				price: item.amount,
				image: certificateImage,
				href: '/certificates',
			};
		}

		return {
			...productRecords.find((product) => product.id === item.productId),
			type: 'product',
			cartItemId: getCartItemId(item),
			href: `/products/${item.productId}`,
			fillerId: item.fillerId,
			filling: fillers.find((filler) => filler.id === item.fillerId)?.title,
			quantity: item.quantity,
		};
	});
	const cartCount = items.reduce((total, item) => total + item.quantity, 0);
	const totalPrice = cartProducts.reduce(
		(total, product) => total + product.price * product.quantity,
		0,
	);

	return (
		<CartContext.Provider
			value={{ cartProducts, cartCount, totalPrice, addToCart, addCertificateToCart, removeFromCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
