// https://leetcode.com/problems/palindrome-number/

export type Args = [number]

const isPalindrome0 = (...[x]: Args): boolean => {
  if (x < 0 || (x && x % 10 === 0)) {
    return false
  }

  const xString = x.toString()
  return xString === xString.split('').reverse().join('')
}

const isPalindrome1 = (...[x]: Args): boolean =>
  x >= 0 && !(x && x % 10 === 0) && x === +[...x.toString()].reverse().join('')

const isPalindrome2 = (...[x]: Args): boolean => {
  if (x < 0 || (x && x % 10 === 0)) {
    return false
  }

  if (x < 10) {
    return true
  }

  let reverse = 0
  let copy = x

  while (copy > 0) {
    const digit = copy % 10
    reverse = reverse * 10 + digit
    copy = Math.floor(copy / 10)
  }

  return reverse === x
}

// Complexity O(log10(n))
const isPalindrome3 = (...[x]: Args): boolean => {
  if (x < 0 || (x && x % 10 === 0)) {
    return false
  }

  if (x < 10) {
    return true
  }

  let reverse = 0
  while (x > reverse) {
    reverse = reverse * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  return reverse === x || Math.floor(reverse / 10) === x
}

export const fns = [isPalindrome0, isPalindrome1, isPalindrome2, isPalindrome3]
