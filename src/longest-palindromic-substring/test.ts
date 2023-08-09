import { Args, expandAroundCenter, isPalindrome, fns } from '.'

describe('longest-palindromic-substring.isPalindrome', () => {
  const isPalindromeCases: { str: string; expected: boolean }[] = [
    { str: 'aba', expected: true },
    { str: 'ab', expected: false },
  ]

  isPalindromeCases.forEach(({ str, expected }) => {
    it('returns true for a palindrome', () => {
      expect(isPalindrome(str)).toBe(expected)
    })
  })
})

describe('longest-palindromic-substring.expandAroundCenter', () => {
  const expandAroundCenterCases: {
    str: string
    left: number
    right: number
    expected: number
  }[] = [
    { str: 'aba', left: 1, right: 1, expected: 3 },
    { str: 'abb', left: 1, right: 1, expected: 1 },
    { str: 'abba', left: 1, right: 2, expected: 4 },
  ]

  expandAroundCenterCases.forEach(({ str, left, right, expected }) => {
    it('returns a length of palindrome in the center of the string', () => {
      expect(expandAroundCenter(str, left, right)).toBe(expected)
    })
  })
})

type Case = {
  expected: string[]
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: ['a'], // bab or aba
    id: '0',
    props: ['a'],
  },
  {
    expected: ['bb'],
    id: '1',
    props: ['cbbd'],
  },
  {
    expected: ['bab', 'aba'], // bab or aba
    id: '2',
    props: ['babad'],
  },
  {
    expected: ['baab'],
    id: '3',
    props: ['babaab'],
  },
  {
    expected: ['qwertyabbaiabbaytrewq'],
    id: '4',
    props: ['qwertyabbaiabbaytrewq'],
  },
  {
    expected: ['a', 'c'],
    id: '5',
    props: ['ac'],
  },
]

fns.forEach((fn) => {
  describe(`longest-palindromic-substring.${fn.name}`, () => {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, () => {
        expect(expected).toContain(fn(...props))
      })
    })
  })
})
