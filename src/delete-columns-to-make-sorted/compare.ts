import comparator, { Case } from '../_common/comparator'
import { Args, fns } from '.'

const cases: Case<Args>[] = [
  {
    args: [
      [
        'cba', //
        'daf', //
        'ghi', //
      ],
    ],
  },
  {
    args: [
      [
        'zyx', //
        'wvu', //
        'tsr', //
      ],
    ],
  },
  {
    args: [
      [
        'zyxqowieuqoiweuuwqiowiue', //
        'wvusdlkdjfjkslkdweoiurja', //
        'tsrsdlkjfjeieuriwoierjkl', //
      ],
    ],
  },
]

comparator<Args>({ cases, fns })
