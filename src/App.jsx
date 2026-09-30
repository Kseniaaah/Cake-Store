import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header, ScrollToTop } from './components';
import { PageLoader } from './components/loader/loader';
import styled from 'styled-components';

const Home = lazy(() => import('./pages/shop/home/home').then((page) => ({ default: page.Home })));
const About = lazy(() => import('./pages/shop/about/about').then((page) => ({ default: page.About })));
const Cakes = lazy(() => import('./pages/shop/cakes/cakes').then((page) => ({ default: page.Cakes })));
const Product = lazy(() => import('./pages/shop/product/product').then((page) => ({ default: page.Product })));
const CollectionsPage = lazy(() => import('./pages/shop/collections/collections').then((page) => ({ default: page.CollectionsPage })));
const DeliveryAndPayments = lazy(() => import('./pages/shop/delivery-and-payments/delivery-and-payments').then((page) => ({ default: page.DeliveryAndPayments })));
const Cart = lazy(() => import('./pages/shop/cart/cart').then((page) => ({ default: page.Cart })));
const Certificates = lazy(() => import('./pages/shop/certificates/certificates').then((page) => ({ default: page.Certificates })));

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	margin: 0 auto;
	background-color: #fff;
`;

const Content = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;
	flex-grow: 1;
`;

export const App = () => {
	return (
		<AppColumn>
			<ScrollToTop />
			<Header />
			<Content>
				<Suspense fallback={<PageLoader />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/cakes" element={<Cakes />} />
					<Route path="/products/:id" element={<Product />} />
					<Route path="/collections" element={<CollectionsPage />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/certificates" element={<Certificates />} />
					<Route
						path="/deliveryAndPayments"
						element={<DeliveryAndPayments />}
					/>
				</Routes>
				</Suspense>
			</Content>
			<Footer />
		</AppColumn>
	);
};
