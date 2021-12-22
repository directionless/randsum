import { RollParameters, RollTotals } from 'types'
import { sumArray } from 'utils'
import { modifyRollTotals } from './modifyRollTotals'
import { modifyTotal } from './modifyTotal'

export function digestTotals(
  rollTotals: RollTotals,
  { accessor, plus, minus, ...rollParams }: RollParameters,
  rollDie: () => number,
) {
  const freshTotals = rollTotals.slice()
  if (accessor) {
    return accessor(freshTotals)
  }

  const modifiedTotals = modifyRollTotals(freshTotals, rollParams, rollDie)
  const baseTotal = sumArray(modifiedTotals)
  return modifyTotal(baseTotal, { plus, minus })
}
