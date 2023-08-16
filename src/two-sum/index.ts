// https://leetcode.com/problems/two-sum/

export type Args = [number[], number]

// O(n2) time
const twoSum0 = (...[nums, target]: Args): number[] => {
  const firstCache: number[] = []
  const numsLength = nums.length

  for (let first = 0; first < numsLength; first += 1) {
    if (firstCache.includes(nums[first])) {
      continue
    }

    const secondCache: number[] = []

    for (let second = first + 1; second < numsLength; second += 1) {
      if (secondCache.includes(nums[second])) {
        continue
      }

      if (nums[first] + nums[second] === target) {
        return [first, second]
      }

      secondCache.push(nums[second])
    }

    firstCache.push(nums[first])
  }

  return []
}

// O(n2) time
const twoSum1 = (...[nums, target]: Args): number[] => {
  const firstCache: number[] = []
  const numsLength = nums.length

  for (let first = 0; first < numsLength; first += 1) {
    if (firstCache.includes(nums[first])) {
      continue
    }

    const targetSecond = target - nums[first]
    const second = nums.indexOf(targetSecond, first + 1)

    if (second !== -1) {
      return [first, second]
    }

    firstCache.push(nums[first])
  }

  return []
}

// O(n) time
const twoSum2 = (...[nums, target]: Args): number[] => {
  const numIndexes: Record<number, number[]> = nums.reduce(
    (acc, value, index) => ({
      ...acc,
      [value]: [...(acc[value] ?? []), index],
    }),
    {} as Record<number, number[]>,
  )

  const firstCache: number[] = []
  const numsLength = nums.length

  for (let first = 0; first < numsLength; first += 1) {
    if (firstCache.includes(nums[first])) {
      continue
    }

    const targetSecond = target - nums[first]
    const secondIndexes = numIndexes[targetSecond] ?? []
    const second = secondIndexes.find((index) => index !== first) ?? -1
    if (second !== -1) {
      return [first, second]
    }

    firstCache.push(nums[first])
  }

  return []
}

// O(n) time
const twoSum3 = (...[nums, target]: Args): number[] => {
  const numIndexes: Record<number, number> = {}
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex += 1) {
    const secondValue = target - nums[firstIndex]
    if (numIndexes[secondValue] !== undefined) {
      return [firstIndex, numIndexes[secondValue]]
    }

    numIndexes[nums[firstIndex]] = firstIndex
  }

  return []
}

export const fns = [twoSum0, twoSum1, twoSum2, twoSum3]
