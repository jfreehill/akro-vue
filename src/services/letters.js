const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Public API here
export {
  getLetters,
  setLetters
}

// get randomly selected numbers based on number parameter or defaults to 1
function getLetters (number) {
  let n = number || 1
  let selectedLetters = ''
  while (n) {
    // set random number based on length of alphabet
    const index = Math.ceil(Math.random() * alphabet.length - 1)
    selectedLetters += alphabet[index]
    n--
  }
  return selectedLetters
}

function setLetters (letterString, newCount) {
  let diff = newCount - letterString.length
  // if letter count is lower than before
  if (diff < 0) {
    // turn negative number to positive
    diff /= -1
    while (diff) {
      letterString = removeLetter(letterString)
      diff--
    }
  // if letter count is higher than before
  }
  if (diff > 0) {
    while (diff) {
      letterString = addLetter(letterString)
      diff--
    }
  }
  return letterString
}

// remove 1 letter from current letter selection
function removeLetter (letterString) {
  if (letterString.length === 1) {
    return letterString
  }
  // split existing letters selection into an array
  const letterArray = letterString.split('')
  // remove last value
  letterArray.pop()
  // re-set selected letters to popped array
  letterString = letterArray.join('')
  return letterString
}

// add 1 letter to current letter selection
function addLetter (letterString) {
  letterString += getLetters(1)
  return letterString
}
