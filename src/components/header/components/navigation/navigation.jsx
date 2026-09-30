import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
	position: relative;
	color: #5b514b;
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 0.02em;
	padding: 8px 12px;
	text-decoration: none;
	transition: color 160ms ease;

	&:hover {
		color: #a25f4a;
	}

	&.active {
		color: #a25f4a;
		text-decoration: none;
	}

	&.active::after {
		content: '';
		position: absolute;
		left: 12px;
		right: 12px;
		bottom: 1px;
		height: 2px;
		background: #c98268;
	}
`;

const NavContainer = ({ className }) => {
	return (
		<nav className={className}>
			<StyledNavLink to="/about">О нас</StyledNavLink>
			<StyledNavLink to="/cakes">Торты</StyledNavLink>
			<StyledNavLink to="/collections">Коллекции</StyledNavLink>
			<StyledNavLink to="/certificates">Сертификаты</StyledNavLink>
			<StyledNavLink to="/deliveryAndPayments">Доставка и оплата</StyledNavLink>
		</nav>
	);
};

export const Navigation = styled(NavContainer)`
	display: flex;
	align-items: center;
	justify-self: center;
	gap: 36px;
	min-width: 0;
	justify-content: center;

	@media (max-width: 760px) {
		gap: 4px;

		${StyledNavLink} {
			padding: 8px 7px;
			font-size: 11px;
		}

		${StyledNavLink}.active::after {
			left: 7px;
			right: 7px;
		}
	}
`;
