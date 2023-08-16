import { Args, fns } from '.'

type Case = {
  expected: boolean
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: true,
    id: '0',
    props: [''],
  },
  {
    expected: true,
    id: '1',
    props: ['c'],
  },
  {
    expected: true,
    id: '2',
    props: ['pp'],
  },
  {
    expected: true,
    id: '3',
    props: ['pap'],
  },
  {
    expected: true,
    id: '4',
    props: ['Pap'],
  },
  {
    expected: true,
    id: '5',
    props: ['PaP'],
  },
  {
    expected: true,
    id: '6',
    props: [' Pa  P '],
  },
  {
    expected: true,
    id: '7',
    props: [' Pa\n\t p '],
  },
  {
    expected: true,
    id: '8',
    props: ['A man, a plan, a canal: Panama'],
  },
  {
    expected: false,
    id: '9',
    props: ['0P'],
  },
  {
    expected: true,
    id: '10',
    props: ['ab_a'],
  },
]

fns.forEach(
  (fn) => {
    describe(`palindrome.${fn.name}`, () => {
      cases.forEach(({ expected, id, props }) => {
        it(`should pass case ${id}`, () => {
          expect(fn(...props)).toEqual(expected)
        })
      })
    })
  },
)
