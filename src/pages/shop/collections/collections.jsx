import styled from 'styled-components';
import { PagesTitle } from '../../../components';
import { collections } from '../../../data/mock-products';
import { LoadingImage } from '../../../components/loading-image/loading-image';

const CollectionsContainer = ({ className, showDescriptions = false }) => {
	return (
		<div className={className}>
			{collections.map((collection) => (
				<div key={collection.id} className="collection-item">
					<LoadingImage src={collection.image} alt={collection.title} />
					<span>{collection.title}</span>
					{showDescriptions && <p>{collection.description}</p>}
				</div>
			))}
		</div>
	);
};

export const Collections = styled(CollectionsContainer)`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: clamp(16px, 1.8vw, 24px);
	max-width: 1280px;
	margin: 0 auto;
	width: min(1280px, calc(100% - 32px));

	.collection-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		min-width: 0;
		text-align: center;
	}

	img {
		display: block;
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 16px;
		box-shadow: 0 10px 22px rgba(113, 77, 60, 0.12);
	}

	span {
		color: #5b514b;
		font-size: 14px;
		font-weight: 600;
		line-height: 1.35;
	}

	p {
		margin: 0;
		color: #8c786c;
		font-size: 12px;
		line-height: 1.4;
	}
`;

const CollectionsPageContainer = ({ className }) => {
	return (
		<div className={className}>
			<PagesTitle
				eyebrow="Sweet Life"
				title="Коллекции"
				subtitle="Собрали десерты для разных поводов и настроений"
			/>
			<Collections showDescriptions />
		</div>
	);
};

export const CollectionsPage = styled(CollectionsPageContainer)`
	padding: 64px 0 72px;

	@media (max-width: 520px) {
		padding: 48px 0 56px;
	}
`;
