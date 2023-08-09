// https://leetcode.com/problems/longest-palindromic-substring/

export type Args = [string]

export const isPalindrome = (s: string): boolean => {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }

    i += 1
    j -= 1
  }

  return true
}

// Complexity: O(n3)
const longestPalindrome0 = (...[s]: Args): string => {
  let res = ''
  const { length } = s

  for (let start = 0; start < length; start += 1) {
    for (let finish = start + 1; finish <= length; finish += 1) {
      const substring = s.slice(start, finish)
      if (isPalindrome(substring) && substring.length > res.length) {
        res = substring
      }
    }
  }

  return res
}

export const expandAroundCenter = (
  str: string,
  left: number,
  right: number,
): number => {
  const strLength = str.length
  while (left >= 0 && right < strLength && str[left] === str[right]) {
    left -= 1
    right += 1
  }

  return right - left - 1
}

// Complexity: O(n2)
const longestPalindrome1 = (...[s]: Args): string => {
  const { length } = s
  let start = 0
  let end = 0

  for (let i = 0; i <= length; i += 1) {
    const len1 = expandAroundCenter(s, i, i) // search palindrome w/ odd-numbered length
    const len2 = expandAroundCenter(s, i, i + 1) // ...even-numbered length
    const len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }

  return s.substring(start, end + 1)
}

export const fns = [longestPalindrome0, longestPalindrome1]
