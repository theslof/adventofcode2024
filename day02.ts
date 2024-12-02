import {readData} from './utils'

function part1(): number {
  let safe = 0
  readData(2).forEach(line => {
    const levels = line.split(' ').map(level => Number.parseInt(level))
    let increasing: boolean = levels[1] > levels[0]
    for (let i = 0; i < levels.length - 1; i++) {
      const first = levels[i]
      const second = levels[i + 1]
      const diff = increasing ? second - first : first - second
      if (diff < 1 || diff > 3) {
        return
      }
    }
    safe++
    return
  })

  return safe
}

function part2(): number {
  let safe = 0
  readData(2).forEach(line => {
    const levels = line.split(' ').map(level => Number.parseInt(level))
    for (let skip = -1; skip < levels.length; skip++) {
      const levelsWithSkip = [...levels]
      if (skip >= 0) {
        levelsWithSkip.splice(skip, 1)
      }
      let increasing: boolean = levelsWithSkip[1] > levelsWithSkip[0]
      let isSafe = true
      for (let i = 0; i < levelsWithSkip.length - 1; i++) {
        const first = levelsWithSkip[i]
        const second = levelsWithSkip[i + 1]
        const diff = increasing ? second - first : first - second
        if (diff < 1 || diff > 3) {
          isSafe = false
          break
        }
      }
      if (isSafe) {
        safe++
        return
      }
    }
    return
  })

  return safe
}

console.log(`part1: ${part1()}`)
console.log(`part2: ${part2()}`)
