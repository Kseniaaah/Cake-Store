import styled from 'styled-components';
import { fillers } from '../../../../data/mock-fillers';
import { LoadingImage } from '../../../../components/loading-image/loading-image';

const FillersContainer = ({ className }) => (
	<section className={className} aria-labelledby="fillers-title">
		<h2 id="fillers-title">Наши начинки</h2>
		<div className="fillers-list">
			{fillers.map(({ id, title, description, image }) => (
				<div className="filler" key={id}>
					<LoadingImage src={image} alt={title} />
					<span>{title}</span>
					<p>{description}</p>
				</div>
			))}
		</div>
	</section>
);

export const Fillers = styled(FillersContainer)`
	width: 100%;
	padding: 120px 0;
	background: #fff;

	h2 {
		margin: 0 0 28px;
		color: #5b514b;
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: clamp(28px, 3vw, 40px);
		font-weight: 600;
		line-height: 1;
		text-align: center;
	}

	.fillers-list {
		display: grid;
		grid-template-columns: repeat(7, minmax(0, 1fr));
		gap: clamp(12px, 1.8vw, 24px);
		max-width: 1280px;
		margin: 0 auto;
		width: min(1280px, calc(100% - 32px));
	}

	.filler {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		min-width: 0;
		color: #5b514b;
		font-size: 13px;
		font-weight: 600;
		line-height: 1.25;
		text-align: center;
	}

	.filler p {
		margin: 0;
		color: #8c786c;
		font-size: 12px;
		font-weight: 400;
		line-height: 1.4;
	}

	img {
		display: block;
		width: clamp(72px, 9vw, 112px);
		aspect-ratio: 1;
		border: 4px solid #fbf8f4;
		border-radius: 50%;
		box-shadow: 0 4px 14px rgba(113, 77, 60, 0.12);
		object-fit: cover;
	}

	@media (max-width: 900px) {
		.fillers-list {
			grid-template-columns: repeat(4, minmax(0, 1fr));
			row-gap: 24px;
			width: min(100%, calc(100% - 24px));
		}
	}

	@media (max-width: 520px) {
		padding: 88px 0;

		.fillers-list {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			width: min(100%, calc(100% - 24px));
		}
	}
`;
