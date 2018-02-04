const getSortedString = (word) => word.toLowerCase().split('').sort().join('')
const isAnagram = (word1, word2) => getSortedString(word1) === getSortedString(word2)

console.log(isAnagram('shonn', 'NoShn'));
