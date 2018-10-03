// Given an alphabetical array of dictionary entries and a word to search for, find that word's definition (if it exists). A dictionary entry is just a string where the word's name appears first, followed by - [definition].

const dictionary = [
  'a - Used when mentioning someone or something for the first time in a text or conversation',
  'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
  'be - Exist',
  'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
  'of - Expressing the relationship between a part and a whole',
  'that - Used to identify a specific person or thing observed or heard by the speaker',
  'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
  'to - Expressing motion in the direction of (a particular location)',
];

// definitionOf('be', dictionary); // should return 'Exist'
// definitionOf('that', dictionary); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
// definitionOf('to', dictionary); // should return 'Expressing motion in the direction of (a particular location)'
// definitionOf('wizbing', dictionary); // should return undefined

// Binary Search - Time: O(log(n))
function definitionOfBinarySearch(str, dictionary) {
  if (!dictionary.length) return undefined;
  let midPt = Math.floor(dictionary.length / 2);
  let midPtWord = dictionary[midPt].slice(0, dictionary[midPt].indexOf(' '));

  if (str === midPtWord) {
    let definitionIdx = dictionary[midPt].indexOf('-') + 2;
    return dictionary[midPt].slice(definitionIdx);
  } else if (str > midPtWord) {
    let right = dictionary.slice(midPt + 1);
    return definitionOf(str, right);
  } else {
    let left = dictionary.slice(0, midPt);
    return definitionOf(str, left);
  }
}

// Cache - Time: Setup: O(n), lookup: O(1)
function definitionOfCache(str, dictionary) {
  let cache = {};

  for (let i = 0; i < dictionary.length; i++) {
    let wordAndDef = dictionary[i].split(' - ');

    if (!(wordAndDef[0] in cache)) {
      cache[wordAndDef[0]] = wordAndDef[1];
    }
  }

  if (str in cache) return cache[str];
  return undefined;
}
