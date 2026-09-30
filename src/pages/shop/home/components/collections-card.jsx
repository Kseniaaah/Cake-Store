import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Collections } from '../../collections/collections';
import { SectionLinks, SectionLink } from './section-links';

const CollectionsCardContainer = ({ className }) => {
	return (
		<section className={className} aria-labelledby="collections-title">
			<h3 id="collections-title">Наши коллекции</h3>
			<Collections />
			<SectionLinks>
				<SectionLink as={Link} to="/collections">
					Все коллекции
				</SectionLink>
			</SectionLinks>
		</section>
	);
};

export const CollectionsCard = styled(CollectionsCardContainer)`
	width: 100%;
	padding: 0 0 120px;
	background: #fff;

	h3 {
		margin: 0 0 28px;
		color: #5b514b;
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: clamp(28px, 3vw, 40px);
		font-weight: 600;
		line-height: 1;
		text-align: center;
	}

	${SectionLinks} {
		justify-content: center;
		margin-top: 28px;
	}

	${SectionLink} {
		padding: 10px 24px;
		border: 1px solid #e6d3c9;
		border-radius: 8px;
		background: #fffaf7;
		transition:
			background-color 160ms ease,
			border-color 160ms ease;

		&:hover {
			border-color: #c98268;
			background: #f8eee9;
		}
	}

	@media (max-width: 520px) {
		padding-bottom: 88px;
	}
`;
