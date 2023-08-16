import { Args, fns } from '.'

type Case = {
  expected: number
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: 1,
    id: '1',
    props: [
      [
        'cba', //
        'daf', //
        'ghi', //
      ],
    ],
  },
  {
    expected: 0,
    id: '2',
    props: [['a', 'b']],
  },
  {
    expected: 3,
    id: '2',
    props: [
      [
        'zyx', //
        'wvu', //
        'tsr', //
      ],
    ],
  },
]

fns.forEach((fn) => {
  describe(`delete-columns-to-make-sorted.${fn.name}`, () => {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, () => {
        expect(fn(...props)).toEqual(expected)
      })
    })
  })
})
