import palleteImage from '../components/icon/pallete.png';
import openImage from '../components/icon/open.png';
import certificateImage from '../components/icon/certificate.png';
import deliveryImage from '../components/icon/delivery.png';

export const infoCards = [
	{
		id: 1,
		title: 'Часы работы и контакты',
		to: '/deliveryAndPayments',
		description: [
			'Мы работаем с 9:00 до 21:00.',
			'Позвоните или напишите нам в удобное время: +7 (999) 123-45-67.',
			'Обсудим идею, оформим заказ и уточним детали.',
		],
		icon: openImage,
	},
	{
		id: 2,
		title: 'Предложите свой дизайн',
		to: '/products/0',
		description: [
			'Превратим вашу идею в десерт.',
			'Выберем вкус, форму, цвета и оформление под ваш праздник.',
			'Сделаем так, чтобы всё выглядело индивидуально и по-настоящему.',
		],
		icon: palleteImage,
	},
	{
		id: 3,
		title: 'Подарочные сертификаты',
		to: '/certificates',
		description: [
			'Подарите незабываемый сюрприз на день рождения, свадьбу или особый повод.',
			'Это всегда вкусно, красиво и по-настоящему приятно.',
			'Сертификат — идеальный вариант для тех, кто любит сладкие эмоции.',
		],
		icon: certificateImage,
	},
	{
		id: 4,
		title: 'Оплата и доставка',
		to: '/deliveryAndPayments',
		description: [
			'Оплачивайте заказ удобным способом: наличными, переводом или по карте.',
			'Доставляем по городу быстро, аккуратно и в срок.',
			'Берём на себя заботу о том, чтобы десерт был в идеальном состоянии.',
		],
		icon: deliveryImage,
	},
];
