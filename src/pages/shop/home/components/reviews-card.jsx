import { useRef } from 'react';
import styled from 'styled-components';
import { mockReviews } from '../../../../data/mock-reviews';
import { CarouselArrow } from './carousel-arrow';
import { LoadingImage } from '../../../../components/loading-image/loading-image';

const HomeReviews = styled.div`
	--review-gap: clamp(16px, 1.8vw, 24px);

	display: flex;
	align-items: flex-start;
	gap: var(--review-gap);
	margin: 0;
	width: 100%;
	overflow: hidden;
	scroll-behavior: smooth;
	scroll-snap-type: x mandatory;

	.review-item {
		display: flex;
		flex: 0 0 calc((100% - 3 * var(--review-gap)) / 4);
		flex-direction: column;
		align-items: center;
		gap: 16px;
		min-width: 0;
		text-align: center;
		scroll-snap-align: start;
	}

	.review-item img {
		display: block;
		width: 100%;
		aspect-ratio: 1;
		flex-shrink: 0;
		object-fit: cover;
		border-radius: 16px;
		box-shadow: 0 10px 22px rgba(113, 77, 60, 0.12);
	}

	.review-item p {
		margin: 0;
		color: #5b514b;
		font-size: 14px;
		font-weight: 600;
		line-height: 1.55;
		overflow-wrap: anywhere;
	}

	@media (max-width: 900px) {
		.review-item {
			flex-basis: calc((100% - var(--review-gap)) / 2);
		}
	}

	@media (max-width: 520px) {
		.review-item {
			flex-basis: 82%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		scroll-behavior: auto;
	}
`;

const ReviewsCardContainer = ({ className }) => {
	const reviewsListRef = useRef(null);

	const scrollReviews = (direction) => {
		const reviewsList = reviewsListRef.current;

		if (reviewsList) {
			reviewsList.scrollBy({
				left: direction * reviewsList.clientWidth,
			});
		}
	};

	return (
		<section className={className} aria-labelledby="reviews-title">
			<h3 id="reviews-title">Отзывы наших клиентов</h3>
			<div className="reviews-carousel">
				<CarouselArrow
					className="reviews-control"
					type="button"
					$previous
					aria-label="Предыдущие отзывы"
					onClick={() => scrollReviews(-1)}
				/>
				<HomeReviews className="reviews-list" ref={reviewsListRef}>
					{mockReviews.map((review) => (
						<article key={review.id} className="review-item">
							<LoadingImage src={review.image} alt="" />
							<p>{review.text}</p>
						</article>
					))}
				</HomeReviews>
				<CarouselArrow
					className="reviews-control"
					type="button"
					aria-label="Следующие отзывы"
					onClick={() => scrollReviews(1)}
				/>
			</div>
			<p className="reviews-contact">
				Чтобы оставить отзыв, свяжитесь с нами по номеру{' '}
				<a href="tel:+79852031545">+7 985 203 15 45</a>.
			</p>
		</section>
	);
};

export const ReviewsCard = styled(ReviewsCardContainer)`
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

	.reviews-carousel {
		display: grid;
		grid-template-columns: 44px minmax(0, 1fr) 44px;
		align-items: center;
		gap: 10px;
		max-width: 1280px;
		margin: 0 auto;
		width: min(100%, calc(100% - 32px));
	}

	.reviews-contact {
		width: min(1280px, calc(100% - 32px));
		margin: 28px auto 0;
		color: #8c786c;
		font-size: 13px;
		font-weight: 400;
		line-height: 1.6;
		text-align: center;

		a {
			color: inherit;
			text-decoration: underline;
			text-underline-offset: 3px;
			white-space: nowrap;

			&:hover {
				color: #8f513f;
			}

			&:focus-visible {
				outline: 2px solid #8f513f;
				outline-offset: 4px;
			}
		}
	}

	@media (max-width: 520px) {
		padding-bottom: 88px;
	}
`;
