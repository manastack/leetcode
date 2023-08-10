import comparator, { Case } from '../_common/comparator'
import { Args, fns } from '.'

const cases: Case<Args>[] = [
  {
    args: [['flower', 'flow', 'flight']],
  },
  {
    args: [['dog', 'racecar', 'car']],
  },
]

comparator<Args>({ cases, fns })
