import styled from 'styled-components';
import { aboutSections } from '../../../data/mock-about-page';
import { LoadingImage } from '../../../components/loading-image/loading-image';

const AboutContainer = ({ className }) => {
	return (
		<div className={className}>
			<main className="about-page">
				<div className="about-sections">
					{aboutSections.map((section, index) => (
						<section
							className={`about-section${index % 2 ? ' about-section--reverse' : ''}`}
							key={section.id}
						>
							<div className="about-section__content">
								<h2>{section.title}</h2>
								<h3>{section.subtitle}</h3>
								<p>{section.text.trim()}</p>
							</div>
							<div className="about-section__image">
								<LoadingImage src={section.image} alt={section.subtitle} />
							</div>
						</section>
					))}
				</div>
			</main>
		</div>
	);
};

export const About = styled(AboutContainer)`
	.about-page {
		padding: 64px 0;
	}

	.about-sections {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: min(1120px, calc(100% - 32px));
		margin: 0 auto;
	}

	.about-section {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 180px;
		height: 320px;
		overflow: hidden;
		border: 1px solid #f2e3db;
		border-radius: 18px;
		background: linear-gradient(180deg, #fffdfb 0%, #fff8f4 100%);
		box-shadow: 0 10px 24px rgba(138, 90, 72, 0.07);
	}

	.about-section--reverse {
		grid-template-columns: 180px minmax(0, 1fr);
	}

	.about-section--reverse .about-section__content {
		grid-column: 2;
		grid-row: 1;
	}

	.about-section--reverse .about-section__image {
		grid-column: 1;
		grid-row: 1;
	}

	.about-section__content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-width: 0;
		padding: 24px 30px;
		color: #5b514b;
	}

	.about-section h2 {
		margin: 0;
		color: #a25f4a;
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: clamp(28px, 3vw, 40px);
		font-weight: 600;
		line-height: 0.95;
	}

	.about-section h3 {
		max-width: 460px;
		margin: 10px 0 14px;
		font-size: 15px;
		font-weight: 600;
		line-height: 1.35;
	}

	.about-section p {
		max-width: 640px;
		margin: 0;
		font-size: 13px;
		line-height: 1.55;
	}

	.about-section__image {
		width: 180px;
		height: 100%;
	}

	.about-section__image img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 700px) {
		.about-page {
			padding: 48px 0;
		}

		.about-sections {
			width: min(100%, calc(100% - 20px));
		}

		.about-sections {
			gap: 20px;
		}

		.about-section,
		.about-section--reverse {
			display: grid;
			grid-template-columns: minmax(0, 1fr) 120px;
			height: 260px;
		}

		.about-section--reverse {
			grid-template-columns: 120px minmax(0, 1fr);
		}

		.about-section--reverse .about-section__content,
		.about-section--reverse .about-section__image {
			order: initial;
		}

		.about-section__content {
			padding: 20px 16px;
		}

		.about-section__image {
			width: 120px;
			height: 100%;
		}
	}
`;
