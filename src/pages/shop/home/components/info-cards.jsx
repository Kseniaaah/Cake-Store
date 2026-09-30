import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { infoCards } from '../../../../data/mock-info-cards';

const InfoCardsContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="info-cards-container">
				{infoCards.map((card) => (
					<Link
						key={card.id}
						className="info-card"
						to={card.to}
						aria-labelledby={`info-card-title-${card.id}`}
					>
						<div className="info-card-header">
							<h3 id={`info-card-title-${card.id}`}>{card.title}</h3>
							<img
								className="info-card-icon"
								src={card.icon}
								alt=""
							/>
						</div>
						<div className="info-card-text">
							{card.description.map((paragraph, index) => (
								<p key={`${card.id}-${index}`}>{paragraph}</p>
							))}
						</div>
						<span className="info-card-arrow" aria-hidden="true">
							→
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export const InfoCards = styled(InfoCardsContainer)`
	.info-cards-container {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 24px;
		width: min(1280px, calc(100% - 32px));
		margin: 0 auto;
		padding: 0 0 120px;
		align-items: stretch;
	}

	.info-card {
		position: relative;
		display: block;
		min-width: 0;
		background: linear-gradient(180deg, #fffdfb 0%, #fff8f4 100%);
		border: 1px solid #f2e3db;
		border-radius: 22px;
		padding: 26px 24px 22px;
		box-shadow: 0 14px 32px rgba(138, 90, 72, 0.08);
		color: #5b514b;
		min-height: 220px;
		padding-bottom: 48px;
		text-decoration: none;
	}

	.info-card:focus-visible {
		outline: 2px solid #8f513f;
		outline-offset: 4px;
	}

	.info-card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 14px;
		margin-bottom: 18px;
	}

	.info-card h3 {
		margin: 0;
		font-family: 'Cormorant Garamond', serif;
		font-size: clamp(2.2rem, 2.1vw, 3rem);
		line-height: 1;
		font-weight: 600;
		color: #a25f4a;
	}

	.info-card-icon {
		width: 32px;
		height: 32px;
		flex-shrink: 0;
		object-fit: contain;
		filter: drop-shadow(0 2px 3px rgba(162, 95, 74, 0.18));
	}

	.info-card-text {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.info-card-text p {
		margin: 0;
		font-size: 1rem;
		line-height: 1.7;
		color: #5b514b;
	}

	.info-card-arrow {
		position: absolute;
		right: 18px;
		bottom: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		border: none;
		background: transparent;
		color: #a25f4a;
		font-size: 1.8rem;
		line-height: 1;
		cursor: pointer;
		transition:
			transform 160ms ease,
			color 160ms ease;
	}

	.info-card:hover .info-card-arrow,
	.info-card:focus-visible .info-card-arrow {
		color: #8f513f;
		transform: translateX(2px);
	}

	@media (max-width: 768px) {
		.info-cards-container {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			padding: 0 0 88px;
			gap: 18px;
			width: min(100%, calc(100% - 20px));
		}

		.info-card {
			padding: 20px 18px;
			min-height: 0;
		}

		.info-card-header {
			margin-bottom: 14px;
		}
	}

	@media (max-width: 520px) {
		.info-cards-container {
			grid-template-columns: 1fr;
		}
	}
`;
