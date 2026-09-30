import bentoWhite from '../components/icon/products/bento/bento-white.jpg';
import bentoBigHeart from '../components/icon/products/bento/bento-big-heart.jpg';
import bentoChildCat2 from '../components/icon/products/bento/bento-child-cat2.jpg';
import bentoChildCat from '../components/icon/products/bento/bento-child-cat.jpg';
import bentoChildFrog from '../components/icon/products/bento/bento-child-frog.jpg';
import bentoChildKarusel from '../components/icon/products/bento/bento-child-karusel.jpg';
import bentoDaizy from '../components/icon/products/bento/bento-daizy.jpg';
import bentoChildNumber from '../components/icon/products/bento/bento-child-number.jpg';
import bentoChildMouse from '../components/icon/products/bento/bento-child-mouse.jpg';
import bentoFrog from '../components/icon/products/bento/bento-frog.jpg';
import bentoGraduation from '../components/icon/products/bento/bento-graduation.jpg';
import bentoYouAreOld from '../components/icon/products/bento/bento-you-are-old.jpg';
import bentoWhiteFlowers from '../components/icon/products/bento/bento-white-flowers.jpg';
import bentoVillage from '../components/icon/products/bento/bento-village.jpg';
import bentoRedFlowers from '../components/icon/products/bento/bento-red-flowers.jpg';
import bentoRats from '../components/icon/products/bento/bento-rats.jpg';
import bentoPurple from '../components/icon/products/bento/bento-purple.jpg';
import bentoMountains from '../components/icon/products/bento/bento-mountains.jpg';
import bentoMother from '../components/icon/products/bento/bento-mother.jpg';
import bentoMeme from '../components/icon/products/bento/bento-meme.jpg';
import bentoLoveMessage from '../components/icon/products/bento/bento-love-message.jpg';
import bentoLoveChemistry from '../components/icon/products/bento/bento-love-chemistry.jpg';
import bentoHearts from '../components/icon/products/bento/bento-hearts.jpg';
import usualBlueHearts from '../components/icon/products/usual/usual-blue-hearts.jpg';
import usualBird from '../components/icon/products/usual/usual-bird.jpg';
import usualBerries from '../components/icon/products/usual/usual-berries.jpg';
import usualBdayPhoto from '../components/icon/products/usual/usual-bday-photo.jpg';
import usualWhiteFlowers from '../components/icon/products/usual/usual-white-flowers.jpg';
import usualWhale from '../components/icon/products/usual/usual-whale.jpg';
import usualVangogh from '../components/icon/products/usual/usual-vangogh.jpg';
import usualPinkFlowers from '../components/icon/products/usual/usual-pink-flowers.jpg';
import usualLemons from '../components/icon/products/usual/usual-lemons.jpg';
import usualGreen from '../components/icon/products/usual/usual-green.jpg';
import usualFrogs from '../components/icon/products/usual/usual-frogs.jpg';
import usualFishAsian from '../components/icon/products/usual/usual-fish-asian.jpg';
import usualDaizy from '../components/icon/products/usual/usual-daizy.jpg';
import usualChildTeddy from '../components/icon/products/usual/usual-child-teddy.jpg';
import usualChildDino from '../components/icon/products/usual/usual-child-dino.jpg';
import usualChildBday from '../components/icon/products/usual/usual-child-bday.jpg';
import usualChildAnimals from '../components/icon/products/usual/usual-child-animals.jpg';
import usualCandles from '../components/icon/products/usual/usual-candles.jpg';
import usualBlue from '../components/icon/products/usual/usual-blue.jpg';
import cupCakesBlueBday from '../components/icon/products/cup-cakes/cup-cakes-blue-bday.jpg';
import cupCakesBdayWhite from '../components/icon/products/cup-cakes/cup-cakes-bday-white.jpg';
import cupCakeBday from '../components/icon/products/cup-cakes/cup-cake-bday.jpg';
import cupCakesLoveHearts from '../components/icon/products/cup-cakes/cup-cakes-love-hearts.jpg';
import cupCakesFlowers from '../components/icon/products/cup-cakes/cup-cakes-flowers.jpg';
import cupCakesLove from '../components/icon/products/cup-cakes/cup-cakes-love.jpg';

export const categories = [
	{ id: 'bento', title: 'Бенто торты' },
	{ id: 'usual', title: 'Большие торты 2кг' },
	{ id: 'cupcakes', title: 'Торты в кружке' },
];

export const collections = [
	{
		id: 'b-day',
		title: 'День рождения',
		image: usualBdayPhoto,
		description:
			'Праздничные торты для именинников всех возрастов. Яркое оформление, любимые вкусы и детали, которые сделают день рождения особенным.',
	},
	{
		id: 'flowers',
		title: 'Цветочные мотивы',
		image: bentoMountains,
		description:
			'Торты с нежными цветочными дизайнами. Подойдут для весеннего праздника, дня рождения, признания или просто красивого подарка.',
	},
	{
		id: 'love',
		title: 'Для влюбленных',
		image: bentoBigHeart,
		description:
			'Романтичные торты для пары. Нежное оформление и сладкий способ сказать о своих чувствах в день встречи, годовщины или без повода.',
	},
	{
		id: 'kids',
		title: 'Для маленьких',
		image: usualChildDino,
		description:
			'Веселые торты для детей. Любимые герои, яркие цвета и праздничное оформление для дня рождения или первого важного события.',
	},
];

export const productRecords = [
	{
		id: 0,
		title: 'Торт с вашим дизайном',
		price: 1800,
		category: ['bento', 'usual', 'cupcakes'],
		collectionId: null,
		description: 'Отправьте нам свой дизайн, и мы создадим торт по вашему желанию.',
		image: bentoWhite,
	},
	{
		id: 1,
		title: 'Бенто с большим сердцем',
		price: 1200,
		category: 'bento',
		collectionId: 'love',
		description: 'Нежный бенто-торт с романтичным оформлением.',
		image: bentoBigHeart,
	},
	{
		id: 2,
		title: 'Бенто Котёнок',
		price: 1200,
		category: 'bento',
		collectionId: 'kids',
		description: 'Маленький праздничный торт с милым котёнком.',
		image: bentoChildCat2,
	},
	{
		id: 3,
		title: 'Бенто с котиком',
		price: 1200,
		category: 'bento',
		collectionId: 'kids',
		description: 'Бенто-торт с забавной иллюстрацией котика.',
		image: bentoChildCat,
	},
	{
		id: 4,
		title: 'Бенто Лягушка',
		price: 1200,
		category: 'bento',
		collectionId: 'kids',
		description: 'Яркий бенто для детского праздника.',
		image: bentoChildFrog,
	},
	{
		id: 5,
		title: 'Бенто Карусель',
		price: 1200,
		category: 'bento',
		collectionId: 'kids',
		description: 'Нежное оформление для весёлого торжества.',
		image: bentoChildKarusel,
	},
	{
		id: 6,
		title: 'Бенто Ромашки',
		price: 1200,
		category: 'bento',
		collectionId: ['flowers', 'b-day'],
		description: 'Светлый бенто с цветочным настроением.',
		image: bentoDaizy,
	},
	{
		id: 7,
		title: 'Бенто с цифрой',
		price: 1200,
		category: 'bento',
		collectionId: ['b-day', 'kids'],
		description: 'Праздничный бенто с персональной цифрой.',
		image: bentoChildNumber,
	},
	{
		id: 8,
		title: 'Бенто Мышонок',
		price: 1200,
		category: 'bento',
		collectionId: 'kids',
		description: 'Милый торт для маленького именинника.',
		image: bentoChildMouse,
	},
	{
		id: 9,
		title: 'Бенто Лягушонок',
		price: 1200,
		category: 'bento',
		collectionId: 'kids',
		description: 'Необычный бенто с весёлым персонажем.',
		image: bentoFrog,
	},
	{
		id: 10,
		title: 'Бенто Выпускной',
		price: 1200,
		category: 'bento',
		collectionId: null,
		description: 'Тёплый подарок к важному школьному событию.',
		image: bentoGraduation,
	},
	{
		id: 11,
		title: 'Бенто с поздравлением',
		price: 1200,
		category: 'bento',
		collectionId: 'b-day',
		description: 'Торт с лёгким юмором для особенного дня.',
		image: bentoYouAreOld,
	},
	{
		id: 12,
		title: 'Бенто Белые цветы',
		price: 1200,
		category: 'bento',
		collectionId: 'flowers',
		description: 'Минималистичный бенто с нежными цветами.',
		image: bentoWhiteFlowers,
	},
	{
		id: 13,
		title: 'Бенто Деревенька',
		price: 1200,
		category: 'bento',
		collectionId: null,
		description: 'Уютный сюжетный торт с домашним настроением.',
		image: bentoVillage,
	},
	{
		id: 14,
		title: 'Бенто Красные цветы',
		price: 1200,
		category: 'bento',
		collectionId: 'love',
		description: 'Выразительный бенто для романтичного подарка.',
		image: bentoRedFlowers,
	},
	{
		id: 15,
		title: 'Бенто Крыски',
		price: 1200,
		category: 'bento',
		collectionId: null,
		description: 'Ироничное оформление для любителей необычных идей.',
		image: bentoRats,
	},
	{
		id: 16,
		title: 'Бенто Лавандовый',
		price: 1200,
		category: 'bento',
		collectionId: 'flowers',
		description: 'Спокойный бенто в мягкой сиреневой гамме.',
		image: bentoPurple,
	},
	{
		id: 17,
		title: 'Бенто Горы',
		price: 1200,
		category: 'bento',
		collectionId: 'flowers',
		description: 'Небольшой торт с графичным горным пейзажем.',
		image: bentoMountains,
	},
	{
		id: 18,
		title: 'Бенто Для мамы',
		price: 1200,
		category: 'bento',
		collectionId: null,
		description: 'Трогательный подарок с тёплым посланием.',
		image: bentoMother,
	},
	{
		id: 19,
		title: 'Бенто Мем',
		price: 1200,
		category: 'bento',
		collectionId: 'b-day',
		description: 'Весёлый торт для подарка с характером.',
		image: bentoMeme,
	},
	{
		id: 20,
		title: 'Бенто с посланием',
		price: 1200,
		category: 'bento',
		collectionId: 'love',
		description: 'Романтичный торт с личным признанием.',
		image: bentoLoveMessage,
	},
	{
		id: 21,
		title: 'Бенто Химия любви',
		price: 1200,
		category: 'bento',
		collectionId: 'love',
		description: 'Оригинальный подарок для влюблённых.',
		image: bentoLoveChemistry,
	},
	{
		id: 22,
		title: 'Бенто Сердечки',
		price: 1200,
		category: 'bento',
		collectionId: 'love',
		description: 'Нежный торт с праздничным декором.',
		image: bentoHearts,
	},
	{
		id: 23,
		title: 'Торт Голубые сердца',
		price: 2800,
		category: 'bento',
		collectionId: 'b-day',
		description: 'Большой торт с нежным декором из сердец.',
		image: usualBlueHearts,
	},
	{
		id: 24,
		title: 'Торт с птицами',
		price: 2800,
		category: 'bento',
		collectionId: null,
		description: 'Иллюстрированный торт с лёгким природным сюжетом.',
		image: usualBird,
	},
	{
		id: 25,
		title: 'Торт с ягодами',
		price: 2800,
		category: 'bento',
		collectionId: null,
		description: 'Праздничный торт с сочным ягодным оформлением.',
		image: usualBerries,
	},
	{
		id: 26,
		title: 'Торт с фотографией',
		price: 3000,
		category: 'bento',
		collectionId: 'b-day',
		description: 'Персональный торт для памятного события.',
		image: usualBdayPhoto,
	},
	{
		id: 27,
		title: 'Торт Белые цветы',
		price: 2800,
		category: 'bento',
		collectionId: 'flowers',
		description: 'Элегантный торт с объёмным цветочным декором.',
		image: usualWhiteFlowers,
	},
	{
		id: 28,
		title: 'Торт Кит',
		price: 2800,
		category: 'usual',
		collectionId: null,
		description: 'Необычный торт с морским настроением.',
		image: usualWhale,
	},
	{
		id: 29,
		title: 'Торт Ван Гог',
		price: 3000,
		category: 'usual',
		collectionId: null,
		description: 'Артистичный торт с мотивами знаменитой живописи.',
		image: usualVangogh,
	},
	{
		id: 30,
		title: 'Торт Розовые цветы',
		price: 2800,
		category: 'usual',
		collectionId: ['flowers', 'b-day'],
		description: 'Нежный торт для романтичного праздника.',
		image: usualPinkFlowers,
	},
	{
		id: 31,
		title: 'Лимонный торт',
		price: 2800,
		category: 'usual',
		collectionId: null,
		description: 'Свежий солнечный дизайн для летнего настроения.',
		image: usualLemons,
	},
	{
		id: 32,
		title: 'Зелёный торт',
		price: 2800,
		category: 'usual',
		collectionId: 'flowers',
		description: 'Лаконичный торт в природной цветовой гамме.',
		image: usualGreen,
	},
	{
		id: 33,
		title: 'Торт с лягушками',
		price: 2800,
		category: 'usual',
		collectionId: 'flowers',
		description: 'Весёлое оформление для детского праздника.',
		image: usualFrogs,
	},
	{
		id: 34,
		title: 'Торт с рыбками',
		price: 2800,
		category: 'usual',
		collectionId: null,
		description: 'Яркий торт с необычным азиатским сюжетом.',
		image: usualFishAsian,
	},
	{
		id: 35,
		title: 'Торт Ромашки',
		price: 2800,
		category: 'usual',
		collectionId: 'flowers',
		description: 'Светлый торт с нежным летним декором.',
		image: usualDaizy,
	},
	{
		id: 36,
		title: 'Торт Мишка',
		price: 2800,
		category: 'usual',
		collectionId: ['kids', 'b-day'],
		description: 'Добрый детский торт с плюшевым персонажем.',
		image: usualChildTeddy,
	},
	{
		id: 37,
		title: 'Торт Динозавр',
		price: 2800,
		category: 'usual',
		collectionId: ['kids', 'b-day'],
		description: 'Праздничный торт для маленького исследователя.',
		image: usualChildDino,
	},
	{
		id: 38,
		title: 'Детский торт',
		price: 2800,
		category: 'usual',
		collectionId: ['kids', 'b-day'],
		description: 'Яркий торт для весёлого дня рождения.',
		image: usualChildBday,
	},
	{
		id: 39,
		title: 'Торт с животными',
		price: 2800,
		category: 'usual',
		collectionId: ['kids', 'b-day'],
		description: 'Добрый сюжетный торт для детского праздника.',
		image: usualChildAnimals,
	},
	{
		id: 40,
		title: 'Торт со свечами',
		price: 2800,
		category: 'usual',
		collectionId: 'b-day',
		description: 'Классическое оформление для дня рождения.',
		image: usualCandles,
	},
	{
		id: 41,
		title: 'Синий праздничный торт',
		price: 2800,
		category: 'usual',
		collectionId: 'b-day',
		description: 'Выразительный торт в глубоких синих оттенках.',
		image: usualBlue,
	},
	{
		id: 42,
		title: 'Капкейк Голубой праздник',
		price: 650,
		category: 'cupcakes',
		collectionId: 'b-day',
		description: 'Небольшой праздничный десерт в голубой гамме.',
		image: cupCakesBlueBday,
	},
	{
		id: 43,
		title: 'Капкейк Белый день рождения',
		price: 650,
		category: 'cupcakes',
		collectionId: 'b-day',
		description: 'Нежный десерт для светлого семейного праздника.',
		image: cupCakesBdayWhite,
	},
	{
		id: 44,
		title: 'Капкейк С днём рождения',
		price: 650,
		category: 'cupcakes',
		collectionId: 'b-day',
		description: 'Персональный десерт с праздничным настроением.',
		image: cupCakeBday,
	},
	{
		id: 45,
		title: 'Капкейк Сердечки',
		price: 650,
		category: 'cupcakes',
		collectionId: 'love',
		description: 'Милый десерт для романтичного подарка.',
		image: cupCakesLoveHearts,
	},
	{
		id: 46,
		title: 'Цветочный капкейк',
		price: 650,
		category: 'cupcakes',
		collectionId: 'flowers',
		description: 'Аккуратный десерт с цветочным декором.',
		image: cupCakesFlowers,
	},
	{
		id: 47,
		title: 'Капкейк Love',
		price: 650,
		category: 'cupcakes',
		collectionId: 'love',
		description: 'Небольшой сладкий подарок для влюблённых.',
		image: cupCakesLove,
	},
];

export const products = productRecords;
