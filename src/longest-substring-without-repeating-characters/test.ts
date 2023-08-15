import { Args, fns } from '.'

type Case = {
  expected: number
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: 3,
    id: '1',
    props: ['abcabcbb'],
  },
  {
    expected: 1,
    id: '2',
    props: ['bbbbb'],
  },
  {
    expected: 3,
    id: '3',
    props: ['pwwkew'],
  },
  {
    expected: 6,
    id: '4',
    props: ['abcdefef'],
  },
  {
    expected: 6,
    id: '5',
    props: ['ababcdefef'],
  },
  {
    expected: 4,
    id: '7',
    props: ['abcad'],
  },
]

fns.forEach((fn) => {
  describe(`longest-substring-without-repeating-characters.${fn.name}`, () => {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, () => {
        expect(fn(...props)).toEqual(expected)
      })
    })
  })
})
