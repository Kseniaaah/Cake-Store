import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const FeedbackDialog = styled.dialog`
	width: min(420px, calc(100% - 32px));
	max-height: calc(100dvh - 32px);
	margin: auto;
	padding: 0;
	border: 1px solid #eee6dc;
	border-radius: 16px;
	background: #fff;
	color: #5b514b;
	box-shadow: 0 16px 48px rgba(91, 51, 36, 0.16);
	font: inherit;
	text-align: center;

	&::backdrop {
		background: rgba(52, 37, 30, 0.32);
	}

	.feedback-content {
		padding: 32px 28px;
	}

	h2 {
		margin: 0 0 12px;
		color: #8f513f;
		font-size: 18px;
		font-weight: 600;
		line-height: 1.4;
	}

	p {
		margin: 0 0 24px;
		font-size: 14px;
		font-weight: 400;
		line-height: 1.6;
	}

	button {
		min-height: 44px;
		padding: 12px 32px;
		border: 0;
		border-radius: 8px;
		background: #a25f4a;
		color: #fff;
		font: inherit;
		font-size: 14px;
		cursor: pointer;

		&:hover {
			background: #8f513f;
		}

		&:focus-visible {
			outline: 2px solid #8f513f;
			outline-offset: 3px;
		}
	}
`;

const ErrorMessage = styled.span`
	display: block;
	width: 100%;
	color: #9b3c30;
	font-size: 12px;
	font-weight: 400;
	line-height: 1.5;
	text-align: left;
`;

export const FormFeedback = ({ message, onClose }) => {
	const dialogRef = useRef(null);
	const titleId = useId();
	const messageId = useId();

	useEffect(() => {
		if (!message) return;

		const dialog = dialogRef.current;
		const previousOverflow = document.body.style.overflow;
		dialog.showModal();
		document.body.style.overflow = 'hidden';

		return () => {
			dialog.close();
			document.body.style.overflow = previousOverflow;
		};
	}, [message]);

	if (!message) return null;

	return createPortal(
		<FeedbackDialog
			ref={dialogRef}
			aria-labelledby={titleId}
			aria-describedby={messageId}
			onCancel={(event) => {
				event.preventDefault();
				onClose();
			}}
			onClick={(event) => {
				if (event.target === event.currentTarget) onClose();
			}}
		>
			<div className="feedback-content">
				<h2 id={titleId}>Заявка отправлена</h2>
				<p id={messageId}>{message}</p>
				<button type="button" onClick={onClose} autoFocus>Понятно</button>
			</div>
		</FeedbackDialog>,
		document.body,
	);
};

export const FieldError = ({ id, error }) =>
	error ? <ErrorMessage id={id} role="alert">{error.message}</ErrorMessage> : null;
