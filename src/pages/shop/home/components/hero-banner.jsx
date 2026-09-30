import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mockBanners as slides } from '../../../../data/mock-banners';
import { CarouselArrow } from './carousel-arrow';
import { LoadingImage } from '../../../../components/loading-image/loading-image';

const HeroBannerContainer = ({ className }) => {
	const [activeSlide, setActiveSlide] = useState(0);

	const showSlide = (slideIndex) => {
		const nextSlide = (slideIndex + slides.length) % slides.length;
		setActiveSlide(nextSlide);
	};

	const currentSlide = slides[activeSlide];

	return (
		<section className={className}>
			<Link className="hero-banner__link" to={currentSlide.to}>
				<LoadingImage
					className="hero-banner__image"
					src={currentSlide.image}
					alt={currentSlide.alt}
				/>
				<div className="hero-banner__content">
					<h1 className="hero-banner__title">{currentSlide.title}</h1>
					<p className="hero-banner__text">{currentSlide.text}</p>
				</div>
			</Link>

			<CarouselArrow
				className="hero-banner__arrow hero-banner__arrow--previous"
				type="button"
				$previous
				$onImage
				aria-label="Предыдущий слайд"
				onClick={() => showSlide(activeSlide - 1)}
			/>
			<CarouselArrow
				className="hero-banner__arrow hero-banner__arrow--next"
				type="button"
				$onImage
				aria-label="Следующий слайд"
				onClick={() => showSlide(activeSlide + 1)}
			/>

			<div className="hero-banner__dots" aria-label="Выбор слайда">
				{slides.map((slide, index) => (
					<button
						className={`hero-banner__dot${index === activeSlide ? ' hero-banner__dot--active' : ''}`}
						type="button"
						aria-label={`Слайд ${index + 1}`}
						aria-current={index === activeSlide ? 'true' : undefined}
						onClick={() => showSlide(index)}
						key={slide.title}
					/>
				))}
			</div>
		</section>
	);
};

export const HeroBanner = styled(HeroBannerContainer)`
	position: relative;
	width: calc(50% - 6px);
	overflow: hidden;

	.hero-banner__image {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-banner__link {
		display: block;
		width: 100%;
		height: 100%;
		color: inherit;
		text-decoration: none;
	}

	.hero-banner__content {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		max-width: none;
		padding: 12px 16px;
		background: rgba(20, 16, 13, 0.3);
		color: #fff;
	}

	.hero-banner__title {
		margin: 0;
		font-size: clamp(24px, 3vw, 44px);
		font-weight: 500;
		line-height: 1.1;
	}

	.hero-banner__text {
		margin: 16px 0 0;
		font-size: clamp(15px, 1.4vw, 20px);
		line-height: 1.4;
	}

	.hero-banner__arrow {
		position: absolute;
		top: 50%;
		z-index: 1;
		transform: translateY(-50%);
	}

	.hero-banner__arrow--previous {
		left: 24px;
	}

	.hero-banner__arrow--next {
		right: 24px;
	}

	.hero-banner__dots {
		position: absolute;
		z-index: 2;
		bottom: 20px;
		left: 50%;
		display: flex;
		gap: 8px;
		transform: translateX(-50%);
	}

	.hero-banner__dot {
		width: 8px;
		height: 8px;
		padding: 0;
		border: 1px solid #fff;
		border-radius: 50%;
		background: transparent;
		cursor: pointer;
	}

	.hero-banner__dot--active {
		background: #fff;
	}

	@media (max-width: 768px) {
		width: 100%;
		height: 420px;
	}
`;
