import styled from 'styled-components';

export const CarouselArrow = styled.button`
	display: grid;
	place-items: center;
	width: 44px;
	height: 44px;
	padding: 0;
	border: 0;
	background: transparent;
	color: ${({ $onImage }) => ($onImage ? '#fff' : '#8f513f')};
	cursor: pointer;
	opacity: 0.8;
	transition: opacity 160ms ease;

	&::before {
		content: '';
		width: 14px;
		height: 14px;
		border-top: 2px solid currentColor;
		border-right: 2px solid currentColor;
		transform: ${({ $previous }) =>
			$previous
				? 'translateX(4px) rotate(-135deg)'
				: 'translateX(-4px) rotate(45deg)'};
		filter: ${({ $onImage }) =>
			$onImage ? 'drop-shadow(0 1px 2px rgba(32, 27, 22, 0.85))' : 'none'};
	}

	&:hover,
	&:focus-visible {
		opacity: 1;
	}

	&:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}
`;
