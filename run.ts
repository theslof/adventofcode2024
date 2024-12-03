const stats = process.argv.includes('--stats')
const day = process.argv.slice(2).find((x) => !x.startsWith('-'))

import(`./day${day.padStart(2, '0')}.ts`).then((day) => {
  if (stats) {
    if (day.part1) {
      const startTime = performance.now()
      const sum = day.part1()
      const solveTime = performance.now() - startTime
      console.log(`part1: ${sum} -- Solved in: ${solveTime.toFixed(6)}ms`)
    }
    if (day.part2) {
      const startTime = performance.now()
      const sum = day.part2()
      const solveTime = performance.now() - startTime
      console.log(`part2: ${sum} -- Solved in: ${solveTime.toFixed(6)}ms`)
    }
  } else {
    if (day.part1) {
      console.log(`part1: ${day.part1()}`)
    }
    if (day.part2) {
      console.log(`part2: ${day.part2()}`)
    }
  }
})