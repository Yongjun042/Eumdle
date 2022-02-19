import { solution } from './words'
import { VOWELCOMB, CONSOCOMB, VOWELREV, CONSOREV } from '../constants/alphabet'

export type CharStatus = 'absent' | 'present' | 'correct'

export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}

  guesses?.forEach((word) => {
    word.split('').forEach((letter, i) => {
      if (VOWELCOMB.includes(letter) || CONSOCOMB.includes(letter)) {
        let letter2
        if (VOWELCOMB.includes(letter)) {
          letter2 = VOWELREV[letter]
        } else {
          letter2 = CONSOREV[letter]
        }
        if (!solution.includes(letter)) {
          // make status absent
          return (
            (charObj[letter2[0]] = 'absent'), (charObj[letter2[1]] = 'absent')
          )
        }
        if (letter === solution[i]) {
          //make status correct
          return (
            (charObj[letter2[0]] = 'correct'), (charObj[letter2[1]] = 'correct')
          )
        }
        if (charObj[letter] !== 'correct') {
          //make status present
          return (
            (charObj[letter2[0]] = 'present'), (charObj[letter2[1]] = 'present')
          )
        }
      } else {
        if (!solution.includes(letter)) {
          // make status absent
          return (charObj[letter] = 'absent')
        }

        if (letter === solution[i]) {
          //make status correct
          return (charObj[letter] = 'correct')
        }

        if (charObj[letter] !== 'correct') {
          //make status present
          return (charObj[letter] = 'present')
        }
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
  const splitSolution = solution.split('')
  const splitGuess = guess.split('')

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}
