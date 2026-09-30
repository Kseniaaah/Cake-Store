import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logoImage from '../../../icon/logo-img.png';

const AppName = styled.div`
	font-family: 'Cormorant Garamond', Georgia, serif;
	font-size: 34px;
	font-weight: 600;
	letter-spacing: 0.02em;
	line-height: 0.9;
	color: #8f513f;
	white-space: nowrap;
`;

const LogoContainer = ({ className }) => (
	<NavLink className={className} to="/" aria-label="На главную">
		<AppName>Sweet Life</AppName>
		<img src={logoImage} alt="" />
	</NavLink>
);

export const Logo = styled(LogoContainer)`
	display: flex;
	align-items: center;
	gap: 8px;
	justify-self: center;

	img {
		width: 30px;
		height: 30px;
		object-fit: contain;
	}
`;
