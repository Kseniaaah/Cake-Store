import styled from 'styled-components';
import { FieldError, FormFeedback } from '../form-feedback/form-feedback';
import { phoneRules, useFeedbackForm } from '../../hooks/use-feedback-form';
import { Loader } from '../loader/loader';

const FooterFormContainer = ({ className }) => {
	const { register, onSubmit, feedback, clearFeedback, errors, isSubmitting } = useFeedbackForm(
		'Спасибо! Мы свяжемся с вами по указанному телефону.',
	);

	return (
	<form className={className} onSubmit={onSubmit} onChange={clearFeedback} noValidate aria-busy={isSubmitting}>
		<p className="footer-form__title">
			Отправьте нам номер телефона, чтобы сделать заказ или уточнить детали
		</p>
		<div className="footer-form__fields">
			<input
				type="tel"
				placeholder="Телефон"
				aria-label="Номер телефона"
				autoComplete="tel"
				readOnly={isSubmitting}
				required
				aria-invalid={Boolean(errors.phone)}
				aria-describedby={errors.phone ? 'footer-phone-error' : undefined}
				{...register('phone', phoneRules)}
			/>
			<button type="submit" disabled={isSubmitting}>
				{isSubmitting ? <Loader label="Отправляем…" showLabel /> : 'Отправить'}
			</button>
		</div>
		<FieldError id="footer-phone-error" error={errors.phone} />
		<label className="footer-form__consent">
			<input
				type="checkbox"
				disabled={isSubmitting}
				required
				aria-invalid={Boolean(errors.consent)}
				aria-describedby={errors.consent ? 'footer-consent-error' : undefined}
				{...register('consent', { required: 'Подтвердите согласие на обработку персональных данных.' })}
			/>
			<span>Согласие на обработку персональных данных</span>
		</label>
		<FieldError id="footer-consent-error" error={errors.consent} />
		<FormFeedback message={feedback} onClose={clearFeedback} />
	</form>
	);
};

export const FooterForm = styled(FooterFormContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 14px;
	width: 100%;
	justify-self: center;
	color: #5b514b;
	font-size: 12px;

	.footer-form__title {
		width: 100%;
		margin: 0;
		font-size: 15px;
		font-weight: 600;
		line-height: 1.5;
		text-align: center;
	}

	.footer-form__fields {
		display: flex;
		align-items: stretch;
		gap: 8px;
		width: 100%;
	}

	input[type='tel'] {
		width: 100%;
		padding: 11px 14px;
		border: 1px solid #e5d6cb;
		border-radius: 8px;
		background: #fff;
		color: #29251f;
		font: inherit;
		outline: none;

		&:focus {
			border-color: #c98268;
			box-shadow: 0 0 0 3px rgba(201, 130, 104, 0.16);
		}
	}

	button {
		min-width: 150px;
		padding: 11px 20px;
		border: 1px solid #b56d56;
		border-radius: 8px;
		background: #b56d56;
		color: #fff;
		font: inherit;
		cursor: pointer;
		transition:
			background 160ms ease,
			border-color 160ms ease;

		&:hover:not(:disabled) {
			border-color: #8f513f;
			background: #8f513f;
		}

		&:disabled {
			opacity: 0.6;
			cursor: wait;
		}
	}

	input[aria-invalid='true'] {
		border-color: #9b3c30;
	}

	.footer-form__consent {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		width: 100%;
		cursor: pointer;
		line-height: 1.4;

		input {
			margin: 2px 0 0;
			accent-color: #b56d56;
		}
	}

	@media (max-width: 520px) {
		.footer-form__fields {
			flex-direction: column;
		}

		button {
			width: 100%;
		}
	}
`;
