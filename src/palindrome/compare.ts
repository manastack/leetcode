import comparator, { Case } from '../_common/comparator'
import { Args, fns } from '.'

const cases: Case<Args>[] = [
  { args: ['aba'], description: 'short palindrome' },
  {
    args: [new Array(101).fill('abcdefghijklmnopqrstuvwxyz').join('')],
    description: 'long palindrome',
  },
  {
    args: [
      `${new Array(100).fill('abcd efghijklmn opqrstuv wxyz ').join('')}abba`,
    ],
    description: 'long palindromes w/ spaces',
  },
]

comparator<Args>({ cases, fns, repeat: 3 })
