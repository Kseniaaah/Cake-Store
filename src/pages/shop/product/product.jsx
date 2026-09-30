import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fillers } from '../../../data/mock-fillers';
import { productRecords } from '../../../data/mock-products';
import { useCart } from '../../../context/cart-context';
import { LoadingButton } from '../../../components/loading-button/loading-button';
import { LoadingImage } from '../../../components/loading-image/loading-image';

const ProductContainer = ({ className }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { addToCart } = useCart();
	const product = productRecords.find((item) => String(item.id) === id);
	const [selectedFiller, setSelectedFiller] = useState(fillers[0]?.id);

	if (!product) {
		return <main className={className}>Товар не найден.</main>;
	}

	return (
		<main className={className}>
			<div className="product-card">
				<div className="product-details">
					<span className="product-eyebrow">Sweet Life</span>
					<h1>{product.title}</h1>
					<p className="product-description">{product.description}</p>
					<p className="product-price">{product.price} ₽</p>

					<fieldset className="filler-options">
						<legend>Выберите начинку</legend>
						<div className="filler-options-list">
							{fillers.map((filler) => (
								<label className="filler-option" key={filler.id}>
									<input
										type="radio"
										name="filler"
										value={filler.id}
										checked={selectedFiller === filler.id}
										onChange={() => setSelectedFiller(filler.id)}
									/>
									<span className="filler-option-image">
										<LoadingImage src={filler.image} alt="" />
									</span>
									<span className="filler-option-title">
										{filler.title}
									</span>
								</label>
							))}
						</div>
						<p className="selected-filler-description">
							{
								fillers.find((filler) => filler.id === selectedFiller)
									?.description
							}
						</p>
					</fieldset>

					<LoadingButton
						className="order-button"
						loadingText="Добавляем…"
						type="button"
						onClick={() => {
							addToCart(product, selectedFiller);
							navigate('/cart');
						}}
					>
						В корзину
					</LoadingButton>
				</div>

				<div className="product-image-container">
					<LoadingImage src={product.image} alt={product.title} />
				</div>
			</div>
		</main>
	);
};

export const Product = styled(ProductContainer)`
	width: min(1120px, calc(100% - 32px));
	margin: 0 auto;
	padding: 64px 0 72px;
	color: #5b514b;

	.product-card {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(420px, 1.1fr);
		align-items: center;
		gap: clamp(36px, 6vw, 88px);
	}

	.product-details {
		min-width: 0;
	}

	.product-eyebrow {
		color: #a25f4a;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	h1 {
		margin: 10px 0 16px;
		color: #8f513f;
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: clamp(42px, 5vw, 64px);
		font-weight: 600;
		line-height: 0.95;
	}

	.product-description {
		max-width: 480px;
		margin: 0;
		font-size: 15px;
		line-height: 1.65;
	}

	.product-price {
		margin: 22px 0 30px;
		color: #a25f4a;
		font-size: 22px;
		font-weight: 700;
	}

	.filler-options {
		margin: 0 0 28px;
		padding: 0;
		border: 0;
	}

	.filler-options legend {
		margin-bottom: 14px;
		color: #5b514b;
		font-size: 14px;
		font-weight: 700;
	}

	.filler-options-list {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
	}

	.filler-option {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 7px;
		width: 76px;
		color: #75695f;
		font-size: 11px;
		line-height: 1.2;
		text-align: center;
		cursor: pointer;
	}

	.filler-option input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}

	.filler-option-image {
		display: block;
		width: 58px;
		height: 58px;
		padding: 3px;
		border: 2px solid transparent;
		border-radius: 50%;
		transition:
			border-color 160ms ease,
			transform 160ms ease;
	}

	.filler-option-image img {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		box-shadow: 0 4px 14px rgba(113, 77, 60, 0.12);
	}

	.filler-option input:checked + .filler-option-image {
		border-color: #a25f4a;
		transform: scale(1.08);
	}

	.filler-option input:focus-visible + .filler-option-image {
		outline: 2px solid #b96f58;
		outline-offset: 3px;
	}

	.selected-filler-description {
		max-width: 440px;
		min-height: 34px;
		margin: 18px 0 0;
		color: #8c786c;
		font-size: 12px;
		line-height: 1.45;
	}

	.order-button {
		width: min(100%, 320px);
		padding: 15px 24px;
		border: 0;
		border-radius: 8px;
		background: #a25f4a;
		color: #fff;
		font: inherit;
		font-weight: 700;
		cursor: pointer;
		transition:
			background-color 160ms ease,
			transform 160ms ease;
	}

	.order-button:hover:not(:disabled) {
		background: #8f513f;
		transform: translateY(-1px);
	}

	.order-button:disabled {
		opacity: 0.6;
		cursor: wait;
	}

	.product-image-container {
		width: 100%;
		aspect-ratio: 1;
		max-height: 680px;
		overflow: hidden;
		border-radius: 18px;
		box-shadow: 0 14px 32px rgba(138, 90, 72, 0.1);
	}

	.product-image-container img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 800px) {
		width: min(100%, calc(100% - 20px));
		padding: 48px 0 56px;

		.product-card {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.product-image-container {
			grid-row: 1;
		}

		.product-details {
			grid-row: 2;
		}
	}
`;
