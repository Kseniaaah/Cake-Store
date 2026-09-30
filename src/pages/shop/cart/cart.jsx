import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PagesTitle } from '../../../components';
import { useCart } from '../../../context/cart-context';
import { FieldError, FormFeedback } from '../../../components/form-feedback/form-feedback';
import { phoneRules, useFeedbackForm } from '../../../hooks/use-feedback-form';
import { Loader } from '../../../components/loader/loader';
import { LoadingButton } from '../../../components/loading-button/loading-button';
import { LoadingImage } from '../../../components/loading-image/loading-image';

const CartContainer = ({ className }) => {
	const { cartProducts, removeFromCart, totalPrice } = useCart();
	const hasCakes = cartProducts.some((product) => product.type === 'product');
	const { register, onSubmit, feedback, clearFeedback, errors, isSubmitting } = useFeedbackForm(
		'Спасибо за заказ! Менеджер свяжется с вами для уточнения деталей.',
	);

	return (
		<div className={className}>
			<PagesTitle
				eyebrow="Sweet Life"
				title="Корзина"
				subtitle="Проверьте заказ перед оформлением"
			/>
			{cartProducts.length > 0 ? (
				<CartLayout>
					<CartList aria-label="Товары в корзине">
						{cartProducts.map((product) => (
							<CartItem key={product.cartItemId}>
								<ProductLink to={product.href} $image>
									<ProductImage
										src={product.image}
										alt={product.title}
									/>
								</ProductLink>
								<ProductInfo>
									<ProductTitle>
										<ProductLink to={product.href}>
											{product.title}
										</ProductLink>
									</ProductTitle>
									{product.type === 'certificate' ? (
										<>
											<ProductMeta>Номинал: {product.amount.toLocaleString('ru-RU')} ₽</ProductMeta>
											<ProductMeta>Получатель: {product.recipientName}</ProductMeta>
											<ProductMeta>Почта: {product.recipientEmail}</ProductMeta>
											{product.message && (
												<ProductMeta className="certificate-message">Поздравление: {product.message}</ProductMeta>
											)}
										</>
									) : (
										<ProductMeta>
											{product.filling
												? `Начинка: ${product.filling}`
												: 'Начинку уточним при оформлении'}
										</ProductMeta>
									)}
									<ProductMeta>
										{product.quantity} шт. × {product.price.toLocaleString('ru-RU')} ₽
									</ProductMeta>
								</ProductInfo>
								<ItemPrice>
									{(product.price * product.quantity).toLocaleString('ru-RU')} ₽
								</ItemPrice>
								<RemoveButton
									type="button"
									disabled={isSubmitting}
									aria-label={`Удалить ${product.title} из корзины`}
									onClick={() => removeFromCart(product.cartItemId)}
								>
									×
								</RemoveButton>
							</CartItem>
						))}
					</CartList>
					<CartForm onSubmit={onSubmit} onChange={clearFeedback} noValidate aria-busy={isSubmitting}>
						<p>Укажите ваш номер телефона и пожелания к заказу.</p>
						<input
							type="tel"
							autoComplete="tel"
							placeholder="Номер телефона"
							aria-label="Номер телефона"
							readOnly={isSubmitting}
							required
							aria-invalid={Boolean(errors.phone)}
							aria-describedby={errors.phone ? 'cart-phone-error' : undefined}
							{...register('phone', phoneRules)}
						/>
						<FieldError id="cart-phone-error" error={errors.phone} />
						<textarea
							placeholder="Пожелания к заказу"
							aria-label="Пожелания к заказу"
							readOnly={isSubmitting}
							{...register('comment')}
						/>

						<OrderSummary>
							<SummaryLabel>Итоговая стоимость</SummaryLabel>
							<SummaryPrice>
								{totalPrice.toLocaleString('ru-RU')} ₽
							</SummaryPrice>
							<SummaryNote>
								{hasCakes
									? 'Доставка и окончательная стоимость уточняются после подтверждения заказа.'
									: 'Проверьте данные получателей перед оформлением сертификатов.'}
							</SummaryNote>
							<CheckoutButton type="submit" disabled={isSubmitting}>
								{isSubmitting ? <Loader label="Отправляем…" showLabel /> : 'Оформить заявку'}
							</CheckoutButton>
							<FormFeedback message={feedback} onClose={clearFeedback} />
						</OrderSummary>
					</CartForm>
				</CartLayout>
			) : (
				<EmptyState>
					<EmptyTitle>Корзина пока пуста</EmptyTitle>
					<EmptyText>
						Добавьте понравившиеся торты или подарочный сертификат, чтобы оформить заявку.
					</EmptyText>
					<ProductLink to="/cakes">Перейти в каталог</ProductLink>
				</EmptyState>
			)}
		</div>
	);
};

const CartLayout = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1.5fr) minmax(300px, 1fr);
	align-items: start;
	gap: 32px;
	width: min(1120px, calc(100% - 32px));
	margin: 0 auto;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

const CartList = styled.ul`
	display: grid;
	gap: 16px;
	margin: 0;
	padding: 0;
	list-style: none;
`;

const CartItem = styled.li`
	display: grid;
	grid-template-columns: 88px minmax(0, 1fr) auto 32px;
	align-items: center;
	gap: 16px;
	padding: 16px;
	border: 1px solid #eee6dc;
	border-radius: 12px;

	@media (max-width: 520px) {
		grid-template-columns: 64px minmax(0, 1fr) 32px;
		gap: 12px;
	}
`;

const ProductLink = styled(Link)`
	display: ${({ $image }) => ($image ? 'block' : 'inline')};
	color: #8f513f;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const ProductImage = styled(LoadingImage)`
	display: block;
	width: 100%;
	aspect-ratio: 1;
	object-fit: cover;
	border-radius: 8px;
`;

const ProductInfo = styled.div`
	min-width: 0;
`;

const ProductTitle = styled.h2`
	margin: 0 0 8px;
	font-size: 16px;
	line-height: 1.4;
`;

const ProductMeta = styled.p`
	margin: 4px 0 0;
	color: #75695f;
	font-size: 12px;
	line-height: 1.5;
	overflow-wrap: anywhere;

	&.certificate-message {
		white-space: pre-wrap;
	}
`;

const ItemPrice = styled.span`
	color: #8f513f;
	font-weight: 700;
	white-space: nowrap;

	@media (max-width: 520px) {
		grid-column: 2;
	}
`;

const RemoveButton = styled(LoadingButton)`
	width: 32px;
	height: 32px;
	padding: 0;
	border: 0;
	border-radius: 50%;
	background: #fffaf7;
	color: #8f513f;
	font-size: 24px;
	cursor: pointer;

	&:hover:not(:disabled) {
		background: #f4e3db;
	}

	&:disabled {
		cursor: wait;
	}

	@media (max-width: 520px) {
		grid-column: 3;
		grid-row: 1;
	}
`;

const CartForm = styled.form`
	display: grid;
	gap: 14px;
	padding: 24px;
	border: 1px solid #f0ded5;
	border-radius: 16px;
	background: #fffaf7;
	color: #5b514b;

	> p {
		margin: 0;
		font-size: 14px;
		line-height: 1.6;
	}

	input, textarea {
		width: 100%;
		padding: 12px;
		border: 1px solid #e6d3c9;
		border-radius: 8px;
		background: #fff;
		color: inherit;
		font: inherit;
	}

	textarea {
		min-height: 100px;
		resize: vertical;
	}

	input[aria-invalid='true'] {
		border-color: #9b3c30;
	}
`;

const OrderSummary = styled.div`
	display: grid;
	gap: 12px;
	margin-top: 8px;
	padding-top: 20px;
	border-top: 1px solid #e6d3c9;
`;

const SummaryLabel = styled.span`
	font-size: 14px;
`;

const SummaryPrice = styled.strong`
	color: #8f513f;
	font-size: 28px;
`;

const SummaryNote = styled.p`
	margin: 0;
	color: #75695f;
	font-size: 12px;
	line-height: 1.5;
`;

const CheckoutButton = styled.button`
	padding: 14px 20px;
	border: 0;
	border-radius: 8px;
	background: #a25f4a;
	color: #fff;
	font: inherit;
	font-weight: 700;
	cursor: pointer;

	&:hover:not(:disabled) {
		background: #8f513f;
	}

	&:disabled {
		opacity: 0.6;
		cursor: wait;
	}
`;

const EmptyState = styled.div`
	width: min(1120px, calc(100% - 32px));
	margin: 0 auto;
	padding: 48px 20px;
	border: 1px solid #eee6dc;
	border-radius: 16px;
	color: #75695f;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.6;
	text-align: center;

	a {
		color: inherit;
		font: inherit;
		text-decoration: underline;
		text-underline-offset: 3px;
	}
`;

const EmptyTitle = styled.h2`
	margin: 0 0 8px;
	font: inherit;
`;

const EmptyText = styled.p`
	margin: 0 0 12px;
	font: inherit;
`;

export const Cart = styled(CartContainer)`
	padding: 64px 0 72px;

	@media (max-width: 520px) {
		padding: 48px 0 56px;
	}
`;
