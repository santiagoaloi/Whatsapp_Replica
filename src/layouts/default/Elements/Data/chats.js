import { random } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import {
  generateContactName,
  generateMessage,
  generateTimestamp,
  generateStatus,
} from './randomData';

// This is the chat message boilerplate object structure.
function randomData(index) {
  console.log(`building chat object ${index}`);
  return {
    id: `${uuidv4()}${index}`,
    avatar: `https://i.pravatar.cc/100?img=${random(1, 30)}`,
    status: generateStatus(),
    contact: generateContactName(),
    message: generateMessage(),
    timeStamp: generateTimestamp(),
    unreadMessages: random(1, 4),
  };
}

// This will generate as many chats as specified in the laps atribute.
// to the array specified in the second attribute.
const randomChats = [];
export function generateNewChats(laps, array) {
  for (let i = 0; i < laps; ++i) {
    array.push({ ...randomData(i) });
    console.log(`pushing chat object ${i} to chats array`);
  }
}

export const chats = randomChats;
