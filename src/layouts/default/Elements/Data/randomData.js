import { random } from 'lodash';

export function fetchNames(nameType) {
  let names = [];
  switch (nameType) {
    case 'female':
      names = [
        'Berni',
        'Marta',
        'Tatiana',
        'Ceci',
        'Susana',
        'Mariela',
        'Norma',
        'Fabia',
        'Vicky',
        'Nina',
        'Pamela',
        'Rocio',
        'Jill',
        'Lara',
        'Maria',
        'Vero',
        'Romi',
        'Fabiana',
        'Flor',
        'Vir',
        'Fran',
        'Santi',
      ];
      break;
    case 'male':
      names = [
        'Tito',
        'Mariano',
        'David',
        'Gustavo',
        'Fer',
        'Tissio',
        'Mario',
        'Bernardo',
        'Carlos',
        'Pablo',
        'Juan',
        'Sandro',
        'Agus',
        'Fede',
        'Marce',
        'Sebastian',
        'Manu',
        'Nico',
        'Ryann',
        'Adam',
      ];
      break;
    case 'surnames':
      names = [
        'Zapata',
        'Cabrera',
        'Mindre',
        'Minero',
        'Salazar',
        'Corrado',
        'Martinessi',
        'Sosa',
        'Marsan',
        'Cerezi',
        'Gonzales',
        'Yerbo',
        'Jipaaldi',
        'Kaheli',
        'Yani',
        'Berraco',
        'Siluvan',
        'Cupaverde',
        'Pirulete',
        'Conrad',
      ];
      break;
    default:
  }

  return { data: names };
}

export function fetchMessage() {
  const messages = [
    'De una muneco',
    'Menos menos...',
    'Si pudiera, ya lo hubiera hecho hace rato',
    'me quiero ir a la mierda ya 🗽',
    'no tenes un termo mas grande?😍🥤',
    'Anda a cagar... llevatelo vos, no me jodas!!',
    '😈 Te dije que no saques el secador de pelo del cuarto...',
    'Venis a ver la peli esta noche con pipi?',
    'Ahora le digo.. esperame un cachito.',
    'Y vos no tenes ese libro?🙄',
    'Tomate el tren a las 8 y media sino te hagarra la hora pico.',
    'Decile vos. 🤦‍♀️',
    'Feliz cumple guachinnnnn!',
    'Cuando es el asado? no me acuerdo la fecha, llamame',
    'Me dijo pato que el perro del vecino esta enfermo, no lo toques!',
    'Estamos en guerra? 🌼😇',
    '😤 Ya me tienen podrido las vacunas de mierda, que embole ',
    'Acabo de pisar un tereso del tamano de un bondi.',
    'Mepa que esta noche llueve....',
    'No sabes lo frio que esta aca!❄️❄️❄️',
    'sabes si tenemos que comprar mas galletitas?',
    'No llego... no hay forma 🤣',
    'Si vos tenes uno, mandamelo ya! 😛',
    'me parece que no.',
    'Si vos queres, dale 🔥',
    'Y si no viene?',
    'Me parece que me voy a dormir ya.',
    'No tengo paraguas, me prestas el tuyo?... te lo dejo en casa mas tarde.',
    'Si. todo bien. :)🤞',
    'A las 2 o 3 de la tarde 😩😩',
    'Cocina vos entonces',
    'Te paso el tema que me pediste. aca va.',
    'Me dijo Berni que esta hecha mierda, que garron.. pobre',
    'En pedo , para atrassssss',
  ];

  return { data: messages };
}

export function fetchTimestamp() {
  const time = [
    '11:34',
    'Yesterday',
    'Now',
    '18:33',
    'Today',
    '12:03',
    '18/020/2022',
    '21:11',
    'last week',
    '2 days ago',
    '11/03/2022',
    '3 days ago',
    '4 days ago',
    'Last week',
    '21:11',
    '01:36',
    'A few seconds ago',
    '04:33',
    '12/01/2022',
  ];

  return { data: time };
}

export function fetchStatus() {
  const status = [
    //isDeliveredRead
    {
      isInbound: 0,
      isImageOnly: 0,
      isImageAndText: 0,
      isRead: 1,
      isDelivered: 0,
      isMissedCall: 0,
      isVoiceMessage: 0,
    },
    //isNotDelivered
    {
      isInbound: 0,
      isImageOnly: 0,
      isImageAndText: 0,
      isRead: 0,
      isDelivered: 0,
      isMissedCall: 0,
      isVoiceMessage: 0,
    },
    //isDeliveredUnread
    {
      isInbound: 0,
      isImageOnly: 0,
      isImageAndText: 0,
      isRead: 0,
      isDelivered: 1,
      isMissedCall: 0,
      isVoiceMessage: 0,
    },
    //isImage(only) & isDeliveredRead
    {
      isInbound: 0,
      isImageOnly: 1,
      isImageAndText: 0,
      isRead: 1,
      isDelivered: 1,
      isMissedCall: 0,
      isVoiceMessage: 0,
    },
    //isImageAndText & isDeliveredRead
    {
      isInbound: 0,
      isImageOnly: 0,
      isImageAndText: 1,
      isRead: 1,
      isDelivered: 1,
      isMissedCall: 0,
      isVoiceMessage: 0,
    },

    //isMissedCall
    {
      isInbound: 1,
      isImageOnly: 0,
      isImageAndText: 0,
      isRead: 0,
      isDelivered: 0,
      isMissedCall: 1,
      isVoiceMessage: 0,
    },

    //isVoiceMessage
    {
      isInbound: 1,
      isImageOnly: 0,
      isImageAndText: 0,
      isRead: 0,
      isDelivered: 0,
      isMissedCall: 0,
      isVoiceMessage: 1,
    },
  ];

  return status;
}

function pickRandom(list) {
  return list[random(0, list.length - 1)];
}

export function generateStatus() {
  // Fetch time stamps
  const statuses = fetchStatus();

  // Picks a random time from the list
  const status = pickRandom(statuses);

  // Use a template literal to return the time value
  return status;
}

export function generateTimestamp() {
  // Fetch time stamps
  const timeStamps = fetchTimestamp();

  // Picks a random time from the list
  const timeStamp = pickRandom(timeStamps.data);

  // Use a template literal to return the time value
  return `${timeStamp}`;
}

export function generateMessage() {
  // Fetches a chat messages
  const messages = fetchMessage();

  // Picks a random message from the list
  const message = pickRandom(messages.data);

  // Use a template literal to return the message value
  return `${message}`;
}

export function generateContactName() {
  // Fetches a first and lastname
  const firstNames = fetchNames(pickRandom(['male', 'female']));
  const lastNames = fetchNames('surnames');

  // Picks a random first and lastname from each list
  const firstName = pickRandom(firstNames.data);
  const lastName = pickRandom(lastNames.data);

  // Use a template literal to format the full name value
  return `${firstName} ${lastName}`;
}
