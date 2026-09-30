import { Logo, ControlPanel, Navigation } from './components';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Navigation />
		<div className="header-contacts">
			<a href="tel:+79852031545">+7 985 203 15 45</a>
			<a href="mailto:sweetLife@mail.ru">sweetLife@mail.ru</a>
		</div>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: grid;
	grid-template-columns: auto minmax(260px, 1fr) auto auto;
	align-items: center;
	gap: 34px;
	width: 100%;
	padding: 20px 40px 14px;
	background-color: #fff;
	border-bottom: 1px solid #eee6dc;

	.header-contacts {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 3px;

		a {
			color: #5b514b;
			font-size: 13px;
			font-weight: 600;
			transition: color 160ms ease;

			&:hover {
				color: #a25f4a;
			}
		}
	}

	@media (max-width: 900px) {
		grid-template-columns: auto minmax(0, 1fr) auto;
		gap: 20px;
		padding: 16px 20px;

		.header-contacts {
			grid-column: 2;
			grid-row: 2;
			align-items: flex-start;
		}

		${ControlPanel} {
			grid-column: 3;
			grid-row: 2;
		}
	}

	@media (max-width: 760px) {
		grid-template-columns: 1fr auto;
		gap: 12px;
		padding: 16px;

		${Navigation} {
			grid-column: 1 / -1;
			grid-row: 2;
			justify-content: center;
			flex-wrap: wrap;
		}

		.header-contacts a {
			font-size: 11px;
		}
	}
`;
