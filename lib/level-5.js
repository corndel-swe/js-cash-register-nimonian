import { drawer } from '../drawer.js'
import { addItem, removeItem } from './level-1.js'

// Get a list of denominations, for ease
const denominations = drawer
  .map(item => ({
    name: item.name,
    value: item.value
  }))
  .reverse()

export function transaction(cost, paid, drawer) {
  let change = paid - cost

  if (change < 0) {
    throw new Error('You have not paid enough!')
  }

  // add change to the drawer
  for (let item of denominations) {
    while (item.value <= paid && paid > 0) {
      paid -= item.value
      addItem(item.name, drawer)
    }
  }

  // get change from drawer
  for (let item of drawer.reverse()) {
    while (item.value <= change && item.quantity > 0) {
      change -= item.value
      removeItem(item.name, drawer)
    }
  }

  if (change > 0) {
    throw new Error('Insufficient currency to make change!')
  }

  return drawer.reverse()
}
