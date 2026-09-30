import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoadingAction } from './use-loading-action';

export const phoneRules = {
	required: 'Укажите номер телефона.',
	validate: (value) => {
		const digits = value.replace(/\D/g, '');
		return (
			(/^\+?[\d\s()-]+$/.test(value.trim()) &&
				digits.length >= 10 &&
				digits.length <= 15) ||
			'Введите корректный номер телефона, например +7 999 123-45-67.'
		);
	},
};

export const useFeedbackForm = (successMessage) => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { isLoading, runWithLoading } = useLoadingAction();
	const [feedback, setFeedback] = useState('');
	const clearFeedback = () => setFeedback('');

	// Демонстрация интерфейса: данные никуда не отправляются.
	const onSubmit = handleSubmit(() => runWithLoading(() => {
		setFeedback(successMessage);
	}), clearFeedback);

	return { register, onSubmit, feedback, clearFeedback, errors, isSubmitting: isLoading };
};
