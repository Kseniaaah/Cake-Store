import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
	to { transform: rotate(360deg); }
`;

const LoaderContainer = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	vertical-align: middle;
`;

const Spinner = styled.span`
	display: inline-block;
	flex-shrink: 0;
	width: ${({ $size }) => $size}px;
	height: ${({ $size }) => $size}px;
	border: 2px solid currentColor;
	border-right-color: transparent;
	border-radius: 50%;
	animation: ${rotate} 700ms linear infinite;

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
`;

const LoadingArea = styled.div`
	display: grid;
	place-items: center;
	min-height: 40vh;
	padding: 64px 16px;
	color: #8f513f;
	font-size: 14px;
`;

export const Loader = ({ label = 'Загрузка…', showLabel = false, size = 16 }) => (
	<LoaderContainer role="status" aria-label={label}>
		<Spinner $size={size} aria-hidden="true" />
		{showLabel && <span aria-hidden="true">{label}</span>}
	</LoaderContainer>
);

export const PageLoader = () => (
	<LoadingArea aria-busy="true">
		<Loader showLabel size={24} />
	</LoadingArea>
);
