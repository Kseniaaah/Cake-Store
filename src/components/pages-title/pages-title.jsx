import styled from 'styled-components';

const PagesTitleContainer = ({ className, eyebrow, title, subtitle }) => (
	<div className={className}>
		{eyebrow && <span className="eyebrow">{eyebrow}</span>}
		<h1>{title}</h1>
		{subtitle && <p>{subtitle}</p>}
	</div>
);

export const PagesTitle = styled(PagesTitleContainer)`
	width: min(1280px, calc(100% - 32px));
	margin: 0 auto 36px;
	color: #5b514b;
	text-align: center;

	.eyebrow {
		display: block;
		color: #a25f4a;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	h1 {
		margin: 8px 0 4px;
		color: #8f513f;
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: clamp(44px, 5vw, 64px);
		font-weight: 600;
		line-height: 0.9;
	}

	p {
		margin: 0;
		font-size: 14px;
		line-height: 1.5;
	}

	@media (max-width: 520px) {
		width: min(100%, calc(100% - 20px));
		margin-bottom: 28px;

		h1 {
			font-size: 44px;
		}
	}
`;
