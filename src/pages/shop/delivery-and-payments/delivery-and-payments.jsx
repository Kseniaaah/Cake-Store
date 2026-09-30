import styled from 'styled-components';
import { deliverySections } from '../../../data/mock-delivery-and-payments-page';
import { PagesTitle } from '../../../components';

const DeliveryAndPaymentsContainer = ({ className }) => {
	return (
		<div className={className}>
			<main className="delivery-page">
				<PagesTitle
					eyebrow="Sweet Life"
					title="Доставка и оплата"
					subtitle="Рассказываем, как десерт окажется у вас — красиво, вовремя и без лишних волнений."
				/>

				<div className="delivery-sections">
					{deliverySections.map((section) => (
						<section
							className={`delivery-section delivery-section--${section.id}`}
							key={section.id}
						>
							<div className="delivery-section__content">
								<h2>{section.title}</h2>
								<h3>{section.subtitle}</h3>
								<p>{section.text}</p>
								{section.details && (
									<ul>
										{section.details.map((detail) => (
											<li key={detail}>{detail}</li>
										))}
									</ul>
								)}
							</div>
						</section>
					))}
				</div>
			</main>
		</div>
	);
};

export const DeliveryAndPayments = styled(DeliveryAndPaymentsContainer)`
	.delivery-page {
		padding: 64px 0 72px;
	}

	.delivery-sections {
		width: min(1120px, calc(100% - 32px));
		margin: 0 auto;
	}

	.delivery-sections {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding-top: 24px;
	}

	.delivery-section {
		min-height: 240px;
		padding: 30px;
		border: 1px solid #f2e3db;
		border-radius: 18px;
		background: linear-gradient(180deg, #fffdfb 0%, #fff8f4 100%);
		box-shadow: 0 10px 24px rgba(138, 90, 72, 0.07);
	}

	.delivery-section h2 {
		margin: 0;
		color: #a25f4a;
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: clamp(28px, 3vw, 40px);
		font-weight: 600;
		line-height: 0.95;
	}

	.delivery-section h3 {
		max-width: 500px;
		margin: 10px 0 14px;
		color: #5b514b;
		font-size: 15px;
		font-weight: 600;
		line-height: 1.35;
	}

	.delivery-section p {
		max-width: 620px;
		margin: 0;
		color: #75695f;
		font-size: 13px;
		line-height: 1.6;
	}

	.delivery-section ul {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 18px;
		margin: 18px 0 0;
		padding: 0;
		list-style: none;
	}

	.delivery-section li {
		color: #5b514b;
		font-size: 12px;
		font-weight: 600;
	}

	.delivery-section li::before {
		content: '·';
		margin-right: 7px;
		color: #c98e75;
		font-size: 18px;
		line-height: 0;
	}

	@media (max-width: 700px) {
		.delivery-page {
			padding: 48px 0 48px;
		}

		.delivery-sections {
			width: min(100%, calc(100% - 20px));
		}

		.delivery-intro {
			padding: 20px 0 24px;
		}

		.delivery-intro h1 {
			font-size: 44px;
		}

		.delivery-sections {
			gap: 20px;
			padding-top: 18px;
		}

		.delivery-section {
			min-height: 0;
			padding: 24px 20px;
		}
	}
`;
