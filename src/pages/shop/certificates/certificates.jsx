import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PagesTitle } from '../../../components';
import certificateBanner from '../../../components/icon/products/certificate.png';
import { FieldError } from '../../../components/form-feedback/form-feedback';
import { useCart } from '../../../context/cart-context';
import { certificateAmounts, certificateEmailPattern } from '../../../data/certificate-options';
import { Loader } from '../../../components/loader/loader';
import { LoadingImage } from '../../../components/loading-image/loading-image';
import { useLoadingAction } from '../../../hooks/use-loading-action';

const CertificatesContainer = ({ className }) => {
	const { addCertificateToCart } = useCart();
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const { isLoading: isSubmitting, runWithLoading } = useLoadingAction();
	const [isAdded, setIsAdded] = useState(false);
	const clearFeedback = () => setIsAdded(false);
	const onSubmit = handleSubmit((values) => runWithLoading(() => {
		addCertificateToCart(values);
		reset();
		setIsAdded(true);
	}), clearFeedback);

	return (
	<div className={className}>
		<PagesTitle
			eyebrow="Sweet Life"
			title="Сертификаты"
			subtitle="Подарок, который легко выбрать и приятно получить"
		/>
		<div className="certificate-container">
			<LoadingImage
				className="certificate-image"
				src={certificateBanner}
				alt="Подарочный сертификат Sweet Life"
			/>
			<form className="certificate-form" onSubmit={onSubmit} onChange={clearFeedback} noValidate aria-busy={isSubmitting}>
				<p>
					Выберите сумму и укажите данные получателя. Добавьте сертификат
					в корзину, чтобы оформить его вместе с остальными покупками.
				</p>
				<input
					className="certificate-input"
					placeholder="Введите имя получателя"
					aria-label="Имя получателя"
					autoComplete="name"
					readOnly={isSubmitting}
					required
					aria-invalid={Boolean(errors.recipientName)}
					aria-describedby={errors.recipientName ? 'certificate-name-error' : undefined}
					{...register('recipientName', {
						required: 'Укажите имя получателя.',
						validate: (value) => Boolean(value.trim()) || 'Укажите имя получателя.',
					})}
				/>
				<FieldError id="certificate-name-error" error={errors.recipientName} />
				<input
					className="certificate-input"
					type="email"
					placeholder="Введите почту получателя"
					aria-label="Почта получателя"
					autoComplete="email"
					readOnly={isSubmitting}
					required
					aria-invalid={Boolean(errors.recipientEmail)}
					aria-describedby={errors.recipientEmail ? 'certificate-email-error' : undefined}
					{...register('recipientEmail', {
						required: 'Укажите почту получателя.',
						setValueAs: (value) => value.trim(),
						pattern: {
							value: certificateEmailPattern,
							message: 'Введите корректный адрес, например name@example.ru.',
						},
					})}
				/>
				<FieldError id="certificate-email-error" error={errors.recipientEmail} />
				<textarea
					className="certificate-input"
					placeholder="Введите текст поздравления до 150 символов"
					aria-label="Текст поздравления"
					maxLength="150"
					rows="4"
					readOnly={isSubmitting}
					aria-invalid={Boolean(errors.message)}
					aria-describedby={errors.message ? 'certificate-message-error' : undefined}
					{...register('message', { maxLength: { value: 150, message: 'Поздравление должно быть не длиннее 150 символов.' } })}
				/>
				<FieldError id="certificate-message-error" error={errors.message} />
				<fieldset className="amount-fieldset" disabled={isSubmitting} aria-describedby={errors.amount ? 'certificate-amount-error' : undefined}>
					<legend>Выберите сумму</legend>
					<div className="amount-options">
						{certificateAmounts.map((amount) => (
							<label className="amount-option" key={amount}>
								<input
									type="radio"
									value={amount}
									required
									aria-invalid={Boolean(errors.amount)}
									aria-describedby={errors.amount ? 'certificate-amount-error' : undefined}
									{...register('amount', {
										required: 'Выберите сумму сертификата.',
										validate: (value) => certificateAmounts.includes(Number(value)) || 'Выберите сумму сертификата.',
									})}
								/>
								<span>{amount} ₽</span>
							</label>
						))}
					</div>
				</fieldset>
				<FieldError id="certificate-amount-error" error={errors.amount} />
				<button type="submit" disabled={isSubmitting}>
					{isSubmitting ? <Loader label="Добавляем…" showLabel /> : 'Добавить в корзину'}
				</button>
				<div className="certificate-feedback" role="status" aria-live="polite" aria-atomic="true">
					{isAdded && (
						<>
							<span>Сертификат добавлен в корзину.</span>{' '}
							<Link to="/cart">Перейти в корзину</Link>
						</>
					)}
				</div>
			</form>
		</div>
	</div>
	);
};

export const Certificates = styled(CertificatesContainer)`
	padding: 64px 0 72px;

	.certificate-container {
		display: grid;
		grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
		align-items: stretch;
		gap: 48px;
		width: min(1120px, calc(100% - 32px));
		margin: 0 auto;
	}

	.certificate-image {
		display: block;
		width: 100%;
		height: 100%;
		min-height: 460px;
		border-radius: 18px;
		object-fit: cover;
		box-shadow: 0 14px 32px rgba(138, 90, 72, 0.1);
	}

	.certificate-form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		gap: 14px;
		padding: 32px;
		border: 1px solid #f0ded5;
		border-radius: 18px;
		background: #fffaf7;
		color: #5b514b;
	}

	.certificate-form p {
		margin: 0 0 6px;
		font-size: 14px;
		line-height: 1.6;
	}

	.certificate-input {
		width: 100%;
		padding: 14px 16px;
		border: 1px solid #e6d3c9;
		border-radius: 8px;
		background: #fff;
		color: #5b514b;
		font: inherit;
		outline: none;
		transition:
			border-color 160ms ease,
			box-shadow 160ms ease;
		resize: vertical;
	}

	.certificate-feedback {
		color: #5b514b;
		font-size: 13px;
		line-height: 1.6;

		&:empty {
			display: none;
		}

		a {
			color: #8f513f;
			text-decoration: underline;
			text-underline-offset: 3px;
		}
	}

	.certificate-input::placeholder {
		color: #aa9b92;
	}

	.certificate-input:focus {
		border-color: #b96f58;
		box-shadow: 0 0 0 3px rgba(185, 111, 88, 0.12);
	}

	.certificate-input[aria-invalid='true'],
	.amount-option input[aria-invalid='true'] + span {
		border-color: #9b3c30;
	}

	.amount-fieldset {
		margin: 2px 0 4px;
		padding: 0;
		border: 0;
	}

	.amount-fieldset legend {
		margin-bottom: 10px;
		color: #5b514b;
		font-size: 13px;
		font-weight: 700;
	}

	.amount-options {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 8px;
	}

	.amount-option {
		position: relative;
		cursor: pointer;
	}

	.amount-option input {
		position: absolute;
		opacity: 0;
	}

	.amount-option span {
		display: block;
		padding: 10px 4px;
		border: 1px solid #e6d3c9;
		border-radius: 7px;
		color: #8f513f;
		font-size: 12px;
		text-align: center;
		transition:
			border-color 160ms ease,
			background-color 160ms ease;
	}

	.amount-option input:checked + span {
		border-color: #a25f4a;
		background: #f4e3db;
	}

	.amount-option input:focus-visible + span {
		outline: 2px solid #b96f58;
		outline-offset: 2px;
	}

	.certificate-form button {
		padding: 14px 20px;
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

	.certificate-form button:hover:not(:disabled) {
		background: #8f513f;
		transform: translateY(-1px);
	}

	.certificate-form button:disabled {
		opacity: 0.6;
		cursor: wait;
	}

	@media (max-width: 800px) {
		.certificate-container {
			grid-template-columns: 1fr;
			gap: 24px;
		}

		.certificate-image {
			min-height: 300px;
			max-height: 460px;
		}
	}

	@media (max-width: 520px) {
		padding: 48px 0 56px;

		.certificate-container {
			width: min(100%, calc(100% - 20px));
		}

		.certificate-form {
			padding: 24px 18px;
		}

		.amount-options {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`;
