import banner1 from '../components/icon/products/banner1.jpg';
import banner2 from '../components/icon/products/banner2.jpg';
import banner3 from '../components/icon/products/banner3.jpg';

import showcaseBento from '../components/icon/products/bento/bento-white-flowers.jpg';
import showcaseUsual from '../components/icon/products/usual/usual-berries.jpg';
import showcaseKids from '../components/icon//products/usual/usual-child-dino.jpg';
import showcaseCups from '../components/icon/products/cup-cakes/cup-cakes-bday-white.jpg';

export const mockBanners = [
	{
		id: 1,
		title: 'Новая начинка',
		alt: 'Новая начинка',
		text: 'Воздушное сочетание сливочного мусса и бананового крема',
		image: banner1,
		to: '/cakes',
		status: 'published',
	},
	{
		id: 2,
		title: 'Торт с вашим дизайном',
		alt: 'Торт с вашим дизайном',
		text: 'Отправте свой референс, а мы воплотим его',
		image: banner2,
		to: '/products/0',
		status: 'published',
	},
	{
		id: 3,
		title: 'Приятный подарок',
		alt: 'Скидка для именинника',
		text: 'Скидка 10% на торты из коллекции "B-day"',
		image: banner3,
		to: '/cakes?collection=b-day',
		status: 'published',
	},
]

export const mockShowcaseBanners = [
	{
		id: 1,
		title: 'Бенто торты',
		alt: 'Бенто торты',
		image: showcaseBento,
		to: '/cakes?category=bento',
	},
	{
		id: 2,
		title: 'Большие торты 2кг',
		alt: 'Большие торты',
		image: showcaseUsual,
		to: '/cakes?category=usual',
	},
	{
		id: 3,
		title: 'Для маленьких',
		alt: 'Торты для детей',
		image: showcaseKids,
		to: '/cakes?collection=kids',
	},
	{
		id: 4,
		title: 'Торты в кружке',
		alt: 'Торты в кружке',
		image: showcaseCups,
		to: '/cakes?category=cupcakes',
	},
]
