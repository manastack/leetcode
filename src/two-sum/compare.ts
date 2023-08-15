import comparator, { Case } from '../_common/comparator'
import { Args, fns } from '.'

const cases: Case<Args>[] = [
  {
    args: [[3, 2, 4], 6],
  },
  {
    args: [[1, 1, 4, 1, 1, 7, 1, 1], 11],
  },
  {
    args: [[...Array(1000).keys()], 1999],
    description: '1000 ordered items',
  },
]

comparator<Args>({ cases, fns })
