export type Args = [string]

// Complexity: O(n2)
function lengthOfLongestSubstring0(...[s]: Args): number {
  let res = 0

  const { length } = s
  for (let i = 0; i < length; i += 1) {
    let substring = s[i]
    for (let j = i + 1; j < length; j += 1) {
      if (substring.includes(s[j])) {
        break
      }

      substring += s[j]
    }

    res = Math.max(res, substring.length)
  }

  return res
}

// Complexity: O(n2)
function lengthOfLongestSubstring1(...[s]: Args): number {
  let res = 0

  const { length } = s
  let i = 0
  while (length - i > res) {
    let substring = s[i]
    for (let j = i + 1; j < length; j += 1) {
      if (substring.includes(s[j])) {
        break
      }

      substring += s[j]
    }

    res = Math.max(res, substring.length)
    i += 1
  }

  return res
}

// Complexity: O(n) by time and O(1) by space,
// but it has restriction: only for some diapason.
function lengthOfLongestSubstring2(...[s]: Args): number {
  // int[26] for Letters 'a' - 'z' or 'A' - 'Z'
  // int[128] for ASCII - I'll use this one
  // int[256] for Extended ASCII
  // In this array, we will store the position of the character in the string (s) and
  // if the character is not in the string, we will store null.
  // Index of the array is the character code.
  const chars: number[] = new Array<number>(128)

  let left = 0
  let right = 0

  let res = 0
  const { length } = s

  while (right < length) {
    const rightCharCode = s[right].charCodeAt(0)
    const index = chars[rightCharCode]
    const isIndexExistAndInWindow = index !== undefined && index >= left
    if (isIndexExistAndInWindow) {
      left = index + 1
    }

    chars[rightCharCode] = right
    res = Math.max(res, right - left + 1)
    right += 1
  }

  return res
}

// Complexity: O(n) by time and O(n) by space
function lengthOfLongestSubstring3(...[s]: Args): number {
  const dict: Record<string, number> = {}
  let left = 0
  let right = 0
  let res = 0
  const { length } = s

  while (right < length) {
    const char = s[right]
    if (dict[char] !== undefined && dict[char] >= left) {
      left = dict[char] + 1
    }

    dict[char] = right
    const newRes = right - left + 1
    res = res > newRes ? res : newRes
    right += 1
  }

  return res
}

export const fns = [
  lengthOfLongestSubstring0,
  lengthOfLongestSubstring1,
  lengthOfLongestSubstring2,
  lengthOfLongestSubstring3,
]
