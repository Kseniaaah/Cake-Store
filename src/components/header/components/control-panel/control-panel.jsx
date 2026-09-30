import cartIcon from '../../../icon/shopping-cart.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../../../../context/cart-context';

const StyledIcon = styled.img`
	width: 22px;
	height: 22px;
	object-fit: contain;
`;

const CartCount = styled.span`
	position: absolute;
	top: -5px;
	right: -5px;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 17px;
	height: 17px;
	padding: 0 4px;
	border: 2px solid #fff;
	border-radius: 999px;
	background: #b56d56;
	color: #fff;
	font-size: 9px;
	font-weight: 700;
	line-height: 1;
`;

const ControlPanelLinks = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

const ControlPanelContainer = ({ className }) => {
	const { cartCount } = useCart();

	return (
		<div className={className}>
			<ControlPanelLinks>
				<CartLink to="/cart" aria-label={`Корзина, товаров: ${cartCount}`}>
					<StyledIcon src={cartIcon} alt="" />
					<CartCount aria-live="polite" aria-atomic="true">{cartCount}</CartCount>
				</CartLink>
			</ControlPanelLinks>
		</div>
	);
};

const CartLink = styled(Link)`
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 44px;
	height: 44px;
	padding: 0;
	border: 1px solid #d8b7a9;
	border-radius: 50%;
	background: #fffaf7;
	transition:
		background 160ms ease,
		border-color 160ms ease,
		transform 160ms ease;

	&:hover {
		border-color: #c98268;
		background: #f8eee9;
		transform: translateY(-1px);
	}
`;

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
