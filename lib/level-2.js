import { drawer } from '../drawer.js'

// Level 2

/**
 * Goes through the given drawer and counts how many *coins* there are in total
 * N.b. just the number of coins, not the total value of them
 * N.b. $1 is a note, not a coin
 * @param {object[]} drawer
 * @returns {number} How many coins are in the drawer
 */
export function countCoins(drawer) {
  const coins = ['penny', 'nickel', 'dime', 'quarter']
  let result = 0

  for (let item of drawer) {
    if (coins.includes(item.name)) {
      result += item.quantity
    }
  }

  return result
}

/**
 * Same as count coins but for *notes* instead
 * @param {object[]} drawer
 * @returns {number} How many notes are in the drawer
 */
export function countNotes(drawer) {
  const notes = ['one', 'five', 'ten', 'twenty', 'hundred']
  let result = 0

  for (let item of drawer) {
    if (notes.includes(item.name)) {
      result += item.quantity
    }
  }

  return result
}
