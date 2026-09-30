import { useLoadingAction } from '../../hooks/use-loading-action';
import { Loader } from '../loader/loader';

export const LoadingButton = ({ children, onClick, disabled, loadingText, ...props }) => {
	const { isLoading, runWithLoading } = useLoadingAction();

	return (
		<button
			{...props}
			type="button"
			disabled={disabled || isLoading}
			aria-busy={isLoading}
			onClick={() => runWithLoading(onClick)}
		>
			{isLoading ? <Loader label={loadingText} showLabel={Boolean(loadingText)} /> : children}
		</button>
	);
};
