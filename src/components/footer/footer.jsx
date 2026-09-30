import styled from 'styled-components';
import { FooterForm } from './footer-form';
import locationIcon from '../icon/location.png';
import instagramIcon from '../icon/inst.png';
import telegramIcon from '../icon/tg.png';
import vkIcon from '../icon/vk.png';

const FooterContainer = ({ className }) => (
	<footer className={className}>
		<FooterForm />
		<div className="footer-info">
			<strong className="footer-info__company">Sweet Life</strong>
			<div className="footer-info__address">
				<img src={locationIcon} alt="" />
				<span>Екатеринбург, Ленина 21</span>
			</div>
			<div className="footer-info__contacts">
				<a href="tel:+79852031545">+7 985 203 15 45</a>
				<a href="mailto:sweetLife@mail.ru">sweetLife@mail.ru</a>
			</div>
			<nav className="footer-info__socials" aria-label="Социальные сети">
				<a href="#vk" aria-label="ВКонтакте">
					<img src={vkIcon} alt="" />
				</a>
				<a href="#telegram" aria-label="Telegram">
					<img src={telegramIcon} alt="" />
				</a>
				<a href="#instagram" aria-label="Instagram">
					<img src={instagramIcon} alt="" />
				</a>
			</nav>
		</div>
	</footer>
);

export const Footer = styled(FooterContainer)`
	display: grid;
	grid-template-columns: minmax(0, 1280px);
	justify-content: center;
	row-gap: 34px;
	width: 100%;
	box-sizing: border-box;
	padding: 120px clamp(24px, 5vw, 72px) 34px;
	box-shadow: 0 -12px 30px rgba(113, 77, 60, 0.08);
	background: #f7eee8;
	color: #5b514b;
	font-size: 12px;

	${FooterForm} {
		width: min(100%, 760px);
		justify-self: center;
	}

	.footer-info {
		display: grid;
		grid-template-columns: 1.1fr 1.5fr 1.6fr auto;
		align-items: center;
		gap: 24px;
		width: 100%;
		padding-top: 28px;
		border-top: 1px solid #dfc8bb;
	}

	.footer-info__company {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 30px;
		font-weight: 600;
		color: #a25f4a;
		white-space: nowrap;
	}

	.footer-info__address,
	.footer-info__contacts {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: 8px;
		line-height: 1.4;
	}

	.footer-info__address {
		position: relative;
		padding-left: 28px;
	}

	.footer-info__address img {
		position: absolute;
		left: 0;
		top: 0;
		width: 18px;
		height: 18px;
		flex-shrink: 0;
		object-fit: contain;
	}

	.footer-info__contacts a,
	.footer-info__socials a {
		color: inherit;
		text-decoration: none;
	}

	.footer-info__contacts a:hover {
		color: #a25f4a;
	}

	.footer-info__contacts::before {
		content: 'Контакты';
		color: #8c786c;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.footer-info__socials {
		display: flex;
		align-items: center;
		gap: 8px;
		justify-content: flex-end;
	}

	.footer-info__socials a {
		display: grid;
		place-items: center;
		width: 32px;
		height: 32px;
		border: 1px solid #dfc8bb;
		border-radius: 50%;
		color: #a25f4a;
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 0.02em;
		transition:
			background 160ms ease,
			color 160ms ease,
			transform 160ms ease;

		img {
			width: 17px;
			height: 17px;
			object-fit: contain;
		}
	}

	.footer-info__socials a:hover {
		background: #a25f4a;
		color: #fff;
		transform: translateY(-2px);
	}

	@media (max-width: 520px) {
		padding: 88px 20px 28px;

		${FooterForm} {
			width: 100%;
		}

		.footer-info {
			grid-template-columns: 1fr;
			align-items: flex-start;
			gap: 14px;
		}

		.footer-info__socials {
			justify-content: flex-start;
		}
	}
`;
