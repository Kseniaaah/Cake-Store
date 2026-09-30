import styled from 'styled-components';
import { productRecords, categories, collections } from '../../../data/mock-products';
import cartIcon from '../../../components/icon/shopping-cart.png';
import { PagesTitle } from '../../../components';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../../../context/cart-context';
import { LoadingButton } from '../../../components/loading-button/loading-button';
import { LoadingImage } from '../../../components/loading-image/loading-image';

const CakesContainer = ({ className }) => {
	const { addToCart, cartProducts } = useCart();
	const [searchParams, setSearchParams] = useSearchParams();
	const categoryParam = searchParams.get('category');
	const collectionParam = searchParams.get('collection');
	const selectedCategory = categories.some((category) => category.id === categoryParam)
		? categoryParam
		: 'all';
	const selectedCollection = collections.some(
		(collection) => collection.id === collectionParam,
	)
		? collectionParam
		: 'all';
	const hasActiveFilters = selectedCategory !== 'all' || selectedCollection !== 'all';

	const setFilter = (name, value) => {
		const nextParams = new URLSearchParams(searchParams);

		if (value === 'all') {
			nextParams.delete(name);
		} else {
			nextParams.set(name, value);
		}

		setSearchParams(nextParams, { replace: true });
	};

	const resetFilters = () => {
		const nextParams = new URLSearchParams(searchParams);
		nextParams.delete('category');
		nextParams.delete('collection');
		setSearchParams(nextParams, { replace: true });
	};

	const filteredProducts = productRecords.filter((product) => {
		const productCategories = Array.isArray(product.category)
			? product.category
			: [product.category];
		const productCollections = Array.isArray(product.collectionId)
			? product.collectionId
			: [product.collectionId];

		const matchesCategory =
			selectedCategory === 'all' || productCategories.includes(selectedCategory);
		const matchesCollection =
			selectedCollection === 'all' ||
			productCollections.includes(selectedCollection);

		return matchesCategory && matchesCollection;
	});

	return (
		<section className={className} aria-label="Каталог тортов">
			<PagesTitle
				eyebrow="Sweet Life"
				title="Торты"
				subtitle="Созданы для ваших самых сладких событий"
			/>

			<div className="catalog-content">
				<FiltersPanel aria-label="Фильтры каталога">
					<CategoryFilters role="group" aria-label="Категории">
						<FilterButton
							type="button"
							$active={selectedCategory === 'all'}
							aria-pressed={selectedCategory === 'all'}
							onClick={() => setFilter('category', 'all')}
						>
							Все категории
						</FilterButton>

						{categories.map((category) => (
							<FilterButton
								key={category.id}
								type="button"
								$active={selectedCategory === category.id}
								aria-pressed={selectedCategory === category.id}
								onClick={() => setFilter('category', category.id)}
							>
								{category.title}
							</FilterButton>
						))}
					</CategoryFilters>

					<CollectionFilter $active={selectedCollection !== 'all'}>
						<span className="filter-label">Коллекции</span>
						<span className="select-wrapper">
							<select
								value={selectedCollection}
								onChange={(event) => setFilter('collection', event.target.value)}
							>
								<option value="all">Все коллекции</option>

								{collections.map((collection) => (
									<option key={collection.id} value={collection.id}>
										{collection.title}
									</option>
								))}
							</select>
						</span>
					</CollectionFilter>
				</FiltersPanel>

				<div className="filter-summary">
					<p role="status" aria-atomic="true">
						Показано: {filteredProducts.length} из {productRecords.length}
					</p>
					<ResetFiltersButton
						type="button"
						onClick={resetFilters}
						disabled={!hasActiveFilters}
					>
						Сбросить фильтры
					</ResetFiltersButton>
				</div>

				{filteredProducts.length === 0 && (
					<div className="empty-state">
						<h2>Таких тортов пока нет</h2>
						<p>Попробуйте другую категорию или коллекцию.</p>
					</div>
				)}

				<div className="collections-list">
					{filteredProducts.map((product) => (
						<div key={product.id} className="collection-item">
							<div className="product-image">
								<Link to={`/products/${product.id}`}>
									<LoadingImage src={product.image} alt={product.title} />
								</Link>

								<LoadingButton
									type="button"
									className="cart-button"
									aria-label={`Добавить в корзину: ${product.title}`}
									onClick={() => addToCart(product)}
								>
									<img src={cartIcon} alt="" />
									{cartProducts.some((item) => item.id === product.id) && (
										<span className="in-cart" aria-hidden="true">✓</span>
									)}
								</LoadingButton>
							</div>
							<span>{product.title}</span>
							<span>{product.price} ₽</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const FiltersPanel = styled.section`
	display: grid;
	grid-template-columns: minmax(0, 1fr) 200px;
	align-items: end;
	gap: 32px;
	border-bottom: 1px solid #eee6dc;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		gap: 8px;
		padding-bottom: 4px;
	}
`;

const CategoryFilters = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 4px 28px;
	min-width: 0;

	@media (max-width: 520px) {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 4px 20px;
	}
`;

const FilterButton = styled.button`
	position: relative;
	min-height: 48px;
	padding: 12px 0;
	border: 0;
	background: transparent;
	color: ${({ $active }) => ($active ? '#8f513f' : '#786b62')};
	font: inherit;
	font-size: 13px;
	font-weight: 600;
	white-space: nowrap;
	cursor: pointer;
	transition: color 160ms ease;

	&::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: -1px;
		left: 0;
		height: 2px;
		background: ${({ $active }) => ($active ? '#b56d56' : 'transparent')};
	}

	&:hover {
		color: #8f513f;
	}

	&:focus-visible {
		outline: 2px solid #8f513f;
		outline-offset: 3px;
	}

	@media (max-width: 520px) {
		justify-self: start;
		min-height: 44px;
		padding: 10px 0;
	}
`;

const CollectionFilter = styled.label`
	display: block;
	min-width: 0;
	color: ${({ $active }) => ($active ? '#8f513f' : '#786b62')};
	font-size: 13px;

	.filter-label {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}

	.select-wrapper {
		position: relative;
		display: block;

		&::after {
			content: '';
			position: absolute;
			top: 50%;
			right: 3px;
			width: 7px;
			height: 7px;
			border-right: 1.5px solid #8f513f;
			border-bottom: 1.5px solid #8f513f;
			transform: translateY(-70%) rotate(45deg);
			pointer-events: none;
		}
	}

	select {
		appearance: none;
		width: 100%;
		min-height: 48px;
		padding: 12px 26px 12px 0;
		border: 0;
		border-radius: 0;
		background: transparent;
		color: inherit;
		font: inherit;
		cursor: pointer;
		transition: color 160ms ease;

		&:hover {
			color: #8f513f;
		}

		&:focus-visible {
			outline: 2px solid #8f513f;
			outline-offset: 3px;
		}
	}

	@media (max-width: 900px) {
		border-top: 1px solid #f2ece6;
	}

	@media (max-width: 520px) {
		select {
			font-size: 16px;
		}
	}
`;

const ResetFiltersButton = styled.button`
	min-height: 44px;
	padding: 8px 0;
	border: 0;
	background: transparent;
	color: #8f513f;
	font: inherit;
	font-size: 12px;
	cursor: pointer;
	transition: color 160ms ease;

	&:hover:not(:disabled) {
		color: #a25f4a;
	}

	&:focus-visible {
		outline: 2px solid #8f513f;
		outline-offset: 3px;
	}

	&:disabled {
		visibility: hidden;
	}
`;

export const Cakes = styled(CakesContainer)`
	width: 100%;
	padding: 64px 0 72px;
	background: #fff;

	.catalog-content {
		width: min(1280px, calc(100% - 32px));
		margin: 0 auto;
	}

	.filter-summary {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 4px 16px;
		margin: 4px 0 16px;

		p {
			margin: 0;
			color: #5b514b;
			font-size: 12px;
		}
	}

	.empty-state {
		padding: 48px 20px;
		border: 1px solid #eee6dc;
		border-radius: 16px;
		text-align: center;

		h2 {
			margin: 0 0 8px;
			color: #8f513f;
			font-family: 'Cormorant Garamond', Georgia, serif;
			font-size: 32px;
			font-weight: 600;
		}

		p {
			margin: 0;
			color: #5b514b;
			font-size: 14px;
		}
	}

	.collections-list {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		column-gap: clamp(16px, 1.8vw, 24px);
		row-gap: clamp(32px, 3.2vw, 44px);
	}

	.collection-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		height: 360px;
		min-width: 0;
		text-align: center;
	}

	.product-image {
		position: relative;
		width: 100%;
		height: 300px;
		flex-shrink: 0;
	}

	.product-image > a {
		display: block;
		width: 100%;
		height: 100%;
	}

	.product-image > a > img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 16px;
		box-shadow: 0 10px 22px rgba(113, 77, 60, 0.12);
	}

	.cart-button {
		position: absolute;
		top: 10px;
		right: 10px;
		display: grid;
		place-items: center;
		width: 36px;
		height: 36px;
		padding: 0;
		border: 1px solid #d8b7a9;
		border-radius: 50%;
		background: rgba(255, 250, 247, 0.94);
		cursor: pointer;
		transition:
			background 160ms ease,
			border-color 160ms ease,
			transform 160ms ease;
	}

	.cart-button img {
		width: 18px;
		height: 18px;
		object-fit: contain;
	}

	.in-cart {
		position: absolute;
		right: -4px;
		bottom: -4px;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #8f513f;
		color: #fff;
		font-size: 12px;
		line-height: 18px;
	}

	.cart-button:hover:not(:disabled) {
		border-color: #c98268;
		background: #fff;
		transform: translateY(-1px);
	}

	.cart-button:disabled {
		color: #8f513f;
		cursor: wait;
	}

	.collection-item > span {
		color: #5b514b;
		font-size: 14px;
		font-weight: 600;
		line-height: 1.35;
	}

	@media (max-width: 900px) {
		.catalog-content {
			width: min(100%, calc(100% - 24px));
		}

		.collections-list {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.collection-item {
			height: 330px;
		}

		.product-image {
			height: 270px;
		}
	}

	@media (max-width: 520px) {
		padding: 48px 0 56px;

		.catalog-content {
			width: min(100%, calc(100% - 20px));
		}

		.collection-item {
			height: 300px;
		}

		.product-image {
			height: 240px;
		}
	}
`;
