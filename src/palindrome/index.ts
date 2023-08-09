// https://leetcode.com/problems/valid-palindrome/

export type Args = [string]

// It's faster than isPalindrome1 and isPalindrome2 for long strings:
const isPalindrome0 = (...[rawString]: Args): boolean => {
  const string = rawString.replace(/[^0-9a-z]/gi, '').toLowerCase()
  const { length } = string
  const lengthHalf = Math.floor(length / 2)
  for (let i = 0; i <= lengthHalf; i += 1) {
    if (string[i] !== string[length - 1 - i]) {
      return false
    }
  }

  return true
}

const isPalindrome1 = (...[rawString]: Args): boolean => {
  const string = rawString.replace(/[^0-9a-z]/gi, '').toLowerCase()
  return string === string.split('').reverse().join('')
}

// It's slower than isPalindrome1 for long strings, but faster for short strings:
const isPalindrome2 = (...[rawString]: Args): boolean => {
  const string = rawString.replace(/[^0-9a-z]/gi, '').toLowerCase()
  return string === [...string].reverse().join('')
}

const isPalindromeBetter = (...[rawString]: Args): boolean => {
  const string = rawString.replace(/[^0-9a-z]/gi, '').toLowerCase()
  let i = 0
  let j = string.length - 1
  while (i < j) {
    if (string[i] !== string[j]) {
      return false
    }

    i += 1
    j -= 1
  }

  return true
}

export const fns = [
  isPalindrome0,
  isPalindrome1,
  isPalindrome2,
  isPalindromeBetter,
]
