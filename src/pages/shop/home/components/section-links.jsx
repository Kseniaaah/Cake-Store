import styled from 'styled-components';

export const SectionLinks = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-end;
	gap: 8px 28px;
	width: min(1280px, calc(100% - 32px));
	margin: 20px auto 0;

	@media (max-width: 520px) {
		gap: 4px 20px;
		margin-top: 16px;
	}
`;

export const SectionLink = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 44px;
	padding: 8px 0;
	border: 0;
	background: transparent;
	color: #8f513f;
	font-family: 'Cormorant Garamond', Georgia, serif;
	font-size: 22px;
	font-weight: 600;
	line-height: 1.4;
	letter-spacing: 0.01em;
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	transition: color 160ms ease;

	&:hover {
		color: #5b514b;
		text-decoration: none;
	}

	&:focus-visible {
		outline: 2px solid #8f513f;
		outline-offset: 4px;
	}

	@media (max-width: 520px) {
		font-size: 20px;
	}
`;
