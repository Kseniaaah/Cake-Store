import styled from 'styled-components';
import { mockShowcaseBanners } from '../../../../data/mock-banners';
import { Link } from 'react-router-dom';
import { LoadingImage } from '../../../../components/loading-image/loading-image';

const ShowcaseBannerContainer = ({ className }) => {
	return (
		<section className={className}>
			{mockShowcaseBanners.map(({ id, title, alt, image, to }) => (
				<Link key={id} to={to}>
					<LoadingImage src={image} alt={alt} />
					<h2>{title}</h2>
				</Link>
			))}
		</section>
	);
};

export const ShowcaseBanner = styled(ShowcaseBannerContainer)`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	grid-template-rows: repeat(2, minmax(0, 1fr));
	gap: 12px;
	width: calc(50% - 6px);
	height: 100%;

	a {
		position: relative;
		overflow: hidden;
		border-radius: 16px;
		color: #fff;
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 180ms ease;
	}

	a:hover img {
		transform: scale(1.04);
	}

	h2 {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		margin: 0;
		padding: 10px 16px;
		background: rgba(20, 16, 13, 0.3);
		font-size: clamp(16px, 1.5vw, 24px);
		font-weight: 600;
		line-height: 1.2;
		text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
	}

	@media (max-width: 768px) {
		width: 100%;
		height: auto;
		min-height: 0;
		aspect-ratio: 1;
	}
`;
