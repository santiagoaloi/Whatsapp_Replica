import { random } from 'lodash';

export function fetchNames(nameType) {
  let names = [];
  switch (nameType) {
    case 'female':
      names = [
        'Berni',
        'Martha',
        'Tatiana',
        'Ceci',
        'Susana',
        'Marie',
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
        'Virginia',
      ];
      break;
    case 'male':
      names = [
        'Ray',
        'John',
        'David',
        'Gustav',
        'Fer',
        'Ron',
        'Santiago',
        'Peter',
        'Charles',
        'William',
        'Tiago',
        'Logan',
        'Austin',
        'Alejandro',
        'Morgan',
        'Harry',
        'Walder',
        'Chuck',
        'Steven',
        'Adam',
      ];
      break;
    case 'surnames':
      names = [
        'Bower',
        'Potter',
        'Stensson',
        'Frey',
        'Salazar',
        'Johansson',
        'Martinessi',
        'Mill',
        'Stefano',
        'Lannister',
        'Petersson',
        'Holsdotter',
        'Jaldotter',
        'Kaheli',
        'Yani',
        'Freeman',
        'Deadman',
        'Dores',
        'Jones',
        'Conrad',
      ];
      break;
    default:
  }

  return { data: names };
}

export function fetchMessage() {
  const messages = [
    'Absolutely not.',
    'A bit fewer I would say...',
    'IF i could have I would have',
    'I miss travelling🗽',
    'Bring the big one PLS!😍🥤',
    'fuck off',
    '😈 did he say that?',
    'We are going out, come along!',
    'Im picking you up in 10',
    'I have that book already 🙄',
    'FYI, im running late',
    'Say WHAT?! 🤦‍♀️',
    'happy bday mate.',
    'SHDHS# I overslept, omw',
    'the drums or the trumpet!',
    'I had no clue, sorry 🌼😇',
    '😤 this is it. or whatever... ',
    'I think I just saw her',
    'My grandpa has the same ones',
    'its cold AF ❄️❄️❄️',
    'I dont need the cookies',
    'I got fired, finally!🤣',
    'my wig is nicer 😛',
    'Chocolate ice-cream and nuts',
    'the fireplace you mean??🔥',
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
    // isDeliveredRead
    {
      isInbound: 0,
      isImageOnly: 0,
      isImageAndText: 0,
      isRead: 1,
      isDelivered: 0,
      isMissedCall: 0,
      isVoiceMessage: 0,
    },
    // isNotDelivered
    {
      isInbound: 0,
      isImageOnly: 0,
      isImageAndText: 0,
      isRead: 0,
      isDelivered: 0,
      isMissedCall: 0,
      isVoiceMessage: 0,
    },
    // isDeliveredUnread
    {
      isInbound: 0,
      isImageOnly: 0,
      isImageAndText: 0,
      isRead: 0,
      isDelivered: 1,
      isMissedCall: 0,
      isVoiceMessage: 0,
    },
    // isImage(only) & isDeliveredRead
    {
      isInbound: 0,
      isImageOnly: 1,
      isImageAndText: 0,
      isRead: 1,
      isDelivered: 1,
      isMissedCall: 0,
      isVoiceMessage: 0,
    },
    // isImageAndText & isDeliveredRead
    {
      isInbound: 0,
      isImageOnly: 0,
      isImageAndText: 1,
      isRead: 1,
      isDelivered: 1,
      isMissedCall: 0,
      isVoiceMessage: 0,
    },

    // isMissedCall
    {
      isInbound: 1,
      isImageOnly: 0,
      isImageAndText: 0,
      isRead: 0,
      isDelivered: 0,
      isMissedCall: 1,
      isVoiceMessage: 0,
    },

    // isVoiceMessage
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
