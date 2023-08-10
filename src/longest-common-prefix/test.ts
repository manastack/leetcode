import { Args, fns } from '.'

type Case = {
  expected: string
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: 'fl',
    id: '1',
    props: [['flower', 'flow', 'flight']],
  },
  {
    expected: '',
    id: '2',
    props: [['dog', 'racecar', 'car']],
  },
]

fns.forEach((fn) => {
  describe(`longest-common-prefix.${fn.name}`, () => {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, () => {
        expect(fn(...props)).toEqual(expected)
      })
    })
  })
})
