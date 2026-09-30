import styled from 'styled-components';
import {
	ShowcaseBanner,
	HeroBanner,
	Fillers,
	InfoCards,
	CollectionsCard,
	ReviewsCard,
} from './components';

const HomeContainer = ({ className }) => {
	return (
		<div className={className}>
			<section className="brand-intro" aria-labelledby="brand-title">
				<h1 id="brand-title">Sweet Life</h1>
				<p>Сладкие моменты каждый день</p>
			</section>
			<div className="banners-container">
				<HeroBanner />
				<ShowcaseBanner />
			</div>
			<div className="home-sections">
				<Fillers />
				<InfoCards />
				<CollectionsCard />
				<ReviewsCard />
			</div>
		</div>
	);
};

export const Home = styled(HomeContainer)`
	.brand-intro {
		padding: 28px 16px 0;
		color: #5b514b;
		text-align: center;
	}

	.brand-intro h1 {
		margin: 0;
		color: #8f513f;
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: clamp(38px, 5vw, 64px);
		font-weight: 600;
		letter-spacing: 0.02em;
		line-height: 0.95;
	}

	.brand-intro p {
		margin: 10px 0 0;
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 0.12em;
		line-height: 1.4;
		text-transform: uppercase;
	}

	.home-sections {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.banners-container {
		display: flex;
		gap: 12px;
		width: min(1280px, calc(100% - 32px));
		height: clamp(420px, 48vw, 620px);
		margin: 24px auto 0;
	}

	.banners-container > :first-child {
		border: 1px solid #f2e3db;
		border-radius: 22px;
		box-shadow: 0 14px 32px rgba(138, 90, 72, 0.08);
	}

	@media (max-width: 768px) {
		.brand-intro {
			padding-top: 22px;
		}

		.banners-container {
			flex-direction: column;
			height: auto;
			width: min(100%, calc(100% - 20px));
			margin-top: 20px;
		}
	}
`;
