import { Args, fns } from '.'

type Case = {
  expected: number[]
  id: string
  props: Args
}

// Constraints:
// - 2 <= nums.length <= 10^3
// - -10^9 <= nums[i] <= 10^9
// - -10^9 <= target <= 10^9
// - Only one valid answer __exists__.

const cases: Case[] = [
  {
    expected: [0, 1],
    id: '1',
    props: [[2, 7, 11, 15], 9],
  },
  {
    expected: [1, 2],
    id: '2',
    props: [[3, 2, 4], 6],
  },
  {
    expected: [0, 1],
    id: '3',
    props: [[3, 3], 6],
  },
]

fns.forEach((twoSum) => {
  describe(`two-sum.${twoSum.name}`, () => {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, () => {
        const result = twoSum(...props)
        expect(result.sort()).toEqual(expected.sort())
      })
    })
  })
})
